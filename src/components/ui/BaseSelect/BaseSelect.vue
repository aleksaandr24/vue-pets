<template>
  <div
    :class="selectClassName"
    @click="selectOpen = !selectOpen"
    @blur="selectOpen = false"
    tabindex="0"
    >
    <div class="base-select__selected-label">
      <slot></slot>
    </div>
    <div
      :class="selectedClassName + selectOpen
              ? 'base-select__selected-option_open'
              : ''"
    >
      {{ selectedOption }}
    </div>
    <ul
      class="base-select__options"
      :class="{ 'base-select__options_open': selectOpen }"
      
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

    dark: {
      type: Boolean,
      default: false
    },

    elemClass: {
      type: String,
      default: ''
    },

    elemData: {
      type: Array,
      default: []
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
      let classArray = ['base-select']
      if (this.dark) {
        classArray.push('base-select_dark')
      }
      classArray.push(this.elemClass)
      return classArray.join(' ')
    },

    selectedClassName() {
      let classArray = ['base-select__selected-option']
      if (this.dark) {
        classArray.push('base-select__selected-option-dark')
      }
      classArray.push(this.elemClass)
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