<template>
  <select
    :class="className"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      disabled
      selected
      value=""
    >
      {{ elemCaption }}
    </option>
    <option
      v-for="(optionText, index) in elemData"
      :key="index"
      class="base-select__option"
    >
      {{ optionText }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    modelValue: {
      type: String
    },

    dark: {
      type: Boolean,
      default: false
    },

    elemClass: {
      type: String,
      default: ''
    },

    elemCaption: {
      type: String,
      default: 'Выберите пункты'
    },

    elemData: {
      type: Array,
      default: []
    }
  },

  emits: [
    'update:modelValue'
  ],

  computed: {
    className() {
      let classArray = ['base-select']
      if (this.dark) {
        classArray.push('base-select_dark')
      }
      classArray.push(this.elemClass)
      return classArray.join(' ')
    }
  }
}
</script>