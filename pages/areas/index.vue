<template>
    <banner
        image-url="/images/banners/collage.png"
        title="Areas"
        caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
    />
    <div class="flex flex-col desktop:flex-row gap-8 w-auto m-8 desktop:items-stretch desktop:justify-center">
        <div class="flex-col gap-6 items-center hidden desktop:flex">
            <div class="title max-w-[500px] w-full">Sectors</div>
            <area-preview v-for="sector in sectors"
                :icon-url="sector.iconUrl"
                :title="sector.title"
                :caption="sector.caption"
            />
        </div>
        <div class="flex flex-col gap-6 items-center desktop:hidden">
            <div class="title max-w-[500px] w-full">Sectors</div>
            <touch-area-preview v-for="sector in sectors"
                :icon-url="sector.iconUrl"
                :title="sector.title"
                :caption="sector.caption"
            />
        </div>
        <div class="hidden desktop:block separator"></div>
        <div class="flex-col gap-6 items-center hidden desktop:flex">
            <div class="title max-w-[500px] w-full">Technologies</div>
            <area-preview v-for="technology in technologies"
                :icon-url="technology.iconUrl"
                :title="technology.title"
                :caption="technology.caption"
            />
        </div>
        <div class="flex flex-col gap-6 items-center desktop:hidden">
            <div class="title max-w-[500px] w-full">Technologies</div>
            <touch-area-preview v-for="technology in technologies"
                :icon-url="technology.iconUrl"
                :title="technology.title"
                :caption="technology.caption"
            />
        </div>
    </div>
    
</template>

<script setup>
const { technologies, sectors } = getAreasData(useSupabaseClient());
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
