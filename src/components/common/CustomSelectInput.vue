<script setup>
defineProps({
  options: {
    type: Array,
    default: () => [
      {
        value: 'all',
        textContent: 'همه',
        selected: false
      }
    ]
  }
})
const labelSlot = defineSlots()
const selectValue = defineModel()
</script>
<template>
  <label for="sort" class="select-input__label">
    <slot>{{ labelSlot }}</slot>
  </label>
  <select name="sort" id="sort" class="select-input__select" v-model="selectValue">
    <template v-for="item in options" :key="item.value">
      <option
        class="select-input__option"
        :value="item.value"
        :selected="item.selected ? true : false"
      >
        {{ item.textContent }}
      </option>
    </template>
  </select>
</template>

<style scoped lang="scss">
.select-input {
  &__label {
    @include global.customFlex(row, flex-start, center);
    @include global.fontStyle(0.875rem);
  }
  &__select {
    padding: 0.5rem;
    width: 11.4rem;
    height: 2.13rem;
    background-color: var(--white);
    color: var(--text-title);
    border-radius: 0.5rem;
    border: 1px solid var(--input-border-color);
    outline: none;
  }
}
</style>
