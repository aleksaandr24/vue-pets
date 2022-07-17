<template>
  <div
    :class="className"
  >
    <slot/>
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
      const classArray = ['badge-label']
      classArray.push(this.elemClass)
      return classArray.join(' ')
    }
  }
}
</script>