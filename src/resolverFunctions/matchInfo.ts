import { head, partition, find, filter } from 'lodash';

interface Information {
  included: any;
  data: {
    type: string;
    id: string;
    attributes: {
      createdAt: string;
      duration: number;
      gameMode: string;
      isCustomMatch: string;
      seasonState: string;
      mapName: string;
    };
  };
}

interface GameInformation {
  createdAt: string;
  duration: number;
  gameMode: string;
  isCustomMatch: string;
  seasonState: string;
  mapName: string;
}

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

export default async function getMatchInfo(
  information: Information,
  playerId: string
) {

  const included = information.included;
  const matchId = information.data.id;
  const {
    createdAt,
    duration,
    gameMode,
    isCustomMatch,
    seasonState,
    mapName
  }: GameInformation = information.data.attributes;

  let matchDuration: any, teams: any, participants: any, userRank: any;
  let [date, time] = createdAt.split('T');
  time = time.slice(0, -1);

  const [participantsList, rest] = partition(included, ['type', 'participant']);
  const rosters = head(partition(rest, ['type', 'roster']));
  const test = head(partition(rest, ['type', 'asset']));

  const {
    attributes: { URL: telemetryUrl }
  } = head(test);

  const participant = find(
    participantsList,
    ({
      attributes: {
        stats: { playerId: id }
      }
    }) => id === playerId
  );

  const { id: participantId } = participant;

  const teamIds = find(
    rosters,
    ({
      relationships: {
        participants: { data: teamIds }
      }
    }) => !!find(teamIds, ({ id }) => id === participantId)
  ).relationships.participants.data;

  let team = [];

  const teamStats = filter(
    participantsList,
    ({ id }) => !!find(teamIds, ({ id: teamId }) => teamId === id)
  ).map(participant => {
    const {
      attributes: {
        stats: {
          DBNOs,
          assists,
          boosts,
          damageDealt,
          deathType,
          headshotKills,
          heals,
          killPlace,
          killStreaks,
          kills,
          longestKill,
          name,
          playerId,
          revives,
          rideDistance,
          roadKills,
          swimDistance,
          teamKills,
          timeSurvived,
          vehicleDestroys,
          walkDistance,
          weaponsAcquired,
          winPlace
        }
      }
    } = participant;

    team.push(name);
    teams = rosters.length;
    participants = participantsList.length;
    userRank = winPlace;

    return {
      downedButNotKilled: DBNOs,
      assists,
      boosts,
      damage: damageDealt ? Number(damageDealt.toFixed(2)) : 0,
      deathType,
      headshotKills,
      heals: heals ? Number(heals.toFixed(2)) : 0,
      killPlace,
      killStreaks,
      kills,
      longestkill: longestKill ? Number(longestKill.toFixed(2)) : 0,
      name,
      playerId,
      revives,
      driveDistance: rideDistance ? Number(rideDistance.toFixed(2)) : 0,
      roadKills,
      swimmingDistance: swimDistance ? Number(swimDistance.toFixed(2)) : 0,
      teamKills,
      timeSurvived: timeSurvived ? Number(timeSurvived.toFixed(2)) : 0,
      vehiclesDestroyed: vehicleDestroys,
      runningDistance: walkDistance ? Number(walkDistance.toFixed(2)) : 0,
      weaponsAcquired,
      rank: winPlace,
      team
    };
  });

  return {
    playersInfo: teamStats,
    generalInfo: {
      gameMode,
      isCustomMatch,
      seasonState,
      time,
      date,
      matchDuration: duration ? Number(duration.toFixed(2)) : 0,
      mapName,
      teams,
      participants,
      userRank,
      telemetryUrl,
      team,
      matchId
    }
  };
}
