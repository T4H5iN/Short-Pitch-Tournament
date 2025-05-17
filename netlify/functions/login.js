const admin = require('firebase-admin');

exports.handler = async (event) => {
    const { password } = JSON.parse(event.body || "{}");
    const validPassword = process.env.ADMIN_PASSWORD;

    if (password === validPassword) {
        const sessionToken = Math.random().toString(36).substring(2, 15) + 
                             Math.random().toString(36).substring(2, 15);
        
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
                }),
                databaseURL: process.env.FIREBASE_DATABASE_URL
            });
        }
        
        await admin.database().ref('adminSessions').set({
            token: sessionToken,
            expires: Date.now() + (24 * 60 * 60 * 1000)
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                sessionToken: sessionToken,
                expires: Date.now() + (24 * 60 * 60 * 1000)
            })
        };
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Invalid password" })
    };
};