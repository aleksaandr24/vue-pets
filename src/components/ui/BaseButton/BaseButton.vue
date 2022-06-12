<template>
  <button
    class="base-button"
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
    }
  }
}
</script>