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
        :placeholder="'Введено с ошибкой'"
        :errorMessage="'Сообщение об ошибке'"
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
    <div class="ui-kit__switch">
      <BaseSwitch
        v-for="(value, index) in switchData"
        v-model="baseSwitch[index]"
        :key="index"
        :elemID="value"
        :elemChecked="index === 0 ? true : false"
        :elemDisabled="index === 2 ? true : false"
      >
        {{ value }}
      </BaseSwitch>
    </div>
    <h3 class="ui-kit__section">BaseRadio</h3>
    <div class="ui-kit__radio">
      <BaseRadio
        v-for="(element, index) in radioData"
        v-model="baseRadio"
        :key="index"
        :elemName="'radio'"
        :elemValue="element"
        :elemChecked="index === 0 ? true : false"
      >
        {{ element }}
      </BaseRadio>
    </div>
    <h3 class="ui-kit__section">BaseAvatar</h3>
    <div class="ui-kit__avatar">
      <BaseAvatar
      :size="'xs'"
      :name="'James Parker'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'xs'"
      :name="'Christopher Stewart'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'sm'"
      :name="'David Fisher'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'sm'"
      :name="'Roger Clark'"
      :picture="'https://loremflickr.com/128/128'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'md'"
      :name="'Tony Alexander'"
      :picture="'https://loremflickr.com/128/128'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'md'"
      :name="'Richard Aguilar'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'lg'"
      :name="'Nicholas Russell'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'lg'"
      :name="'Sean Lee'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'xl'"
      :name="'Alvin Ward'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'xl'"
      :name="'Carlos Bishop'"
      :picture="'https://loremflickr.com/128/128'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'xxl'"
      :name="'Phil'"
      :picture="'https://loremflickr.com/128/128'"
      :elemClass="'ui-kit__avatar-item'"
      />
      <BaseAvatar
      :size="'xxl'"
      online
      :elemClass="'ui-kit__avatar-item'"
      />
    </div>
    <h3 class="ui-kit__section">CarouselControl</h3>
    <div class="ui-kit__carousel-control">
      <CarouselControl
        prev
      />
      <CarouselControl
      />
    </div>
    <div class="ui-kit__carousel-control ui-kit__carousel-control_dark">
      <CarouselControl
        prev
        dark
      />
      <CarouselControl
        dark
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
import BaseAvatar from '@/components/ui/BaseAvatar/BaseAvatar.vue'
import CarouselControl from '@/components/ui/CarouselControl/CarouselControl.vue'

export default {
  name: 'UIKit',

  components: {
    BaseButton,
    BaseInput,
    FloatLabel,
    BaseSelect,
    BaseSwitch,
    BaseRadio,
    BaseAvatar,
    CarouselControl
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