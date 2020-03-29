interface WeaponMasteryInformation {
  data: {
    included: any;
    type: string;
    id: string;
    attributes: WeaponMasteryAttributes;
  }
}

interface WeaponMasteryAttributes {
  seasonId: string;
  weaponSummaries: {
    weapon: Weapon;
  };
  latestMatchId: string;
  platform: string;
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