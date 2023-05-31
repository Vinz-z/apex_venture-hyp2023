<template>
    <banner 
    :imageUrl="project.banner ?? `/images/banners/sports.png`"
    :title="project.name"
    :caption="project.short_overview"
    />
    <div class="grid grid-cols-2 gap-4 max-w-6xl mx-auto my-4 place-item-center">
        <div class="relative col-span-2">
            <div class="absolute z-10 top-0 bottom-0 right-[-4rem] flex flex-col justify-center">
                <nuxt-link v-for="area in project.areas" :to="area2route(area.name)" class="
                flex flex-row content-center justify-start items-center 
                w-60 my-4 py-2 medium-round-right 
                bg-[var(--clickable-color)] drop-shadow-lg">
                <img :src="area.icon" class="w-10 h-10 mx-6">
                <div class="text-xl font-bold">{{ area.name }}</div>
            </nuxt-link>
        </div>
        <titled-card :title="project.name" class="z-0">
            <div class="flex items-center relative">
                <div class="m-4 w-1/5">
                    <img :src="project.logo" class="w-40 bg-white">
                    <div class="text-xl font-bold">Office</div>
                    <div class="text-xl">{{ project.office }}</div>
                    <div class="text-xl font-bold">Supervisor</div>
                    <nuxt-link :to="person2route(project.supervisor)" class="text-xl" style="color: var(--clickable-color)">{{ project.supervisor }}</nuxt-link>
                </div>
                <p class="m-4 w-4/5 text-xl">{{ project.overview_text }}</p>
                <div class=" mr-40"></div>
            </div>
        </titled-card>
    </div>
    <titled-card :title="`The impact of ${project.name}`">
        <p class="text-xl">{{ project.impact_text }}</p>
    </titled-card>
    <data-grid
    :dataTopLeft="project.statistics[0].value"
    :captionTopLeft="project.statistics[0].key"
    :dataTopRight="project.statistics[1].value"
    :captionTopRight="project.statistics[1].key"
    :dataBottomLeft="project.statistics[2].value"
    :captionBottomLeft="project.statistics[2].key"
    :dataBottomRight="project.statistics[3].value"
    :captionBottomRight="project.statistics[3].key"
    />
    <img :src="project.team_image" class="my-auto big-round-left shadow">
    <titled-card :title="`${project.name} Team`" class="object-contain">
        <div class="grid grid-cols-2 gap-4">
            <div v-for="[ key, value ] of Object.entries(project.team)" class="align-self-center object-contain">
                {{ console.log(key, value) }}
                <div class="text-xl font-bold">{{ key }}</div>
                <div class="flex flex-wrap flex-col text-xl">
                    <div  v-for="person in value">{{ person }}</div>
                </div>
            </div>
        </div>
    </titled-card>
    <div class="col-span-2">
        <div class="grid grid-cols-9 h-80 place-items-center">
            <div class="col-span-4 bg-red" :style="`background-image: ${project.previuous.banner};`">
                gion
            </div>
            <div class="h-2/3 w-0 border-2 border-gray-500 m-1"></div>
            <div class="col-span-4 bg-blue" :style="`background-image: ${project.next.banner};`">
                piero
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import TitledCard from "~/components/TitledCard.vue";
import DataGrid from "~/components/DataGrid.vue";
const project = await useFetch(() => '/api/projects/' + useRoute().params.name).then(({ data, error }) => data);
console.log(project)
</script>

<style scoped>
.logo-image {
    background-color: var(--white-color);
    border-radius: var(--big-round) 0px;
    padding: var(--big-round)/2;
    margin: 10px;
    height: 200px;
    width: 200px;
    object-fit: cover;
}
</style>