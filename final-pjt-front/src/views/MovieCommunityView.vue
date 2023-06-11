<template>
  <div class="album py-5 bg-light" v-if="article_list">
    <div v-if="article_list.length===0">아직 글이 없소요</div>
    <div v-else class="container">
      <div class="row row-cols-4 row-cols-sm-5 row-cols-md-6 g-3">
            <div v-for="(article, index) in article_list" :key="index" class="col">
              <div class="card shadow-sm">
                <!-- <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" alt=""> -->
                <div class="card-body">
                  <router-link :to="`/community/${article.id}`" class="nav-link">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">{{article.content}}</p>
                  </router-link>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <!-- <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                      <div> <button @click="POST_article_react(article.id, 'upvote')">b</button> | {{article.upvote_users.length}}</div>
                      <div> <button @click="POST_article_react(article.id, 'downvote')">q</button> | {{article.downvote_users.length}}</div>
                    </div>
                    <!-- <small class="text-muted">9 mins</small> -->
                    <small class="text-muted">{{article.author.username}}</small>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCommunityView",
  data(){
    return {
        article_list: []
    }
  },
  methods: {
    async GET_movie_article_list(){
      const {by, key} = this.$route.params
      const req_data = {by, key}
      if(this.$route.query.tag_pk) req_data.tag_pk = this.$route.query.tag_pk
      this.article_list = await this.$store.dispatch("GET_movie_article_list", req_data)
    },
    async POST_article_react(articlePk, react){
      await this.$store.dispatch("POST_article_react", {articlePk, react})
      await this.GET_movie_article_list()
    },
  },
  async created(){
    await this.GET_movie_article_list()
  }
}
</script>

<style>

</style>