interface PlayerMatchesInformation {
    data: [PlayerMatches];
}

interface PlayerMatches {
  type: any;
  id: any;
  attributes: any;
  relationships: {
    matches: {
      data: any;
    };
  };
  links: any;
}