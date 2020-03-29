import { map, values } from 'lodash';
import { Stats } from 'webpack';

export default function getLifetimeStats(information: PubgApiInformation, gameMode: string) {
  return lifetimestats(information.data[0].attributes.gameModeStats[`${gameMode}`]);
}

function lifetimestats(stats: PubgApiGameStats): GameStats {
  return {
    assists: stats.assists,
    boosts: stats.boosts,
    downedButNotKilled: stats.dBNOs,
    dailyKills: stats.dailyKills,
    damageDealt: set(stats.damageDealt),
    days: stats.days, 
    headshotKills: stats.headshotKills,
    heals: stats.heals,
    kills: stats.kills,
    longestKill: set(stats.longestKill),
    longestTimeSurvived: set(stats.longestTimeSurvived),
    deaths: stats.losses,
    maxKillStreaks: stats.maxKillStreaks,
    mostSurvivalTime: set(stats.mostSurvivalTime),
    rankPoints: stats.rankPoints,
    rankPointsTitle: setTitle(stats.rankPointsTitle),
    revives: stats.revives,
    drivingDistance: set(stats.rideDistance),
    roadKills: stats.roadKills,
    roundMostKills: stats.roundMostKills,
    roundsPlayed: stats.roundsPlayed,
    suicides: stats.suicides,
    swimDistance: set(stats.swimDistance),
    teamKills: stats.teamKills,
    timeSurvived: set(stats.timeSurvived),
    top10s: stats.top10s,
    vehiclesDestroyed: stats.vehicleDestroys,
    runningDistance: set(stats.walkDistance),
    weaponsAcquired: stats.weaponsAcquired,
    weeklyKills: stats.weeklyKills,
    weeklyWins: stats.weeklyWins,
    wins: stats.wins,
    dailyWins: stats.dailyWins,
    kdRatio: setKDRatio(stats.kills, stats.losses)
  };
}

function set(stat: any) {
  return stat ? Number(stat.toFixed(2)) : 0
}

function setTitle(title: any) {
  return title == "0" || title ? "No title" : title
}

function setKDRatio(kills:any, deaths: any) {
  return kills && deaths ? Number((kills / deaths).toFixed(2)) : 0
}