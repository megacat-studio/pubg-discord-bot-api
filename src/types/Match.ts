interface MatchInformation {
  data: {
    type: string;
    id: string;
    attributes:  MatchAttributes;
  },
  included: any;
}

interface MatchAttributes {
  createdAt: string;
  duration: number;
  gameMode: string;
  isCustomMatch: string;
  seasonState: string;
  mapName: string;
}

interface MatchQuery {
  region: string;
  matchId: string;
  matchesId: string[];
  playerId: string;
}