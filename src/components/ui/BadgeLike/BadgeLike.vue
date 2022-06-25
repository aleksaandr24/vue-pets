<template>
  <div
    :class="className"
    @click="makeLike"
  >
  </div>
</template>

<script>
export default {
  name: 'BadgeLike',

  props: {
    elemClass: {
      type: String,
      default: ''
    }
  },

  emits: [
    'eventLike'
  ],

  data() {
    return {
      isLiked: false
    }
  },

  computed: {
    className() {
      const classArray = ['badge-like']
      classArray.push(this.elemClass)
      if (this.isLiked) {
        classArray.push('badge-like_liked')
      }
      return classArray.join(' ')
    }
  },

  methods: {
    makeLike() {
      if (!this.isLiked) {
        this.isLiked = true
        this.$emit('eventLike')
      }
    }
  }
}
</script>