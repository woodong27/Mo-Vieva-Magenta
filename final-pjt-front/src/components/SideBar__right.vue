<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar__right" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="$store.state.accounts.token" >
        <img src="https://github.com/mdo.png" alt="mdo" width="256" height="256" class="rounded-circle me-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar__right" aria-controls="offcanvasNavbar">
        <hr>
        <div>
          <h5>{{$store.state.accounts.userInfo.username}}</h5>
          <!-- <h5>{{$store.state.accounts.userInfo}}</h5> -->
          <hr>
        </div>
        <div>
          <span>게시물 {{$store.state.accounts.userInfo.articles.length}}</span>
          <span> | </span>
          <span>팔로워 {{$store.state.accounts.userInfo.followers.length}}</span>
          <span> | </span>
          <span>팔로잉 {{$store.state.accounts.userInfo.followings.length}}</span>
          <hr>
        </div>
        <!-- <div>
          <span>{{$store.state.accounts.userInfo}}</span>
          <span></span>
          <hr>
        </div> -->
        <ul  v-if="$store.state.accounts.token" class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link">프로필</a>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="`/user/${$store.state.accounts.userInfo.id}`">프로필</router-link>
          </li> -->
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="logout">로그아웃</a>
          </li>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                  <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>

      </div>
      <div v-else>
        <i class="fa-solid fa-circle-user fa-2xl" width="256" height="256"></i>
        <hr>
        <LogInModalButton/>  
      </div>
    </div>
  </div>
</template>

<script>
import LogInModalButton from '@/components/LogInModalButton.vue'
import SignUpModalButton from '@/components/SignUpModalButton.vue'
export default {
  name: "SideBar__left",
  components: {
    LogInModalButton,
    SignUpModalButton,
  },
  methods:{
    logout(){
      this.$store.dispatch("logout")
    },
  },
}
</script>

<style>

</style>