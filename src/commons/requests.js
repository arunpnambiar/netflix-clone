const API_KEY = "930abd193389590387b68506b4e754fa";

const requests = [
  {
    id: 1,
    title: "NETFLIX ORIGINALS",
    URL: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLargeRow: true,
  },
  {
    id: 2,
    title: "Trending Now",
    URL: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  },
  {
    id: 3,
    title: "Top Rated",
    URL: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  {
    id: 4,
    title: "Action Movies",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: 5,
    title: "Comedy Movies",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchComdeyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 6,
    title: "Horror Movies",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 7,
    title: "Romance Movies",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 8,
    title: "Documentaries",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDocumentariesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default requests;
