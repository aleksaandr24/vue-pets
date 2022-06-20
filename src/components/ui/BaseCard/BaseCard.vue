<template>
  <div
    :class="className"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    elemClass: {
      type: String,
      default: ''
    },

    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    className() {
      let classArray = ['base-card']
      if (this.dark) {
        classArray.push('base-card_dark')
      }
      classArray.push(this.elemClass)
      return classArray.join(' ') 
    }
  }
}
</script>