<template>
  <component
    :is="layout"
    :screenWidth="screenWidth"
    :theme="theme"
    @themeSwitch="changeTheme($event)"
  >
    <router-view
      :theme="theme"
    />
  </component>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  data() {
    return {
      screenWidth: window.innerWidth
    }
  },

  computed: {
    ...mapGetters({
      theme: 'getAppTheme'
    }),

    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  },

  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
    
    window.addEventListener('resize', this.onResize)

    if (this.theme === 'dark') {
      document.body.setAttribute('theme', 'dark')
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    ...mapActions([
      'changeAppTheme'
    ]),

    onResize() {
      this.screenWidth = window.innerWidth
    },

    changeTheme(appTheme) {
      this.changeAppTheme(appTheme)
      if (appTheme === 'dark') {
        document.body.setAttribute('theme', 'dark')
      } else {
        document.body.removeAttribute('theme')
      }
    }
  }
}
</script>