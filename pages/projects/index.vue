<template>
    <banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="flex flex-col tablet:flex-row">
        <filter-by class="shadow-md bg-[var(--white-color)]"
        :technologies="technologies"
        :sectors="sectors"
        :selectedOne="Number($route.query.filter_by) ?? -1"
        />
        <div class="w-auto flex flex-wrap justify-center content-start m-4">
            <project-preview
            v-for="item in projects"
            :logo_path="item.logo_path"
            :name="item.name"
            :areas="areasOfProject(item)"
            :short_overview="item.short_overview"
            class="place-self-center"
            />
        </div>
    </div>
</template>

<script setup>
let { projects, areas } = getAllProjectsData(useSupabaseClient());
let technologies = areas.filter((area) => area.type === 'technology');
let sectors = areas.filter((area) => area.type === 'sector');

const areasOfProject = function (project) {
    return areas.filter((area) => project.areas.includes(area.id))
};
</script>