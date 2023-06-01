<template>
  <div class="banner">
    <div class="banner-image">
      <div class="banner-content">
        <div class="banner-caption">{{ caption }}</div>
      </div>
      <img
        :src="imageUrl"
        alt="Banner Image"
        :style="`object-position: center ${percentage}%;`"
      />
      <div class="banner-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: false,
      default: "",
    },
    percentage: {
      type: Number,
      required: false,
      default: 50,
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  border-bottom: var(--clickable-color) 5px solid;
  z-index: 1;
}

.banner-image {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-image img {
  filter: blur(3px);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.banner-content {
  position: absolute;
  color: var(--white-color);
  display: flex;
  z-index: 2;
  width: 50%;
}

.banner-caption {
  font-weight: bold;
  font-size: 2rem;
  display: flex-wrap;
  text-align: center;
}
</style>
