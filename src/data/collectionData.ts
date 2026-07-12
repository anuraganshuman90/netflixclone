import content from "./contentData";

const collections = [
    {
        id: 1,
        title: "Trending",
        collectionType: "Trending",
        contents: [
            content[0],
            content[1],
            content[2],
        ],
    },
    {
        id: 2,
        title: "Sci-Fi",
        collectionType: "Genre",
        contents: [
            content[0],
        ],
    },
    {
        id: 3,
        title: "Documentaries",
        collectionType: "Genre",
        contents: [
            content[3],
        ],
    },
];

export default collections; 
