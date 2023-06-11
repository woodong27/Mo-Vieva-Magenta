<template>
<div>
  <div class="album py-5 bg-light">
    <div v-if="$store.state.tmdb.SearchResult.length === 0">
      <h1> 이런 영화는 어떄요?</h1>
      <masonry :cols="{default: 5, 1000: 4, 700: 3, 400:2}" :gutter="{default: '30px', 700: '15px'}" class="card-style">
       <div v-for="(movie, index) in $store.state.tmdb.SearchResult" :key="index" class="col">
          <router-link class="card shadow-sm nav-link" :to="`/movie/id/${movie.id}`">
            <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" alt="">
          </router-link>
        </div>
      </masonry>
    </div>
    <div v-else class="container">
      <h1>"{{this.$route.query.q}}" 검색결과에오</h1>
       <masonry :cols="{default: 5, 1000: 4, 700: 3, 400:2}" :gutter="{default: '30px', 700: '15px'}" class="card-style">
       <div v-for="(movie, index) in $store.state.tmdb.SearchResult" :key="index" class="col">
          <router-link class="card shadow-sm nav-link" :to="`/movie/id/${movie.id}`">
            <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" alt="">
          </router-link>
        </div>
      </masonry>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: "SearchView",
  data(){
    return {
      recommend: []
    }
  },
  methods: {
    async TMDB_SearchMovies(){
      await this.$store.dispatch("TMDB_SearchMovies", this.$route.query.q)
    },
    async GET_recommend(){
      this.recommend = await this.$store.dispatch("GET_recommend", {page:1, per_page: 40, total:100})
    }
  },
  async created(){
    await this.TMDB_SearchMovies()
    await this.GET_recommend()
  }
}
</script>

<style>

</style>