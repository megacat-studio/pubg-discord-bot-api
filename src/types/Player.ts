interface PlayerStats {
    DBNOs: number;
    assists: number;
    boosts: number;
    damageDealt: number;
    deathType: string;
    headshotKills: number;
    heals: number;
    killPlace: number;
    killStreaks: number;
    kills: number
    longestkill: number;
    name: string;
    playerId: string;
    revives: number
    rideDistance: number;
    roadKills: number;
    swimDistance: number;
    teamKills: number;
    timeSurvived: number;
    vehicleDestroys: number;
    walkDistance: number;
    weaponsAcquired: number;
    winPlace: number;
  }

  interface PlayerQuery {
    region: string;
    playerName: string;
    playerId: string;
    gameMode: string
  }

  interface GameStats {
    assists: number;
    boosts: number;
    downedButNotKilled: number;
    dailyKills: number;
    damageDealt: number;
    days: number;
    headshotKills: number;
    heals: number;
    kills: number;
    longestKill: number;
    longestTimeSurvived: number;
    deaths: number;
    maxKillStreaks: number;
    mostSurvivalTime: number;
    rankPoints: number;
    rankPointsTitle: String;
    revives: number;
    drivingDistance: number;
    roadKills: number;
    roundMostKills: number;
    roundsPlayed: number;
    suicides: number;
    swimDistance: number;
    teamKills: number;
    timeSurvived: number;
    top10s: number;
    vehiclesDestroyed: number;
    runningDistance: number;
    weaponsAcquired: number;
    weeklyKills: number;
    weeklyWins: number;
    wins: number;
    dailyWins: number;
    kdRatio: number;
  }