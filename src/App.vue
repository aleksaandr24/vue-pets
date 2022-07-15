<template>
  <TheHeader
    :theme="theme"
    :pageTitle="title"
    @themeSwitch="changeTheme($event)"
  />
  <TheSidebar
    :theme="theme"
  />
  <TheMain>
    <router-view
      :theme="theme"
      @pageTitle="changeTitle($event)"
    />
  </TheMain>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar/TheSidebar.vue'
import TheMain from '@/components/TheMain/TheMain.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheSidebar,
    TheMain
  },

  data() {
    return {
      title: ''
    }
  },

  computed: {
    ...mapGetters({
      theme: 'getAppTheme'
    })
  },

  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
    
    if (this.theme === 'dark') {
      document.body.setAttribute('theme', 'dark')
    }
  },

  methods: {
    ...mapActions([
      'changeAppTheme'
    ]),

    changeTheme(appTheme) {
      this.changeAppTheme(appTheme)
      if (appTheme === 'dark') {
        document.body.setAttribute('theme', 'dark')
      } else {
        document.body.removeAttribute('theme')
      }
    },
    
    changeTitle(pageTitle) {
      this.title = pageTitle
    }
  }
}
</script>