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
    <h3 class="ui-kit__section">BaseInput & FloatLabel</h3>
    <FloatLabel
      class="ui-kit__regular-label"
    >
      <BaseInput
        v-model.trim="baseInput1"
        :elemClass="'ui-kit__regular-input'"
        :placeholder="'Введите текст'"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_success"
    >
      <BaseInput
        v-model.trim="baseInput2"
        :elemClass="'ui-kit__regular-input ui-kit__regular-input_success'"
        :placeholder="'Введено корректно'"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_danger"
    >
      <BaseInput
        v-model.trim="baseInput3"
        :errorMessage="'Сообщение об ошибке'"
        :placeholder="'Введено с ошибкой'"
        :elemClass="'ui-kit__regular-input ui-kit__regular-input_danger'"
      />
    </FloatLabel>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue'
import FloatLabel from '@/components/ui/FloatLabel/FloatLabel.vue'

export default {
  name: 'UIKit',

  components: {
    BaseButton,
    BaseInput,
    FloatLabel
  },

  data() {
    return {
      baseInput1: '',
      baseInput2: '',
      baseInput3: ''
    }
  }
}
</script>