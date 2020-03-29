interface PubgApiInformation {
  data: [PubgApi];
}

interface PubgApi {
    type: string;
    attributes: PubgApiAttributes;
    relationships: PubgApiRelationships;
}

interface PubgApiAttributes {
  gameModeStats: [PubgApiGameStats]
  bestRankPoint: number;
}

interface PubgApiRelationships {
  season: any;
  player: any;
  matchesSolo: any;
  matchesSoloFPP: any;
  matchesDuo: any;
  matchesDuoFPP: any;
  matchesSquad: any;
  matchesSquadFPP: any;
}

interface PubgApiGameStats {
  assists: number;
  boosts: number;
  dBNOs: number;
  dailyKills: number;
  damageDealt: number;
  days: number;
  headshotKills: number;
  heals: number;
  kills: number;
  longestKill: number;
  longestTimeSurvived: number;
  losses: number;
  maxKillStreaks: number;
  mostSurvivalTime: number;
  rankPoints: number;
  rankPointsTitle: String;
  revives: number;
  rideDistance: number;
  roadKills: number;
  roundMostKills: number;
  roundsPlayed: number;
  suicides: number;
  swimDistance: number;
  teamKills: number;
  timeSurvived: number;
  top10s: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  weeklyKills: number;
  weeklyWins: number;
  wins: number;
  dailyWins: number;
}