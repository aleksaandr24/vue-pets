<template>
  <TheHeader
    :screenWidth="screenWidth"
    :theme="theme"
    :pageTitle="title"
    @themeSwitch="$emit('themeSwitch', $event)"
  />
  <TheSidebar
    :theme="theme"
  />
  <TheMain
    @pageTitle="changeTitle($event)"
  >
    <slot/>
  </TheMain>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar/TheSidebar.vue'
import TheMain from '@/components/TheMain/TheMain.vue'

export default {
  name: 'DefaultLayout',

  components: {
    TheHeader,
    TheSidebar,
    TheMain
  },

  props: {
    screenWidth: {
      type: Number
    },
    
    theme: {
      type: String
    }
  },

  emits: [
    'themeSwitch'
  ],

  data() {
    return {
      title: ''
    }
  },

  methods: {
    changeTitle(pageTitle) {
      this.title = pageTitle
    }
  }
}
</script>