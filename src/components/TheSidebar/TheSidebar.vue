<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <router-link
        to="/"
      >
        <BaseLogo
          :size="'md'"
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
  }
}
</script>