<template>
  <div
    class="mega-container"
    @mouseover="expandComponents"
    @mouseout="collapseComponents"
  >
    <NuxtLink
      :to="'/areas/' + title"
      class="area-button"
      :style="{
        width: isHovered ? '360px' : '500px',
        borderBottomRightRadius: isHovered ? '0px' : 'var(--big-round)',
      }"
      onclick=""
    >
      <div class="icon-image">
        <img :src="iconUrl" alt="Icon Image" />
      </div>
      <div class="area-content">
        <h4 class="area-title">{{ title }}</h4>
        <div class="area-caption">{{ caption }}</div>
      </div>
    </NuxtLink>
    <NuxtLink
      :to="'/areas/' + title + '/projects'"
      class="projects-button"
      :style="{ width: isHovered ? '125px' : '0' }"
    >
      <div
        class="project-content"
        :style="{ visibility: isHovered ? 'visible' : 'hidden' }"
      >
        See all {{ title }} projects
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    expandComponents() {
      this.isHovered = true;
    },
    collapseComponents() {
      this.isHovered = false;
    },
  },

  name: "AreaPreview",
  props: {
    iconUrl: {
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
.mega-container {
  width: 500px;
  height: 140px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 3%;
  justify-content: left;
  align-items: left;
}

.area-button {
  display: flex;
  border-top-left-radius: var(--big-round);
  border: none;
  background-color: var(--clickable-color);
  height: 140px;
  width: 500px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  transition: 0.3s ease;
  overflow: hidden;
}

.projects-button {
  height: 140px;
  width: 0px;
  border-bottom-right-radius: var(--big-round);
  border: none;
  background-color: var(--clickable-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
  display: flex;
  align-items: center;
}

.icon-image img {
  margin-left: 20px;
  margin-right: 20px;
  width: 90px;
  height: 90px;
  object-fit: cover;
}

.area-content {
  padding-top: 2%;
  align-self: flex-start;
  width: 60%;
  flex-wrap: wrap;
  background-color: var(--clickable-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-wrap: break-word;
}

.area-title {
  margin: 0%;
  color: var(--white-color);
  text-align: left;
  width: 100%;
  align-self: flex-start;
  font-size: large;
  font-weight: bold;
}

.area-caption {
  padding-top: 2%;
  padding-right: 2%;
  color: var(--white-color);
  text-align: left;
  width: 100%;
  align-self: flex-start;
  font-size: small;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Specify the number of lines you want to display before ellipsis */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}

.project-content {
  display: flex;
  text-align: center;
  padding: 5%;
  color: var(--white-color);
  font-size: small;
  word-wrap: break-word;
  visibility: hidden;
}
</style>
