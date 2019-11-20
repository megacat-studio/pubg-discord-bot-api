interface Information {
  data: [
    {
      type: any;
      id: any;
      attributes: any;
      relationships: any;
      links: any;
    }
  ];
}

export default function getPlayerId(information: Information) {
  const playerId = information.data[0].id;
  return playerId;
}
