function scrollTopOnRouteChange() {
    const router = this.$router
    router.beforeEach((to, from, next) => {
      window.scrollTo(0, 0)
      next()
    })
  }
  export default {
    install(app) {
      app.mixin({
        mounted() {
          scrollTopOnRouteChange.call(this)
        }
      })
    }
  }