import { ref } from 'vue'

export const PAGES_LENGTH = 30
export const currentIndexPage = ref(1)
export const pages = ref([1, 2, 3])

export const checkPagination = (pageIndex) => {
  currentIndexPage.value = pageIndex
  if (pageIndex == 2) {
    if (pages.value[2] != PAGES_LENGTH) {
      pages.value = [++pages.value[0], ++pages.value[1], ++pages.value[2]] // 123 -> 234
      currentIndexPage.value = pageIndex - 1
    }
  } else if (pageIndex == 0) {
    if (pages.value[0] != 1) {
      pages.value = [--pages.value[0], --pages.value[1], --pages.value[2]] // 234 -> 123
      currentIndexPage.value = pageIndex + 1
    }
  }
}

export const goToPage = (event) => {
  checkPagination(event.target.value)
}
export const forward = () => {
  if (currentIndexPage.value < 2) {
    checkPagination(currentIndexPage.value + 1)
  }
}
export const backward = () => {
  if (currentIndexPage.value > 0) {
    checkPagination(currentIndexPage.value - 1)
  }
}
