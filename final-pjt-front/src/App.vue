<style>
  html::-webkit-scrollbar {
    display: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #BB2649;
  }
</style>

<template>
  <div id="app">
    <PageControl/>
    <Header/>
    
    <!-- <div class="m-5">s</div> -->
    <div class="bg-light" :style="{height:'56px'}"></div>

    <router-view class="" :key="$route.fullPath"></router-view>
    <log-in-modal-window/>
    <sign-up-modal-window/>

    <div class="bg-light" :style="{height:'56px'}"></div>
  </div>
</template>

<script>



import Header from '@/components/Header.vue'
import PageControl from '@/components/PageControl.vue'
import SideBar__left from '@/components/SideBar__left.vue'
import SideBar__right from '@/components/SideBar__right.vue'
import LogInModalWindow from '@/components/LogInModalWindow.vue'
import SignUpModalWindow from '@/components/SignUpModalWindow.vue'
export default {
  name: 'App',
  components: {
    Header,
    PageControl,
    LogInModalWindow,
    SignUpModalWindow,
    SideBar__left,
    SideBar__right,
  },
  async created() {

    // console.log(await this.$store.dispatch("KOFIC_dailyBoxOfficeList"))
    // console.log(await this.$store.dispatch("KOFIC_movieInfo", 20231592))
    // console.log(await this.$store.dispatch("POST_movie_comment_react", {movieCommentPk: 2, react: "upvote"}))
    // console.log(await this.$store.dispatch("POST_movie_comment_react", {movieCommentPk: 3, react: "downvote"}))
    // console.log(await this.$store.dispatch("DELETE_movie_comment", {movieCommentPk: 2}))
    // console.log(await this.$store.dispatch("GET_movie_comment_list", {by: "id", key: 502356}))
    // console.log(await this.$store.dispatch("POST_movie_react", {by: "id", key: 502356, react: "love"}))
    // console.log(await this.$store.dispatch("GET_movie", {by: "id", key: 502356}))
    // >>>> console.log(await this.$store.dispatch("GET_movie_comment", {movieCommentPk: 2}))
    // console.log(await this.$store.dispatch("GET_movie_list", {page: 1, genre: 80}))
    // console.log("영화 목록", await this.$store.dispatch("GET_movie_list", {page: 1}))
    // >>>> console.log(await this.$store.dispatch("GET_movie", {by: "cd", key: 20231592}))
    // >>>> console.log(await this.$store.dispatch("POST_movie_comment", {by: "cd", key: 20231592, content: "댓글"}))
    // >>>> console.log(await this.$store.dispatch("GET_movie_comment_list", {by: "cd", key: 20231592}))
    
    
    // console.log(await this.$store.dispatch("POST_create", {title: "자유", content: "내용", tag_pk: 1}))
    // console.log(await this.$store.dispatch("POST_create", {title: "자유 영화", content: "내용", tag_pk: 1, by:"id", key:502356}))
    // console.log(await this.$store.dispatch("POST_create", {title: "영화 후기", content: "내용", tag_pk: 2}))
    // console.log(await this.$store.dispatch("POST_create", {title: "영화 후기 영화", content: "내용", tag_pk: 2, by:"id", key:502356}))
    // console.log(await this.$store.dispatch("POST_create", {title: "모임모집", content: "내용", tag_pk: 3,}))
    // console.log(await this.$store.dispatch("POST_create", {title: "모임모집 영화", content: "내용", tag_pk: 3, by:"id", key:502356}))
    // console.log(await this.$store.dispatch("POST_create", {title: "모임후기", content: "내용", tag_pk: 4,}))
    // console.log(await this.$store.dispatch("POST_create", {title: "모임후기 영화", content: "내용", tag_pk: 4, by:"id", key:502356}))
    // console.log(await this.$store.dispatch("POST_notice", {title: "공지", content: "내용"}))
    // console.log(await this.$store.dispatch("POST_article_comment", {articlePk:1, content: "그냥 댓글", isSecret: false}))
    // console.log(await this.$store.dispatch("POST_article_comment", {articlePk:1, content: "비밀 댓글", isSecret: true}))
    // console.log(await this.$store.dispatch("POST_article_react", {articlePk:1, react: "downvote"}))
    // console.log(await this.$store.dispatch("POST_article_react", {articlePk:2, react: "upvote"}))
    // console.log(await this.$store.dispatch("POST_article_comment_react", {articleCommentPk:4, react: "upvote"}))
    // console.log(await this.$store.dispatch("POST_article_comment_react", {articleCommentPk:4, react: "downvote"}))
    // console.log(await this.$store.dispatch("PUT_article", {articlePk:1, title: "자유 수정", content: "내용"}))
    // console.log(await this.$store.dispatch("PUT_article", {articlePk:9, title: "공지 수정", content: "내용"}))
    // console.log(await this.$store.dispatch("PUT_article_comment", {articleCommentPk:1, content: "댓글 수정"}))
    // console.log(await this.$store.dispatch("PUT_article_comment", {articleCommentPk:4, content: "비댓 수정"}))
    // console.log(await this.$store.dispatch("DELETE_article", {articlePk:3}))
    // console.log(await this.$store.dispatch("DELETE_article_comment", {articleCommentPk:3}))
    // console.log(await this.$store.dispatch("GET_article_list"))
    // console.log(await this.$store.dispatch("GET_tag_list", {tag_pk: 3}))
    // >>>> console.log(await this.$store.dispatch("GET_article", {articlePk:1}))
    // console.log(await this.$store.dispatch("GET_movie_article_list", {by:"id", key:502356}))
    // console.log(await this.$store.dispatch("GET_article_comment_list", {articlePk:1}))
    // console.log(await this.$store.dispatch("GET_article_comment", {articleCommentPk:1}))
    // console.log(await this.$store.dispatch("POST_password_change", {new_password1: "12345678", new_password2: "12345678"}))
    // console.log(await this.$store.dispatch("POST_toggle_isAdmin"))
    // console.log(await this.$store.dispatch("POST_user_grade", {grade_pk: 3}))
    // console.log(await this.$store.dispatch("GET_userInfo"))
    console.log("a", await this.$store.dispatch("GET_profile", {user_pk: 1}))
    // >>>> console.log(await this.$store.dispatch("GET_userGenre")) // 28 12 16 35 80
    // console.log(await this.$store.dispatch("POST_userGenre", {like_genres: [12, 16, 28]}))
    // console.log(await this.$store.dispatch("POST_userGenre", {like_genres: [35, 80, 12]}))
    // console.log("추천", await this.$store.dispatch("GET_recommend", {}))
  
  
  }
}
</script>