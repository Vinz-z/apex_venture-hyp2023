<template>
    <banner
    imageUrl="images/banners/all-projects.png"
    title="All Projects"
    caption="Explore our venture capital firm's portfolio to discover the diverse range of innovative and promising companies we've invested in."
    />
    <div class="flex flex-col tablet:flex-row ">
        <div class="flex flex-col p-6 shadow-lg shadow-gray-400">
            <div>
                <div class="flex justify-between mb-4">
                    <div class="font-semibold">Filter By Area</div>
                    <button @click="resetFilter" class="text-[var(--clickable-color)]">reset</button>
                </div>
                <hr class="border-1 border-gray-500 m-1">
            </div>
            <button @click="setMostRelevant" class="flex items-center gap-4 m-1 p-2 px-6 whitespace-nowrap text-center choice" :id="state.activeFilter === 'most-relevant' ? 'active' : ''">
                Most Relevant Project
            </button>
            <div class="text-xs m-1">Technologies</div>
            <button v-for="tech of technologies" @click="$event => filter(tech.id)" class="flex items-center gap-4 m-1 p-2 px-6 whitespace-nowrap choice" :id="state.activeFilter == tech.id ? 'active' : ''">
                <img :src="tech.icon" class="w-6 h-6pl">
                <div>{{ tech.name }}</div>
            </button>
            <div class="text-xs m-1">Sectors</div>
            <button v-for="sect in sectors" @click="$event => filter(sect.id)" class="flex items-center gap-4 m-1 p-2 px-6 whitespace-nowrap choice" :id="state.activeFilter == sect.id ? 'active' : ''">
                <img :src="sect.icon" class="w-6 h-6">
                <div>{{ sect.name }}</div>
            </button>
        </div>
        <div class="w-auto flex flex-wrap justify-center tablet:justify-start content-start m-4">
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
};

const resetFilter = function() {
    state.activeFilter = -1
}

const setMostRelevant = function() {
    state.activeFilter = "most-relevant"
}

const filteredProjects = computed(() => {
    if (state.activeFilter === "most-relevant") 
        return getMostRelevantProjects()

    if (state.activeFilter > 0)
        return projects.filter((project) => project.areas.includes(state.activeFilter))

    return projects
})
</script>

<style scoped>
#active {
    background-color: var(--clickable-color);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--white-color);
}

.choice {
    border-radius: var(--medium-round) 0px;
    transition: all 0.2s ease-in-out;
}

.choice:hover {
    background-color: var(--clickable-color);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--white-color);
}
</style>