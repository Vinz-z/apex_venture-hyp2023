<template>
  <div id="card">
    <div class="flex flex-col justify-center items-center">
      <div class="text-4xl font-bold text-center" :style="{ color: color }">
        {{ data }}
      </div>
      <div class="text-l font-bold wrap text-center" :style="{ color: color }">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
});
</script>

<style scoped>
#card {
  background-color: var(--white-color);
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  padding: 20px;
  width: 230px;
  height: 130px;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
