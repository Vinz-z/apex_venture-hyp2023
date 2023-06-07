<template>
    <banner 
    :imageUrl="project.banner ?? `/images/banners/sports.png`"
    :title="project.name"
    :caption="project.short_description"
    />
    <div class="self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto">
        <div class="relative text-[var(--white-color)] desktop:col-span-2">
            <titled-card :title="project.name" class="z-0">
                <div class="flex flex-col tablet:flex-row items-center">
                    <div class="m-4 tablet:w-1/5">
                        <img :src="project.logo" class="w-40 h-40 p-2 my-2 bg-white object-contain drop-shadow-lg rounded-tl-2xl rounded-br-2xl">
                        <!--<div class="text-xl font-bold">Office</div>
                        <div class="text-xl">{{ project.office }}</div>
                        <div class="text-xl font-bold">Supervisor</div>
                        <nuxt-link :to="person2route(project.supervisor)" class="text-xl" style="color: var(--clickable-color)">{{ project.supervisor }}</nuxt-link>-->
                    </div>
                    <p class="m-4 tablet:w-4/5 text-xl">{{ project.long_description }}</p>
                    <div class="hidden desktop:block mr-40"></div>
                </div>
            </titled-card>
            <div class="flex flex-col z-10 items-center top-0 bottom-0 right-[-4rem] justify-center desktop:absolute">
                <nuxt-link v-for="area in areas" :to="area2route(area.name)" class="
                    flex flex-row content-center justify-start items-center 
                    w-60 my-4 py-2 medium-round-right 
                    bg-[var(--clickable-color)] drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition duration-100 ease-out hover:ease-in">
                    <img :src="area.icon" class="w-10 h-10 mx-6">
                    <div class="text-xl font-bold">{{ area.name }}</div>
                </nuxt-link>
            </div>
        </div>
        <titled-card :title="`The impact of ${project.name}`">
            <p class="text-xl">{{ project.impact_description }}</p>
        </titled-card>
        <!--<data-grid
        :dataTopLeft="project.statistics[0].value"
        :captionTopLeft="project.statistics[0].key"
        :dataTopRight="project.statistics[1].value"
        :captionTopRight="project.statistics[1].key"
        :dataBottomLeft="project.statistics[2].value"
        :captionBottomLeft="project.statistics[2].key"
        :dataBottomRight="project.statistics[3].value"
        :captionBottomRight="project.statistics[3].key"
        />
        <img :src="project.team_image" class="my-auto big-round-left shadow">-->
        <titled-card :title="`${project.name} Team`" class="object-contain">
            <div class="grid grid-cols-2 gap-4">
                <!--<div v-for="[ key, value ] of Object.entries(project.team)" class="align-self-center object-contain">
                    <div class="text-xl font-bold">{{ key }}</div>
                    <div class="flex flex-wrap flex-col text-xl">
                        <div  v-for="person in value">{{ person }}</div>
                    </div>
                </div>-->
            </div>
        </titled-card>
        <div class="desktop:col-span-2">
            <div class="grid grid-cols-9 h-80 place-content-center">
                <div class="col-span-4 bg-red flex flex-row" :style="`background-image: url(\'${previous.banner}\');`">
                    <div class="h-full w-full">a</div>
                    <div class="h-full w-full">{{previous.name}}</div>
                    <div class="h-full w-full">a</div>
                </div>
                <div class="separator h-2/3 w-[1px] m-1 place-self-center"></div>
                <div class="col-span-4 bg-blue" :style="`background-image: url(\'${next.banner}\');`">
                    <div>a</div>
                    <div>{{next.name}}</div>
                    <div>a</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const name_param = useRoute().params.name
const project = await getProjectData(route2name(name_param))
const areas = await getAreasOfProject(project.id)
const previous = await getPreviousProject(project.id)
const next = await getNextProject(project.id)
</script>