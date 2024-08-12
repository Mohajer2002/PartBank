<script setup>
// defineSlots(['header', 'main'])
</script>
<template>
  <slot name="header"></slot>
  <div class="dashboard-container">
    <slot name="main"></slot>
  </div>
</template>

<style scoped lang="scss">
.dashboard-container {
  padding: 1rem 5rem 1rem 5rem;
  min-height: calc(100vh - global.$header-height);
  background-color: var(--basic-background);
}
</style>
