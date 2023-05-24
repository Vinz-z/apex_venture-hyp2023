<template>
    <Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="content">
        <ProjectPreview
        v-for="project of projects"
        :key="project.id"
        :logo_path="project.logo_path!"
        :name="project.name!"
        :short_overview="project.short_overview!"
        :areas="['gino', 'pino']"
        />
    </div>
</template>

<script setup lang="ts">
    import { Database } from '~~/types/supabase'

    const client = useSupabaseClient<Database>();

    const { data: projects } = await useAsyncData('projects', async () => {
        const { data } = await client.from('Project').select('*');
        return data;
    });
</script>

<style>
.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
}
</style>