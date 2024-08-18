<script setup>
import { onMounted, ref, toRaw } from 'vue'
import DashboardNoContent from './DashboardNoContent.vue'
import BankCard from './BankCard.vue'
import AccountInformationCard from './AccountInformationCard.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue'
import { useDashboardDataStore } from '@/stores/dashboard-information-store'
import toShamsi from '@/helper/toShamsi'
import toFormatBalance from '@/helper/toFormatBalance'
import TransactionList from './TransactionList.vue'
import { useFetch } from '@/services/api'
import { transactionListConfig } from '@/services/apiConfigs'

const dashboardDataStore = useDashboardDataStore()
const createAccountWarring = ref(Object.keys(dashboardDataStore.dashboardUserInfo).length > 0 ? false : true)

const {
  cardNumber,
  balance,
  score,
  upcomingInstalment,
  id: userId
} = toRaw(dashboardDataStore.dashboardUserInfo)
const transactionListData = ref([])

const getTransactionListData = async () => {
  const { responseData } = await useFetch(transactionListConfig)
  transactionListData.value = toRaw(responseData.value.data.results)
}
onMounted(() => {
  getTransactionListData()
})
</script>
<template>
  <section class="main-dashboard__dashboard-content dashboard-content">
    <DashboardNoContent v-if="createAccountWarring" />
    <!-- dashboard content section -->
    <div class="dashboard-content__content">
      <div class="dashboard-content__account-information-preview account-information-preview">
        <!-- account information preview -->
        <BankCard
          :card-number="cardNumber"
          :cardBalance="toFormatBalance(balance)"
          :user-id="userId"
        />
        <AccountInformationCard header-title="امتیاز حساب" button-title="محاسبه امتیاز">
          <template v-slot:prepend-icon>
            <div class="score-card__icon">
              <IconInfoCircle />
            </div>
          </template>
          <template v-slot:content>
            <div class="score-card__content">
              <span class="score-card__amount">
                <span class="score-card__amount-number">{{ toFormatBalance(score?.amount) }}</span>
                <small class="score-card__content-unit">ریال</small>
              </span>
              <span class="score-card__month">
                <span class="score-card__month-number">{{ score?.paymentPeriod }}</span>
                <small class="score-card__content-unit">ماهه</small>
              </span>
            </div>
          </template>
        </AccountInformationCard>

        <AccountInformationCard header-title="قسط پیش رو" button-title="پرداخت">
          <template v-slot:prepend-icon>
            <div class="installment-card__icon">
              جزییات
              <IconArrowLeft />
            </div>
          </template>
          <template v-slot:content>
            <div class="installment-card__content">
              <div class="installment-card__item">
                <span class="installment-card__item-title">مبلغ قسط:</span>
                <span class="installment-card__item-value">
                  <p class="installment-card__item-value-amount">
                    {{ toFormatBalance(upcomingInstalment?.amount) }}
                  </p>
                  <span class="installment-card__item-value-unit">ریال</span>
                </span>
              </div>
              <div class="installment-card__item">
                <span class="installment-card__item-title">تاریخ سررسید:</span>
                <span class="installment-card__item-value" id="installment-card-dueDate">{{
                  toShamsi(upcomingInstalment?.dueDate)
                }}</span>
              </div>
            </div>
          </template>
        </AccountInformationCard>
      </div>
      <TransactionList :transaction-data="transactionListData" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.dashboard-content {
  @include global.customFlex(column, center, stretch);
  width: 100%;
  color: var(--text-title);
  position: relative;
  &__content {
    @include global.customFlex(column, flex-start, stretch, 1.5rem);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__account-information-preview {
    height: 16.25rem;
  }
  &__transaction {
    height: auto;
    padding: 1.5rem;
    background: var(--white);
    border-radius: 0.75rem;
    box-shadow: 0 0 4px rgba(0, 67, 101, 0.05);
  }
}
.account-information-preview {
  @include global.customFlex($gap: 1rem);
}
.score-card {
  width: 50%;
  &__content {
    color: var(--primary-500);
    @include global.fontStyle($weight: 700);

    @include global.customFlex(column, $alignItem: center);
  }
  &__content-unit {
    @include global.fontStyle(0.875rem);
    color: var(--text-gray);
  }

  &__month {
    @include global.fontStyle(1.125rem);
    @include global.customFlex($alignItem: center, $gap: 0.25rem);
  }

  &__amount {
    @include global.fontStyle(2.5rem, 700);
    @include global.customFlex(row, $alignItem: center, $gap: 0.25rem);
  }
  &__amount-number {
    direction: ltr;
  }
}
.installment-card {
  &__content {
    @include global.customFlex(column) {
      row-gap: 0.75rem;
    }
    padding-top: 2.5rem;
  }
  &__item {
    @include global.customFlex(row, space-between, center);
  }
  &__item-title {
    color: var(--text-gray);
    @include global.fontStyle(0.875rem);
  }
  &__item-value {
    color: var(--black-500);
    @include global.fontStyle(0.875rem, 600);
  }
  &__item-value-amount {
    display: inline;
    direction: ltr;
  }

  &__button {
    @include global.customFlex(row, center, center, 0.5rem);
  }
}
</style>
