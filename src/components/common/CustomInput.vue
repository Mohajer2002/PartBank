<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  }
})


</script>
<template>
  <div class="custom-input-component">
    <label class="custom-input-component__labels">{{ props.label }}</label>
    <input
      class="custom-input-component__inputs custom-input-component__inputs--focus"
      :id="props.name"
      :placeholder="props.placeholder"
      :class="[props.class]"
    />
  </div>
</template>

<style lang="scss" scoped>
.custom-input-component {
  @include global.customFlex(column, $gap: 0.25rem);
  color: var(--black-500);

  &__inputs {
    border: 0;

    padding: 0rem 0.5rem;
    background-color: var(--background-input);
    width: 20rem;
    border-radius: 0.375rem;
    direction: rtl;
    font: {
      size: 0.875rem;
      weight: 600rem;
    }
    &--focus:focus {
      outline: 0.125rem solid var(--primary-200);
    }
  }

  &__labels {
    padding-right: 0.5rem;
    font: {
      size: 1rem;
      weight: 400;
    }
  }
}
.md-width {
  height: 3rem;
}
</style>
