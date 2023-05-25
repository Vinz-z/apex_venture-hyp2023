<template>
    <div 
    class="mega-container"
    @mouseover="expandComponents"
    @mouseout="collapseComponents">
        <button 
        class="area-button"
        :style="{ width: isHovered ? '300px' : '400px' ,
      borderBottomRightRadius: isHovered ? '0px' : 'var(--big-round)' }"
        onclick="" >

            <div class="icon-image">
                <img :src="iconUrl" alt="Icon Image">
            </div>
            <div class="area-content">
                <h4 class="area-title">{{ title }}</h4>
                <div class="area-caption">{{ caption }}</div>
            </div>

        </button>
        <button 
        class="projects-button"
        :style="{ width: isHovered ? '100px' : '0' }">

            <div 
            class="project-content"
            :style="{ visibility: isHovered ? 'visible' : 'hidden' }">

            See all {{ title }} projects</div>

        </button>
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
    width: 400px;
    height: 100px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1.5%;
    justify-content: center;
    align-items: center;
  }
  
  .area-button {
    display: flex;
    border-top-left-radius: var(--big-round);
    border: none;
    background-color: var(--clickable-color);
    height: 100px;
    width: 400px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s ease;
  }

  .projects-button {
    height: 100px;
    width: 0px;
    border-bottom-right-radius: var(--big-round);
    border: none;
    background-color: var(--clickable-color);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease;
    padding: 0; 
    font-size: 0;
  }

  .icon-image img {
    margin-left: 20px;
    margin-right: 20px;
    width: 75px;
    height: 75px;
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

.area-title{
  margin: 0%;
  color: var(--white-color);
  text-align: left;
  width: 100%;
  align-self: flex-start;
  font-size: medium;
}

.area-caption {
  padding-top: 2%;
  color: var(--white-color);
  text-align: left;
  width: 100%;
  align-self: flex-start;
  font-size: xx-small;
}
.project-content {
  color: var(--white-color);
  align-self: flex-start;
  font-size: xx-small;
  align-items: flex-start;
  overflow-wrap: break-word;
  word-wrap: break-word;
  visibility: hidden;
}

  </style>
  