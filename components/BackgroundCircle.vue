<template>
    <div class="circle" :style="{ top: top + '%', left: left + '%' ,width: size + 'px', height: size + 'px', backgroundColor: color}"></div>
  </template>
  
  <script>
  export default {
    props: {
      top: {
        type: String,
        required: true
      },
      left: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      color: {
      type: String,
      default: "var(--clickable-color)" // Valore predefinito per il colore è rosso (#ff0000)
    }
    }
  }
  </script>
  
  <style scoped>
  .circle {
    position: fixed;
    border-radius: 50%;
    z-index: 0;
  }
  </style>