<style>

</style>

<template>
  <nav class="navbar bg-light fixed-bottom">
    <div class="container-fluid d-flex justify-content-around">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-ticket"></i>
        <!-- Now -->
      </router-link>
      <router-link class="navbar-brand" to="/movie/list">
        <i class="fa-solid fa-clapperboard"></i>
        <!-- Movies -->
      </router-link>
      <router-link v-if="$store.state.accounts.token" class="navbar-brand" to="/community/create">
          <div><i class="fa-solid fa-plus"></i></div>
          <!-- <small>Create</small> -->
      </router-link>
      <div v-else class="navbar-brand" data-bs-toggle="modal" data-bs-target="#logInModal">
          <div><i class="fa-solid fa-plus"></i></div>
          <!-- <small>Create</small> -->
      </div>
      <router-link class="navbar-brand" to="/community">
        <i class="fa-solid fa-comment-dots"></i>
        <!-- Community -->
      </router-link>
      <a class="navbar-brand" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar__right" aria-controls="offcanvasNavbar" href="#">
        <i class="fa-solid fa-user"></i>
        <!-- Profile -->
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PageControl",
  data(){
    return {
    }
  },
  methods: {
  },
}
</script>