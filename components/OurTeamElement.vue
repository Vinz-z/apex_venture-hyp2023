<template>
    <div class="box">
        <div class="image-column">
            <img class="image" :src="person_image">
            <div :class="[`bg-shape1-${left ? 'left' : 'right'}`]">
            </div>
            <div :class="[`bg-shape2-${left ? 'right' : 'left'}`]">
            </div>
        </div>
        <div class="data-column">
            <div class="name">
                {{ person_name }}
            </div>
            <div class="role">
                {{ person_role }}
            </div>
            <div class="cv">
                {{ person_shortcv }}
            </div>
            <div class="button mt-10">
                <NuxtLink :to="person2route(person_name)"><ApexButton
          caption="See more"/></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script  setup lang="ts">
const props = defineProps({
    person_name: {
      type: String,
      required: true,
    },
    person_image: {
      type: String,
      required: true,
    },
    person_role: {
      type: String,
      required: true,
    },
    person_shortcv: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      required: true,
    },
  });

</script>

<style scoped>
    .box {
        display: flex;
        position: relative;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background-color: var(--secondary-color);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;
        height: auto;
        flex: 1 1 50%;
        margin: 3%;
        max-width: 500px;
    }

    .image-column {
        position: relative;
        padding-left: 3%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: wrap;
        width: 200px;
    }
    
    .image {
        width: 100%;
        z-index: 3;
    }

    .data-column {
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 5%;
        text-align: left;
        flex-wrap: wrap;
        max-width: 300px;
        width: 100%;
        min-height: 300px;
    }

    .name {
        font-weight: bold;
        position: relative;
        margin-bottom: 3%;
        width: 100%;
        font-size: 150%;
        color: var(--white-color);
    }    
    
    .role {
        font-weight: bold;
        position: relative;
        width: 100%;
        font-size: 120%;
        color: var(--decoration-color);
    }

    .cv {
        position: relative;
        font-size: 80%;
        width: 100%;
        height: fit-content;
        padding-right: 5%;
        color: var(--white-color);
    }

    .button {
        top: 68%;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
    }

    
    .bg-shape1-left {
        padding: 5%;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: var(--clickable-color);
        z-index: 1;
    }

    .bg-shape1-right {
        padding: 5%;
        position: absolute;
        top: 50%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: var(--clickable-color);
        z-index: 1;
    }
    
    .bg-shape2-left {
        margin: 10%;
        top: 35%;
        left: 10%;
        padding: 5%;
        position: absolute;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background-color: var(--decoration-color);
        z-index: 2;
    }

    .bg-shape2-right {
        margin: 10%;
        top: 35%;
        left: 35%;
        padding: 5%;
        position: absolute;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background-color: var(--decoration-color);
        z-index: 2;
    }
</style>