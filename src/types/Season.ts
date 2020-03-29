interface SeasonGameInformation {
    data: {
      included: any;
      type: string;
      id: string;
      attributes: SeasonGameAttributes;
      relationships: SeasonRelationship;
    }
  }

interface SeasonInformation {
  data: [PubgSeason]
}

interface PubgSeason {
  type: string;
  id: string;
  attributes: {
    isCurrentSeason: string;
    isOffSeason: string
  }
}

interface Season {
  type: String
  id: String
  isCurrentSeason: Boolean
  isOffseason: Boolean
}

interface SeasonQuery {
  region: string;
  playerId: string;
  season: string;
}

interface SeasonGameAttributes {
  gameModeStats: [PubgApiGameStats];
}

interface SeasonRelationship {
  player: any;
  season: any;
  matchesSolo: any;
  matchesSoloFPP: any;
  matchesDuo: any;
  matchesDuoFPP: any;
  matchesSquad: any;
  matchesSquadFPP: any;
}

  
interface SeasonPubgApiGameStats {
  assists: number;
  heals: number;
  boosts: number;
  kills: number;
  dBNOs: number;
  losses: number;
  damageDealt: number;
  headshotKills: number;
  longestKill: number;
  longestTimeSurvived: number;
  revives: number;
  roadKills: number;
  roundMostKills: number;
  roundsPlayed: number;
  suicides: number;
  walkDistance: number;
  swimDistance: number;
  rideDistance: number;
  teamKills: number;
  timeSurvived: number;
  top10s: number;
  vehicleDestroys: number;
  weaponsAcquired: number;
  wins: number;
}

interface SeasonGameStats {
  assists: number;
  heals: number;
  boosts: number;
  kills: number;
  dBNOs: number;
  deaths: number;
  damage: number;
  headshotKills: number;
  longestKill: number;
  longestGame: number;
  revives: number;
  roadKills: number;
  roundMostKills: number;
  rounds: number;
  suicides: number;
  runningDistance: number;
  swimDistance: number;
  drivingDistance: number;
  teamKills: number;
  timePlayed: number;
  top10s: number;
  vehiclesDestroyed: number;
  weaponsAcquired: number;
  wins: number;
  kdRatio: number;
}