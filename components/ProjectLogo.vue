<template>
    <div class="shape-container"
      @mouseover="expandComponents"
      @mouseout="collapseComponents"
      >
        <div class="shape">
            <img class="project-logo" :src="project_image">
        </div>
        <NuxtLink to="/projects/_name">
          <button class="project-button"
            :style="{ height: isHovered ? '85px' : '0' }">
            <div 
                class="project-content"
                :style="{ visibility: isHovered ? 'visible' : 'hidden' }">
                {{ project_name }}
            </div>
          </button>
        </NuxtLink>
    </div>

</template>

<script>

export default {
    data() {
      return {
        isHovered: false
      };
    },
    methods: {
      expandComponents() {
        this.isHovered = true;
      },
      collapseComponents() {
        this.isHovered = false;
      }
    },
  props: {
    project_image: {
      type: String,
      required: true,
    },
    project_name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.shape-container{
  height: 230px;
  width: 190px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  margin-top: 2%;
  padding-left: 20px;
  padding-right: 20px;
}
.shape {
  border-bottom-right-radius: var(--big-round);
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  padding: 3%;
  height: 150px;
  border-radius: var(--big-round) 0px;
  background-color: var(--white-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.project-logo {
  position: relative;
  z-index: 2;
  max-height: 100%;
  max-width: 100%;
}

.project-button {
  position: relative;
  z-index: -1;
  margin-top: -25px;
  transition: 0.3s ease;
  width: 100%;
  border-bottom-right-radius: var(--big-round);
  background-color: var(--clickable-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.project-content {
  padding-top: 20px;
}


</style>