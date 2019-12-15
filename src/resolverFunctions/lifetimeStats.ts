import { map, values } from 'lodash';

interface Information {
  data: [{
    type: string;
    attributes: {
      gameModeStats: [PubgAPIGameStats]
      bestRankPoint: number;
    };
    relationships: {
      season: any;
      player: any;
      matchesSolo: any;
      matchesSoloFPP: any;
      matchesDuo: any;
      matchesDuoFPP: any;
      matchesSquad: any;
      matchesSquadFPP: any;
    };
  }];
}

interface PubgAPIGameStats {
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

export default function getLifetimeStats(information: Information, gameMode: string) {
  return lifetimestats(information.data[0].attributes.gameModeStats[`${gameMode}`]);
}

function lifetimestats(gamestats: PubgAPIGameStats): GameStats {
  return {
    assists: gamestats.assists,
    boosts: gamestats.boosts,
    downedButNotKilled: gamestats.dBNOs,
    dailyKills: gamestats.dailyKills,
    damageDealt: gamestats.damageDealt,
    days: gamestats.days, 
    headshotKills: gamestats.headshotKills,
    heals: gamestats.heals,
    kills: gamestats.kills,
    longestKill: gamestats.longestKill ? Number(gamestats.longestKill.toFixed(2)) : 0,
    longestTimeSurvived: gamestats.longestTimeSurvived ? Number(gamestats.longestTimeSurvived.toFixed(2)) : 0,
    deaths: gamestats.losses,
    maxKillStreaks: gamestats.maxKillStreaks,
    mostSurvivalTime: gamestats.mostSurvivalTime ? Number(gamestats.mostSurvivalTime.toFixed(2)) : 0,
    rankPoints: gamestats.rankPoints,
    rankPointsTitle: gamestats.rankPointsTitle,
    revives: gamestats.revives,
    drivingDistance: gamestats.rideDistance ? Number(gamestats.rideDistance.toFixed(2)) : 0,
    roadKills: gamestats.roadKills,
    roundMostKills: gamestats.roundMostKills,
    roundsPlayed: gamestats.roundsPlayed,
    suicides: gamestats.suicides,
    swimDistance: gamestats.swimDistance ? Number(gamestats.swimDistance.toFixed(2)) : 0,
    teamKills: gamestats.teamKills,
    timeSurvived: gamestats.timeSurvived ? Number(gamestats.timeSurvived.toFixed(2)) : 0,
    top10s: gamestats.top10s,
    vehiclesDestroyed: gamestats.vehicleDestroys,
    runningDistance: gamestats.walkDistance ? Number(gamestats.walkDistance.toFixed(2)) : 0,
    weaponsAcquired: gamestats.weaponsAcquired,
    weeklyKills: gamestats.weeklyKills,
    weeklyWins: gamestats.weeklyWins,
    wins: gamestats.wins,
    dailyWins: gamestats.dailyWins,
    kdRatio: gamestats.kills ? Number((gamestats.kills / gamestats.losses).toFixed(2)) : 0
  };
}