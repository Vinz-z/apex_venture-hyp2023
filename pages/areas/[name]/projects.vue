<template>
    <Banner :title="`${target} Projects`" :imageUrl="area.banner" />
    <div class="mb-10 flex flex-col tablet:flex-row">
        <div class="bg-[var(--secondary-color)] w-full drop-shadow-md">
            <div class="mx-5 my-3 text-2xl text-white">
                {{ area.short_overview }}
            </div>
        </div>
        <div class="h-2 tablet:hidden"></div>
        <nuxt-link
            :to="'/areas/' + $route.params.name"
            class="bg-[var(--clickable-color)] rounded-br-3xl flex gap-6 p-6 items-center justify-center min-w-max drop-shadow-md"
        >
            <img :src="area.icon" alt="Icon Image" class="h-[60px]"/>
            <div class="text-[var(--white-color)] font-bold text-2xl tablet:hidden">{{ area.name }}</div>
            <div class="flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 100 100"
                >
                    <path
                        d="M20,50 L70,50 Q80,50 70,40 L80,50 Q70,60 70,60"
                        fill="none"
                        stroke="var(--white-color)"
                        stroke-width="4"
                    />
                </svg>
            </div>
        </nuxt-link>
    </div>
    <div
        class="max-w-7xl mx-auto flex flex-wrap justify-center content-center"
    >
        <project-preview
            v-for="item in area.projects"
            :logo="item.logo"
            :name="item.name"
            :areas_icons="item.areas.map((area) => area.icon)"
            :short_overview="item.short_description"
            class="place-self-center"
        />
    </div>
    <bottom-navigator
        :previous="{
            name: previous.name + ' Projects',
            banner: previous.banner,
            link: '/areas/' + previous.name + '/projects',
        }"
        :next="{
            name: next.name + ' Projects',
            banner: next.banner,
            link: '/areas/' + next.name + '/projects',
        }"
    />
</template>

<script setup>
const target = route2name(useRoute().params.name);
const areas_list = await useSupabaseClient()
    .from("areas")
    .select("*, projects(name, logo, short_description, areas(icon))")
    .then(({ data, error }) => {
        if (error)
            throw createError({
                statusCode: 404,
                statusMessage: "Area not found",
                message: error.message,
            });
        return data;
    });

const index = areas_list.findIndex((area) => area.name === target);
const area = areas_list[index];
if (!area)
    throw createError({
        statusCode: 404,
        statusMessage: "Area not found",
        message: "Area not found",
    });
const previous =
    areas_list[(index - 1 + areas_list.length) % areas_list.length];
const next = areas_list[(index + 1) % areas_list.length];

setProjectList(area.projects.map((project) => project.name));

useHead({ title: `Apex Venture | ${area.name} Projects` });
</script>
