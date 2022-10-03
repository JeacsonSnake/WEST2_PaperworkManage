<template>
  <div id="app">
    <router-view />
    <div v-if="navbarAppear">
      <van-tabbar
        active-color="#ee0a24"
        inactive-color="#000"
        route
      >
        <van-tabbar-item
          replace
          to="/"
          icon="home-o"
        >
          主页
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/personal"
          icon="contact"
        >
          我的
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

  },
  computed: {
    navbarAppear () {
      return this.$store.state.navbarAppear
    }
  }

}
</script>

<style lang="scss">

#app {
  height: 100vh;
}
</style>
