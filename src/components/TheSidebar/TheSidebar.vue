<template>
  <aside 
    :class="sidebarClassName"
  >
    <div class="sidebar__mobile-menu">
      <button type="button" class="sidebar__menu-button"></button>
    </div>
    <div class="sidebar__logo">
      <router-link
        to="/"
      >
        <BaseLogo
          :size="'md'"
          :dark="darkTheme"
        />
      </router-link>
    </div>
    <nav class="sidebar__menu">
      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="/">
            <img
              v-if="!darkTheme"
              class=""
              src="@/assets/images/menu-home.svg"
              alt="HOME"
            >
            <img
              v-else
              class=""
              src="@/assets/images/menu-home-dark.svg"
              alt="HOME"
            >
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">
            <img
              v-if="!darkTheme"
              class=""
              src="@/assets/images/menu-pets.svg"
              alt="PETS"
            >
            <img
              v-else
              class=""
              src="@/assets/images/menu-pets-dark.svg"
              alt="PETS"
            >
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">
            <img
              v-if="!darkTheme"
              class=""
              src="@/assets/images/menu-blog.svg"
              alt="BLOG"
            >
            <img
              v-else
              class=""
              src="@/assets/images/menu-blog-dark.svg"
              alt="BLOG"
            >
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">
            <img
              v-if="!darkTheme"
              class=""
              src="@/assets/images/menu-chat.svg"
              alt="CHAT"
            >
            <img
              v-else
              class=""
              src="@/assets/images/menu-chat-dark.svg"
              alt="CHAT"
            >
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">
            <img
              v-if="!darkTheme"
              class=""
              src="@/assets/images/menu-profile.svg"
              alt="PROF"
            >
            <img
              v-else
              class=""
              src="@/assets/images/menu-profile-dark.svg"
              alt="PROF"
            >
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="sidebar__logout">
      <router-link to="/">
        <img
          v-if="!darkTheme"
          class=""
          src="@/assets/images/logout.svg"
          alt="PROF"
        >
        <img
          v-else
          class=""
          src="@/assets/images/logout-dark.svg"
          alt="PROF"
        >
      </router-link>
    </div>
  </aside>
</template>

<script>
import BaseLogo from '@/components/ui/BaseLogo/BaseLogo.vue'

export default {
  name: 'TheSidebar',

  components: {
    BaseLogo
  },

  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    darkTheme() {
      if (this.theme === 'dark') {
        return true
      }
      return false
    },

    sidebarClassName() {
      const classArray = ['sidebar']
      if (this.darkTheme) {
        classArray.push('sidebar_dark')
      }
      return classArray.join(' ')
    }
  }
}
</script>