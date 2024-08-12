<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'primary'
  },
  icon: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false,
    default: 'sm-button'
  }
})
</script>
<template>
  <div class="button-container">
    <button class="base-button" :class="[props.type, props.size]">
      <!-- <IconJoon/> -->
      <span>
        {{ props.text }}
      </span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.button-container {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.base-button {
  border: 0;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
}
.primary {
  color: white;
  background-color: #4152a0;
}
.secondary {
  color: rgb(0, 0, 0);
  background-color: #eceef6;
}
/* .lg-button {
  width: 22rem;
}

.md-button {
  width: 18rem;
}
.sm-button {
  width: 13rem;
} */
</style>
