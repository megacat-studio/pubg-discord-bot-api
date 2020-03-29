interface ZoneCoordinates {
  x: any;
  y: any;
  radius: any;
}

interface GameCoordinates {
  id: string;
  coordinates: [Coordinate];
}

interface Coordinate {
  x: number;
  y: number;
  z: number;
}

interface TelemetryQuery {
  url: any;
  users: any;
  scale: any;
}