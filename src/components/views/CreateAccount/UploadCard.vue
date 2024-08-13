<script>

</script>
<template>
  <section class="upload-files-section">
          <div class="file-section">
            <label
              for="input-file1"
              class="file-section__upload-section file-section__upload-section--front upload-box"
            >
              <img alt="front image" class="upload-box__preview" />
              <img
                src="../../../public/assets/icons/upload.svg"
                alt="upload icon"
                class="upload-box__icon"
              />
              <p class="upload-box__text-helper">
                تصویر را بکشید و اینجا رها کنید یا
                <span class="upload-box__text-helper--important">کلیک کنید</span
                >.
              </p>
              <input
                type="file"
                accept="image/*"
                id="input-file1"
                class="upload-box__input-file"
              />
            </label>
            <div class="file-section__detail">
              <p class="file-section__description">تصویر روی کارت ملی</p>
              <button
                type="button"
                class="file-section__option file-section__option--active"
              >
                <img
                  src="../../../public/assets/icons/more-option.svg"
                  alt="moreIcon"
                />
                <ul class="tools-menu tools-menu--transition">
                  <li class="tools-menu__item">
                    <img
                      src="../../../public/assets/icons/edit.svg"
                      alt="icon"
                    />
                    <p>ویرایش</p>
                  </li>
                  <div class="tools-menu__divider"></div>
                  <li class="tools-menu__item tools-menu__item--warring">
                    <img
                      src="../../../public/assets/icons/trash.svg"
                      alt="icon"
                    />
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
              <img alt="back image" class="upload-box__preview" />
              <img
                src="../../../public/assets/icons/upload.svg"
                alt="upload icon"
                class="upload-box__icon"
              />
              <p class="upload-box__text-helper">
                تصویر را بکشید و اینجا رها کنید یا
                <span class="upload-box__text-helper--important">کلیک کنید</span
                >.
              </p>
              <input
                type="file"
                accept="image/*"
                id="input-file2"
                class="upload-box__input-file"
              />
            </label>
            <div class="file-section__detail">
              <p class="file-section__description">تصویر پشت کارت ملی</p>
              <button
                type="button"
                class="file-section__option file-section__option--active"
              >
                <img
                  src="../../../public/assets/icons/more-option.svg"
                  alt="moreIcon"
                />
                <ul class="tools-menu tools-menu--transition">
                  <li class="tools-menu__item">
                    <img
                      src="../../../public/assets/icons/edit.svg"
                      alt="icon"
                    />
                    <p>ویرایش</p>
                  </li>
                  <div class="tools-menu__divider"></div>
                  <li class="tools-menu__item tools-menu__item--warring">
                    <img
                      src="../../../public/assets/icons/trash.svg"
                      alt="icon"
                    />
                    <p>حذف</p>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </section>
</template>

<style>

</style>