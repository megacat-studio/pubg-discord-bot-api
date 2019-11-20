interface Information {
  data: [
    {
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
  ];
}

export default function getPlayerGames(information: Information) {
  const matchesArray = information.data[0].relationships.matches.data;

  return matchesArray;
}
