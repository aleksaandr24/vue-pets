<template>
  <div
    class="notifications"
  >
    <div class="notifications__badge"></div>
    <div
      :class="circleClassName"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderNotifications',

  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    circleClassName() {
      const classArray = ['notifications__circle']
      if (this.dark) {
        classArray.push('notifications__circle_dark')
      }
      return classArray.join(' ') 
    }
  }
}
</script>