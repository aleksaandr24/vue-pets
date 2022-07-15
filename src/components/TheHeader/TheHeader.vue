<template>
  <header class="header">
    <div class="header__page-name">
      <h2 class="header__page-title">
        {{ pageTitle }}
      </h2>
    </div>
    <div class="header__themes">
      <BaseSwitch
        v-model="currentTheme"
        :elemID="'themeSwitch'"
        :elemChecked="themeSwitchChecked"
        :elemDisabled="false"
      >
        {{ themeName }}
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
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    BaseSwitch,
    BaseAvatar
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
    },

    themeName() {
      if (this.appTheme === 'light') {
        return 'Light'
      }
      return 'Dark'
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