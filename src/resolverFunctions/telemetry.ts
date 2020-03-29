import { uniqBy } from 'lodash';

export default function getCoordinates(information: any, users: any, scale: any) {
  console.log(information);
  const safetyZoneCoords: ZoneCoordinates[] = safeZoneCoordinates(information, scale);
  const redZoneCoords: ZoneCoordinates[] = redZoneCoordinates(information, scale);

  return {
    playerCoordinates: userLocation(information, users, scale),
    safetyZoneCoordinates: uniqBy(safetyZoneCoords, 'x'),
    redZoneCoordinates: uniqBy(redZoneCoords, 'x')
  };
}

function userLocation(information: any, users: [string], scale: any) {
  return users.map((user: string) => findUserCoordinates(information, scale, user));
}

function findUserCoordinates(information: any, scale: any, user: string): GameCoordinates {
  return {id: user, coordinates: findPlayerCoordinates(information, scale, user) }
}

function findPlayerCoordinates(information: any, scale: any, user: string): [Coordinate] {
  return information.filter(({ character, common }) => findPlayerByName(character, common, user))
  .map((item: any) => location(scale, item))
  .map((locations: [Coordinate]) => { locations })
}
function findPlayerByName(character: any, common: any, user: any) { 
  return character && common ? character.name === user && common.isGame > 0.5 : false
}

function safeZoneCoordinates(information: any, scale: any) {
  return information
    .filter(({ gameState }) => zonePosition(gameState, gameState.poisonGasWarningPosition))
    .map(item => {
      const { x, y } = item.gameState.poisonGasWarningPosition;
      const { poisonGasWarningRadius: radius } = item.gameState;
      return matchCoordinates(scale, x, y, radius)
    });
}

function redZoneCoordinates(information: any, scale: any) {
  return information
    .filter(({ gameState }) => zonePosition(gameState, gameState.redZonePosition))
    .map(item => {
      const { x: rzx, y: rzy } = item.gameState.redZonePosition;
      const { redZoneRadius: rzr } = item.gameState;
      return matchCoordinates(scale, rzx, rzy, rzr)
    });
}

function zonePosition(gameState: any, zonePosition: any) {
  return gameState ? zonePosition.x === 0 ? false : true : false
}

function matchCoordinates(scale: any, x: any, y: any, radius: any) {
  return scale ? scaleCoordinates(scale, x, y, radius) : placeCoordinates(x, y, radius)
}

function location(scale: any, item: any) {
  const { x, y, z } = item.character.location;
  if (scale)
    return { x: parseInt(x, 10) / parseInt(scale, 10), y: parseInt(y, 10) / parseInt(scale, 10), z: parseInt(z, 10) };
  return { x: parseInt(x, 10), y: parseInt(y, 10), z: parseInt(z, 10)};
}

function scaleCoordinates(scale, x, y, radius) {
  return { x: x / scale, y: y / scale, radius: radius / scale }
}

function placeCoordinates(x, y, radius) {
  return { x: x, y: y, radius: radius }
}
