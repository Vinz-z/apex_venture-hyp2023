<template>
    <div class="flex flex-col p-6">
        <div>
            <div class="flex justify-between mb-2">
                <div class="font-semibold">Filter By Area</div>
                <nuxt-link to="/projects" style="color: var(--clickable-color)">reset</nuxt-link>
            </div>
            <hr class="border-1 border-gray-500 m-1">
        </div>
        <nuxt-link to="/projects?filter_by=0" class="flex items-center justify-start gap-4 m-1 p-2" :id="selectedOne == 0 ? 'active' : ''">
            <div class="w-3"></div>
            Most Relevant Project
            <div class="w-3"></div>
        </nuxt-link>
        <div class="text-xs m-1">Technologies</div>
        <nuxt-link v-for="tech of technologies" :to="`/projects?filter_by=${tech.id}`" class="flex items-center justify-start gap-4 m-1 p-2" :id="selectedOne == tech.id ? 'active' : ''">
            <div class="w-3"></div>
            <img :src="tech.icon" class="w-6 h-6pl">
            <div>{{ tech.name }}</div>
            <div class="w-3"></div>
        </nuxt-link>
        <div class="text-xs m-1">Sectors</div>
        <nuxt-link v-for="sect in sectors" :to="`/projects?filter_by=${sect.id}`" class="flex items-center justify-start gap-4 m-1 p-2" :id="selectedOne == sect.id ? 'active' : ''">
            <div class="w-3"></div>
            <img :src="sect.icon" class="w-6 h-6">
            <div>{{ sect.name }}</div>
            <div class="w-3"></div>
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
    technologies: {
        type: Array,
        required: true
    },
    sectors: {
        type: Array,
        required: true
    },
    selectedOne: {
        type: Number,
        required: true
    }
})

const toggle = function () {
    console.log('toggle')
}
</script>

<style scoped>
#active {
    background-color: var(--clickable-color);
    border-radius: var(--medium-round) 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--white-color);
}
</style>