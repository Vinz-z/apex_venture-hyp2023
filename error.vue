<template>
  <div>
    <apex-header />
    <banner image-url="/images/banners/error.jpg" :title="`Oops! ${error.statusCode}`" :caption="error.statusMessage"/>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null,
  }
})

useHead({
  title: `Oops! ${props.error.statusCode}`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: props.error.statusMessage,
    },
  ],
});
</script>