<template>
  <div
    :class="selectClassName"
    @click="selectOpen = !selectOpen"
    @blur="selectOpen = false"
    tabindex="0"
    >
    <div class="base-select__selected-label">
      <slot/>
    </div>
    <div
      :class="selectedClassName"
    >
      {{ selectedOption }}
    </div>
    <ul
      :class="optionsClassName"
    >
      <li
        v-for="(option, index) in elemData"
        :key="index"
        :class="option.disabled
                ? 'base-select__option base-select__option_disabled'
                : 'base-select__option'"
        @click="makeSelected(option.name)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    modelValue: {
      type: String
    },

    elemData: {
      type: Array,
      default: []
    },

    dark: {
      type: Boolean,
      default: false
    },

    danger: {
      type: Boolean,
      default: false
    }
  },

  emits: [
    'update:modelValue'
  ],

  data() {
    return {
      selectOpen: false,
      selectedValue: null
    }
  },

  computed: {
    selectClassName() {
      const classArray = ['base-select']
      if (this.dark) {
        classArray.push('base-select_dark')
      }
      if (this.danger) {
        classArray.push('base-select_danger')
      }
      return classArray.join(' ')
    },

    selectedClassName() {
      const classArray = ['base-select__selected-option']
      if (this.dark) {
        classArray.push('base-select__selected-option_dark')
      }
      if (this.selectOpen) {
        classArray.push('base-select__selected-option_open')
      }
      return classArray.join(' ')
    },

    optionsClassName() {
      const classArray = ['base-select__options']
      if (this.selectOpen) {
        classArray.push('base-select__options_open')
      }
      return classArray.join(' ')
    },

    selectedOption() {
      if (this.elemData.length === 0) {
        return 'Нет элементов'
      }
      if (this.selectedValue === null) {
        return 'Выбрать'
      }
      return this.selectedValue
    }
  },

  methods: {
    makeSelected(optionValue) {
      this.selectOpen = false
      this.selectedValue = optionValue
      this.$emit('update:modelValue', optionValue)
    }
  }
}
</script>