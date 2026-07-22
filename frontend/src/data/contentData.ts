// import movies from "./movieData";
// import tvShows from "./tvShowData";
// import documentaries from "./documentaryData";
// const content = [...movies, ...tvShows, ...documentaries]
// export default content;

const content  = fetch("http://localhost:3001/content")
export default content;
