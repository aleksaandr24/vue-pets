<template>
  <div
    class="badge-counter"
  >
    {{ likesValue }}
  </div>
</template>

<script>
export default {
  name: 'BadgeCounter',

  props: {
    likes: {
      type: Number,
      default: 0
    }
  },

  computed: {
    likesValue() {
      return this.likes + ' ' + 'лайков'
    }
  }
}
</script>