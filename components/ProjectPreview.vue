<!-- Component that describe a project in detail, it shows the logo, name and a short description of the project, 
    in addition it shows the areas that the project concerns-->
<template>
    <nuxt-link :to="`/projects/${name2route(name)}`" class="project-preview">
        <div class="image-container">
            <div
                class="project-image drop-shadow-lg"
                :style="`background-image: url(${logo});`"
            ></div>
        </div>
        <div class="project-info">
            <h2 class="w-full text-center text-2xl font-bold leading-normal">
                {{ name }}
            </h2>
            <div
                class="h-[30px] w-full flex flex-row gap-4 align-center justify-center"
            >
                <nuxt-img
                    v-for="area in areas_icons"
                    :src="area"
                    alt="area icon"
                    class="object-contain w-[30px]"
                    sizes="sm:100vw md:50vw lg:400px"
                />
            </div>
            <div class="text-wrap m-4">
                {{ truncateText(short_overview, 95) }}
            </div>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
    logo: {
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
    areas_icons: {
        type: Array<string>,
        required: true,
    },
});

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + "...";
    }
};
</script>

<style scoped>
.project-preview {
    height: 400px;
    width: 285px;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s ease-in-out;
}

.project-preview:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.03);
}

.image-container {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clickable-color);
    border-radius: var(--big-round) 0px;
    z-index: 1;
    position: relative;
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
