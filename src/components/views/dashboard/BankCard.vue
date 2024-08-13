<script setup>
import IconConvertCard from '@/components/icons/IconConvertCard.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconMore from '@/components/icons/IconMore.vue'

defineProps({
  bankCardInformation: {
    type: Object,
    required: true,
    default: () => {
      return { cardNumber: '۱۲۳۴۵۶۷۸۱۲۳۴۵۶۷۸', cardBalance: '۲۰۰۰۰۰۰' }
    }
  }
})
</script>
<template>
  <div class="account-information-preview__account-card account-card">
    <div class="account-card__card-content">
      <div class="account-card__card-quantity">
        <span class="account-card__card-quantity-title">موجودی کل</span>

        <span class="account-card__card-balance"> {{ bankCardInformation.cardBalance }} </span>
      </div>

      <div class="account-card__more">
        <!-- <img src="../../../public/assets/icons/more.svg" /> -->
        <IconMore />
        <div class="account-card-more-options">
          <div class="account-card-more-options__items account-card-more-options__items--change">
            <!-- <img src="../../../public/assets/icons/convert-card.svg" /> -->
            <IconConvertCard />
            تغییر حساب متصل
          </div>
          <div class="account-card-more-options__items account-card-more-options__items--logout">
            <!-- <img src="../../../public/assets/icons/logout.svg" /> -->
            <IconLogout />
            <span>حذف حساب بانکی</span>
          </div>
        </div>
      </div>
    </div>

    <div class="account-card__card-number">
      <span> {{ bankCardInformation.cardNumber.substring(0, 4) }}</span>
      <span> {{ bankCardInformation.cardNumber.substring(4, 8) }}</span>
      <span> {{ bankCardInformation.cardNumber.substring(8, 12) }}</span>
      <span> {{ bankCardInformation.cardNumber.substring(12, 16) }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$active-button-color: #f9fafb;
$gradiant-second-color: #d0c9c1;
$key-frame-name: 'wiggle';

.account-card {
  width: 40%;
  height: 100%;
  @include global.customFlex(column, space-between);
  background-image: url('/src/assets/images/noise.svg'), url('/src/assets/images/pattern.svg'),
    linear-gradient(
      112deg,
      var(--primary-500) 0%,
      $gradiant-second-color 100%,
      $gradiant-second-color 100%
    );
  padding: 1.5rem;
  border-radius: 0.75rem;
  direction: ltr;
  color: var(--white);

  &__card-content {
    @include global.customFlex($justifyContent: space-between);
    margin: 0.75rem 0 0 1rem;
  }

  &__card-quantity {
    @include global.customFlex(column);
    font-weight: 600;
  }
  &__card-quantity-title {
    @include global.fontStyle(1rem, 600);
  }
  &__card-balance {
    @include global.fontStyle(2.5rem, 600);
  }
  &__more {
    position: relative;
    &:hover .account-card-more-options {
      display: block;
      animation: wiggle 2s linear infinite;
    }
  }

  &__card-number {
    @include global.customFlex($justifyContent: center, $gap: 1rem);
    @include global.fontStyle(2.25rem);
    margin-bottom: 1rem;
  }
}

.account-card-more-options {
  width: 12rem;
  height: 5rem;
  background-color: var(--white);
  border-radius: 0.75rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
  padding: 0.75rem;
  display: none;
  position: absolute;
  right: 0.625rem;
  direction: rtl;

  &__items {
    @include global.customFlex($alignItem: center);
    direction: rtl;
    gap: 0.5rem;

    &--change {
      color: var(--black-100);
      margin-bottom: 0.75rem;
    }
    &--logout {
      color: var(--fail-500);
      margin-bottom: 0.75rem;
    }
  }
}
</style>
