exports.handler = async (event) => {
    const { password } = JSON.parse(event.body || "{}");

    const validPassword = process.env.ADMIN_PASSWORD;

    if (password === validPassword) {
        return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
        };
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Invalid password" })
    };
};