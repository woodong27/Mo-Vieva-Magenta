import axios from "axios"

const API_URL = `https://api.themoviedb.org/3`
const api_key = process.env.VUE_APP_TMDB_KEY
const language = "ko"
const region = "KR"

const module = {
  state(){
    return {
      NowPlaying: [],
      ImageUrl: `https://image.tmdb.org/t/p/w500`,
      SearchResult: [],
    }
  },
  mutations: {
    TMDB_NowPlaying(state, payload){
      state.NowPlaying = payload
    },
    TMDB_SearchMovies(state, payload){
      state.SearchResult = payload
    },
  },
  actions: {
    async TMDB_NowPlaying(context){
      const payload = []
      for(let page = 1;; page++){
        const {data} = await axios.get(`${API_URL}/movie/now_playing`, {params:{api_key, page, language, region,}});
        await Promise.all(
          data.results.map(async (movie)=>{
            movie["videos"] = await context.dispatch("TMDB_Videos", movie.id)
          })
        )
        payload.push(...data.results);
        if(page === data.total_pages) break;
      }
      context.commit("TMDB_NowPlaying", payload)
    },

    async TMDB_Videos(context, movie_id){
      const {data} = await axios.get(`${API_URL}/movie/${movie_id}/videos`, {params:{api_key, language}});
      return data.results
    },

    async TMDB_SearchMovie(context, query, realse_date){
      const {data} = await axios.get(`${API_URL}/search/movie`, {params:{api_key, language, region, query}});
      return data.results.find((movie)=>movie.realse_date === realse_date)
    },

    async TMDB_SearchMovies(context, query){
      const { data } = await axios.get(`${API_URL}/search/movie`, { params: { api_key, language, region, query } });
      console.log(data.results)
      context.commit("TMDB_SearchMovies", data.results)
    },
  },
  modules: {
  }
}

export default module