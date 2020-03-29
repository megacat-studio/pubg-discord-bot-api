import { map } from 'lodash';

export default function getSeasons(information: SeasonInformation) {
    return information.data.map(season => seasons(season));
}

function seasons(seasons: PubgSeason): Season {
    return {
        type: seasons.type,
        id: seasons.id,
        isCurrentSeason: seasons.attributes.isCurrentSeason === "true",
        isOffseason: seasons.attributes.isOffSeason === "true"
    }
}