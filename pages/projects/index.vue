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
        <projects-grid :items="projects"/>
    </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Banner.vue'
import FilterBy from '~/components/FilterBy.vue'
import ProjectsGrid from '~/components/ProjectsGrid.vue'
let { projects, sectors, technologies } = getProjectsData(useSupabaseClient());
</script>

<style scoped>
.shadowed-box {
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>