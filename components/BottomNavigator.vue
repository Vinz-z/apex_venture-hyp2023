<template>
    <div
        class="flex flex-col gap-4 tablet:gap-8 tablet:flex-row items-center justify-center m-4"
    >
        <nuxt-link
            v-if="!(previous.name === next.name)"
            :to="previous.link"
            class="h-40 max-w-xl w-full flex hover:scale-105 hover:shadow-2xl duration-300"
        >
            <div
                class="bg-[var(--clickable-color)] w-2/6 h-full rounded-bl-3xl flex justify-center items-center"
            >
                <svg
                    class="w-3/4 h-3/4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                >
                    <path
                        d="M80,50 L30,50 Q20,50 30,60 L20,50 Q30,40 30,40"
                        fill="none"
                        stroke="var(--white-color)"
                        stroke-width="4"
                    />
                </svg>
            </div>
            <div class="w-4/6 relative">
                <div class="banner-content">
                    <img
                        :src="previous.banner"
                        class="w-full h-full object-cover rounded-tr-3xl"
                    />
                </div>
                <div
                    class="banner-content overlay rounded-tr-3xl"
                ></div>
                <div
                    class="banner-content font-bold text-2xl text-[var(--white-color)] flex items-center justify-center"
                >
                    {{ previous.name }}
                </div>
            </div>
        </nuxt-link>
        <div v-if="!(previous.name === next.name)"
            class="h-40 border-l-[1px] border-slate-500 hidden tablet:block"
        ></div>
        <nuxt-link
            :to="next.link"
            class="h-40 max-w-xl w-full flex hover:scale-105 hover:shadow-2xl duration-300"
        >
            <div class="w-4/6 relative">
                <div class="banner-content">
                    <img
                        :src="next.banner"
                        class="w-full h-full object-cover rounded-tl-3xl"
                    />
                </div>
                <div
                    class="banner-content overlay rounded-tl-3xl"
                ></div>
                <div
                    class="banner-content font-bold text-2xl text-[var(--white-color)] flex items-center justify-center"
                >
                    {{ next.name }}
                </div>
            </div>
            <div
                class="bg-[var(--clickable-color)] w-2/6 h-full rounded-br-3xl flex justify-center items-center"
            >
                <svg
                    class="w-3/4 h-3/4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                >
                    <path
                        d="M20,50 L70,50 Q80,50 70,40 L80,50 Q70,60 70,60"
                        fill="none"
                        stroke="var(--white-color)"
                        stroke-width="4"
                    />
                </svg>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
    previous: {
        type: Object,
        required: true,
    },
    next: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.overlay {
    background-color: rgb(0, 0, 0, 0.5);
    filter: blur(1px);
}

.banner-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
