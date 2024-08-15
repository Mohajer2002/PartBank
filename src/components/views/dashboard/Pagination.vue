<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import { ref, watch } from 'vue'

const props = defineProps({
  numberOfPage: {
    default: 4,
    type: Number,
    required: true
  }
})
const currentPage = ref(1)

const emit = defineEmits('currentPage')

const handleCurrentPage = (event) => {
  emit('currentPage', event.target.value)
  currentPage.value = event.target.value
}
const handlePreviuosPage = () => {
  if (currentPage.value > 1) {
    --currentPage.value
  }
}
const handleNextPage = () => {
  if (currentPage.value < props.numberOfPage) {
    ++currentPage.value
  }
}
watch(
  () => currentPage.value,
  () => {
    emit('currentPage', currentPage.value)
  },
  { immediate: true }
)
</script>
<template>
  <ul class="transaction__pagination pagination">
    <li class="pagination__item">
      <button class="pagination__button" @click="handlePreviuosPage">
        <IconArrowLeft class="pagination__button--back" />
      </button>
    </li>
    <li class="pagination__item" v-for="(item, index) in numberOfPage" :key="index">
      <button
        :class="['pagination__button', currentPage == item ? 'pagination__button--active' : '']"
        :value="item"
        @click="handleCurrentPage"
      >
        {{ item }}
      </button>
    </li>

    <li class="pagination__item">
      <button class="pagination__button" @click="handleNextPage">
        <IconArrowLeft class="pagination__button--next" />
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.pagination {
  list-style: none;
  @include global.customFlex(row, center, center, 0.5rem);
  &__button {
    @include global.customFlex(row, center, center);
    width: 2rem;
    height: 2rem;
    color: var(--text-gray);
    background: var(--background-input);
    border-radius: 0.25rem;
    padding: 0.25rem;

    @include global.fontStyle(0.875rem, 600);
  }
  &__button--active {
    color: var(--white);
    background: var(--primary-500);
  }
  &__button--back {
    transform: rotate(180deg);
  }
}
</style>
