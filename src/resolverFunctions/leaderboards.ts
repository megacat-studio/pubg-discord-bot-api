import { sortBy, set } from 'lodash';

interface Information {
  data: {
    type: string;
    id: string;
    attributes: {
      shardId: string;
      gameMode: string;
    };
    relationships: {
      player: {
        data: any;
      };
    };
    included: any;
  };
}

export default function getLeaderboards(information: Information, count: any) {
  const leaders = sortBy(information.data.included, ['attributes.rank']).slice(
    0,
    count
  );
  return leaders.map(itemAtributes);
}

function itemAtributes(item: any) {
  set(item, 'attributes.id', item.id);
  set(
    item,
    'attributes.stats.winRatio',
    (item.attributes.stats.winRatio * 100).toFixed(2)
  );
  set(
    item,
    'attributes.stats.killDeathRatio',
    item.attributes.stats.killDeathRatio.toFixed(2)
  );
  set(
    item,
    'attributes.stats.averageRank',
    item.attributes.stats.averageRank.toFixed(2)
  );
  return item.attributes;
}
