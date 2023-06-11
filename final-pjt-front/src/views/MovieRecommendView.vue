<template>
  <div>
    <div class="album py-5 bg-light">
      <div v-if="$store.state.movie.recommend.length === 0">
      영화가 없소요
      </div>
      <div v-else class="container">
       <masonry :cols="{default: 4, 1000: 3, 700: 2,}" :gutter="{default: '30px', 700: '15px'}" class="card-style">
          <div v-for="(movie, index) in $store.state.movie.recommend" :key="index" class="col">
            <router-link class="card shadow-sm nav-link" :to="`/movie/id/${movie.movieId}`">
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
  name: "MovieRecommendView",
  components:{
  },
    data(){
      return {
        movie_list: [],
      }
    },
    // methods: {
    //     async GET_movie_list(){
    //       const req_data = {}
    //     //   if(this.$route.query.page) req_data.page = this.$route.query.page
    //     //   if(this.$route.query.per_page) req_data.per_page = this.$route.query.per_page
    //     //   if(this.$route.query.genreId) req_data.genreId = this.$route.query.genreId
    //     //   console.log(req_data)
    //       this.movie_list = await this.$store.dispatch("GET_recommend", req_data)
    //     },
    // },
    // async mounted(){
    //   this.GET_movie_list()
    // }
  }
</script>

<style>

</style>