<style>
.fa-thumbs-up.fa-solid{
  color:#BB2649
}
.fa-thumbs-down.fa-solid{
  color:#1EBEB8
  /* color:#5BBAB5 */
}
</style>

<template>
  <div class="album py-5 bg-light" v-if="article_list">
    <div class="container">
       <masonry :cols="{default: 3, 1000: 2, 700: 1}" :gutter="{default: '30px', 700: '15px'}" class="card-style">
        <div v-for="(article, index) in article_list" :key="index" class="col">
              <div class="card shadow-sm">
                <!-- <div v-if="article.movie" class="card-header">

                </div> -->
                <div class="card-body">
                  <router-link :to="`/community/${article.id}`" class="nav-link">
                    <h5><b>{{article.title}}</b></h5>
                    <p class="card-text">{{article.content}} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <!-- <p class="card-text">{{article.content}}</p> -->
                    <!-- <p class="card-text">{{article.content}}</p> -->
                  </router-link>
                  <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div class="btn-group">
                      <!-- <div> <i class="fa-regular fa-thumbs-up" @click="POST_article_react(article.id, 'upvote')"></i> -->
                      <div> 
                        <i v-if="$store.state.accounts.token" :class="`fa-thumbs-up ${article.upvote_users.includes($store.state.accounts.userInfo?.id)?'fa-solid':'fa-regular'}`" @click="POST_article_react(article.id, 'upvote')"></i>
                        <i v-else :class="`fa-thumbs-up fa-regular`"  data-bs-toggle="modal" data-bs-target="#logInModal"></i>
                        &nbsp;|&nbsp; 
                        <span>{{article.upvote_users.length}}</span>
                        &nbsp;|&nbsp;
                        <i v-if="$store.state.accounts.token" :class="`fa-thumbs-down ${article.downvote_users.includes($store.state.accounts.userInfo?.id)?'fa-solid':'fa-regular'}`" @click="POST_article_react(article.id, 'downvote')"></i>
                        <i v-else :class="`fa-thumbs-down fa-regular`"  data-bs-toggle="modal" data-bs-target="#logInModal"></i>
                        &nbsp;&nbsp;&nbsp;
                        <i class="fa-regular fa-message"></i>
                        &nbsp;
                        <span>{{article.articlecomments.length}}</span>
                      </div>   
                    </div>
                    <div v-if="article.movie">{{article.movie.title}}</div>
                    <!-- <small class="text-muted">9 mins</small> -->
                    <small class="text-muted">{{article.author.username}}</small>
                  </div>
                </div>
              </div>
            </div>
      </masonry>

    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityView",
  data(){
    return {
        article_list: []
    }
  },
  methods: {
    async GET_article_list(){
      this.article_list = await this.$store.dispatch("GET_article_list")
      console.log(this.article_list)
    },
    async POST_article_react(articlePk, react){
      await this.$store.dispatch("POST_article_react", {articlePk, react})
      if(this.$route.params.by) await this.GET_movie_article_list()
      else await this.GET_article_list()
    },
    async GET_movie_article_list(){
      const {by, key} = this.$route.params
      const req_data = {by, key}
      if(this.$route.query.tag_pk) req_data.tag_pk = this.$route.query.tag_pk
      this.article_list = await this.$store.dispatch("GET_movie_article_list", req_data)
    },
  },
  async created(){
    if(this.$route.params.by) await this.GET_movie_article_list()
    else await this.GET_article_list()
  }
}
</script>

