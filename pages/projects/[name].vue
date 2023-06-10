<template>
    <banner
        :imageUrl="project.banner ?? `/images/banners/sports.png`"
        :title="project.name"
        :caption="project.short_description"
    />
    <div
        class="self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto"
    >
        <div class="relative text-[var(--white-color)] desktop:col-span-2">
        <titled-card :title="project.name" class="z-0">
            <div class="flex flex-col tablet:flex-row items-center">
            <div class="m-4 tablet:w-1/5">
                <img
                :src="project.logo"
                class="w-40 h-40 p-2 my-2 bg-white object-contain drop-shadow-lg rounded-tl-2xl rounded-br-2xl"
                />
                <div class="text-xl font-bold">Office</div>
                <div class="text-xl">{{ project.office }}</div>
                <div class="text-xl font-bold">Supervisor</div>
                <nuxt-link :to="`/team/${name2route(project.supervisor.name)}`" class="text-xl" style="color: var(--clickable-color)">{{ project.supervisor.name }}</nuxt-link>
            </div>
            <p class="m-4 tablet:w-4/5 text-xl">{{ project.long_description }}</p>
            <div class="hidden desktop:block mr-40"></div>
            </div>
        </titled-card>
        <div
            class="flex flex-col z-10 items-center top-0 bottom-0 right-[-4rem] justify-center desktop:absolute"
        >
            <nuxt-link
            v-for="area in project.areas"
            :to="`/areas/${name2route(area.name)}`"
            class="flex flex-row content-center justify-start items-center w-60 my-4 py-2 medium-round-right bg-[var(--clickable-color)] drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition duration-100 ease-out hover:ease-in"
            >
            <img :src="area.icon" class="w-10 h-10 mx-6" />
            <div class="text-xl font-bold">{{ area.name }}</div>
            </nuxt-link>
        </div>
        </div>
        <titled-card :title="`The impact of ${project.name}`">
        <p class="text-xl">{{ project.impact_description }}</p>
        </titled-card>
        <data-grid
        :dataTopLeft="project.stats[0].value"
        :captionTopLeft="project.stats[0].caption"
        :dataTopRight="project.stats[1].value"
        :captionTopRight="project.stats[1].caption"
        :dataBottomLeft="project.stats[2].value"
        :captionBottomLeft="project.stats[2].caption"
        :dataBottomRight="project.stats[3].value"
        :captionBottomRight="project.stats[3].caption"
        />
        <img :src="project.team_image" class="my-auto big-round-left shadow" />
        <titled-card :title="`${project.name} Team`" class="object-contain">
            <div class="grid grid-cols-2 gap-4">
                <div
                v-for="[role, people] of Object.entries(
                    project.team.reduce((acc, { person_role, person_name }) => {
                    if (!acc[person_role]) {
                        acc[person_role] = [];
                    }
                    acc[person_role].push(person_name);
                    return acc;
                    }, {})
                )"
                :key="role"
                class="align-self-center object-contain"
                >
                <div class="text-xl font-bold">{{ role }}</div>
                <div class="flex flex-wrap flex-col text-xl">
                    <div v-for="person in people">{{ person }}</div>
                </div>
                </div>
            </div>
        </titled-card>
        <nuxt-link :to="`/projects/${name2route(previous.name)}`" class="p-8 bg-blue-500">prev</nuxt-link>
        <nuxt-link :to="`/projects/${name2route(next.name)}`" class="p-8 bg-blue-500">next</nuxt-link>
    </div>
</template>

<script setup>
const target = route2name(useRoute().params.name)
const project_list = await getProjectList()

const project = project_list.find(project => project.name === target)
if (!project) throw createError({ statusCode: 404, statusMessage: `Project '${target}' not found.` })

let index = project_list.findIndex(project => project.name === target)
const previous = project_list[(index - 1 + project_list.length) % project_list.length]

index = project_list.findIndex(project => project.name === target)
const next = project_list[(index + 1) % project_list.length]

useHead({title: `Apex Venture | ${project.name ?? ':('}`});
</script>
