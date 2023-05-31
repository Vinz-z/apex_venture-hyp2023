<template>
  <div class="titled-card">
    <div class="font-bold text-3xl" :class="['title', `title-${left ? 'left' : 'right'}`]">
      <h2>{{ title }}</h2>
    </div>
    <div :class="['content-box', `content-box-${left ? 'left' : 'right'}`,]">
    <div class="content">
      <slot />
    </div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  left: { type: Boolean, default: true, },
})
</script>

<style scoped>
.title div {
  margin: 0;
}

.titled-card {
  color: var(--white-color);
  position: relative;
}

.title {
  position: relative;
  background-color: var(--primary-color);
  padding: 20px 60px;
  width: fit-content;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1;
}

.title-right {
  border-radius: 0px var(--big-round);
  margin-left: auto; 
  margin-right: 0;
}

.title-left {
  border-radius: var(--big-round) 0px;
}

.content-box {
  background-color: var(--secondary-color);
  padding: 30px;
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: -40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.content-box-right {
  border-radius: 0px var(--big-round);
}

.content-box-left {
  border-radius: var(--big-round) 0px;
}

.content {
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
}
</style>
