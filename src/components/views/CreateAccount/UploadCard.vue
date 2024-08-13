<script setup>
import IconEdit from '@/components/icons/IconEdit.vue'
import IconMoreOption from '@/components/icons/IconMoreOption.vue'
import IconUpload from '@/components/icons/IconUpload.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import { ref } from 'vue'


const fileUploaded = ref(null)
const imagePreview = ref(null)

function handleFile(file, filePreview) {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
  

    reader.onload = () => {
      filePreview.src = reader.result;
      // Save to local storage
      // localStorage.setItem("image", reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select an image file.");
  }
}

const uploadFile=(event)=>{
 fileUploaded.value = event.dataTransfer.files[0];
  handleFile(fileUploaded.value,imagePreview );
}

</script>
<template>
  <section class="upload-files-section">
    <div class="file-section">
      <label
        for="input-file1"
        class="file-section__upload-section file-section__upload-section--front upload-box"
      >
        <img alt="front image" class="upload-box__preview" :ref="" />
        <div class="upload-box__icon">
          <IconUpload />
        </div>
        <!-- <img
          src="../../../public/assets/icons/upload.svg"
          alt="upload icon"
          class="upload-box__icon"
        /> -->
        <p class="upload-box__text-helper">
          تصویر را بکشید و اینجا رها کنید یا
          <span class="upload-box__text-helper--important">کلیک کنید</span>.
        </p>
        <input type="file" accept="image/*" id="input-file1" class="upload-box__input-file" @change="uploadFile"/>
      </label>
      <div class="file-section__detail">
        <p class="file-section__description">تصویر روی کارت ملی</p>
        <button type="button" class="file-section__option file-section__option--active">
          <IconMoreOption />
          <!-- <img src="../../../public/assets/icons/more-option.svg" alt="moreIcon" /> -->
          <ul class="tools-menu tools-menu--transition">
            <li class="tools-menu__item">
              <IconEdit />
              <!-- <img src="../../../public/assets/icons/edit.svg" alt="icon" /> -->
              <p>ویرایش</p>
            </li>
            <div class="tools-menu__divider"></div>
            <li class="tools-menu__item tools-menu__item--warring">
              <IconTrash />
              <!-- <img src="../../../public/assets/icons/trash.svg" alt="icon" /> -->
              <p>حذف</p>
            </li>
          </ul>
        </button>
      </div>
    </div>
    <div class="file-section">
      <label
        for="input-file2"
        class="file-section__upload-section file-section__upload-section--back upload-box"
      >
        <img alt="back image" class="upload-box__preview"/>
        <div class="upload-box__icon">
          <IconUpload />
        </div>
        <!-- <img
          src="../../../public/assets/icons/upload.svg"
          alt="upload icon"
          class="upload-box__icon"
        /> -->
        <p class="upload-box__text-helper">
          تصویر را بکشید و اینجا رها کنید یا
          <span class="upload-box__text-helper--important">کلیک کنید</span>.
        </p>
        <input type="file" accept="image/*" id="input-file2" class="upload-box__input-file" />
      </label>
      <div class="file-section__detail">
        <p class="file-section__description">تصویر پشت کارت ملی</p>
        <button type="button" class="file-section__option file-section__option--active">
          <IconMoreOption />
          <!-- <img src="../../../public/assets/icons/more-option.svg" alt="moreIcon" /> -->
          <ul class="tools-menu tools-menu--transition">
            <li class="tools-menu__item">
              <IconEdit />
              <!-- <img src="../../../public/assets/icons/edit.svg" alt="icon" /> -->
              <p>ویرایش</p>
            </li>
            <div class="tools-menu__divider"></div>
            <li class="tools-menu__item tools-menu__item--warring">
              <IconTrash />
              <!-- <img src="../../../public/assets/icons/trash.svg" alt="icon" /> -->
              <p>حذف</p>
            </li>
          </ul>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$transition-duration: 0.3s;
$transition-timing-function: ease-out;

.upload-files-section {
  @include global.customFlex(row, center, center, 2.5rem);
  // display: none;
}
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
    display: none;
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

.tools-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  @include global.customFlex(column, flex-start, stretch, 0.75rem);
  padding: 0;
  height: 0;
  border-radius: 0.75rem;
  background: var(--white);
  box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
  overflow: hidden;
  opacity: 0;
  list-style: none;
  @include global.fontStyle(0.825rem);
  line-height: 1.25rem;
  color: var(--text-title);

  &--transition {
    transition:
      height $transition-duration $transition-timing-function,
      opacity $transition-duration $transition-timing-function,
      padding $transition-duration $transition-timing-function;
  }

  &__item {
    text-wrap: nowrap;
    @include global.customFlex($alignItem: center, $gap: 0.5rem);

    &--warring {
      color: var(--fail-500);
    }
  }

  &__divider {
    width: 100%;
    border-bottom: 1px solid #e2edff;
  }
}
</style>
