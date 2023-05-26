<template>
  <div class="titled-card">
    <div :class="[{ title: true }, `title-${left ? 'left' : 'right'}`]">
      <div>{{ title }}</div>
    </div>
    <div
      :class="[
        { 'content-box': true },
        `content-box-${left ? 'left' : 'right'}`,
      ]"
    >
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    left: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.title div {
  margin: 0;
  font-size: x-large;
}

.titled-card {
  padding: 1rem;
  margin: 1rem;
  color: var(--white-color);
  position: relative;
  font-size: medium;
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
  padding: 1rem;
  position: relative;
  top: -50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.content-box-right {
  border-radius: 0px var(--big-round);
}

.content-box-left {
  border-radius: var(--big-round) 0px;
}

.content {
  padding: 20px;
}
</style>
