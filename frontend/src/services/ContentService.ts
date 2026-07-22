/*
import content from "../data/contentData";
import type { ContentCollection } from "../types/collection";
import type { Content } from "../types/content";

function checkGenre(genre: string): Content[] {
    return content.filter(content => content.genres.includes(genre));
}

function getHomePageCollections(): ContentCollection[] {
    return [
        getTopRatedCollection(),
        getRecentlyAddedCollection(),
        //getNewestCollection(),
        //getActionCollection(),
        getSciFiCollection(),
        getComedyCollection()
    ];
}

function getFeaturedContent() {
    const length = content.length
    const ri = Math.floor(Math.random() * length)
    return content[ri]
}

function getRecentlyAddedCollection(): ContentCollection {
    const arr = [...content]
    arr.sort((a, b) => b.releaseYear - a.releaseYear)
    return {
        id: 2,
        title: "Recently Added",
        collectionType: "recently-added",
        contents: arr.slice(20)
    }

}

function getTopRatedCollection(): ContentCollection {
    const arr = [...content]
    arr.sort((a, b) => {
        return b.rating - a.rating;
    })
    return {
        id: 1,
        title: "Top Rated",
        collectionType: 'top-rated',
        contents: arr.slice(0, 9)
    }
}

function getComedyCollection(): ContentCollection {

    return {
        id: 3,
        title: "Comedy",
        collectionType: 'comedy',
        contents: checkGenre("Comedy")
    }
}

function getSciFiCollection(): ContentCollection {
    return {
        id: 4,
        title: "Sci Fi",
        collectionType: "sci-fi",
        contents: checkGenre("Sci-Fi")
    }
}



export { getHomePageCollections, getFeaturedContent };
*/

/*
getFeaturedContent()
getCollections()
search()
filter()
sort()
recommendations()
*/

/*
getTrendingCollection()
getTopRatedCollection()
getRecentlyAddedCollection()
getActionCollection()
*/

const API_URL = import.meta.env.VITE_API_URL

async function getAll() {
 const response  = await fetch(`${API_URL}/content`)
 return response.json()
}

export default getAll;
