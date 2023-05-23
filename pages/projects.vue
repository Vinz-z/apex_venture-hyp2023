<template>
    <Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="content">
        <ProjectPreview
        v-for="project in projects"
        :key="project.id"
        :imageUrl="project.imageUrl"
        :title="project.title"
        :caption="project.caption"
        :areas="project.areas"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 1',
                        caption: 'Project 1 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                    {
                        id: 2,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 2',
                        caption: 'Project 2 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                    {
                        id: 3,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 3',
                        caption: 'Project 3 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                    {
                        id: 4,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 4',
                        caption: 'Project 4 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                    {
                        id: 5,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 5',
                        caption: 'Project 5 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                    {
                        id: 6,
                        imageUrl: 'https://picsum.photos/id/237/200/300',
                        title: 'Project 6',
                        caption: 'Project 6 Caption',
                        areas: ['Area 1', 'Area 2'],
                    },
                ],
            }
        }
    }
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