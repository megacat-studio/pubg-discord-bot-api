import { map } from 'lodash';

interface Information {
  data: {
    type: string;
    id: string;
    attributes: {
      seasonId: string;
      weaponSummaries: {
        weapon: Weapon;
      };
      latestMatchId: string;
      platform: string;
    };
  };
}

interface WeaponMastery {
  name: string;
  stats: WeaponStats;
  medals: [WeaponMedal];
}

interface WeaponMedal {
  MedalId: string;
  Count: number;
}

interface WeaponStatsTotal {
  MostDefeatsInAGame: any;
  Defeats: any;
  MostDamagePlayerInAGame: any;
  DamagePlayer: any;
  MostHeadShotsInAGame: any;
  HeadShots: any;
  LongestDefeat: any;
  LongRangeDefeats: any;
  Kills: any;
  MostKillsInAGame: any;
  Groggies: any;
  MostGroggiesInAGame: any;
}

interface WeaponStats {
  kills: any;
  defeats: any;
  roundMostKills: any;
  roundMostDamage: any;
  damage: any;
  headshots: any;
  roundMostHeadshots: any;
  severlyHurts: any;
  roundMostSeverlyHurts: any;
  longRangeKills: any;
  longestKill: any;
  roundMostDefeats: any;
  xpTotal: any;
  levelCurrent: any;
  tierCurrent: any;
}

interface Weapon {
  XPTotal: any;
  LevelCurrent: any;
  TierCurrent: any;
  StatsTotal: WeaponStatsTotal;
  Medals: [WeaponMedal];
}

export default function getWeaponMastery(information: Information) {
  const weaponSummaries = information.data.attributes.weaponSummaries;

  let mastery: WeaponMastery[] = map(weaponSummaries, (weapon, key) =>
    getWeaponSummary(weapon, key)
  );

  return mastery;
}

function getWeaponSummary(weapon: Weapon, key: string): WeaponMastery {
  const {
    XPTotal,
    LevelCurrent,
    TierCurrent,
    Medals,
    StatsTotal
  }: Weapon = weapon;
  const {
    Kills,
    MostDefeatsInAGame,
    Defeats,
    MostDamagePlayerInAGame,
    DamagePlayer,
    MostHeadShotsInAGame,
    HeadShots,
    LongestDefeat,
    LongRangeDefeats,
    MostKillsInAGame,
    Groggies,
    MostGroggiesInAGame
  }: WeaponStatsTotal = StatsTotal;

  return {
    name: key,
    medals: Medals,
    stats: {
      kills: Kills,
      defeats: Defeats,
      roundMostKills: MostKillsInAGame,
      roundMostDamage: MostDamagePlayerInAGame.toFixed(2),
      damage: DamagePlayer.toFixed(2),
      headshots: HeadShots,
      roundMostHeadshots: MostHeadShotsInAGame,
      severlyHurts: Groggies,
      roundMostSeverlyHurts: MostGroggiesInAGame,
      longRangeKills: LongRangeDefeats,
      longestKill: LongestDefeat.toFixed(2),
      roundMostDefeats: MostDefeatsInAGame,
      xpTotal: XPTotal,
      levelCurrent: LevelCurrent,
      tierCurrent: TierCurrent
    }
  };
}
