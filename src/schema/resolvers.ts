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

const resolvers = {
  Query: {
    playerId: async (
      root: any,
      { region, playerName }: PlayerQuery,
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
      { region, playerName }: PlayerQuery,
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
      { region, matchId, playerId }: MatchQuery,
      { dataSources }
    ) => {
      const information = JSON.parse(
        await dataSources.pubgAPI.getMatch(region, matchId)
      );

      return getMatchInfo(information, playerId);
    },

    matchesInfo: (
      root: any,
      { region, matchesId, playerId }: MatchQuery,
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
      { region, playerId, season }: SeasonQuery,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getSeasons(region);
      return getSeasons(information);
    },

    getSeasonStats: async (
      root: any,
      { region, playerId, season }: SeasonQuery,
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
      { region, playerId, gameMode }: PlayerQuery,
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
      { region, playerId }: PlayerQuery,
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
      { gameMode, season, count }: LeaderboardQuery,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getLeaderboards(gameMode, season);
      return getLeaderboards(information, count);
    },

    telemetry: async (
      root: any,
      { url, users, scale }: TelemetryQuery,
      { dataSources }
    ) => {
      const information = await dataSources.pubgAPI.getTelemetryData(url);

      console.log("MyTelemetry:")
      console.log(information)

      return getCoordinates(information, users, scale);
    }
  }
};

export default resolvers;
