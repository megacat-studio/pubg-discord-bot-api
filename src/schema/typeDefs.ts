import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export default gql`
  type PlayerGame {
    id: String
    type: String
  }
  type MatchesInfo {
    playersInfo: [PlayerInfo]
    generalInfo: GeneralInfo
  }
  type GeneralInfo {
    gameMode: String
    time: String
    date: String
    matchDuration: Int
    mapName: String
    teams: Int
    participants: Int
    userRank: Int
    telemetryUrl: String
    team: [String]
    matchId: String
  }
  type PlayerInfo {
    name: String
    playerId: String
    rank: Int
    kills: Int
    assists: Int
    dBNOs: Int
    boosts: Int
    heals: Int
    damage: Float
    headshotKills: Int
    killPlace: Int
    longestKill: Float
    revives: Int
    rideDistance: Float
    roadKills: Int
    swimDistance: Float
    teamKills: Int
    timeSurvived: Int
    vehiclesDestroyed: Int
    walkDistance: Float
  }
  type SeasonStats {
    assists: Int
    heals: Int
    kills: Int
    dBNOs: Int
    deaths: Int
    damage: Float
    headshotKills: Int
    longestKill: Float
    longestGame: Int
    revives: Int
    roadKills: Int
    roundMostKills: Int
    rounds: Int
    suicides: Int
    runningDistance: Int
    swimDistance: Int
    drivingDistance: Int
    teamKills: Int
    timePlayed: Int
    top10s: Int
    vehiclesDestroyed: Int
    weaponsAcquired: Int
    wins: Int
    kdRatio: Float
  }
  type LifetimeStats {
    assists: Int
    heals: Int
    kills: Int
    dBNOs: Int
    deaths: Int
    damage: Float
    headshotKills: Int
    longestKill: Float
    longestGame: Int
    revives: Int
    roadKills: Int
    roundMostKills: Int
    rounds: Int
    suicides: Int
    runningDistance: Int
    swimDistance: Int
    drivingDistance: Int
    teamKills: Int
    timePlayed: Int
    top10s: Int
    vehiclesDestroyed: Int
    weaponsAcquired: Int
    wins: Int
    kdRatio: Float
  }
  type Players {
    name: String
    rank: Int
    id: ID!
    stats: Stats
  }
  type Stats {
    rankPoints: Int
    wins: Int
    games: Int
    winRatio: Float
    averageDamage: Int
    kills: Int
    killDeathRatio: Float
    averageRank: Float
  }
  type Telemetry {
    playerCoordinates: [Coordinates]
    safetyZoneCoordinates: [ZoneCoordinates]
    redZoneCoordinates: [ZoneCoordinates]
  }
  type Coordinates {
    id: String
    coordinates: [Coordinate]
  }
  type Coordinate {
    x: Float
    y: Float
    z: Float
  }
  type ZoneCoordinates {
    x: Float
    y: Float
    radius: Float
  }
  type weaponStats {
    kills: Int
    defeats: Int
    roundMostKills: Int
    roundMostDamage: Float
    damage: Float
    headshots: Int
    roundMostHeadshots: Int
    knocks: Int
    roundMostKnocks: Int
    longRangeKills: Int
    longestKill: Float
    roundMostDefeats: Int
    xpTotal: Int
    levelCurrent: Int
    tierCurrent: Int
  }
  type weaponMedals {
    MedalId: String
    Count: Int
  }
  type weaponMastery {
    name: String
    stats: weaponStats
    medals: [weaponMedals]
  }
  type Query {
    playerGames(region: String!, playerName: String!): [PlayerGame]
    matchInfo(
      region: String!
      matchId: [String!]!
      playerId: String!
    ): MatchesInfo
    matchesInfo(
      region: String!
      matchesId: [String!]!
      playerId: String!
    ): [MatchesInfo]
    playerId(region: String!, playerName: String!): ID!
    leaderboards(gameMode: String!, count: Int!): [Players!]!
    telemetry(url: String!, users: [String!], scale: Int): Telemetry
    getSeasonStats(
      region: String!
      playerId: String!
      season: String!
    ): SeasonStats
    getLifetimeStats(region: String!, playerId: String!): LifetimeStats
    weaponMastery(region: String!, playerId: String!): [weaponMastery]
  }
`;
