export default function getPlayerId(information: PlayerIdInformation) {
  const playerId = information.data[0].id;
  return playerId;
}
