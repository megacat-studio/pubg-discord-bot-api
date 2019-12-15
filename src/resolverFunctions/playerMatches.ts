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

export default function getPlayerMatches(information: Information) {
  return information.data[0].relationships.matches.data;
}
