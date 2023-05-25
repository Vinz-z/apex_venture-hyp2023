<template>
    <div  class="w-full grid md:grid-cols-3 grid-cols-4 g-4">
        <project-preview
        v-for="item in projects"
        :logo_path="item.logo_path"
        :name="item.name"
        :areas="areasOfProject(item)"
        :short_overview="item.short_overview"
        />
    </div>
</template>

<script setup>
import ProjectPreview from './ProjectPreview.vue';
const props = defineProps({
    projects: {
        type: Array,
        required: true
    },
    areas: {
        type: Array,
        required: true
    }
})

const areasOfProject = (project) => {return props.areas.filter((area) => project.areas.includes(area.id))};
</script>