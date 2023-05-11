const key = "023b22aeafb30d6cb4288d6621943955"

const requests = {
        requestNowPlaying: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
        requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
        requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
        requestAiringToday: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1`,
        requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
     };

export default requests