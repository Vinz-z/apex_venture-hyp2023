<template>
    <banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="All Projects"
    caption="Banner Caption"
    />
    <div class="flex flex-col tablet:flex-row">
        <div class="flex flex-col p-6 shadow-md">
            <div>
                <div class="flex justify-between mb-4">
                    <div class="font-semibold">Filter By Area</div>
                    <button @click="resetFilter" class="text-[var(--clickable-color)]">reset</button>
                </div>
                <hr class="border-1 border-gray-500 m-1">
            </div>
            <button @click="$event => alert('da implementare')" class="flex items-center justify-start gap-4 m-1 p-2" :id="state.activeFilter == 0 ? 'active' : ''">
                <div class="w-3"></div>
                Most Relevant Project
                <div class="w-3"></div>
            </button>
            <div class="text-xs m-1">Technologies</div>
            <button v-for="tech of technologies" @click="$event => filter(tech.id)" class="flex items-center justify-start gap-4 m-1 p-2" :id="state.activeFilter == tech.id ? 'active' : ''">
                <div class="w-3"></div>
                <img :src="tech.icon" class="w-6 h-6pl">
                <div>{{ tech.name }}</div>
                <div class="w-3"></div>
            </button>
            <div class="text-xs m-1">Sectors</div>
            <button v-for="sect in sectors" @click="$event => filter(sect.id)" class="flex items-center justify-start gap-4 m-1 p-2" :id="state.activeFilter == sect.id ? 'active' : ''">
                <div class="w-3"></div>
                <img :src="sect.icon" class="w-6 h-6">
                <div>{{ sect.name }}</div>
                <div class="w-3"></div>
            </button>
        </div>
        <div class="w-auto flex flex-wrap justify-center content-start m-4">
            <project-preview
            v-for="item in filteredProjects"
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

const state = reactive({ activeFilter: -1 })

const filter = function (id) {
    state.activeFilter = id
    console.log(ref.value)
};

const resetFilter = function() {
    state.activeFilter = -1
}

const filteredProjects = computed(() => {
    if (state.activeFilter < 0 || state.activeFilter > areas.length) {
        return projects
    } else {
        return projects.filter((project) => project.areas.includes(state.activeFilter))
    }
})
</script>

<style scoped>
#active {
    background-color: var(--clickable-color);
    border-radius: var(--medium-round) 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--white-color);
}
</style>