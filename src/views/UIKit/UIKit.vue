<template>
  <div class="ui-kit">
    <h1>Button</h1>
    <BaseButton
      class="ui-kit__regular-button"
    >
      Обычная кнопка
    </BaseButton>
    <BaseButton 
      :loading="true"
      class="ui-kit__regular-button"
    >
      Обычная кнопка
    </BaseButton>
    <BaseButton
      class="ui-kit__small-button"
    >
      Маленькая
    </BaseButton>
    <BaseButton 
      :loading="true"
      class="ui-kit__small-button"
    >
      Маленькая
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton/BaseButton.vue'

export default {
  name: 'UIKit',

  components: {
    BaseButton
  }
}
</script>