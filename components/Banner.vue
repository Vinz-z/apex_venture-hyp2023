<template>
  <div class="banner">
    <div class="banner-image">
      <img :src="imageUrl" alt="Banner Image" />
      <div class="banner-overlay"></div>
    </div>
    <div class="banner-content">
      <h1 class="banner-title">{{ title }}</h1>
      <p class="banner-caption">{{ caption }}</p>
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
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  border-bottom: var(--secondary-color) 5px solid;
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
  bottom: 0;
  left: 0;
  width: auto;
  padding: 20px;
  color: var(--white-color);
}

.banner-title {
  margin-bottom: 10px;
}

.banner-caption {
  width: 100%;
}
</style>
