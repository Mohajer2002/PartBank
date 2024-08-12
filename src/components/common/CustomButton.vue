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
  }
})
</script>
<template>
  <div class="button-container">
    <button class="base-button" :class="[props.type, props.size]">
      <!-- <Icon Slot/> -->
      <span>
        {{ props.text }}
      </span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.button-container {
  padding: 1rem 0;
  @include global.customFlex(column, center);
}
.base-button {
  border: none;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
}
.primary {
  color:var(--white);
  background-color: var(--primary-500);
}
.secondary {
  color: var(--black-500);
  background-color: var(--primary-50);
}
</style>
