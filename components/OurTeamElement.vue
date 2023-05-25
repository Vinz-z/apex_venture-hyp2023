<template>
    <div class="box">
        <div class="image-column">
            <img class="image" :src="img">
            <div :class="[`bg-shape1-${left ? 'left' : 'right'}`]">
            </div>
            <div :class="[`bg-shape2-${left ? 'right' : 'left'}`]">
            </div>
        </div>
        <div class="data-column">
            <div class="name">
                {{ title }}
            </div>
            <div class="role">
                {{ role }}
            </div>
            <div class="cv">
                {{ cv }}
            </div>
            <div class="button">
                <NuxtLink :to="{path: '/person', query: {title, img, role}}"><button class="av-button">See more</button></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: true,
    },
    img: {
        type: String,
        required: true,
    },
    left: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
    .box {
        display: flex;
        position: relative;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background-color: var(--secondary-color);
        max-width: 600px;
        min-width: 500px;
        max-height: 100%;
        min-height: 300px;
        flex: 1 1 40%;
        margin: 3%;
        text-align: center;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .image-column {
        position: relative;
        min-width: 50%;
        max-width: 50%;
        min-height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .data-column {
        position: relative;
        align-items: right;
        padding: 5%;
        min-width: 50%;
        max-width: 50%;
        min-height: 100%;
        max-height: 100%;
        text-align: left;
    }

    .image {
        width: 80%;
        z-index: 3;
    }

    .bg-shape1-left {
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

    .bg-shape1-right {
        padding: 5%;
        position: absolute;
        top: 50%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 30%;
        height: 30%;
        border-radius: 50%;
        background-color: var(--clickable-color);
        z-index: 1;
    }

    .bg-shape2-right {
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

    .bg-shape2-left {
        margin: 10%;
        top: 35%;
        left: 10%;
        padding: 5%;
        position: absolute;
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: var(--decoration-color);
        z-index: 2;
    }

    .name {
        font-weight: bold;
        position: relative;
        max-height: 30px;
        min-height: 30px;
        font-size: 150%;
        padding-top: 5%;
        padding-bottom: 5%;
        color: var(--white-color);
    }    
    
    .role {
        font-weight: bold;
        position: relative;
        max-height: 30px;
        min-height: 30px;
        font-size: 120%;
        padding-top: 5%;
        padding-bottom: 5%;
        color: var(--decoration-color);
    }

    .cv {
        position: relative;
        font-size: 80%;
        max-height: 70%;
        min-height: 70%;
        padding-top: 5%;
        padding-bottom: 5%;
        padding-right: 5%;
        color: var(--white-color);
    }

    .button {
        top: 68%;
        position: absolute;
    }
</style>