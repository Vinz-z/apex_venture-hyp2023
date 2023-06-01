<template>
    <banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="flex flex-col tablet:flex-row">
        <!--div @click="$event => console.log($filter)" class="tablet:hidden rounded-full text-center text-[var(--white-color)] py-3 px-6 m-4 bg-[var(--clickable-color)]">Filter By Area</div-->
        <filter-by class="shadow-md bg-[var(--white-color)]"
        :technologies="technologies"
        :sectors="sectors"
        :selectedOne="Number($route.query.filter_by) ?? -1"
        ref="filter"
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
import Banner from '~/components/Banner.vue'
import FilterBy from '~/components/FilterBy.vue'
import ProjectPreview from '~/components/ProjectPreview.vue';

let { projects, areas } = getProjectsData(useSupabaseClient());
let technologies = areas.filter((area) => area.type === 'technology');
let sectors = areas.filter((area) => area.type === 'sector');

const areasOfProject = function (project) {
    return areas.filter((area) => project.areas.includes(area.id))
};

const filter = ref(null);

</script>