import {
  getPlayerId,
  getPlayerMatches,
  getMatchInfo,
  getSeasons,
  getSeasonStats,
  getLeaderboards,
  getCoordinates,
  getLifetimeStats,
  getWeaponMastery
} from '../resolverFunctions/main';

interface PlayerInformation {
  region: string;
  playerName: string;
  playerId: string;
  gameMode: string
}

interface MatchInformation {
  region: string;
  matchId: string;
  matchesId: string[];
  playerId: string;
}

interface SeasonInformation {
  region: string;
  playerId: string;
  season: string;
}

interface GameModeInformation {
  gameMode: string;
  count: number;
}

interface TelemetryInformation {
  url: any;
  users: any;
  scale: any;
}

const resolvers = {
  Query: {
    playerId: async (
      root: any,
      { region, playerName }: PlayerInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getPlayerMatches(
        region,
        playerName
      );

      return getPlayerId(information);
    },

    playerMatch: async (
      root: any,
      { region, playerName }: PlayerInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getPlayerMatches(
        region,
        playerName
      );

      return getPlayerMatches(information);
    },

    matchInfo: async (
      root: any,
      { region, matchId, playerId }: MatchInformation,
      { dataSources }
    ) => {
      const information = JSON.parse(
        await dataSources.pubgAPI.getMatch(region, matchId)
      );

      return getMatchInfo(information, playerId);
    },

    matchesInfo: (
      root: any,
      { region, matchesId, playerId }: MatchInformation,
      { dataSources }
    ) => {
      matchesId.map(async matchId => {
        const information = JSON.parse(
          await dataSources.pubgAPI.getMatch(region, matchId)
        );
        return getMatchInfo(information, playerId);
      });
    },

    getSeasons: async (
      root: any,
      { region, playerId, season }: SeasonInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getSeasons(region);
      return getSeasons(information);
    },

    getSeasonStats: async (
      root: any,
      { region, playerId, season }: SeasonInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getSeasonStats(
        region,
        playerId,
        season
      );

      return getSeasonStats(information);
    },

    getLifetimeStats: async (
      root: any,
      { region, playerId, gameMode }: PlayerInformation,
      { dataSources }
    ) => {
      const information = JSON.parse(await dataSources.pubgAPI.getLifetimeStats(
        region,
        playerId,
        gameMode
      ));
      return getLifetimeStats(information, gameMode);
    },

    weaponMastery: async (
      root: any,
      { region, playerId }: PlayerInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getWeaponMastery(
        region,
        playerId
      );
      return getWeaponMastery(information);
    },

    leaderboards: async (
      root: any,
      { gameMode, count }: GameModeInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getLeaderboards(gameMode);
      return getLeaderboards(information, count);
    },

    telemetry: async (
      root: any,
      { url, users, scale }: TelemetryInformation,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getTelemetryData(url);

      return getCoordinates(information, users, scale);
    }
  }
};

export default resolvers;
