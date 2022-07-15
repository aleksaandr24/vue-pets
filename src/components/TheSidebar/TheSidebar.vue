<template>
  <aside 
    :class="sidebarClassName"
  >
    <div class="sidebar__logo">
      <router-link
        to="/"
      >
        <BaseLogo
          :size="'md'"
          :dark="darkTheme"
        />
      </router-link>
    </div>
    <nav class="sidebar__menu">
      <div>HOM</div>
      <div>PTS</div>
      <div>BLG</div>
      <div>CHT</div>
      <div>PFL</div>
    </nav>
    <div class="sidebar__logout">EXT</div>
  </aside>
</template>

<script>
import BaseLogo from '@/components/ui/BaseLogo/BaseLogo.vue'

export default {
  name: 'TheSidebar',

  components: {
    BaseLogo
  },

  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    darkTheme() {
      if (this.theme === 'dark') {
        return true
      }
      return false
    },

    sidebarClassName() {
      const classArray = ['sidebar']
      if (this.darkTheme) {
        classArray.push('sidebar_dark')
      }
      return classArray.join(' ')
    }
  }
}
</script>