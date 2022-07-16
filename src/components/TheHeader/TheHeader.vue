<template>
  <header class="header">
    <div class="header__page-name">
      <h2 class="header__page-title">
        {{ pageTitle }}
      </h2>
    </div>
    <div class="header__themes">
      <TheHeaderThemeSwitch
        v-model="currentTheme"
        :elemID="'themeSwitch'"
        :elemChecked="themeSwitchChecked"
        :elemDisabled="false"
      />
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
import BaseAvatar from '@/components/ui/BaseAvatar/BaseAvatar.vue'
import TheHeaderThemeSwitch from '@/components/TheHeaderThemeSwitch/TheHeaderThemeSwitch.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    BaseAvatar,
    TheHeaderThemeSwitch
  },

  props: {
    theme: {
      type: String,
      default: 'light'
    },
    
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
      currentTheme: {}
    }
  },

  computed: {
    ...mapGetters({
      appTheme: 'getAppTheme'
    }),

    themeSwitchChecked() {
      if (this.appTheme === 'light') {
        return true
      }
      return false
    }
  },

  watch: {
    currentTheme(newValue) {
      if (newValue.checked) {
        this.$emit('themeSwitch', 'light')
      } else {
        this.$emit('themeSwitch', 'dark')
      }
    }
  }
}
</script>