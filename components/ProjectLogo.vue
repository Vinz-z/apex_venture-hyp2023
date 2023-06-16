<!-- Minimal Component that describe a project with essential information like logo and name-->
<template>
    <NuxtLink :to="`/projects/${name2route(project_name)}`">
        <div class="shape-container group">
            <div class="shape">
                <nuxt-img
                    class="project-logo"
                    :src="project_image"
                    :alt="project_name"
                    sizes="sm:100vw md:50vw lg:400px"
                    format="webp"
                />
            </div>

            <div
                class="project-button flex justify-center text-center items-end top-[-40px] group-hover:top-[-40px] desktop:top-[-100px]"
            >
                <div
                    class="project-content mb-3 wrap text-ellipsis overflow-hidden"
                >
                    {{ project_name }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    project_image: {
        type: String,
        required: true,
    },
    project_name: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.shape-container {
    height: 210px;
    padding-left: 30px;
    padding-right: 30px;
}

.shape {
    border-bottom-right-radius: var(--big-round);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    padding: 20px;
    border-radius: var(--big-round) 0px;
    background-color: var(--white-color);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.project-logo {
    height: 125px;
    width: 125px;
    object-fit: contain;
    z-index: 2;
    max-height: 100%;
    max-width: 100%;
}

.project-button {
    position: relative;
    z-index: -1;
    transition: 0.2s ease;
    width: 150px;
    height: 100px;
    border-bottom-right-radius: var(--big-round);
    background-color: var(--clickable-color);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
