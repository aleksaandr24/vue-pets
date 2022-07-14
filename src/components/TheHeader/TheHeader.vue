<template>
  <header class="header">
    <div class="header__page-name">
      <h2 class="header__page-title">
        {{ pageTitle }}
      </h2>
    </div>
    <div class="header__themes">
      <BaseSwitch
        v-model="lightTheme"
        :elemID="'themeSwitch'"
        :elemChecked="true"
        :elemDisabled="false"
      >
        Dark/Light
      </BaseSwitch>
    </div>
    <div class="header__notifications">
      <div>
        NTF
      </div>
      <BaseAvatar
        :size="'md'"
      />
    </div>
  </header>
</template>

<script>
import BaseSwitch from '@/components/ui/BaseSwitch/BaseSwitch.vue'
import BaseAvatar from '@/components/ui/BaseAvatar/BaseAvatar.vue'

export default {
  name: 'TheHeader',

  components: {
    BaseSwitch,
    BaseAvatar
  },

  props: {
    pageTitle: {
      type: String,
      default: 'Page Title'
    }
  },

  emits: [
    'themeSwitch'
  ],

  data() {
    return {
      lightTheme: {id: 'themeSwitch', checked: true}
    }
  },

  watch: {
    lightTheme(newValue) {
      if (newValue.checked) {
        this.$emit('themeSwitch', 'light')
      } else {
        this.$emit('themeSwitch', 'dark')
      }
    }
  }
}
</script>