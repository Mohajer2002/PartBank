<script setup>
// import CustomInput from '@/components/common/CustomInput.vue'
import CustomSelectInput from '@/components/common/CustomSelectInput.vue'
import IconArrowFail from '@/components/icons/IconArrowFail.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconArrowSuccess from '@/components/icons/IconArrowSuccess.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconSort from '@/components/icons/IconSort.vue'

import { ref } from 'vue'

const props = defineProps({
  titleName: {
    type: String,
    default: 'لیست تراکنش‌ها'
    // required: true
  },
  subTitleName: {
    type: String,
    default: '( ریال )'
    // required: true
  },
  transactionData: {
    type: Array,
    default: () => {
      return [
        {
          transactionId: 1,
          transactionType: 'واریز',
          transactionDate: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴',
          transactionAmount: '۲۱٬۲۰۰٬۰۰۰'
        },
        {
          transactionId: 2,
          transactionType: 'برداشت',
          transactionDate: '۱۴۰۱/۰۸/۰۱، ۱۲:۵۵',
          transactionAmount: '۴۱٬۲۰۰٬۰۰۰'
        }
      ]
    }
  }
})

const sortValue = ref([
  {
    value: 'all',
    textContent: 'همه',
    selected: true
  },
  {
    value: 'ascending',
    textContent: 'صعودی',
    selected: false
  },
  {
    value: 'Descending',
    textContent: 'نزولی',
    selected: false
  }
])
</script>
<template>
  <div class="dashboard-content__transaction transaction">
    <div class="transaction__options">
      <div class="transaction__title-section">
        <h3 class="transaction__title">{{ titleName }}</h3>
        <h6 class="transaction__subtitle">{{ subTitleName }}</h6>
      </div>
      <div class="transaction__group-options">
        <div class="transaction__sort">
          <CustomSelectInput :options="sortValue">
            <IconSort svgColor="currentColor" />
            مرتب سازی :
          </CustomSelectInput>
        </div>
        <div class="transaction__search">
          <!-- <CustomInput /> //search -->
          <input type="search" placeholder="جستجو" class="transaction__search-input" />
          <button class="transaction__search-button">
            <!-- <img src="../../../public/assets/icons/search.svg" alt="search" /> -->
            <IconSearch />
          </button>
        </div>
      </div>
    </div>
    <table class="transaction__transaction-list transaction-list">
      <thead class="transaction-list__head">
        <tr class="transaction-list__head-row">
          <th>نوع تراکنش</th>
          <th>تاریخ و ساعت تراکنش</th>
          <th>مبلغ تراکنش</th>
        </tr>
      </thead>
      <tbody class="transaction-list__body">
        <template v-for="item in transactionData" :key="item.transactionId">
          <tr
            class="transaction-list__transaction-information transaction-list__transaction-information-even"
          >
            <td class="transaction-list__transaction-information-data">
              <IconArrowSuccess
                v-if="item.transactionType === 'واریز' ? true : false"
                class="transaction-list__transaction-information-label"
              />
              <IconArrowFail
                v-else-if="item.transactionType === 'برداشت' ? true : false"
                :class="[
                  item.transactionType === 'برداشت'
                    ? 'transaction-list__transaction-information-label--fail'
                    : ''
                ]"
              />
              <p>{{ item.transactionType }}</p>
            </td>
            <td class="transaction-list__transaction-information-data">
              <p>{{ item.transactionDate }}</p>
            </td>
            <td class="transaction-list__transaction-information-data">
              <p>{{ item.transactionAmount }}</p>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <ul class="transaction__pagination pagination">
      <li class="pagination__item">
        <button class="pagination__button">
          <IconArrowLeft class="pagination__button--back" />
        </button>
      </li>
      <li class="pagination__item">
        <button class="pagination__button">۱</button>
      </li>
      <li class="pagination__item">
        <button class="pagination__button pagination__button--active">۲</button>
      </li>
      <li class="pagination__item">
        <button class="pagination__button">۳</button>
      </li>
      <li class="pagination__item">
        <button class="pagination__button">
          <IconArrowLeft class="pagination__button--next" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.transaction {
  @include global.customFlex(column, flex-start, center, 1rem);
  &__options {
    width: 100%;
    @include global.customFlex(row, space-between, center);
  }
  &__title-section {
    @include global.customFlex(row, flex-start, center);
  }
  &__title {
    @include global.fontStyle(1.25rem, 700);
  }
  &__subtitle {
    color: var(--text-gray);

    @include global.fontStyle;
  }
  &__group-options {
    @include global.customFlex($alignItem: center, $gap: 0.75rem);
    color: var(--text-gray);
  }
  &__sort {
    @include global.customFlex(row, flex-start, center, 0.5rem);
  }
  //   &__label-sort {
  //     @include global.customFlex(row, flex-start, center);

  //     @include global.fontStyle(0.875rem);
  //   }
  //   &__select-sort {
  //     padding: 0.5rem;
  //     width: 11.4rem;
  //     height: 2.13rem;
  //     background-color: var(--white);
  //     color: var(--text-title);
  //     border-radius: 0.5rem;
  //     border: 1px solid var(--input-border-color);
  //     outline: none;
  //   }

  &__search {
    width: 16rem;
    height: 2.12rem;
    position: relative;
    @include global.customFlex(row, flex-start, center);
    overflow: hidden;
    ::placeholder {
      color: var(--text-gray);
    }
  }
  &__search-input {
    width: 100%;
    height: 100%;
    border: 1px solid var(--input-border-color);
    border-radius: 0.5rem;
    outline: none;
    padding: 0 0.5rem;
  }
  &__search-button {
    @include global.customFlex(column, center, center);
    width: 2rem;
    height: 100%;
    position: absolute;
    left: 0;
    background: var(--primary-50);
    border-radius: 0.5rem 0 0 0.5rem;
  }
  &__transaction-list {
    width: 100%;
  }
  &__pagination {
    width: 100%;
  }
}
.transaction-list {
  @include global.customFlex(column, flex-start, center);
  border: {
    spacing: 0;
    collapse: collapse;
  }
  &__head {
    width: 100%;
    @include global.customFlex(row);
  }
  &__head-row {
    width: 100%;
    @include global.customFlex(row, space-around, center);
    padding: 0.875rem;
    background-color: var(--primary-500);
    color: var(--black-50);

    @include global.fontStyle(1rem, 600);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  &__body {
    width: 100%;
    @include global.customFlex(column);
    border-radius: 0.5rem;
  }
  &__transaction-information {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 0.5rem;
  }
  &__transaction-information-label--fail {
    transform: rotate(180deg);
  }
  &__transaction-information-even:nth-child(even) {
    background: var(--background-input);
  }
  &__transaction-information-data {
    @include global.customFlex(row, center, center);
    padding: 0.5rem;
  }
}
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
