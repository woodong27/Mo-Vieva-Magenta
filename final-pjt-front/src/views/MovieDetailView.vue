<template>
  <div v-if="movie">

    <div>
      <h5>영화 포스터</h5>
        <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" :alt="movie.title" width="100%">
        <img :src="$store.state.tmdb.ImageUrl + movie.backdrop_path" :alt="movie.title" width="100%">
      <hr>
    </div>
    <div>
      <h5>영화 내용</h5>
      <div>{{movie.overview}}</div>
      <hr>
    </div>
    <div>
      <h5>영화 제목</h5>
        <div>{{movie.title}}</div>
      <hr>
    </div>
    <div>
      <h5>영화 장르</h5>
      <div>
        <div v-for="(genre, index) in movie.genres" :key="index">
          {{genre.genreName}}
        </div>
      </div>
      <hr>
    </div>
    <div>
        <h5>영화 내용</h5>
        <div>{{movie.overview}}</div>
        <hr>
    </div>
    <div>
        <h5>영화 평가</h5>
        <button class="bnt" @click="POST_movie_react('love')">😍 </button> <span>{{movie.love_users.length}} | </span>
        <button class="bnt" @click="POST_movie_react('like')">😊 </button> <span>{{movie.like_users.length}} | </span>
        <button class="bnt" @click="POST_movie_react('hate')">😕 </button> <span>{{movie.hate_users.length}}</span>
        <hr>
    </div>
    <div>
      <div>
        <router-link :to="`/movie/${$route.params.by}/${$route.params.key}/community`">
        {{movie.title}} 관련 게시물 보기</router-link>
      </div>
      <div>
        <router-link :to="`/movie/${$route.params.by}/${$route.params.key}/community/create`">
        {{movie.title}} 관련 게시물 작성</router-link>
      </div>
      <hr>
    </div>
    <div>
      <h5>영화 한 줄 평 작성</h5>
        <form v-if="$store.state.accounts.token" @submit.prevent="POST_movie_comment">
          <input type="text" name="" id="" v-model="new_movie_comment_content">
          <input type="submit" value="작성">
        </form>
        <form v-else @submit.prevent>
          <input type="text" name="" id="" v-model="new_movie_comment_content">
          <input type="submit" value="작성" data-bs-toggle="modal" data-bs-target="#logInModal">
        </form>
      <hr>
    </div>
    <div>
        <h5>영화 한 줄 평</h5>
          <div v-if="movie.moviecomments.length === 0"> 첫 한 줄 평을 남겨주세요!</div>
          <div v-else>
            <div v-for="(moviecomment, index) in movie.moviecomments" :key="index">
              <!-- {{moviecomment}} -->
              <div>{{moviecomment.content}} by {{moviecomment.author.username}} 
                <button @click="POST_movie_comment_react(moviecomment.id, 'upvote')">😊 {{moviecomment.upvoteCnt}}</button> 
                <button @click="POST_movie_comment_react(moviecomment.id, 'downvote')">😕 {{moviecomment.downvoteCnt}}</button>
                <button v-if="moviecomment.author.id === $store.state.accounts.userInfo?.id" @click="DELETE_movie_comment(moviecomment.id)">x</button>
              </div>
            </div>
          </div>
        <hr>
    </div>
    <!-- <div>
        <h5>영화 내용</h5>
        <div>{{movie}}</div>
        <hr>
    </div> -->
  </div>



  <div v-else>
    <h1>없는 영화</h1>
  </div>
</template>

<script>
export default {
  name: "MovieDetailView",
  data(){
    return {
      movie: null,
      new_movie_comment_content: null,
    }
  },
  methods: {
    async GET_movie(){
      const {by, key} = this.$route.params
      this.movie = await this.$store.dispatch("GET_movie", {by, key})
    },
    async POST_movie_react(react){
      const {by, key} = this.$route.params
      await this.$store.dispatch("POST_movie_react", {by, key, react})
      await this.GET_movie()
    },
    async POST_movie_comment(){
      const {by, key} = this.$route.params
      await this.$store.dispatch("POST_movie_comment", {by, key, content: this.new_movie_comment_content})
      await this.GET_movie()
      this.new_movie_comment_content = null
    },
    async POST_movie_comment_react(movieCommentPk, react){
      await this.$store.dispatch("POST_movie_comment_react", {movieCommentPk, react})
      await this.GET_movie()
    },
    async DELETE_movie_comment(movieCommentPk){
      await this.$store.dispatch("DELETE_movie_comment", {movieCommentPk})
      await this.GET_movie()
    },
  },
  async created(){
    await this.GET_movie()
  }

}
</script>

<style>

</style>