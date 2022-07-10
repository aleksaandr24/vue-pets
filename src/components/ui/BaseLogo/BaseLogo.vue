<template>
  <div
    :class="className"
  >
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',

  props: {
    size: {
      type: String,
      default: 'sm'
    },

    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    className() {
      const classArray = []
      if (this.dark) {
        classArray.push('base-logo-dark')
        switch(this.size) {
          case 'md':
            classArray.push('base-logo-dark_md')
            break
          case 'lg':
            classArray.push('base-logo-dark_lg')
            break
        }
      } else {
        classArray.push('base-logo')
        switch(this.size) {
          case 'md':
            classArray.push('base-logo_md')
            break
          case 'lg':
            classArray.push('base-logo_lg')
            break
        }
      }
      return classArray.join(' ')
    }
  }
}
</script>