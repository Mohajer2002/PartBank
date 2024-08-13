<script setup>
import CustomMenu from '@/components/common/CustomMenu.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconMoreOption from '@/components/icons/IconMoreOption.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconUpload from '@/components/icons/IconUpload.vue'
import { ref, shallowRef } from 'vue'

const imageUrl = ref('')
const fileInput = ref(null)
const menuItems = shallowRef([
  {
    itemId: 1,
    itemName: 'ویرایش',
    itemAction: 'clickEdit',
    itemIcon: IconEdit,
    baseStyle: 'tools-menu__item-button'
  },
  {
    itemId: 1,
    itemName: 'حذف',
    itemAction: 'clickDelete',
    itemIcon: IconTrash,
    baseStyle: 'tools-menu__item-button',
    customStyle: 'tools-menu__item-button--warring'
  }
])

defineProps({
  fileName: {
    type: String,
    required: true,
    default: 'file-1'
  }
})

const handleFileInput = (event) => {
  handleFile(event.target.files[0])
}
const fileDrag = (event) => {
  handleFile(event.dataTransfer.files[0])
}
const handleFile = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()

    reader.onload = () => {
      imageUrl.value = reader.result
    }
    reader.readAsDataURL(file)
  } else {
    alert('Please select an image file.')
  }
}

const handleEdit = () => {
  fileInput.value.click()
}
const handleDelete = () => {
  imageUrl.value = ''
  fileInput.value.value = null
}
</script>
<template>
  <div class="file-section" @dragover.prevent @drop.prevent="fileDrag">
    <label
      :for="fileName"
      class="file-section__upload-section file-section__upload-section upload-box"
    >
      <img
        v-if="imageUrl ? true : false"
        alt="front image"
        :class="['upload-box__preview']"
        :src="imageUrl"
      />
      <div class="upload-box__icon">
        <IconUpload />
      </div>
      <p class="upload-box__text-helper">
        تصویر را بکشید و اینجا رها کنید یا
        <span class="upload-box__text-helper--important">کلیک کنید</span>.
      </p>
      <input
        type="file"
        accept="image/*"
        :id="fileName"
        class="upload-box__input-file"
        @change="handleFileInput"
        ref="fileInput"
      />
    </label>
    <div class="file-section__detail">
      <p class="file-section__description">تصویر روی کارت ملی</p>
      <button type="button" class="file-section__option file-section__option--active">
        <IconMoreOption />
        <CustomMenu :menu-items="menuItems" @clickEdit="handleEdit" @clickDelete="handleDelete" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-section {
  width: 20rem;
  @include global.customFlex(column);
  border-radius: 0.75rem;
  overflow: hidden;

  &__upload-section {
    width: 100%;
    height: 11.25rem;
    @include global.customFlex(column, center, center, 0.5rem);
    padding: 2.55rem 4.53rem;
  }

  &__detail {
    @include global.customFlex(row, space-between, center);
    background-color: var(--background-input);
    padding: 1rem 0.75rem;
    @include global.fontStyle(0.825rem, 400);
  }
  &__option {
    @include global.customFlex(row, center, center);
    width: 2rem;
    height: 2rem;
    position: relative;
    &--active:hover .tools-menu {
      height: 5.5rem;
      padding: 0.75rem;
      opacity: 1;
    }
  }
}
.upload-box {
  background: var(--background-input);
  text-align: center;
  cursor: pointer;
  position: relative;
  &__preview {
    position: absolute;
    width: 100%;
    height: 11.25rem;
    object-fit: fill;
    object-position: center;
  }
  &__icon {
    width: 4.25rem;
  }
  &__text-helper {
    color: var(--text-gray);
    @include global.fontStyle(0.875rem, 600);
  }
  &__text-helper--important {
    color: var(--primary-500);
  }
  &__input-file {
    display: none;
  }
}
</style>
