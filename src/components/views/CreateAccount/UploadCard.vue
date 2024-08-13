<script setup>
import UploadImage from './UploadImage.vue'
</script>
<template>
  <section class="upload-files-section">
    <UploadImage file-name="file-1" />
    <UploadImage file-name="file-2" />
  </section>
</template>

<style lang="scss" scoped>
.upload-files-section {
  @include global.customFlex(row, center, center, 2.5rem);
}
</style>
