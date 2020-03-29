interface LeaderboardInformation {
  data: {
    type: string;
    id: string;
    attributes: LeaderboardAttributes;
    relationships: LeaderBoardRelationships;
  },
  included: any;
}

interface LeaderboardAttributes {
  shardId: string;
  gameMode: string;
}

interface LeaderBoardRelationships {
  player: {
    data: any;
  }
}

interface LeaderboardQuery {
  season: string;
  gameMode: string;
  count: number;
}