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
    <div class="header__icons">
      <TheHeaderNotifications
        :dark="darkTheme"
      />
      <BaseAvatar
        :size="'md'"
      />
    </div>
  </header>
</template>

<script>
import BaseAvatar from '@/components/ui/BaseAvatar/BaseAvatar.vue'
import TheHeaderThemeSwitch from '@/components/TheHeaderThemeSwitch/TheHeaderThemeSwitch.vue'
import TheHeaderNotifications from '@/components/TheHeaderNotifications/TheHeaderNotifications.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    BaseAvatar,
    TheHeaderThemeSwitch,
    TheHeaderNotifications
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

    darkTheme() {
      if (this.theme === 'dark') {
        return true
      }
      return false
    },

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