<template>
    <div class="person-box">
        <div class="title-left-bottom">
            {{ role }}
        </div>
        <div class="person-content">
            <img class="person-image" :src="image">
            <div class="bg1-left"></div>
            <div class="bg2-right"></div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },

    },
  };
  </script>
  <style scoped>
  .person-box {
    color: var(--white-color);
    position: relative;
    align-items: flex-end;
    display: flex;
  }
  
  .title-left-bottom {
    position: absolute;
    font-size: larger;
    bottom: 10%;
    background-color: var(--primary-color);
    padding: 20px 60px;
    width: 70%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 5;
    border-radius: 0px var(--big-round);
    margin-left: 0; 
    margin-right: auto;
  }
  
  .person-content {
    display: flex;
    background-color: var(--secondary-color);
    padding: 1rem;
    position: relative;
    top: -85px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 0px var(--big-round);
  }

  .bg1-left {
        padding: 5%;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        width: 30%;
        height: 30%;
        border-radius: 50%;
        background-color: var(--clickable-color);
        z-index: 1;
    }

    .bg2-right {
        margin: 10%;
        top: 35%;
        left: 35%;
        padding: 5%;
        position: absolute;
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: var(--decoration-color);
        z-index: 2;
    }

    .person-image {
        width: 80%;
        z-index: 3;
    }
  

  </style>
  