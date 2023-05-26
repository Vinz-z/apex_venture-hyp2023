<template>
    <div class="project-preview">
        <div class="image-container">
            <div class="project-image" :style="`background-image: url(${logo_path});`"></div>
        </div>
        <div class="project-info">
            <h2>{{ name }}</h2>
            <div class="area-container">
                <NuxtLink :to="`/areas/${area}`" v-for="area in areas" :key="area">
                    <img :src="`/icons/areas/${area}.png`" alt="{{ area }}" height="30px" width="30px"/>
                </NuxtLink>
            </div>
            <p>{{ short_overview }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    logo_path: {
        type: String,
        default: 'https://picsum.photos/id/237/200/300',
    },
    name: {
        type: String,
        default: 'no title',
    },
    short_overview: {
        type: String,
        required: true,
        default: 'no caption',
    },
    areas: {
        type: Array,
        default: () => [],
    },
});
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
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clickable-color);
    border-radius: var(--big-round) 0px;
}

.project-image {
    background-color: var(--white-color);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--medium-round) 0px;
    width: 80%;
    height: 70%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.project-info {
    background-color: var(--primary-color);
    border-radius: var(--big-round) 0px;
    position: relative;
    top: -50px;
    padding-top: 50px;
    width: 100%;
    height: 60%;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: -1;
}

.project-info h2 {
    width: 100%;
    text-align: center;
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