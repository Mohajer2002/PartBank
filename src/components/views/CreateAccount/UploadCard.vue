<script setup>
import UploadImage from './UploadImage.vue'
import CustomButton from '@/components/common/CustomButton.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>
<template>
  <section>
    <div class="upload-files-section">
      <UploadImage file-name="file-1" file-description="تصویر روی کارت ملی" />
      <UploadImage file-name="file-2" file-description="تصویر پشت کارت ملی" />
    </div>
    <div class="button-group">
      <div class="button-group__button">
        <CustomButton type="secondary" text="قبلی" @click="router.push('personal-information')" />
      </div>
      <div class="button-group__button">
        <CustomButton
          type="primary"
          text="ثبت و ادامه"
          @click="router.push('confirm-information')"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.upload-files-section {
  @include global.customFlex(row, center, center, 2.5rem);
}

.button-group {
  @include global.customFlex(row, flex-end, center, 1rem);
  width: 100%;
  padding-top: 2.5rem;

  &__button {
    width: 11rem;
  }
}
</style>
