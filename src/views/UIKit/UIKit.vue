<template>
  <div class="ui-kit">
    <h3 class="ui-kit__section">BaseLogo</h3>
    <div class="ui-kit__logo">
      <BaseLogo/>
      <BaseLogo
      :size="'md'"
      />
      <BaseLogo
      :size="'lg'"
      />
    </div>
    <div class="ui-kit__logo ui-kit__logo_dark">
      <BaseLogo
      dark
      />
      <BaseLogo
      :size="'md'"
      dark
      />
      <BaseLogo
      :size="'lg'"
      dark
      />
    </div>
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
    <div class="ui-kit__input-dark">
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_dark"
      >
        <BaseInput
          v-model="baseInput4"
          :elemClass="'ui-kit__regular-input ui-kit__regular-input_dark'"
          :placeholder="'Введите текст'"
        />
      </FloatLabel>
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_success"
      >
        <BaseInput
          v-model="baseInput5"
          :elemClass="'ui-kit__regular-input ui-kit__regular-input_success'"
          :placeholder="'Введено корректно'"
        />
      </FloatLabel>
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_danger"
      >
        <BaseInput
          v-model="baseInput6"
          :placeholder="'Введено с ошибкой'"
          :errorMessage="'Сообщение об ошибке'"
          :elemClass="'ui-kit__regular-input ui-kit__regular-input_danger'"
        />
      </FloatLabel>
    </div>
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
    <div class="ui-kit__select-dark">
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_dark"
        :fixed="true"
      >
        <BaseSelect
          v-model="baseSelect4"
          :elemClass="'ui-kit__regular-select '"
          :elemData="selectData"
          dark
        />
      </FloatLabel>
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_success"
        :fixed="true"
      >
        <BaseSelect
          v-model="baseSelect5"
          :elemClass="'ui-kit__regular-select'"
          :elemData="selectData"
          dark
        />
      </FloatLabel>
      <FloatLabel
        class="ui-kit__regular-label ui-kit__regular-label_danger"
        :fixed="true"
      >
        <BaseSelect
          v-model="baseSelect6"
          :elemClass="'ui-kit__regular-select'"
          :elemData="selectData"
          dark
        />
      </FloatLabel>
    </div>
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
    <h3 class="ui-kit__section">BaseCard & Badges</h3>
    <BaseCard
      :elemClass="'ui-kit__card'"
    >
      <h5>BaseCard light theme</h5>
      <div class="ui-kit__badges">
        <BadgeLabel
          :elemClass="'ui-kit__label'"
        >
          Label
        </BadgeLabel>
        <div class="ui-kit__likes">
          <BadgeCounter
            :likes="10"
          />
          <BadgeLike/>
        </div>
      </div>
    </BaseCard>
    <BaseCard
      :elemClass="'ui-kit__card ui-kit__card_dark'"
      dark
    >
      <h5>BaseCard dark theme</h5>
      <div class="ui-kit__badges">
        <BadgeLabel
          :elemClass="'ui-kit__label ui-kit__label_yellow'"
        >
          Label
        </BadgeLabel>
        <div class="ui-kit__likes">
          <BadgeCounter
            :likes="2"
          />
          <BadgeLike/>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseLogo from '@/components/ui/BaseLogo/BaseLogo.vue'
import BaseButton from '@/components/ui/BaseButton/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput/BaseInput.vue'
import FloatLabel from '@/components/ui/FloatLabel/FloatLabel.vue'
import BaseSelect from '@/components/ui/BaseSelect/BaseSelect.vue'
import BaseSwitch from '@/components/ui/BaseSwitch/BaseSwitch.vue'
import BaseRadio from '@/components/ui/BaseRadio/BaseRadio.vue'
import BaseAvatar from '@/components/ui/BaseAvatar/BaseAvatar.vue'
import CarouselControl from '@/components/ui/CarouselControl/CarouselControl.vue'
import BaseCard from '@/components/ui/BaseCard/BaseCard.vue'
import BadgeLike from '@/components/ui/BadgeLike/BadgeLike.vue'
import BadgeCounter from '@/components/ui/BadgeCounter/BadgeCounter.vue'
import BadgeLabel from '@/components/ui/BadgeLabel/BadgeLabel.vue'

export default {
  name: 'UIKit',

  components: {
    BaseLogo,
    BaseButton,
    BaseInput,
    FloatLabel,
    BaseSelect,
    BaseSwitch,
    BaseRadio,
    BaseAvatar,
    CarouselControl,
    BaseCard,
    BadgeLike,
    BadgeCounter,
    BadgeLabel
  },

  data() {
    return {
      baseInput1: '',
      baseInput2: '',
      baseInput3: '',
      baseInput4: '',
      baseInput5: '',
      baseInput6: '',
      baseSelect1: '',
      baseSelect2: '',
      baseSelect3: '',
      baseSelect4: '',
      baseSelect5: '',
      baseSelect6: '',
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