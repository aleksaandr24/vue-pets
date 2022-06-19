<template>
  <button
    :class="elemClass"
  >
  </button>
</template>

<script>
export default {
  name: 'CarouselControl',
  
  props: {
    prev: {
      type: Boolean,
      default: false
    },

    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    elemClass() {
      let classArray = ['carousel-control']
      if (this.prev) {
        classArray.push('carousel-control_prev')
      }
      if (this.dark) {
        classArray.push('carousel-control_dark')
      }
      return classArray.join(' ')
    }
  }
}
</script>