let playersData = [];

fetch('players.json')
    .then(res => res.json())
    .then(data => {
    playersData = data.map(player => {
        const imagePath = player.UID && player.UID.trim() !== "" 
            ? `image/players/${player.UID}.jpg` 
            : "image/players/image.jpg";
        
        return {
            id: parseInt(player.ID),
            name: player.Name.trim(),
            uid: player.UID,
            batch: player.Batch,
            category: player.Category,
            role: player["Role  "] ? player["Role  "].trim() : "",
            team: null,
            bat: player.Batting,
            ball: player.Bowling,
            image: imagePath
        };
    });
    
    initializeTeams();
    initializePointTable();
    
    document.dispatchEvent(new Event('playersLoaded'));
})
    .catch(error => {
        console.error('Error loading player data:', error);
});

const teams = [
    {
        name: "Team Gladiators",
        logo: "image/teams/sami.jpg",
        owner: "Shaheed Al Sami",
        captain: "Shaheed Al Sami",
        players: []
    },
    {
        name: "Alpha X Challengers",
        logo: "image/teams/Mehedi.jpg",
        owner: "Mehedi",
        captain: "Mehedi",
        players: []
    },
    {
        name: "Team hyper Relaaax",
        logo: "image/teams/Ridoy.jpg",
        owner: "Md.Mehedi Hasan Ridoy",
        captain: "Md.Mehedi Hasan Ridoy",
        players: []
    },
    {
        name: "Legend Hunters",
        logo: "image/teams/Jayed_arif.jpg",
        owner: "Jayed Arif",
        captain: "Jayed Arif",
        players: []
    },
    {
        name: "Phantom XI",
        logo: "image/teams/Saber.jpg",
        owner: "Saber",
        captain: "Saber",
        players: []
    },
    {
        name: "Death Over Demons",
        logo: "image/teams/Shaikh.jpg",
        owner: "Shaikh",
        captain: "Shaikh",
        players: []
    }
];

function initializeTeams() {
    teams[0].players = [2,47,53,63,52,51,30,4,3,64].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[0].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[1].players = [9,5,31,10,15,17,34,42,13,65].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[1].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[2].players = [21,6,55,46,29,40,35,39,16,56,27].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[2].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[3].players = [58,43,41,62,22,54,26,48,7,18,66].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[3].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[4].players = [59,37,38,45,49,20,36,33,12,24,61].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[4].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[5].players = [60,44,57,50,14,1,25,8,23,28,11].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = teams[5].name; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);
}

function syncTeamsToFirebase() {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        const teamsRef = firebase.database().ref('teams');
        
        teamsRef.once('value')
            .then(snapshot => {
                if (!snapshot.exists()) {
                    const teamsData = {};
                    teams.forEach((team, index) => {
                        teamsData[index] = {
                            name: team.name,
                            logo: team.logo,
                            owner: team.owner,
                            captain: team.captain
                        };
                    });
                    
                    return teamsRef.set(teamsData);
                }
            })
            .then(() => console.log('Teams synced to Firebase'))
            .catch(err => console.error('Error syncing teams:', err));
    }
}

initializeTeams();
syncTeamsToFirebase();

const matchResults = [
    {
        match: "Match 1",
        teamA: "Strikers",
        teamB: "Warriors",
        scoreA: "120/6 (10)",
        scoreB: "118/8 (10)",
        winner: "Strikers",
        status: "Completed"
    },
    {
        match: "Match 2",
        teamA: "Blazers",
        teamB: "Strikers",
        scoreA: "135/4 (10)",
        scoreB: "129/7 (10)",
        winner: "Blazers",
        status: "Completed"
    },
    {
        match: "Match 3",
        teamA: "Warriors",
        teamB: "Blazers",
        scoreA: "",
        scoreB: "",
        winner: "",
        status: "Upcoming"
    }
];

function initializePointTable() {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        firebase.database().ref('pointTable').once('value')
            .then(snapshot => {
                const pointTableData = {};
                let needsUpdate = false;
                
                if (snapshot.exists()) {
                    const existingTeams = new Set();
                    snapshot.forEach((childSnapshot) => {
                        const key = childSnapshot.key;
                        const team = childSnapshot.val();
                        pointTableData[key] = {...team};
                        existingTeams.add(team.team);
                    });
                    
                    teams.forEach((team) => {
                        if (!existingTeams.has(team.name)) {
                            needsUpdate = true;
                            const newKey = Object.keys(pointTableData).length;
                            pointTableData[newKey] = {
                                team: team.name,
                                played: 0,
                                won: 0,
                                lost: 0,
                                points: 0,
                                nrr: "0.00"
                            };
                        }
                    });
                } else {
                    needsUpdate = true;
                    teams.forEach((team, index) => {
                        pointTableData[index] = {
                            team: team.name,
                            played: 0,
                            won: 0,
                            lost: 0,
                            points: 0,
                            nrr: "0.00"
                        };
                    });
                }
                
                if (needsUpdate) {
                    return firebase.database().ref('pointTable').set(pointTableData)
                        .then(() => console.log('Point table initialized or updated'))
                        .catch(err => console.error('Error updating point table:', err));
                }
            })
            .catch(err => console.error('Error checking point table:', err));
    } else {
        console.warn('Firebase not initialized yet for point table');
    }
}