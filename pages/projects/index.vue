<template>
    <banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="flex">
        <filter-by class="shadowed-box"
        :technologies="technologies"
        :sectors="sectors"
        :selectedOne="Number($route.query.filter_by) ?? -1"
        />
        <div class="w-auto grid grid-cols-4 g-4 m-4 place-items-center place-content-start">
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
import Banner from '~/components/Banner.vue'
import FilterBy from '~/components/FilterBy.vue'
import ProjectPreview from '~/components/ProjectPreview.vue';

let { projects, areas } = getProjectsData(useSupabaseClient());
let technologies = areas.filter((area) => area.type === 'technology');
let sectors = areas.filter((area) => area.type === 'sector');

const areasOfProject = function (project) {
    return areas.filter((area) => project.areas.includes(area.id))
};
</script>

<style scoped>
.shadowed-box {
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
    background-color: var(--white-color)
}

</style>