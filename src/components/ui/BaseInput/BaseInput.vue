<template>
  <input
    type="text"
    class="base-input"
    :class="elemClass"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <br>
  <span class="base-input__message">
    {{ errorMessage }}
  </span>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    modelValue: {
      type: String
    },

    elemClass: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },
    
    errorMessage: {
      type: String,
      default: ''
    }
  },

  emits: [
    'update:modelValue'
  ]
}
</script>