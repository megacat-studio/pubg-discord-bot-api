import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class PubgAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.PUBG_API_BASE_URL}`;
  }

  willSendRequest(request: RequestOptions) {
    console.log('sending request');
    request.headers.set('Authorization', `Bearer ${process.env.API_KEY}`);
    request.headers.set('Accept', 'application/vnd.api+json');
  }

  async getPlayerGames(region: string, playerName: string) {
    console.log('getting PlayerGames');

    return this.get(
      `/shards/${region}/players?filter[playerNames]=${playerName}`
    );
  }

  async getMatch(region: string, matchId: string) {
    console.log('getting match');
    return this.get(`/shards/${region}/matches/${matchId}`);
  }

  async getSeason(region: string, playerId: string, season: string) {
    console.log('getting season');
    return this.get(`/shards/${region}/players/${playerId}/seasons/${season}`);
  }

  async getLifetimeStats(region: string, playerId: string) {
    console.log('getting lifetime stats');
    return this.get(`/shards/${region}/players/${playerId}/seasons/lifetime`);
  }

  async getWeaponMastery(region: string, playerId: string) {
    console.log('getting weaponMastery');
    return this.get(`/shards/${region}/players/${playerId}/weapon_mastery`);
  }

  async getLeaderboards(gameMode: string) {
    console.log('getting leaderboards');
    return this.get(`/shards/steam/leaderboards/${gameMode}?page[number]=0`);
  }

  async getTelemetryData(url: string) {
    console.log('getting telemetry');
    return this.get(url);
  }
}
