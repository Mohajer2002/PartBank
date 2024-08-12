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
  },
  type: {
    type: String,
    required: false,
    defualt: 'input'
  }
})

const modelValue = defineModel()
</script>
<template>
  <div class="custom-input-component">
    <label class="custom-input-component__labels">{{ props.label }}</label>

    <div class="custom-input-component__content" v-if="props.type == 'input'">
      <input
        class="custom-input-component__inputs custom-input-component__inputs--focus"
        :id="props.name"
        :placeholder="props.placeholder"
        :class="[props.class]"
        v-model="modelValue"
      />
    </div>
    <div class="custom-input-component__content custom-input-component__content--address" v-else-if="props.type == 'textarea'">
      <textarea
        class="custom-input-component__inputs custom-input-component__inputs--focus custom-input-component__inputs--address"
        :id="props.name"
        :placeholder="props.placeholder"
        :class="[props.class]"
        v-model="modelValue"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-input-component {
  @include global.customFlex(column, $gap: 0.25rem);
  color: var(--black-500);
  

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  
    &--address {
      flex-basis: 100%;
    }
  }

  &__inputs {
    border: 0;
    height: 3rem;
    padding: 0rem 0.5rem;
    background-color: var(--background-input);
    border-radius: 0.375rem;
    direction: rtl;
    font: {
      size: 0.875rem;
      weight: 600rem;
    }
    &--focus:focus {
      outline: 0.125rem solid var(--primary-200);
    }

    &--address {
      resize: none;
      height: 7.5rem;
      padding-top: 1rem;
      
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

</style>
