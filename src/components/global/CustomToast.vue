<script setup>
import IconFolan from '@/components/icons/IconCheck.vue'

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const setToastColor = (type) => {
  switch (type) {
    case 'success':
      return 'toast-success'
    case 'warning':
      return 'toast-warning'
    case 'error':
      return 'toast-error'

    default:
      break
  }
}

// const test = (type) => {
//   switch (type) {
//     case 'success':
//       return <IconFolan/>
    

//     default:
//       break
//   }
// }
</script>
<template>
  <div v-if="props.config.show"  :class="[`toast-container toast-container__${props.config.position}`]">
    <div class="toast" :class="setToastColor(props.config.type)">
      <slot name="append-icon"></slot>

      {{ props.config.text }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes slideInDown {
  from {
    transform: translate3d(0, -120px, 0) scaleY(0.8);
    visibility: visible;
    /*     opacity: 0; */
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.toast-container {
  padding-top: 1rem;

  &__top-center {
    position: fixed;
    width: 100%;
    top: 0.75rem;
    right: 40%;
  }
  &__top-left {
    position: fixed;
    top: 0.5rem;
    left: 1rem;
  }
  &__top-right {
    position: fixed;
    top: 0.5rem;
    right: 3rem;
  }

  &__bottom-center {
    position: fixed;
    width: 100%;
    bottom: 0.75rem;
    right: 40%;
  }
  &__bottom-left {
    position: fixed;
    bottom: 3rem;
    left: 3rem;
  }
  &__bottom-right {
    position: fixed;
    bottom: 3em;
    right: 3rem;
  }
}
.toast {
  @include global.customFlex(row, flex-start, center, 0.75rem);

  height: 2.75rem;
  width: 17rem;
  padding: 0.5rem 1rem;
  color: var(--white);
  border-radius: 0.5rem;
  animation: slideInDown 0.5s;
}
// .toat-icon {
//   width: 24px;
//   height: 24px;
// }
.toast-success {
  background-color: var(--success-500);
}
.toast-warning {
  background-color: #ffc107;
  color: black;
}
.toast-error {
  background-color: var(--fail-500);
}
</style>
