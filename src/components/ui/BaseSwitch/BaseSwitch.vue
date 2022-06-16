<template>
  <input
    :disabled="!on"
    :id="elemID"
    type="checkbox"
    class="base-switch"
  />
  <label
    :for="elemID"
    class="base-switch__label"
  >
  </label>
</template>

<script>
export default {
  name: 'BaseSwitch',

  props: {
    elemID: {
      type: String,
      required: true
    },

    on: {
      type: Boolean,
      default: true
    }
  }
}
</script>