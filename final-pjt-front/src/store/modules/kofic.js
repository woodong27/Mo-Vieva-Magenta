import axios from "axios"

const API_URL = `https://www.kobis.or.kr/kobisopenapi/webservice/rest`
const key = process.env.VUE_APP_KOFIC_KEY
const YESTERDAY = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().split("T")[0].replaceAll("-", "")

const module = {
    state: {
      dailyBoxOfficeList : [],
    },
    getters: {
    },
    mutations: {
      KOFIC_dailyBoxOfficeList(state, payload){
        state.dailyBoxOfficeList = payload
      },
    },
    actions: {
      async KOFIC_dailyBoxOfficeList(context){
        const res = await axios({
          method: "GET",
          url: `${API_URL}/boxoffice/searchDailyBoxOfficeList.json`,
          params: {key, targetDt:YESTERDAY}
        })
        const payload = res.data.boxOfficeResult.dailyBoxOfficeList.map(movie=>movie.movieCd)
        context.commit("KOFIC_dailyBoxOfficeList", payload)
        return payload
      },

      async KOFIC_movieInfo(context, movieCd){
        const res = await axios({
          method: "GET",
          url: `${API_URL}/movie/searchMovieInfo.json`,
          params: {key, movieCd}
        })
        const {movieInfo} = res.data.movieInfoResult
        return movieInfo
      }
    },
  }

export default module
