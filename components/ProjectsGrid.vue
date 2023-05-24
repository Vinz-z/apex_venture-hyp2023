<template>
    <div class="container-xl">
        <project-preview
        v-for="item in items"
        :logo_path="item.logo_path"
        :name="item.name"
        :areas="item.areas"
        :short_overview="item.short_overview"
        />
    </div>
</template>

<script setup>
import ProjectPreview from './ProjectPreview.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

</script>