<template>
  <button
    :class="buttonClassName"
    :disabled="loading"
  >
    <div
      v-if="loading"
      class="lds-dots"
    >
      <div class="lds-dots__dot"></div>
      <div class="lds-dots__dot"></div>
      <div class="lds-dots__dot"></div>
      <div class="lds-dots__dot"></div>
    </div>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    loading: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    elemClass: {
      type: String,
      default: ''
    }
  },

  computed: {
    buttonClassName() {
      const classArray = ['base-button']
      classArray.push(this.elemClass)
      return classArray.join(' ')
    }
  }
}
</script>