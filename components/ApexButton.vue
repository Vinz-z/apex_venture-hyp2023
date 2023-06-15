<template>
  <button class="rectangle-button">
    <span> {{caption}} </span>
  </button>
</template>

<script setup>
    const props = defineProps({
        caption: {
            type: String,
            required: true,
        },
    })
</script>

<style scoped>
.rectangle-button {
  background-color: var(--clickable-color);
  color: var(--white-color);
  border: none;
  min-width: 150px;
  min-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
}

.rectangle-button:hover {
  transition: 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--clickable-color);
}
</style>
