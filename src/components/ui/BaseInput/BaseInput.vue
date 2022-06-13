<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-input"
    type="text"
  />
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    modelValue: {
      type: String
    }
  },

  emits: [
    'update:modelValue'
  ]
}
</script>