<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'primary'
  },
  icon: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false,
    default: 'sm-button'
  },
  disabledButton: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>

    <button
      class="base-button"
      type="button"
      :class="[props.type, props.size]"
      :disabled="props.disabledButton"
    >
      <span>
        {{ props.text }}
      </span>
      <slot name="prepend-icon"></slot>

    </button>

</template>

<style lang="scss" scoped>
.button-container {
  // padding: 1rem 0;
 
}
.base-button {
   @include global.customFlex(row, center,center,00.75rem);
  width: 100%;
  border: none;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;

  &:disabled {
    background-color: var(--primary-50);
    cursor: not-allowed;
  }
}
.primary {
  color: var(--white);
  background-color: var(--primary-500);
}
.secondary {
  color: var(--black-500);
  background-color: var(--primary-50);
}
</style>
