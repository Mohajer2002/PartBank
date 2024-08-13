<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  show:{
    type:Boolean,
    required:true
  }
})


const setToastColor = (type) => {
  switch (type) {
    case 'success':
      return 'toast-success'
    case 'warning':
      return 'toast-warning'
    case 'error':
      return 'toast-error'

    default:
      break
  }
}

const setToastIcon = (type) => {
  switch (type) {
    case 'success':
      return '/src/assets/check-circle-svgrepo-com.svg'
    case 'warning':
      return '/src/assets/info-svgrepo-com (1).svg'
    case 'error':
      return '/src/assets/close-ellipse-svgrepo-com (1).svg'

    default:
      break
  }
}
</script>
<template>
  <div v-if="props.show" class="toast-container">
   
    <div class="information-box__toast toast" :class="setToastColor(props.type)">
      {{ props.text }}

      <img class="toat-icon" :src="setToastIcon(props.type)" />
    </div>
  </div>
</template>
<style scoped>
@font-face {
  font-family: 'peyda';
  src: url('../assets/Peyda-Bold.ttf');
}

@keyframes test {
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
.toast-container{
    padding-top: 1rem;
}
.toast {
  font-family: 'peyda';
  display: flex;
  justify-content: center;
  height: 2.75rem;
  width: 17rem;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  color: white;
  border-radius: 1rem;
  animation: test 2s linear infinite;
}
.toat-icon {
  width: 24px;
  height: 24px;
}
.toast-success {
  background-color: #198754 ;
}
.toast-warning {
  background-color: #ffc107 ;
  color: black;
}
.toast-error {
  background-color: #dc3545 ;
}
</style>
