<template>
  <div class="ui-kit">
    <h3 class="ui-kit__section">BaseButton</h3>
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
    <h3 class="ui-kit__section">BaseInput</h3>
    <BaseInput
      class="ui-kit__regular-input"
      value="Some text..."
    />
    <BaseInput
      class="ui-kit__regular-input ui-kit__regular-input_danger"
      value="Some text..."
    />
    <BaseInput
      class="ui-kit__regular-input ui-kit__regular-input_success"
      value="Some text..."
    />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue'

export default {
  name: 'UIKit',

  components: {
    BaseButton,
    BaseInput
  }
}
</script>