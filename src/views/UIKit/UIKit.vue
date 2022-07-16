<template>
  <BaseLoader
    v-if="loading"
  />
  <div class="ui-kit">
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseInput & FloatLabel</h3>
        <div class="ui-kit__inputs">
          <FloatLabel
            class="ui-kit__regular-label"
          >
            <BaseInput
              v-model="baseInput1"
              :placeholder="'Введите текст'"
              :elemClass="darkTheme ? 'ui-kit__regular-input ui-kit__regular-input_dark'
                                    : 'ui-kit__regular-input'"
            />
          </FloatLabel>
          <FloatLabel
            class="ui-kit__regular-label ui-kit__regular-label_success"
          >
            <BaseInput
              v-model="baseInput2"
              :placeholder="'Введено корректно'"
              :elemClass="'ui-kit__regular-input ui-kit__regular-input_success'"
              
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
        </div>
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseSelect</h3>
        <div class="ui-kit__selects">
          <BaseSelect
            v-model="baseSelect1"
            :elemData="selectData"
            :dark="darkTheme"
          >
            Выберите пункты
          </BaseSelect>
            <BaseSelect
            v-model="baseSelect2"
            :elemData="selectData"
            :dark="darkTheme"
            danger
          >
            Выберите пункты
          </BaseSelect>
        </div>
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseSwitch</h3>
        <div class="ui-kit__switches">
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
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseRadio</h3>
        <div class="ui-kit__radios">
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
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">CarouselControl</h3>
        <div class="ui-kit__carousel-controls">
          <CarouselControl
            :dark="darkTheme"
            prev
          />
          <CarouselControl
            :dark="darkTheme"
          />
        </div>
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseCard & Badges</h3>
        <div class="ui-kit__badges">
          <BadgeLabel
            :elemClass="'ui-kit__label'"
          >
            Label
          </BadgeLabel>
          <div class="ui-kit__likes">
            <BadgeCounter
              :likes="cardLikes1"
            />
            <BadgeLike
              @eventLike="increaseLikes(1)"
            />
          </div>
        </div>
    </BaseCard>
    </div>

    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseButton</h3>
        <div class="ui-kit__buttons">
          <BaseButton
            :elemClass="'ui-kit__button'"
          >
            Обычная кнопка
          </BaseButton>
          <BaseButton
            :elemClass="'ui-kit__button'"
            :disabled="true"
          >
            Заблокирована
          </BaseButton>
          <BaseButton 
            :loading="true"
            :elemClass="'ui-kit__button'"
          >
            Обычная кнопка
          </BaseButton>
          <BaseButton
            :elemClass="'ui-kit__button_small'"
          >
            Маленькая
          </BaseButton>
          <BaseButton
            :elemClass="'ui-kit__button_small'"
            :disabled="true"
          >
            Заблокирована
          </BaseButton>
          <BaseButton 
            :loading="true"
            :elemClass="'ui-kit__button_small'"
          >
            Маленькая
          </BaseButton>
        </div>
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseAvatar</h3>
        <div class="ui-kit__avatars">
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
      </BaseCard>
    </div>
    
    <div class="ui-kit__grid-item">
      <BaseCard
        :dark="darkTheme"
      >
        <h3 class="base-card__header ui-kit__header">BaseLogo</h3>
        <div class="ui-kit__logos">
          <BaseLogo
            :dark="darkTheme"
          />
          <BaseLogo
            :size="'md'"
            :dark="darkTheme"
          />
          <BaseLogo
            :size="'lg'"
            :dark="darkTheme"
          />
          <BaseLogo
            :size="'xl'"
            :dark="darkTheme"
          />
        </div>
      </BaseCard>
    </div>

  </div>
</template>

<script>
import BaseLoader from '@/components/ui/BaseLoader/BaseLoader.vue'
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
    BaseLoader,
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

  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  emits: [
    'pageTitle'
  ],

  data() {
    return {
      title: 'UI-Kit',
      loading: true,
      baseInput1: '',
      baseInput2: '',
      baseInput3: '',
      baseSelect1: '',
      baseSelect2: '',
      selectData: [
        {name: 'Пункт первый', disabled: false},
        {name: 'Пункт второй', disabled: true},
        {name: 'Пункт третий', disabled: false},
        {name: 'Пункт четвертый', disabled: false},
      ],
      baseSwitch: {
        0: '',
        1: '',
        2: ''
      },
      switchData: [
        'switch1',
        'switch2',
        'switch3_disabled'
      ],
      baseRadio: '',
      radioData: [
        'первый',
        'второй',
        'третий'
      ],
      cardLikes1: 21
    }
  },

  computed: {
    darkTheme() {
      if (this.theme === 'dark') {
        return true
      }
      return false
    }
  },

  created() {
    this.$emit('pageTitle', this.title)
  },

  mounted() {
    document.body.classList.add('loading')
    setTimeout(() => {
      this.loading = false
      document.body.classList.remove('loading')
    }, 3000)
  },

  methods: {
    increaseLikes(id) {
      if (id === 1) {
        this.cardLikes1++
      }
    }
  }
}
</script>