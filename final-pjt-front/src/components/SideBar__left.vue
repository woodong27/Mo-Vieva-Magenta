<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasNavbar__left"
    aria-labelledby="offcanvasNavbarLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
        <i class="fa-solid fa-film" style="color:#BB2649"></i> 무 비바 마젠타
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/nowplaying">
            현재 상영작
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="$store.state.accounts.token" class="nav-link" to="/movie/recommend">
            추천 영화
          </router-link>
          <div v-else class="nav-link" data-bs-toggle="modal" data-bs-target="#logInModal">
            추천 영화
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            장르별 영화
          </a>
          <ul class="dropdown-menu">
            <li v-for="(genre, index) in genre_list" :key="index" class="dropdown-item">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="`/movie/list?genreId=${genre.genreId}`"
                >{{ genre.genreName }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
      <!-- <form class="d-flex mt-3" role="search" @submit.prevent="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="q">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar__left',
  data() {
    return {
      genre_list: [],
      q: '',
    };
  },
  methods: {
    async GET_genre_list() {
      this.genre_list = await this.$store.dispatch('GET_genre_list');
    },
    async search() {
      if (this.$route.query?.q === this.q) return;
      const q = this.q;
      await this.$store.dispatch('TMDB_SearchMovies', q);
      this.$router.push({ name: 'search', query: { q } });
    },
  },
  async created() {
    this.GET_genre_list();
  },
};
</script>

<style></style>
