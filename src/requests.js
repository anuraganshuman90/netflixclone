const API_KEY = "847dc0a66c8ade21fd5b3a3d7e4b021a";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  fetchNetfixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComoedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
