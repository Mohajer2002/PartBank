<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AccountInformation from '../src/components/views/Dashboard/AccountInformationCard.vue'
import IconInfoCircle from '../src/components/icons/IconInfoCircle.vue'
import IconArrowLeft from '../src/components/icons/IconArrowLeft.vue'
</script>

<template>
  <!-- <h1>این یک متن تستی می باشد .</h1> -->
  <!-- <RouterView /> -->
  <AccountInformation header-title="امتیاز حساب" button-title="محاسبه امتیاز">
    <template v-slot:prepend-icon>
       <div class="score-card__icon">
      <IconInfoCircle />
       </div>
    </template>
    <template v-slot:content>
      <div class="score-card__content">
        <span class="score-card__amount">
          <span class="score-card__amount-number">۰</span>
          <small class="score-card__content-unit">ریال</small>
        </span>
        <span class="score-card__month">
          <span class="score-card__month-number">۰</span>
          <small class="score-card__content-unit">ماهه</small>
        </span>
      </div>
    </template>
  </AccountInformation>

  <AccountInformation header-title="قسط پیش رو" button-title="پرداخت">
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
          <span class="installment-card__item-value"
            ><span class="installment-card__item-value-amount">۰</span>
            <span class="installment-card__item-value-unit">ریال</span>
          </span>
        </div>
        <div class="installment-card__item">
          <span class="installment-card__item-title">تاریخ سررسید:</span>
          <span class="installment-card__item-value" id="installment-card-dueDate">-</span>
        </div>
      </div>
    </template>
  </AccountInformation>
</template>

<style scoped lang="scss">
.score-card {
  width: 50%;
    &__icon {
    padding-top: 0.75rem;
  }
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
}

.installment-card {
  &__content {
    @include global.customFlex(column) {
      row-gap: 0.75rem;
    }
    padding-top: 2.5rem;
  }
  &__icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    color: var(--text-gray);
    padding-top: 0.15rem;

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
  &__button {
    @include global.customFlex(row, center, center, 0.5rem);
  }
}
</style>
