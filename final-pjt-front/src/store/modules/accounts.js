import axios from 'axios'
import router from '@/router'

const API_URL = 'https://ssafy-final.herokuapp.com'
// const API_URL = 'http://127.0.0.1:8000'

const module = {
  state: {
    token: null,
    userInfo: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    // signup & login -> 완료하면 토큰 발급
    SAVE_TOKEN(state, token) {
      state.token = `Token ${token}`
      // router.push({name : 'home'}) // store/index.js $router 접근 불가 -> import를 해야함
    },
    DELETE_TOKEN(state, token) {
      state.token = null
      state.userInfo = null
      // router.push({name : 'home'}) // store/index.js $router 접근 불가 -> import를 해야함
    },
    GET_userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {


    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
          method: 'post',
          url: `${API_URL}/accounts/signup/`,
          data: {
          username, password1, password2
          }
      })
      .then((res) => {
        context.commit('SAVE_TOKEN', res.data.key)
        document.querySelector("#signup-btn-close").dispatchEvent(new Event("click"))
      })
      .then((res) => {
        context.dispatch('GET_userInfo')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then((res) => {
        context.commit('SAVE_TOKEN', res.data.key)
        document.querySelector("#login-btn-close").dispatchEvent(new Event("click"))
      })
      .then((res) => {
        context.dispatch('GET_userInfo')
      })
      .catch((err) => console.log(err))
    },
    logout(context, paylaod) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/logout/`,
        headers: {Authorization: context.state.token}
      })
      .then((res) => {
        context.commit('DELETE_TOKEN')
      })
      .catch((err) => console.log(err))
    },

    async POST_password_change(context, {new_password1, new_password2}){
      const req_data = {new_password1, new_password2}
      await axios({
        method: "POST",
        url: `${API_URL}/accounts/password/change/`,
        headers: {Authorization: context.state.token},
        data: req_data,
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    async POST_toggle_isAdmin(context){
      await axios({
        method: "POST",
        url: `${API_URL}/accounts/admin/`,
        headers: {Authorization: context.state.token},
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    async POST_user_grade(context, {grade_pk}){
      await axios({
        method: "POST",
        url: `${API_URL}/accounts/grade/${grade_pk}/`,
        headers: {Authorization: context.state.token},
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    async POST_userGenre(context, {like_genres}){
      const req_data = {like_genres}
      await axios({
        method: "POST",
        url: `${API_URL}/accounts/genre/`,
        headers: {Authorization: context.state.token},
        data: req_data
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    async GET_userInfo(context){
      await axios({
        method: "GET",
        url: `${API_URL}/accounts/userinfo/`,
        headers: {Authorization: context.state.token},
      })
      .then((res)=>{
        console.log(res)
        const { data } = res
        context.commit("GET_userInfo", data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    async GET_profile(context, {user_pk}){
      const {data} = await axios({
        method: "GET",
        url: `${API_URL}/accounts/${user_pk}/`,
        headers: {Authorization: context.state.token},
      })
      return data
    },
    async POST_image(context, {profile_image}){
      const {data} = await axios({
        method: "POST",
        url: `${API_URL}/accounts/image/`,
        headers: {Authorization: context.state.token},
        data: {profile_image}
      })
      return data
    },
    async GET_userGenre(context){
      await axios({
        method: "GET",
        url: `${API_URL}/accounts/genre/`,
        headers: {Authorization: context.state.token},
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
}

export default module
