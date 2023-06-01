<template>
    <nuxt-link :to="project2route(name)" class="project-preview">
        <div class="image-container">
            <div class="project-image" :style="`background-image: url(${logo_path});`"></div>
        </div>
        <div class="project-info">
            <h2 class="w-full text-center text-2xl font-bold leading-normal">{{ name }}</h2>
            <div class="h-[30px] w-full flex flex-row gap-4 align-center justify-center">
                <img :src="area.icon" alt="area icon" class="object-contain w-[30px]" v-for="area in areas"/>
            </div>
            <div class="text-justify m-4">{{ short_overview }}</div>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    logo_path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    short_overview: {
        type: String,
        required: true,
    },
    areas: {
        type: Object as PropType<Area[]>,
        default: () => [],
    },
});

const project2route = (name: string) => `/projects/${name.toLowerCase().replace(/ /g, "-")}`;

</script>

<style scoped>
.project-preview {
    height: 400px;
    width: 285px;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.image-container {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clickable-color);
    border-radius: var(--big-round) 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.project-image {
    background-color: var(--white-color);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--big-round);
    height: 160px;
    width: 245px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.project-info {
    background-color: var(--secondary-color);
    border-radius: var(--big-round) 0px;
    position: relative;
    top: -50px;
    padding-top: 50px;
    width: 100%;
    height: 250px;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: -1;
}

.area-container {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.project-info p {
    width: 100%;
    text-align: center;
}
</style>