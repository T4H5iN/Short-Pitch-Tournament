const players = [
    {
        id: 1,
        name: "Tahsin Ahmed",
        age: 22,
        role: "Batsman",
        team: "Strikers",
        image: "image/players/image.png"
    },
    {
        id: 2,
        name: "John Doe",
        age: 25,
        role: "Bowler",
        team: "Strikers",
        image: "image/players/image.png"
    },
    {
        id: 3,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 4,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 5,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 6,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 7,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 8,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 9,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    },
    {
        id: 10,
        name: "Jane Smith",
        age: 28,
        role: "All-Rounder",
        team: "Warriors",
        image: "image/players/image.png"
    }
];

const teams = [
    {
        name: "Strikers",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Tahsin Ahmed",
        players: [1,2,3,4,5,6,7,8,9,10]
    },
    {
        name: "Warriors",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Jane Smith",
        players: [3, 2]
    },
    {
        name: "Warriors",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Jane Smith",
        players: [3, 2]
    },
    {
        name: "Warriors",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Jane Smith",
        players: [3, 2]
    },
    {
        name: "Warriors",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Jane Smith",
        players: [3, 2]
    },
    {
        name: "Warriors",
        logo: "image/teams/image.png",
        owner: "John Doe",
        captain: "Jane Smith",
        players: [3, 2]
    }
];

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
