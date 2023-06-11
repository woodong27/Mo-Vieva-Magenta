<template>
  <div v-if="article">
    <div @click="DELETE_article">
      <button>X</button>
    </div>
    <div>
      <h5>제목</h5>
      <div>{{article.title}}</div>
      <hr>
    </div>
    <div>
      <h5>내용</h5>
      <p>{{article.content}}</p>
      <hr>
    </div>
    <div>
      <h5>좋아 싫어</h5>
      <div> <button @click="POST_article_react('upvote')">😊 {{article.upvote_users.length}}</button></div>
      <div> <button @click="POST_article_react('downvote')">😕 {{article.downvote_users.length}}</button></div>
      <hr>
    </div>
    <div v-if="movie">
      <h5>관련 영화</h5>
        <div>{{movie.title}}</div>
        <!-- <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" :alt="movie.title" width="100%"> -->
      <hr>
    </div>
    <div>
      <h5>댓글 작성</h5>
      <form @submit.prevent="POST_article_comment">
        <label for="new-comment-isSecret">비밀설정</label>
        <input type="checkbox" name="" id="new-comment-isSecret" v-model="new_comment_isSecret">
        <input type="text" name="" id="new-comment-content" v-model="new_comment_content">
        <input type="submit" value="작성">
      </form>
    </div>
    <hr>
      <h5>댓글목록</h5>
      <div v-if="article.articlecomments.length === 0">
        댓글 없다
      </div>
      <div v-else>
        <div v-for="(articlecomment, index) in article.articlecomments" :key="index">
          <div>
            <div><span>댓글 작성자 : </span><span>{{articlecomment.author.username}}</span></div>
            <div><span>댓글 내용 : </span><span>{{articlecomment.content}}</span></div>
            <div>
              <div> <button @click="POST_article_comment_react(articlecomment.id, 'upvote')">😊 {{articlecomment.upvote_users.length}}</button></div>
              <div> <button @click="POST_article_comment_react(articlecomment.id, 'downvote')">😕 {{articlecomment.downvote_users.length}}</button></div>
              <div> <button @click="DELETE_article_comment(articlecomment.id)"> 삭제 </button></div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    <div>

    </div>
  </div>



  <div v-else>
    <h1>없는 글</h1>
  </div>
</template>

<script>
export default {
  name: "CreateArticleView",
  data(){
    return {
      article: null,
      new_comment_content: null,
      new_comment_isSecret: false,
      movie: null,
    }
  },
  methods: {

    async GET_article(){
      this.article = await this.$store.dispatch("GET_article", {articlePk: this.$route.params.articlePk})
    },
    async GET_movie(){
      const {movie} = this.article
      this.movie = await this.$store.dispatch("GET_movie", {by:"pk", key:movie})
    },
    async POST_article_react(react){
      await this.$store.dispatch("POST_article_react", {articlePk: this.$route.params.articlePk, react})
      await this.GET_article()
    },
    async POST_article_comment(){
      await this.$store.dispatch("POST_article_comment", {articlePk:this.$route.params.articlePk, content: this.new_comment_content, isSecret: this.new_comment_isSecret})
      await this.GET_article()
    },
    async POST_article_comment_react(articleCommentPk, react){
        await this.$store.dispatch("POST_article_comment_react", {articleCommentPk, react})
      await this.GET_article()
    },
    async DELETE_article_comment(articleCommentPk){
      await this.$store.dispatch("DELETE_article_comment", {articleCommentPk})
      await this.GET_article()
    },
    async DELETE_article(){
      await this.$store.dispatch("DELETE_article", {articlePk: this.article.id})
      this.$router.push({ name: 'community'})
    },
    
  },
  async created(){
    await this.GET_article()
    await this.GET_movie()
  }

}
</script>

<style>

</style>