export default function getPlayerMatches(information: PlayerMatchesInformation) {
  return information.data[0].relationships.matches.data;
}
