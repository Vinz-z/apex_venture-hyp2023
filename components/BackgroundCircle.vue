<!-- Simple circle used to decorate the background-->
<template>
    <div class="circle hidden desktop:block" :style="{ top: top + '%', left: left + '%' ,width: size + 'px', height: size + 'px', backgroundColor: color}"></div>
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
      default: "var(--clickable-color)"
    }
    }
  }
  </script>
  
  <style scoped>
  .circle {
    position: absolute;
    border-radius: 50%;
    z-index: 0;
  }
  </style>