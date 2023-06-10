<template>
    <banner
    image-url="images/banners/all-projects.png"
    title="All Projects"
    caption="Explore our venture capital firm's portfolio to discover the diverse range of innovative and promising companies we've invested in."
    />
    <div class="flex flex-col tablet:flex-row ">
        <div class="min-w-fit	 flex flex-col p-6 shadow-lg shadow-gray-400">
            <div>
                <div class="flex justify-between mb-4">
                    <div class="font-semibold">Filter By Area</div>
                    <button @click="resetFilter" class="text-[var(--clickable-color)]">reset</button>
                </div>
                <hr class="border-1 border-gray-500 m-1">
            </div>
            <button 
                @click="setMostRelevant" 
                class="m-1 p-2 px-6 whitespace-nowrap text-center choice" 
                :id="state.activeFilter === 'most-relevant' ? 'active' : ''"
            >
                Most Relevant Project
            </button>
            <div class="text-xs m-1">Technologies</div>
            <button 
                v-for="tech of areas.filter((area) => area.type === 'technology')" 
                @click="$event => filter(tech.id)" 
                class="flex items-center gap-4 m-1 p-2 px-6 whitespace-nowrap choice" 
                :id="state.activeFilter == tech.id ? 'active' : ''"
            >
                <img :src="tech.icon" class="w-6 h-6pl">
                <div>{{ tech.name }}</div>
            </button>
            <div class="text-xs m-1">Sectors</div>
            <button 
                v-for="sect in areas.filter((area) => area.type === 'sector')" 
                @click="$event => filter(sect.id)" 
                class="flex items-center gap-4 m-1 p-2 px-6 whitespace-nowrap choice" 
                :id="state.activeFilter == sect.id ? 'active' : ''"
            >
                <img :src="sect.icon" class="h-6">
                <div>{{ sect.name }}</div>
            </button>
        </div>
        <div class="flex flex-wrap justify-center tablet:justify-start content-start m-4">
            <project-preview
            v-for="item in filteredProjects"
            :logo="item.logo"
            :name="item.name"
            :areas_icons="getAreasIcons(item.areas)"
            :short_overview="item.short_description"
            class="place-self-center"
            />
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const areas = await supabase.from('areas')
    .select('id, name, type, icon')
    .then(( {data, error} ) => {
        if (error) throw createError({ statusCode: 404, statusMessage: error.message })
        return data;
    });
const projects = await supabase.from('projects')
    .select('logo, name, id, short_description, areas(id)')
    .then(( {data, error} ) => {
        if (error) throw createError({ statusCode: 404, statusMessage: error.message })
        return data;
    });

const state = reactive({ activeFilter: -1 })

function filter(id) {
    state.activeFilter = id
};

function resetFilter() {
    state.activeFilter = -1
}

function setMostRelevant() {
    state.activeFilter = "most-relevant"
}

function getAreasIcons(ids) {
    return areas.filter((area) => ids
        .map((o) => o.id)
        .includes(area.id))
        .map((area) => area.icon)
}

const filteredProjects = computed(() => {
    let result = projects

    if (state.activeFilter === "most-relevant") 
        result = getMostRelevantProjects()
    else if (state.activeFilter > 0)
        result = projects.filter((project) => project.areas
            .map((o) => o.id)
            .includes(state.activeFilter))

    setProjectList(result.map((project) => project.name))
    return result
})

useHead({title: "Apex Venture | All Projects"});
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