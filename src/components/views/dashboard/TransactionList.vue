<script setup>
import { computed, ref, toRaw, watch } from 'vue'
import CustomSelectInput from '@/components/common/CustomSelectInput.vue'
import IconArrowFail from '@/components/icons/IconArrowFail.vue'
import IconArrowSuccess from '@/components/icons/IconArrowSuccess.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconSort from '@/components/icons/IconSort.vue'
import toFormatBalance from '@/helper/toFormatBalance'
import Pagination from './CustomPagination.vue'

const props = defineProps({
  titleName: {
    type: String,
    default: 'لیست تراکنش‌ها'
  },
  subTitleName: {
    type: String,
    default: '( ریال )'
  },
  transactionData: {
    type: Array,
    default: () => {
      return [
        {
          type: 'واریز',
          date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴',
          amount: '۲۱٬۲۰۰٬۰۰۰'
        },
        {
          type: 'برداشت',
          date: '۱۴۰۱/۰۸/۰۱، ۱۲:۵۵',
          amount: '۴۱٬۲۰۰٬۰۰۰'
        }
      ]
    }
  }
})

const ITEM_PER_PAGE = 5
const numberOfPage = ref(1)
const currentPage = ref(1)
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
const filterValue = ref(sortValue.value[0].value)

const filteredData = computed(() => {
  switch (filterValue.value) {
    case 'all':
      return props.transactionData
    case 'ascending':
      return [...toRaw(props.transactionData)].sort((a, b) => {
        return Number(a.amount) - Number(b.amount)
      })
    case 'Descending':
      return [...toRaw(props.transactionData)].sort((a, b) => {
        return Number(b.amount) - Number(a.amount)
      })
  }
  return props.transactionData
})

const searchValue = ref('')
const dataSearched = ref([])

const showTransactionData = computed(() => {
  if (dataSearched.value.length > 0) {
    return dataSearched.value
  }
  return filteredData.value.slice(
    (currentPage.value - 1) * ITEM_PER_PAGE,
    currentPage.value * ITEM_PER_PAGE
  )
})

watch(
  () => filteredData.value,
  () => {
    numberOfPage.value = Math.floor(
      filteredData.value.length % ITEM_PER_PAGE
        ? filteredData.value.length / ITEM_PER_PAGE + 1
        : filteredData.value.length / ITEM_PER_PAGE
    )
  },
  { deep: true, immediate: true }
)

const searchInList = () => {
  if (searchValue.value.length > 0) {
    dataSearched.value = toRaw(filteredData.value).filter((item) => {
      return item.amount?.includes(searchValue.value.toString())
    })
  }
}
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
          <CustomSelectInput :options="sortValue" v-model="filterValue">
            <IconSort svgColor="currentColor" />
            مرتب سازی :
          </CustomSelectInput>
        </div>
        <div class="transaction__search">
          <!-- <CustomInput name="searchList" componentType="text" /> -->
          <input
            type="text"
            placeholder="جستجو"
            class="transaction__search-input"
            v-model="searchValue"
          />
          <button class="transaction__search-button" @click="searchInList">
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
        <template v-for="(item, index) in showTransactionData" :key="index">
          <tr
            class="transaction-list__transaction-information transaction-list__transaction-information-even"
          >
            <td class="transaction-list__transaction-information-data">
              <IconArrowSuccess
                v-if="item.type === 'withdraw' ? true : false"
                class="transaction-list__transaction-information-label"
              />
              <IconArrowFail
                v-else-if="item.type === 'deposit' ? true : false"
                :class="[
                  item.type === 'deposit'
                    ? 'transaction-list__transaction-information-label--fail'
                    : ''
                ]"
              />
              <p>{{ item.type == 'withdraw' ? 'واریز' : 'برداشت' }}</p>
            </td>
            <td class="transaction-list__transaction-information-data">
              <p>{{ item.date }}</p>
            </td>
            <td class="transaction-list__transaction-information-data">
              <p>{{ toFormatBalance(item.amount) }}</p>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <Pagination :numberOfPage="numberOfPage" v-model="currentPage" />
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
</style>
