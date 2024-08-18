<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const props = defineProps({
  numberOfPage: {
    type: Number,
    required: true
  }
})

const currentPage = defineModel({ currentPage: { required: true } })

const step = (stepNumber) => {
  const newPage = currentPage.value + stepNumber
  if (newPage >= 1 && newPage <= props.numberOfPage) {
    return newPage
  }
  return currentPage.value
}

const changeCurrentPage = (value) => {
  currentPage.value = Number(value)
}
const changePage = (newNumberOfPage) => {
  changeCurrentPage(step(newNumberOfPage))
}
</script>
<template>
  <ul class="transaction__pagination pagination">
    <li class="pagination__item">
      <button class="pagination__button" @click="changePage(-1)">
        <IconArrowLeft class="pagination__button--back" />
      </button>
    </li>
    <li class="pagination__item" v-for="(item, index) in numberOfPage" :key="index">
      <button
        :class="['pagination__button', currentPage == item ? 'pagination__button--active' : '']"
        :value="item"
        @click="changeCurrentPage($event.target.value)"
      >
        {{ item }}
      </button>
    </li>
    <li class="pagination__item">
      <button class="pagination__button" @click="changePage(+1)">
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

    @include global.fontStyle(0.875rem, 500);
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
