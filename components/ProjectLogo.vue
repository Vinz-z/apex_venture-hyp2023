<template>
    <div class="shape-container">
        <div class="shape"
            :style="{ 'border-bottom-right-radius' : isHovered ? '0' : 'var(--big-round)' }"
            @mouseover="expandComponents"
            @mouseout="collapseComponents"
            >
            <img class="project-logo" :src="project_image">
        </div>
        <NuxtLink to="/projects/_name">
          <button class="project-button"
            :style="{ height: isHovered ? '80px' : '0' }"
            @mouseover="expandComponents"
            @mouseout="collapseComponents">
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
    .shape{
        margin-bottom: 0;
        padding: 3%;
        height: 150px;
        border-radius: var(--big-round) 0px;
        background-color: var(--white-color);
    }

    .project-logo {
        height: 100%;
        width: 100%;
    }

    .project-button {
        width: 100%;
        border-bottom-right-radius: var(--big-round);
        background-color: var(--clickable-color);
    }

</style>