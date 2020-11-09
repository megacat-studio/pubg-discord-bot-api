# PUBG GraphQL server

## Prerequisite

* [Docker](https://www.docker.com/get-started)
* [Docker-compose](https://docs.docker.com/compose/install/)

## Run Docker-compose 🚢 

```bash
docker-compose up
```

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

Go to http://localhost:5001/

## Test using the GraphQL interface

- Locally :computer: :

After starting the server, go to http://localhost:5001/api/graphql to launch it.

## Example queries:

```graphql
# Write your query or mutation here
query playerId {
  playerId(region: "steam", playerName: "Kalosar")
}

query playerMatch {
  playerMatch(region: "steam", playerName: "Kalosar") {
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
    gameMode: "squad-fpp"
  ) {
    assists
    boosts
    downedButNotKilled
    dailyKills
    damageDealt
    days
    headshotKills
    heals
    kills
    longestKill
    longestTimeSurvived
    deaths
    maxKillStreaks
    mostSurvivalTime
    rankPoints
    rankPointsTitle
    revives
    drivingDistance
    roadKills
    roundMostKills
    roundsPlayed
    suicides
    swimDistance
    teamKills
    timeSurvived
    top10s
    vehiclesDestroyed
    runningDistance
    weaponsAcquired
    weeklyKills
    weeklyWins
    wins
    dailyWins
    kdRatio
  }
}

query matchInfo {
  matchInfo(
    region: "steam"
    matchId: "68a98bd3-0224-4283-b461-a069cf1e9d38"
    playerId: "account.6d9bb5a4a9a446058c480b2f439a8af5"
  ) {
    playersInfo {
      downedButNotKilled
      assists
      boosts
      damage
      deathType
      headshotKills
      heals
      killPlace
      killStreaks
      kills
      longestkill
      name
      playerId
      revives
      rideDistance
      roadKills
      swimDistance
      teamKills
      timeSurvived
      vehiclesDestroyed
      walkDistance
      weaponsAcquired
      rank
      team
    }
    generalInfo {
      gameMode
      time
      date
      isCustomMatch
      seasonState
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

query seasons {
  getSeasons(region: "steam") {
    type
    id
    isCurrentSeason
    isOffseason
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
