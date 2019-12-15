import { map } from 'lodash';

interface Information {
    data: [PUBGSeason]
}

interface PUBGSeason {
    type: string;
    id: string;
    attributes: {
        isCurrentSeason: string;
        isOffSeason: string
    }
}

interface Season {
    type: String
    id: String
    isCurrentSeason: Boolean
    isOffseason: Boolean
  }

export default function getSeasons(information: Information) {
    return information.data.map(season => seasons(season));
}

function seasons(seasons: PUBGSeason): Season {
    return {
        type: seasons.type,
        id: seasons.id,
        isCurrentSeason: seasons.attributes.isCurrentSeason === "true",
        isOffseason: seasons.attributes.isOffSeason === "true"
    }
}





