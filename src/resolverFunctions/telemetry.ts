import { uniqBy } from 'lodash';
import anymatch from 'anymatch';

interface ZoneCoordinates {
  x: any;
  y: any;
  radius: any;
}

interface Coordinates {
  id: string;
  coordinates: [Coordinate];
}

interface Coordinate {
  x: number;
  y: number;
  z: number;
}

export default function getCoordinates(
  information: any,
  users: any,
  scale: any
) {
  console.log(information);
  console.log(information);
  const coordinates: any = userLocation(information, users, scale);
  const safetyZoneCoords: ZoneCoordinates[] = safeZoneCoordinates(
    information,
    scale
  );
  const redZoneCoords: ZoneCoordinates[] = redZoneCoordinates(
    information,
    scale
  );

  return {
    playerCoordinates: coordinates,
    safetyZoneCoordinates: uniqBy(safetyZoneCoords, 'x'),
    redZoneCoordinates: uniqBy(redZoneCoords, 'x')
  };
}

function location(scale: any, item: any) {
  const { x, y, z } = item.character.location;
  if (scale) {
    return {
      x: parseInt(x, 10) / parseInt(scale, 10),
      y: parseInt(y, 10) / parseInt(scale, 10),
      z: parseInt(z, 10)
    };
  }
  return {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
    z: parseInt(z, 10)
  };
}

function userLocation(information: any, users: [string], scale: any) {
  return users.map(
    (user: string): Coordinates => {
      const Arr = information.filter(({ character, common }) =>
        character && common
          ? character.name === user && common.isGame > 0.5
          : false
      );

      const locations: [Coordinate] = Arr.map((item: any) =>
        location(scale, item)
      );

      return { id: user, coordinates: locations };
    }
  );
}

function safeZoneCoordinates(information: any, scale: any) {
  return information
    .filter(({ gameState }) => {
      if (gameState) {
        if (gameState.poisonGasWarningPosition.x === 0) {
          return false;
        } else return true;
      } else return false;
    })
    .map(item => {
      const { x, y } = item.gameState.poisonGasWarningPosition;
      const { poisonGasWarningRadius: radius } = item.gameState;

      if (scale) {
        return {
          x: x / scale,
          y: y / scale,
          radius: radius / scale
        };
      } else {
        return {
          x: x,
          y: y,
          radius: radius
        };
      }
    });
}

function redZoneCoordinates(information: any, scale: any) {
  return information
    .filter(({ gameState }) => {
      if (gameState) {
        if (gameState.redZonePosition.x === 0) {
          return false;
        } else return true;
      } else return false;
    })
    .map(item => {
      const { redZoneRadius: rzr } = item.gameState;
      const { x: rzx, y: rzy } = item.gameState.redZonePosition;

      if (scale) {
        return {
          x: rzx / scale,
          y: rzy / scale,
          radius: rzr / scale
        };
      } else {
        return {
          x: rzx,
          y: rzy,
          radius: rzr
        };
      }
    });
}
