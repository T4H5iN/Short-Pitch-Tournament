const players = [
    {
        id: 1,
        name: "Suprio Chattapadhya Raj",
        batch: "ICT 9",
        role: "Batsman, All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 2,
        name: "Shaheed Al Sami",
        batch: "ICT 9",
        role: "Batsman, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 3,
        name: "Md. Tanvir",
        batch: "ICT 7",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 4,
        name: "Rafat Hossan",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 5,
        name: "Noman Siddiki",
        batch: "ICT 8",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 6,
        name: "Md Nasimuzzaman Emon",
        batch: "ICT 8",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 7,
        name: "Md.Nazmus Sakib Siam",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 8,
        name: "MD. Yusuf Ali Saikot",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 9,
        name: "Mehedi",
        batch: "ICT 6",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 10,
        name: "Tanvir (JOY)",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 11,
        name: "Mohiuddin Mukshit Farhan",
        batch: "BICE 2025",
        role: "Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 12,
        name: "Zarif Fahad",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 13,
        name: "Md.Rakibul Hossain",
        batch: "BICE 2025",
        role: "Batsman, Bowler, All-Rounder, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 14,
        name: "Nabil Mahmud",
        batch: "BICE 2025",
        role: "Batsman, Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 15,
        name: "Ashfak Ahmed Rohan",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 16,
        name: "Abdullah Al Mueed",
        batch: "ICT 3",
        role: "All-Rounder",
        team: null,
        bat: "Left-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 17,
        name: "Jawad mustavi rafeed",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Left-handed",
        ball: "Left-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 18,
        name: "Abid Faysal",
        batch: "BICE 2025",
        role: "Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 19,
        name: "Azmi",
        batch: "ICT 8",
        role: "Batsman, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 20,
        name: "Md.Shairzil Mia",
        batch: "ICT 8",
        role: "Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 21,
        name: "Md.Mehedi Hasan Ridoy",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Left-handed",
        ball: "Left-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 22,
        name: "Md Mahbub E Rabbani",
        batch: "ICT 8",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 23,
        name: "Nazmus Sakib",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 24,
        name: "S.M.Mohammad Ali",
        batch: "BICE 2025",
        role: "Batsman, All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 25,
        name: "Md. Araf Al Zaber",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 26,
        name: "Abdullah Al Masum",
        batch: "ICT 9",
        role: "All-Rounder, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 27,
        name: "Abrar Labib",
        batch: "ICT 9",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 28,
        name: "Ishtiak Haque Sadman",
        batch: "ICT 9",
        role: "All-Rounder, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 29,
        name: "Tanvir",
        batch: "BICE 2025",
        role: "Batsman, All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 30,
        name: "Md. Nazmul Hasan",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 31,
        name: "MD.Mehedi Hasan",
        batch: "ICT 8",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 32,
        name: "Mowdud Ibne Zahir Labib",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Left-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 33,
        name: "Md Tanzim Hossain (Ayon)",
        batch: "ICT 3",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 34,
        name: "Md Mahidul Islam",
        batch: "ICT 3",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 35,
        name: "Shakil Rabbi",
        batch: "ICT 6",
        role: "Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 36,
        name: "Nabil",
        batch: "ICT 9",
        role: "Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 37,
        name: "MEHEDI HASAN MISHU",
        batch: "ICT 5",
        role: "Batsman, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 38,
        name: "A. K. M. Mohaiminul Islam",
        batch: "ICT 5",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 39,
        name: "Safil Sarker",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 40,
        name: "Ahmed Foysal",
        batch: "ICT 5",
        role: "All-Rounder",
        team: null,
        bat: "Left-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 41,
        name: "Rashedul Islam Tasif",
        batch: "ICT 9",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 42,
        name: "Raian Alif",
        batch: "ICT 8",
        role: "Batsman, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 43,
        name: "Omi",
        batch: "ICT 8",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 44,
        name: "Ameer Sohail",
        batch: "ICT 8",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 45,
        name: "MD. Mahadi Hasan Shakib",
        batch: "ICT 8",
        role: "All-Rounder, Wicket-Keeper",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 46,
        name: "MD.Rasheduzzaman Imran",
        batch: "ICT 8",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 47,
        name: "Mohammod Hasanat",
        batch: "ICT 4",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 48,
        name: "Rifat",
        batch: "ICT 6",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 49,
        name: "Shahriar Ifty",
        batch: "ICT 4",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 50,
        name: "Jakiul Ahashan Peyal",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    },
    {
        id: 51,
        name: "Mashnoon Ali Rajin",
        batch: "BICE 2025",
        role: "Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 52,
        name: "Md Jahid Hasan Ridoy",
        batch: "ICT 5",
        role: "Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 53,
        name: "Jamil",
        batch: "ICT 7",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 54,
        name: "Shurov Kabir",
        batch: "BICE 2025",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 55,
        name: "Mouno",
        batch: "ICT 3",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 56,
        name: "S.M.Nabil Mashrafi",
        batch: "ICT 9",
        role: "Batsman, Bowler",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm spin",
        image: "image/players/image.png"
    },
    {
        id: 57,
        name: "Jayed Arif",
        batch: "ICT 5",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 58,
        name: "Saber",
        batch: "ICT 5",
        role: "Batsman",
        team: null,
        bat: "Right-handed",
        ball: "Not applicable",
        image: "image/players/image.png"
    },
    {
        id: 59,
        name: "Shaikh",
        batch: "ICT 7",
        role: "All-Rounder",
        team: null,
        bat: "Right-handed",
        ball: "Right-arm fast",
        image: "image/players/image.png"
    }
];

const teams = [
    {
        //name: "Strikers",
        logo: "image/players/image.png",
        owner: "Shaheed Al Sami",
        captain: "Shaheed Al Sami",
        players: [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    {
        //name: "Warriors",
        logo: "image/players/image.png",
        owner: "Mehedi",
        captain: "",
        players: []
    },
    {
        //name: "Warriors",
        logo: "image/players/image.png",
        owner: "Md.Mehedi Hasan Ridoy",
        captain: "",
        players: []
    },
    {
        //name: "Warriors",
        logo: "image/players/image.png",
        owner: "Jayed Arif",
        captain: "",
        players: []
    },
    {
        //name: "Warriors",
        logo: "image/players/image.png",
        owner: "Saber",
        captain: "",
        players: []
    },
    {
        //name: "Warriors",
        logo: "image/players/image.png",
        owner: "Shaikh",
        captain: "",
        players: []
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
