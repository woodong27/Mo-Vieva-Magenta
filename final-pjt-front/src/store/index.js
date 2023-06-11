import Vue from 'vue'
import Vuex from 'vuex'
import VueMasonry from 'vue-masonry-css'

import accounts from './modules/accounts'
import movie from './modules/movie'
import community from './modules/community'
import tmdb from './modules/tmdb'
import kofic from './modules/kofic'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
Vue.use(VueMasonry);

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    accounts,
    movie,
    community,
    tmdb,
    kofic,
  }
})
