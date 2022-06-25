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
      const lastTwoNum = this.likes % 100
      let likesText = 'лайков'
      if (lastTwoNum % 10 === 1) {
        likesText = 'лайк'
      }
      if (lastTwoNum % 10 >= 2 && lastTwoNum % 10 <= 4) {
        likesText = 'лайка'
      }
      if (lastTwoNum >= 11 && lastTwoNum <= 14) {
        likesText = 'лайков'
      }
      return this.likes + ' ' + likesText
    }
  }
}
</script>