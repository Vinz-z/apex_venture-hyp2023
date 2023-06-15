<template>
    <banner
        image-url="/images/areas/banners/collage.png"
        title="All Areas"
        caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
    />
    <div class="flex flex-col desktop:flex-row gap-8 w-auto m-4 desktop:items-stretch desktop:justify-center">
        <div class="flex-col gap-6 items-center hidden desktop:flex">
            <div class="title max-w-[500px] w-full">Sectors</div>
            <area-preview v-for="sector in sectors"
                :icon-url="sector.icon"
                :title="sector.name"
                :caption="sector.short_overview"
            />
        </div>
        <div class="flex flex-col gap-6 items-center desktop:hidden">
            <div class="title max-w-[500px] w-full">Sectors</div>
            <touch-area-preview v-for="sector in sectors"
                :icon-url="sector.icon"
                :title="sector.name"
                :caption="sector.short_overview"
            />
        </div>
        <div class="hidden desktop:block separator"></div>
        <div class="flex-col gap-6 items-center hidden desktop:flex">
            <div class="title max-w-[500px] w-full">Technologies</div>
            <area-preview v-for="technology in technologies"
                :icon-url="technology.icon"
                :title="technology.name"
                :caption="technology.short_overview"
            />
        </div>
        <div class="flex flex-col gap-6 items-center desktop:hidden">
            <div class="title max-w-[500px] w-full">Technologies</div>
            <touch-area-preview v-for="technology in technologies"
                :icon-url="technology.icon"
                :title="technology.name"
                :caption="technology.short_overview"
            />
        </div>
    </div>
    
</template>

<script setup>
    const areas = await useSupabaseClient().from('areas')
        .select('icon, name, short_overview, type')
        .order('name', { ascending: true })
        .then(({data, error}) => {
            if (error) throw createError({statusCode: 404, message: 'No areas found.'});
            return data;
        });
    const sectors = areas.filter(area => area.type === 'sector');
    const technologies = areas.filter(area => area.type === 'technology');
    useHead({htmlAttrs: {lang: "en"}, title: "Apex Venture | Areas"});
    useSeoMeta({
        title: "Apex Venture | Areas",
        description: "Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future.",
        image: "/images/areas/banners/collage.png",
        url: "https://apexventure.com/areas"
    })
</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    height: 110px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 0px var(--big-round);
    color: var(--white-color);
    font-size: xx-large;
}

.separator {
  height: auto;
  margin-top: 140px;
  width: 1px;
  background-color: gray;
}
</style>
