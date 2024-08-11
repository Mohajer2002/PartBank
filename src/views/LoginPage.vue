<script setup>


</script>
<template>
  <div class="body-login-page">
    <main class="main-login">
      <section class="main-login__login login">
        <div class="login__logo">
          <!-- logo -->
         
        </div>

      </section>
      <section class="main-login__basic-image basic-image">
        <img
          src="../../src/assets/images/basic-img.jpg"
          alt="basic-image"
          class="basic-image__file"
        />
      </section>
    </main>
  
  </div>
</template>

<style lang="scss" scoped>

.body-login-page {
  height: 100vh;
  width: 100%;
  @include global.customFlex(row, center, center);
  background: url("../../src/assets/images/bg-image.png") lightgray 0px -100px /
    100% 118.519% no-repeat;
  padding: 7.5rem, 22.5rem;
}

.main-login {
  width: clamp(40rem, 65rem, 70rem);
  height: clamp(30rem, 40rem, 50rem);
  @include global.customFlex(row, center, stretch);
  border-radius: 1.25rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
  background-color: var(--white);
  &__login {
    width: 50%;
  }
}


.basic-image {
  $padding-size: 1rem;
  padding: $padding-size 0 $padding-size $padding-size;
  width: 50%;
  @include global.customFlex($alignItem: stretch);
  &__file {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
  }
}


</style>
