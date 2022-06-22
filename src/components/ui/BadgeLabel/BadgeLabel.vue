<template>
  <div
    :class="className"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BadgeLabel',

  props: {
    elemClass: {
      type: String,
      default: ''
    }
  },

  computed: {
    className() {
      let classArray = ['badge-label']
      classArray.push(this.elemClass)
      return classArray.join(' ')
    }
  }
}
</script>