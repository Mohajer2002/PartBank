<script setup>
import UploadImage from './UploadImage.vue'
</script>
<template>
  <section class="upload-files-section">
    <UploadImage file-name="file-1" file-description="تصویر روی کارت ملی" />
    <UploadImage file-name="file-2" file-description="تصویر پشت کارت ملی" />
  </section>
</template>

<style lang="scss" scoped>
.upload-files-section {
  @include global.customFlex(row, center, center, 2.5rem);
}
</style>
