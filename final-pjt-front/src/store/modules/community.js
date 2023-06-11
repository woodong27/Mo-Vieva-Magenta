import axios from "axios"

const API_URL = 'https://ssafy-final.herokuapp.com'
// const API_URL = 'http://127.0.0.1:8000'

const module = {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
      async POST_create(context, {title, content, tag_pk, by, key}){
        const req_data = {title, content, tag_pk}
        if(by){
          req_data.by = by
          req_data.key = key
        }
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/community/create/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: req_data,
        })
        
        console.log('요청', req_data)
        console.log('응답', data)
        return data
      },
      async POST_notice(context, {title, content}){
        const req_data = {title, content}
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/community/notice/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: req_data,
        })
        return data
      },
      async POST_article_comment(context, {articlePk, content, isSecret}){
        const req_data = {content}
        if(isSecret) req_data.isSecret = isSecret
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/community/${articlePk}/comment/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: req_data,
        })
        return data
      },
      async POST_article_react(context, {articlePk, react}){
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/community/${articlePk}/${react}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },
      
      async POST_article_comment_react(context, {articleCommentPk, react}){
        const {data} = await axios({
          method: "POST",
          url: `${API_URL}/community/comment/${articleCommentPk}/${react}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async PUT_article(context, {articlePk, title, content}){
        const req_data = {title, content}
        const {data} = await axios({
          method: "PUT",
          url: `${API_URL}/community/${articlePk}/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: req_data,
        })
        return data
      },
      
      async PUT_article_comment(context, {articleCommentPk, content}){
        const req_data = {content}
        const {data} = await axios({
          method: "PUT",
          url: `${API_URL}/community/comment/${articleCommentPk}/`,
          headers: {Authorization: context.rootState.accounts.token},
          data: req_data,
        })
        return data
      },

      async DELETE_article(context, {articlePk}){
        const {data} = await axios({
          method: "DELETE",
          url: `${API_URL}/community/${articlePk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },
      
      async DELETE_article_comment(context, {articleCommentPk}){
        const {data} = await axios({
          method: "DELETE",
          url: `${API_URL}/community/comment/${articleCommentPk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async GET_article_list(context){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/list/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async GET_tag_list(context, {tag_pk}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/tag/${tag_pk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      async GET_article(context, {articlePk}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/${articlePk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

      

      async GET_movie_article_list(context, {by, key, tag_pk}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/${by}/${key}/article/`,
          headers: {Authorization: context.rootState.accounts.token},
          params: {tag_pk}
        })
        return data
      },

      async GET_article_comment_list(context, {articlePk}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/${articlePk}/comment/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },
      
      async GET_article_comment(context, {articleCommentPk}){
        const {data} = await axios({
          method: "GET",
          url: `${API_URL}/community/comment/${articleCommentPk}/`,
          headers: {Authorization: context.rootState.accounts.token},
        })
        return data
      },

    },
  }

export default module
