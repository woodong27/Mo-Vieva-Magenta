import axios from "axios"

const API_URL = 'https://ssafy-final.herokuapp.com'
// const API_URL = 'http://127.0.0.1:8000'

const module = {
    state: {
      recommend:[],
    },
    getters: {
    },
    mutations: {
      GET_recommend(state, payload){
        state.recommend = payload
      }
    },
  actions: {
      async GET_movie(context, {by, key}){
        const res = await axios({
          method: "GET",
          url: `${API_URL}/movie/${by}/${key}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        console.log("ㄳ뭅",res)
        return res.data
      },
      
      async GET_movie_list(context, {page, per_page, genreId}){
        const req_data = {}
        if (page) req_data.page = page 
        if (per_page) req_data.per_page = per_page
        if (genreId) req_data.genreId = genreId
        console.log(req_data)
        
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/movie/list/`,
          headers: {Authorization: context.rootState.accounts.token},
          params: req_data
        })
        return data
      },

      async GET_movie_comment_list(context, {by, key}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/movie/${by}/${key}/comment/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },
      async POST_movie_comment(context, {by, key, content}){
        const res = await axios({
          method: "POST",
          url: `${API_URL}/movie/${by}/${key}/comment/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: {content}
        })
        return res
      },

      // async GET_movie_comment(context, {movieCommentPk}){
      //   const res = await axios({
      //     method: "GET",
      //     url: `${API_URL}/movie/comment/${movieCommentPk}/`,
      //     headers: {Authorization: context.rootState.accounts.token},
      //   })
      //   return res
      // },

      async POST_movie_comment_react(context, {movieCommentPk, react}){
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/movie/comment/${movieCommentPk}/${react}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async DELETE_movie_comment(context, {movieCommentPk}){
        const {data} = await axios({
          method: "DELETE",
          url: `${API_URL}/movie/comment/${movieCommentPk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async POST_movie_react(context, {by, key, react}){
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/movie/${by}/${key}/${react}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },
      async GET_genre_list(context){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/movie/genre/list/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
    },
      async GET_recommend(context, {page, per_page, total}){
        const req_data = {}
        if (page) req_data.page = page 
        if (per_page) req_data.per_page = per_page
        if (total) req_data.total = total
        console.log(req_data)
        
        const res = await axios({
          method: "GET",
          url: `${API_URL}/movie/recommend/`,
          headers: {Authorization: context.rootState.accounts.token},
          params: req_data
        })
        context.commit("GET_recommend", res.data)
        return res.data
      },
      
    },
  }

export default module
