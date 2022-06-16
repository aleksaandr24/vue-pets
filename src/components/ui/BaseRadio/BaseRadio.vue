<template>
  <input
    :name="elemName"
    :value="elemValue"
    :id="elemValue"
    :checked="elemChecked"
    @change="$emit('update:modelValue', elemValue)"
    type="radio"
    class="base-radio"
  >
  <label
    class="base-radio-label"
    :for="elemValue"
  >
    {{ elemLabel }}
  </label>
</template>

<script>
export default {
  name: 'BaseRadio',

  props: {
    elemName: {
      type: String,
      default: 'radio'
    },

    elemValue: {
      type: String,
      default: ''
    },

    elemLabel: {
      type: String,
      default: ''
    },

    elemChecked: {
      type: Boolean,
      default: false
    }
  },

  emits: [
    'update:modelValue'
  ]
}
</script>