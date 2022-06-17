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
        v-model="baseInput1"
        :elemClass="'ui-kit__regular-input'"
        :placeholder="'Введите текст'"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_success"
    >
      <BaseInput
        v-model="baseInput2"
        :elemClass="'ui-kit__regular-input ui-kit__regular-input_success'"
        :placeholder="'Введено корректно'"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_danger"
    >
      <BaseInput
        v-model="baseInput3"
        :errorMessage="'Сообщение об ошибке'"
        :placeholder="'Введено с ошибкой'"
        :elemClass="'ui-kit__regular-input ui-kit__regular-input_danger'"
      />
    </FloatLabel>
    <h3 class="ui-kit__section">BaseSelect & FloatLabel fixed</h3>
    <FloatLabel
      class="ui-kit__regular-label"
      :fixed="true"
    >
      <BaseSelect
        v-model="baseSelect1"
        :elemClass="'ui-kit__regular-select'"
        :elemData="selectData"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_success"
      :fixed="true"
    >
      <BaseSelect
        v-model="baseSelect2"
        :elemClass="'ui-kit__regular-select'"
        :elemData="selectData"
      />
    </FloatLabel>
    <FloatLabel
      class="ui-kit__regular-label ui-kit__regular-label_danger"
      :fixed="true"
    >
      <BaseSelect
        v-model="baseSelect3"
        :elemClass="'ui-kit__regular-select'"
        :elemData="selectData"
      />
    </FloatLabel>
    <h3 class="ui-kit__section">BaseSwitch</h3>
    <div class="ui-kit__regular-switch">
      <BaseSwitch
        v-for="(value, index) in switchData"
        v-model="baseSwitch[index]"
        :key="index"
        :elemID="value"
        :elemChecked="index === 0 ? true : false"
        :elemDisabled="index === 2 ? true : false"
      />
      <span>(disabled)</span>
    </div>
    <h3 class="ui-kit__section">BaseRadio</h3>
    <div class="ui-kit__regular-radio">
      <BaseRadio
        v-for="(element, index) in radioData"
        v-model="baseRadio"
        :key="index"
        :elemName="'radio'"
        :elemValue="element"
        :elemLabel="element"
        :elemChecked="index === 0 ? true : false"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue'
import FloatLabel from '@/components/ui/FloatLabel/FloatLabel.vue'
import BaseSelect from '@/components/ui/BaseSelect/BaseSelect.vue'
import BaseSwitch from '@/components/ui/BaseSwitch/BaseSwitch.vue'
import BaseRadio from '@/components/ui/BaseRadio/BaseRadio.vue'

export default {
  name: 'UIKit',

  components: {
    BaseButton,
    BaseInput,
    FloatLabel,
    BaseSelect,
    BaseSwitch,
    BaseRadio
  },

  data() {
    return {
      baseInput1: '',
      baseInput2: '',
      baseInput3: '',
      baseSelect1: '',
      baseSelect2: '',
      baseSelect3: '',
      selectData: [
        'Пункт первый',
        'Пункт второй',
        'Пункт третий'
      ],
      baseSwitch: {
        0: '',
        1: '',
        2: ''
      },
      switchData: [
        'switch1',
        'switch2',
        'switch3'
      ],
      baseRadio: '',
      radioData: [
        'первый',
        'второй',
        'третий'
      ]
    }
  }
}
</script>