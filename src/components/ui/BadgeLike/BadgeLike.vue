<template>
  <div
    :class="className"
    @click="addRemoveLike"
  >
  </div>
</template>

<script>
export default {
  name: 'BadgeLike',

  data() {
    return {
      isLiked: false
    }
  },

  computed: {
    className() {
      let classArray = ['badge-like']
      if (this.isLiked) {
        classArray.push('badge-like_liked')
      }
      return classArray.join(' ')
    }
  },

  methods: {
    addRemoveLike() {
      if (!this.isLiked) {
        this.isLiked = true
      } else {
        this.isLiked = false
      }
    }
  }
}
</script>