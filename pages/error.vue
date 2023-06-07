<template>
  <div>
    <h1>{{ error.statusCode + ": " + error.statusMessage}}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>