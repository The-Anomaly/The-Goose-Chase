const sampleLeaderboard = [
    {
        id: 1,
        discordId: "TheOddbod#1558",
        score: 1200000
    },
    {
        id: 2,
        discordId: "CARLJONES#1748",
        score: 1200
    },
    {
        id: 3,
        discordId: "CARLJONES#1748",
        score: 5000000
    },
    {
        id: 4,
        discordId: "CARLJONES#1748",
        score: 4000
    },
    {
        id: 5,
        discordId: "CARLJONES#1748",
        score: 2500
    },
]


const sortedSampleLeaderboard = sampleLeaderboard.sort((a,b)=> {
    if (a.score < b.score) { return -1; }
    if (a.score > b.score) { return 1; }
    return 0;
})

export { sortedSampleLeaderboard }