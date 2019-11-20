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
      mapName: string;
    };
  };
}

export default async function getMatchInfo(
  information: Information,
  playerId: string
) {
  console.log('INFORMATION: ');
  console.log(information);

  const included = information.included;
  const matchId = information.data.id;
  const {
    createdAt,
    duration,
    gameMode,
    mapName
  } = information.data.attributes;

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
          winPlace: rank,
          kills,
          assists,
          DBNOs,
          boosts,
          heals: Heals,
          damageDealt,
          headshotKills,
          killPlace,
          longestKill: longestkill,
          name,
          revives,
          rideDistance: driveDistance,
          roadKills,
          swimDistance: swimmingDistance,
          teamKills,
          vehicleDestroys: vehiclesDestroyed,
          timeSurvived: timeAlive,
          walkDistance: walkingDistance
        }
      }
    } = participant;

    console.log('participants!');
    console.log(participant);

    const heals = boosts + Heals;
    const damage = Number(damageDealt.toFixed(2));
    const longestKill = Number(longestkill.toFixed(2));
    const rideDistance = Number(driveDistance.toFixed(2));
    const swimDistance = Number(swimmingDistance.toFixed(2));
    const walkDistance = Number(walkingDistance.toFixed(2));
    const timeSurvived = Math.round(timeAlive);
    matchDuration = Math.round(duration);

    team.push(name);

    teams = rosters.length;
    participants = participantsList.length;
    userRank = rank;
    return {
      rank,
      kills,
      assists,
      dBNOs: DBNOs,
      heals,
      boosts,
      damage,
      headshotKills,
      killPlace,
      longestKill,
      name,
      playerId,
      revives,
      rideDistance,
      roadKills,
      swimDistance,
      teamKills,
      vehiclesDestroyed,
      walkDistance,
      timeSurvived,
      team
    };
  });

  return {
    playersInfo: teamStats,
    generalInfo: {
      gameMode,
      time,
      date,
      matchDuration,
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
