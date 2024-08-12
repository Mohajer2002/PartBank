<script setup>
const props=defineProps({
  headerTitle:{
    type:String,
    required:false,
    defualt:"اطلاعات فردی"
  }
})
</script>
<template>
  <div class="create-account-layout">
    <main class="information-box-container">
      <div class="information-box">
        <h4 class="information-box__header">{{props.headerTitle}}</h4>
        <hr class="information-box__divider" />
      <router-view/>

      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.create-account-layout {
  background-color: var(--basic-background);

}

.information-box-container {
  margin-top: 2.6rem;

  @include global.customFlex(row, center, center);
}

.information-box {
  background-color: var(--white);
  border-radius: 0.75rem;
  width: 82.5rem;
  padding: 2.5rem;

  &__header {
    color: var(--black-500);
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
  }
  &__divider {
    margin: 2.5rem;
    background-color: var(--hr-color);
    border: none;
    height: 1px;
  }

  &__button-group {
    @include global.customFlex(row, flex-end, center, 1rem);
    width: 100%;
    padding-top: 2.5rem;
  }
  &__button {
    height: 2.5rem;
    width: 11rem;
    &--previous {
      background-color: var(--primary-50);
      color: var(--black-500);
    }
    &--next {
      background-color: var(--primary-500);
    }
  }
}
</style>
