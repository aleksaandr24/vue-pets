<template>
  <input
    :disabled="elemDisabled"
    :id="elemID"
    :checked="elemChecked"
    @change="$emit('update:modelValue', { id: $event.target.id, checked: $event.target.checked} )"
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

    elemDisabled: {
      type: Boolean,
      default: true
    },

    elemChecked: {
      type: Boolean,
      default: false
    }
  },

  emits: [
    'update:modelValue'
  ],

  
}
</script>