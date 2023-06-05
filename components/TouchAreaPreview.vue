<template>
    <div class="max-w-[500px] flex flex-col gap-1 text-center text-[var(--white-color)] drop-shadow">
        <div class="flex gap-4 bg-[var(--secondary-color)] rounded-tl-2xl p-6 items-center">
            <img :src="iconUrl" class="w-16 h-16">
            <div>
            <div class="text-start text-xl font-bold">
                {{ title }}
            </div>
            <div class="text-justify">
                {{ caption }}
            </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-1">
            <nuxt-link :to="area2route(title)" class="bg-[var(--clickable-color)] p-4 font-bold justify-center flex flex-col">
                See more
            </nuxt-link>
            <nuxt-link :to="area2projects(title)" class="bg-[var(--clickable-color)] rounded-br-2xl p-4 font-bold">
                {{ title }} Projects
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    iconUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
});
</script>