import { map } from 'lodash';

export default function getWeaponMastery(information: WeaponMasteryInformation): WeaponMastery[] {
  const weaponSummaries = information.data.attributes.weaponSummaries;
  return map(weaponSummaries, (weapon, key) => getWeaponSummary(weapon, key));
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
