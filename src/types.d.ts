export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Coordinates = {
  __typename?: "Coordinates";
  Id?: Maybe<Scalars["String"]>;
  Coords?: Maybe<Array<Maybe<Coords>>>;
};

export type Coords = {
  __typename?: "Coords";
  x?: Maybe<Scalars["Int"]>;
  y?: Maybe<Scalars["Int"]>;
  z?: Maybe<Scalars["Int"]>;
};

export type GeneralInfo = {
  __typename?: "GeneralInfo";
  gameMode?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  matchDuration?: Maybe<Scalars["Int"]>;
  mapName?: Maybe<Scalars["String"]>;
  teams?: Maybe<Scalars["Int"]>;
  participants?: Maybe<Scalars["Int"]>;
  userRank?: Maybe<Scalars["Int"]>;
  telemetryUrl?: Maybe<Scalars["String"]>;
  team?: Maybe<Array<Maybe<Scalars["String"]>>>;
  matchId?: Maybe<Scalars["String"]>;
};

export type LifetimeStats = {
  __typename?: "LifetimeStats";
  assists?: Maybe<Scalars["Int"]>;
  heals?: Maybe<Scalars["Int"]>;
  kills?: Maybe<Scalars["Int"]>;
  dBNOs?: Maybe<Scalars["Int"]>;
  deaths?: Maybe<Scalars["Int"]>;
  damage?: Maybe<Scalars["Int"]>;
  headshotKills?: Maybe<Scalars["Int"]>;
  longestKill?: Maybe<Scalars["Float"]>;
  longestGame?: Maybe<Scalars["Int"]>;
  revives?: Maybe<Scalars["Int"]>;
  roadKills?: Maybe<Scalars["Int"]>;
  roundMostKills?: Maybe<Scalars["Int"]>;
  rounds?: Maybe<Scalars["Int"]>;
  suicides?: Maybe<Scalars["Int"]>;
  runningDistance?: Maybe<Scalars["Int"]>;
  swimDistance?: Maybe<Scalars["Int"]>;
  drivingDistance?: Maybe<Scalars["Int"]>;
  teamKills?: Maybe<Scalars["Int"]>;
  timePlayed?: Maybe<Scalars["Int"]>;
  top10s?: Maybe<Scalars["Int"]>;
  vehiclesDestroyed?: Maybe<Scalars["Int"]>;
  weaponsAcquired?: Maybe<Scalars["Int"]>;
  wins?: Maybe<Scalars["Int"]>;
  kdRatio?: Maybe<Scalars["Float"]>;
};

export type MatchesInfo = {
  __typename?: "MatchesInfo";
  playersInfo?: Maybe<Array<Maybe<PlayerInfo>>>;
  generalInfo?: Maybe<GeneralInfo>;
};

export type PlayerGame = {
  __typename?: "PlayerGame";
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type PlayerInfo = {
  __typename?: "PlayerInfo";
  name?: Maybe<Scalars["String"]>;
  playerId?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["Int"]>;
  kills?: Maybe<Scalars["Int"]>;
  assists?: Maybe<Scalars["Int"]>;
  DBNOs?: Maybe<Scalars["Int"]>;
  boosts?: Maybe<Scalars["Int"]>;
  heals?: Maybe<Scalars["Int"]>;
  damage?: Maybe<Scalars["Int"]>;
  headshotKills?: Maybe<Scalars["Int"]>;
  killPlace?: Maybe<Scalars["Int"]>;
  longestKill?: Maybe<Scalars["Int"]>;
  revives?: Maybe<Scalars["Int"]>;
  rideDistance?: Maybe<Scalars["Int"]>;
  roadKills?: Maybe<Scalars["Int"]>;
  swimDistance?: Maybe<Scalars["Int"]>;
  teamKills?: Maybe<Scalars["Int"]>;
  timeSurvived?: Maybe<Scalars["Int"]>;
  vehiclesDestroyed?: Maybe<Scalars["Int"]>;
  walkDistance?: Maybe<Scalars["Int"]>;
};

export type Players = {
  __typename?: "Players";
  name?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  stats?: Maybe<Stats>;
};

export type Query = {
  __typename?: "Query";
  playerGames?: Maybe<Array<Maybe<PlayerGame>>>;
  matchInfo?: Maybe<MatchesInfo>;
  matchesInfo?: Maybe<Array<Maybe<MatchesInfo>>>;
  playerId: Scalars["ID"];
  leaderboards: Array<Players>;
  telemetry?: Maybe<Telemetry>;
  getSeasonStats?: Maybe<SeasonStats>;
  getLifetimeStats?: Maybe<LifetimeStats>;
  weaponMastery?: Maybe<Array<Maybe<WeaponMastery>>>;
};

export type QueryPlayerGamesArgs = {
  region: Scalars["String"];
  playerName: Scalars["String"];
};

export type QueryMatchInfoArgs = {
  region: Scalars["String"];
  matchId: Array<Scalars["String"]>;
  playerId: Scalars["String"];
};

export type QueryMatchesInfoArgs = {
  region: Scalars["String"];
  matchesId: Array<Scalars["String"]>;
  playerId: Scalars["String"];
};

export type QueryPlayerIdArgs = {
  region: Scalars["String"];
  playerName: Scalars["String"];
};

export type QueryLeaderboardsArgs = {
  gameMode: Scalars["String"];
  count: Scalars["Int"];
};

export type QueryTelemetryArgs = {
  url: Scalars["String"];
  users?: Maybe<Array<Scalars["String"]>>;
  scale?: Maybe<Scalars["Int"]>;
};

export type QueryGetSeasonStatsArgs = {
  region: Scalars["String"];
  playerId: Scalars["String"];
  season: Scalars["String"];
};

export type QueryGetLifetimeStatsArgs = {
  region: Scalars["String"];
  playerId: Scalars["String"];
};

export type QueryWeaponMasteryArgs = {
  region: Scalars["String"];
  playerId: Scalars["String"];
};

export type SeasonStats = {
  __typename?: "SeasonStats";
  kills?: Maybe<Scalars["Int"]>;
  assists?: Maybe<Scalars["Int"]>;
  deaths?: Maybe<Scalars["Int"]>;
  rounds?: Maybe<Scalars["Int"]>;
  wins?: Maybe<Scalars["Int"]>;
  top10s?: Maybe<Scalars["Int"]>;
  suicides?: Maybe<Scalars["Int"]>;
  teamKills?: Maybe<Scalars["Int"]>;
  kdRatio?: Maybe<Scalars["Float"]>;
  runningDistance?: Maybe<Scalars["Int"]>;
  drivingDistance?: Maybe<Scalars["Int"]>;
  vehiclesDestroyed?: Maybe<Scalars["Int"]>;
  heals?: Maybe<Scalars["Int"]>;
  revives?: Maybe<Scalars["Int"]>;
  damage?: Maybe<Scalars["Int"]>;
  mostKills?: Maybe<Scalars["Int"]>;
  longestKill?: Maybe<Scalars["Float"]>;
  timePlayed?: Maybe<Scalars["Int"]>;
  longestGame?: Maybe<Scalars["Int"]>;
};

export type Stats = {
  __typename?: "Stats";
  rankPoints?: Maybe<Scalars["Int"]>;
  wins?: Maybe<Scalars["Int"]>;
  games?: Maybe<Scalars["Int"]>;
  winRatio?: Maybe<Scalars["Float"]>;
  averageDamage?: Maybe<Scalars["Int"]>;
  kills?: Maybe<Scalars["Int"]>;
  killDeathRatio?: Maybe<Scalars["Float"]>;
  averageRank?: Maybe<Scalars["Float"]>;
};

export type Telemetry = {
  __typename?: "Telemetry";
  playerCoords?: Maybe<Array<Maybe<Coordinates>>>;
  safetyZoneCoords?: Maybe<Array<Maybe<ZoneCoords>>>;
  redZoneCoords?: Maybe<Array<Maybe<ZoneCoords>>>;
};

export type WeaponMastery = {
  __typename?: "weaponMastery";
  name?: Maybe<Scalars["String"]>;
  stats?: Maybe<WeaponStats>;
  medals?: Maybe<Array<Maybe<WeaponMedals>>>;
};

export type WeaponMedals = {
  __typename?: "weaponMedals";
  medalId?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["Int"]>;
};

export type WeaponStats = {
  __typename?: "weaponStats";
  kills?: Maybe<Scalars["Int"]>;
  defeats?: Maybe<Scalars["Int"]>;
  roundMostKills?: Maybe<Scalars["Int"]>;
  roundMostDamage?: Maybe<Scalars["Float"]>;
  damage?: Maybe<Scalars["Float"]>;
  headshots?: Maybe<Scalars["Int"]>;
  roundMostHeadshots?: Maybe<Scalars["Int"]>;
  knocks?: Maybe<Scalars["Int"]>;
  roundMostKnocks?: Maybe<Scalars["Int"]>;
  longRangeKills?: Maybe<Scalars["Int"]>;
  longestKill?: Maybe<Scalars["Float"]>;
  roundMostDefeats?: Maybe<Scalars["Int"]>;
  xpTotal?: Maybe<Scalars["Int"]>;
  levelCurrent?: Maybe<Scalars["Int"]>;
  tierCurrent?: Maybe<Scalars["Int"]>;
};

export type ZoneCoords = {
  __typename?: "ZoneCoords";
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  radius?: Maybe<Scalars["Float"]>;
};
