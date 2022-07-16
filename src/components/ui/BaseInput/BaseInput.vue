<template>
  <input
    :class="inputClassName"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
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
  ],

  computed: {
    inputClassName() {
      const classArray = ['base-input']
      classArray.push(this.elemClass)
      return classArray.join(' ')
    }
  }
}
</script>