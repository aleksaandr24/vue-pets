<template>
  <TheHeader
    :pageTitle="title"
    @themeSwitch="changeTheme($event)"
  />
  <TheSidebar

  />
  <TheMain>
    <router-view
      @pageTitle="changeTitle($event)"
    />
  </TheMain>
</template>

<script>
import TheSidebar from '@/components/TheSidebar/TheSidebar.vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheMain from '@/components/TheMain/TheMain.vue'

export default {
  name: 'App',

  data() {
    return {
      title: ''
    }
  },

  components: {
    TheHeader,
    TheSidebar,
    TheMain
  },

  methods: {
    changeTheme(appTheme) {
      this.theme = appTheme
    },
    
    changeTitle(pageTitle) {
      this.title = pageTitle
    }
  }
}
</script>