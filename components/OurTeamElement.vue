<template>
    <div class="boxed">
        <div class="image-column">
            <img class="image" :src="img">
            <div class="bg-shape1">
            </div>
            <div class="bg-shape2">
            </div>
        </div>
        <div class="data-column">
            <div class="name">
                <h1>{{ title }}</h1>
            </div>
            <div class="role">
                <h2>{{ role }}</h2>
            </div>
            <div class="cv">
                <p>{{ cv }}</p>
            </div>
            <button class="av-button">See more</button>
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
    }
  },
};
</script>

<style>
    .boxed {
        display: flex;
        position: relative;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background-color: var(--secondary-color);
        max-width: 500px;
        min-width: 500px;
        max-height: 300px;
        min-height: 300px;
        flex: 1 1 40%;
        margin: 4%;
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
        width: 50%;
        min-height: 100%;
        text-align: left;
    }

    .image {
        width: 80%;
        z-index: 3;
    }

    .bg-shape1 {
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

    .bg-shape2 {
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

    .name {
        color: var(--white-color);
    }    
    
    .role {
        color: var(--decoration-color);
    }

    .cv {
        color: var(--white-color);
    }
</style>