import Vue from 'vue'
import VueRouter from 'vue-router'
import NowPlayingView from '../views/NowPlayingView.vue'
import MovieListView from '../views/MovieListView.vue'
import SearchView from '../views/SearchView.vue'
import CreateArticleView from '../views/CreateArticleView.vue'
import CommunityView from  '../views/CommunityView.vue'
import ArticleDetailView from  '../views/ArticleDetailView.vue'
import MovieDetailView from  '../views/MovieDetailView.vue'
import MovieRecommendView from  '../views/MovieRecommendView.vue'
import UserProfileView from  '../views/UserProfileView.vue'
import NotFound from  '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    component: NowPlayingView
  },
  {
    path: '/user/:user_pk',
    name: 'userProfile',
    component: UserProfileView
  },
  {
    path: '/nowplaying',
    name: 'nowplaying',
    component: NowPlayingView
  },
  {
    path: '/movie/list',
    name: 'movieList',
    component: MovieListView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/community/create',
    name: 'createArticle',
    component: CreateArticleView
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/community/:articlePk',
    name: 'articleDetail',
    component: ArticleDetailView
  },
  {
    path: '/movie/:by/:key',
    name: 'movie_datail',
    component: MovieDetailView
  },
  {
    path: '/movie/:by/:key/community/create',
    name: 'movieMovieArticleView',
    component: CreateArticleView
  },  
  {
    path: '/movie/:by/:key/community',
    name: 'movieCommunityView',
    component: CommunityView
  },
  {
    path: '/movie/recommend',
    name: 'movieRecommendView',
    component: MovieRecommendView
  },
  {
    path: '*',
    component: NotFound
  },
  // {
  //   path: '/movie/list',
  //   name: 'movie_list',
  //   component: MovieListView
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
