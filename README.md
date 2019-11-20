# pubg-discord-bot GraphQL server

## Run locally :computer:

Install dependencies

```bash
yarn install
```

Rename `.env.example` to `.env` and include your own API Key that you can get from [here](https://developer.playbattlegrounds.com/).

Run the dev server

```bash
yarn dev
```

Go to http://localhost:3001/

## Test using the GraphQL interface

- Locally :computer: :

After starting the server, go to http://localhost:5001/api/graphql to launch it.

## Example queries:

```graphql
# Write your query or mutation here
query playerId {
  playerId(region: "steam", playerName: "Kalosar")
}

query playerGame {
  playerGames(region: "steam", playerName: "Kalosar") {
    id
    type
  }
}

query weaponMastery {
  weaponMastery(
    region: "steam"
    playerId: "account.6d9bb5a4a9a446058c480b2f439a8af5"
  ) {
    name
    stats {
      kills
    }
    medals {
      MedalId
      Count
    }
  }
}

query lifeTimeStats {
  getLifetimeStats(
    region: "steam"
    playerId: "account.6d9bb5a4a9a446058c480b2f439a8af5"
  ) {
    assists
    heals
    kills
    dBNOs
    deaths
    damage
    headshotKills
    longestKill
    longestGame
    revives
    roadKills
    roundMostKills
    rounds
    suicides
    runningDistance
    swimDistance
    drivingDistance
    teamKills
    timePlayed
    top10s
    vehiclesDestroyed
    weaponsAcquired
    wins
    kdRatio
  }
}

query matchInfo {
  matchInfo(
    region: "steam"
    matchId: "cd6fa786-0290-4b4b-bd06-928be0fc3f58"
    playerId: "account.6d9bb5a4a9a446058c480b2f439a8af5"
  ) {
    playersInfo {
      name
      playerId
      rank
      kills
      assists
      dBNOs
      boosts
      heals
      damage
      headshotKills
      killPlace
      longestKill
      revives
      rideDistance
      roadKills
      swimDistance
      teamKills
      timeSurvived
      vehiclesDestroyed
      walkDistance
    }
    generalInfo {
      gameMode
      time
      date
      matchDuration
      mapName
      teams
      participants
      userRank
      telemetryUrl
      team
      matchId
    }
  }
}

query seasonStats {
  getSeasonStats(
    region: "steam"
    playerId: "account.6d9bb5a4a9a446058c480b2f439a8af5"
    season: "division.bro.official.pc-2018-05"
  ) {
    assists
    heals
    kills
    dBNOs
    deaths
    damage
    headshotKills
    longestKill
    longestGame
    revives
    roadKills
    roundMostKills
    rounds
    suicides
    runningDistance
    swimDistance
    drivingDistance
    teamKills
    timePlayed
    top10s
    vehiclesDestroyed
    weaponsAcquired
    wins
    kdRatio
  }
}

query telemetry {
  telemetry(
    url: "https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/steam/2019/11/18/20/26/a66d16f3-0a41-11ea-a839-0a586469f41b-telemetry.json"
    users: ["Kalosar", "Oppai-Senpai", "puffmonkeys", "Kaggeh"]
    scale: 2500
  ) {
    playerCoordinates {
      id
      coordinates {
        x
        y
        z
      }
    }
  }
}

query leaderboards {
  leaderboards(gameMode: "duo", count: 50) {
    id
    name
    rank
    stats {
      averageDamage
      averageRank
      games
      killDeathRatio
      kills
      rankPoints
      winRatio
      wins
    }
  }
}
```
