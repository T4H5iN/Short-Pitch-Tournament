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
    
    document.dispatchEvent(new Event('playersLoaded'));
})
    .catch(error => {
        console.error('Error loading player data:', error);
});

const teams = [
    {
        name: "Strikers",
        logo: "image/teams/sami.jpg",
        owner: "Shaheed Al Sami",
        captain: "Shaheed Al Sami",
        players: []
    },
    {
        name: "Warriors",
        logo: "image/teams/Mehedi.jpg",
        owner: "Mehedi",
        captain: "",
        players: []
    },
    {
        name: "Blazers",
        logo: "image/teams/Ridoy.jpg",
        owner: "Md.Mehedi Hasan Ridoy",
        captain: "",
        players: []
    },
    {
        name: "Champions",
        logo: "image/teams/Jayed_arif.jpg",
        owner: "Jayed Arif",
        captain: "",
        players: []
    },
    {
        name: "Titans",
        logo: "image/teams/Saber.jpg",
        owner: "Saber",
        captain: "",
        players: []
    },
    {
        name: "Panthers",
        logo: "image/teams/Shaikh.jpg",
        owner: "Shaikh",
        captain: "",
        players: []
    }
];

function initializeTeams() {
    teams[0].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[1].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[2].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[3].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[4].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);

    teams[5].players = [2, 5, 6, 7, 8, 10, 11, 12, 13, 14].map(id => {
        const player = playersData.find(p => p.id === id);
        if (player) {
            player.team = ""; 
            return player.id;
        }
        return null;
    }).filter(id => id !== null);
}

const pointTable = [
    {
        team: "Strikers",
        played: 3,
        won: 2,
        lost: 1,
        points: 4,
        nrr: "+1.2"
    },
    {
        team: "Warriors",
        played: 3,
        won: 1,
        lost: 2,
        points: 2,
        nrr: "-0.5"
    },
    {
        team: "Blazers",
        played: 3,
        won: 3,
        lost: 0,
        points: 6,
        nrr: "+2.0"
    }
];

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
