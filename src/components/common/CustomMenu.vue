<script setup>
import IconEdit from '../icons/IconEdit.vue'

defineProps({
  menuItems: {
    type: Array,
    // required: true,
    default: () => [
      {
        itemId: 1,
        itemName: 'ویرایش',
        itemAction: 'clickEdit',
        itemIcon: IconEdit,
        baseStyle: 'tools-menu__item-button'
      }
    ]
  }
})
</script>
<template>
  <ul class="tools-menu tools-menu--transition">
    <template v-for="(item, index) in menuItems" :key="item.id">
      <li class="tools-menu__item">
        <button :class="[item.baseStyle, item.customStyle]" @click="$emit(item.itemAction)">
          <component :is="item.itemIcon"></component>
          <p>{{ item.itemName }}</p>
        </button>
      </li>

      <div v-if="index != menuItems.length - 1" class="tools-menu__divider"></div>
    </template>
  </ul>
</template>

<style scoped lang="scss">
$transition-duration: 0.3s;
$transition-timing-function: ease-out;

.tools-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  @include global.customFlex(column, flex-start, stretch, 0.75rem);
  padding: 0;
  height: 0;
  border-radius: 0.75rem;
  background: var(--white);
  box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
  overflow: hidden;
  opacity: 0;
  list-style: none;
  @include global.fontStyle(0.825rem);
  line-height: 1.25rem;
  color: var(--text-title);

  &--transition {
    transition:
      height $transition-duration $transition-timing-function,
      opacity $transition-duration $transition-timing-function,
      padding $transition-duration $transition-timing-function;
  }

  &__item {
    // text-wrap: nowrap;
    @include global.customFlex($alignItem: center, $gap: 0.5rem);
  }
  &__item-button {
    width: 100%;
    text-wrap: nowrap;
    color: var(--text-title);
    @include global.customFlex($alignItem: center);

    &--warring {
      color: var(--fail-500);
    }
  }

  &__divider {
    width: 100%;
    border-bottom: 1px solid #e2edff;
  }
}
</style>
