<template>
  <div class="album py-5 bg-light">
    <div class="container">
                <!-- <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                  <div v-for="(movie, index) in $store.state.tmdb.NowPlaying" :key="index" class="col">
                        <router-link class="card shadow-sm nav-link" :to="`/movie/id/${movie.id}`">
                          <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" alt="">
                          
                        </router-link>
                  </div>
                </div> -->
        <masonry :cols="{default: 4, 1000: 3, 700: 2}" :gutter="{default: '30px', 700: '15px'}" class="card-style">
           <div v-for="(movie, index) in $store.state.tmdb.NowPlaying" :key="index" class="col">
              <router-link class="card shadow-sm nav-link" :to="`/movie/id/${movie.id}`">
                <img :src="$store.state.tmdb.ImageUrl + movie.poster_path" alt="">
              </router-link>
          </div>
        </masonry>
    
    
    </div>
  </div>
</template>

<script>
export default {
  name: "NowPlayingView",
  methods: {
    async TMDB_NowPlaying(){
      await this.$store.dispatch("TMDB_NowPlaying")
    }
  },
  async created(){
    await this.TMDB_NowPlaying()
  }
}
</script>

<style>

</style>