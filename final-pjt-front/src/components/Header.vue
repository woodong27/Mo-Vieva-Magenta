<style>
 .btn-outline-success{
  --bs-btn-color:#BB2649;
  --bs-btn-border-color:#BB2649;
  --bs-btn-hover-bg:#BB2649;
  --bs-btn-hover-border-color:#BB2649;
  --bs-btn-active-bg:#BB2649;
  --bs-btn-active-border-color:#BB2649;
  --bs-btn-disabled-color:#BB2649;
  --bs-btn-disabled-border-color:#BB2649;
 }
</style>

<template>
  <nav class="navbar bg-light fixed-top">
    <div class="container-fluid">
      <SideBar__left/>
      <SideBar__right/>

      <button class="navbar-toggler ms-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar__left" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="navbar-brand" href="#" color="#BB2649">Moviva Magenta</a> -->
      <form class="d-flex" role="search" @submit.prevent="search">
        <!-- <button class="btn btn-outline-success me-1" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i> 
        </button> -->
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="q">
      </form>
      <img v-if="$store.state.accounts.token" src="https://github.com/mdo.png" alt="mdo" width="40" height="40" class="rounded-circle me-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar__right" aria-controls="offcanvasNavbar">
      <i v-else class="fa-solid fa-circle-user fa-2xl rounded-circle me-1" width="256" height="256" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar__right" aria-controls="offcanvasNavbar"></i>
    </div>
  </nav>
</template>

<script>
import SideBar__left from './SideBar__left.vue'
import SideBar__right from './SideBar__right.vue'
export default {
  name: "Header",
  components: {
    SideBar__left,
    SideBar__right,
  },
  data(){
    return {
      genre_list: [],
      q: '',
    }
  },
  methods: {
    async GET_genre_list(){
      this.genre_list = await this.$store.dispatch("GET_genre_list")
    },
    async search(){
      if(!this.q || this.$route.query?.q === this.q) return
      const q = this.q
      await this.$store.dispatch("TMDB_SearchMovies", q)
      this.$router.push({ name: 'search', query: {q} })
    }
  },
  async created(){
    this.GET_genre_list()
  },
}
</script>

<style>

</style>