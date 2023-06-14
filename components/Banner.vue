<template>
    <div class="banner">
        <div class="banner-image">
            <img
                :src="imageUrl"
                alt="Banner Image"
                :style="`object-position: center ${percentage}%;`"
            />
            <div class="banner-overlay"></div>
        </div>
        <div class="banner-content">
            <div
                class="flex items-center gap-2 justify-start text-[var(--white-color)] text-lg"
            >
                <nuxt-link
                    class="hovered-link"
                    v-for="(elem, index) in breadcrumbs"
                    :to="buildLink(index)"
                    >{{ elem }} ></nuxt-link
                >
            </div>
            <h1 class="my-7 text-5xl tablet:text-7xl">{{ title }}</h1>
            <p class="banner-caption">{{ caption }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: false,
        default: "",
    },
    percentage: {
        type: String,
        required: false,
        default: "50",
    },
});

const path = useRoute()
    .fullPath.split("/")
    .filter((a) => a.length > 0);

const breadcrumbs = computed(() =>
    path
        .map((elem, index) => {
            return index === path.length - 1
                ? undefined
                : elem.charAt(0).toUpperCase() + elem.slice(1);
        })
        .filter((a) => a !== undefined)
);

function buildLink(index) {
    return "/" + path.slice(0, index + 1).join("/");
}
</script>

<style scoped>
.banner {
    position: relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    border-bottom: var(--clickable-color) 5px solid;
    z-index: 1;
}

.banner-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-image img {
    filter: blur(3px);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.banner-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: auto;
    padding: 20px;
    color: var(--white-color);
}

.banner-caption {
    width: 100%;
    font-size: 1.2rem;
}

.hovered-link {
  position: relative;
}

.hovered-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--clickable-color);
  transition: width 0.2s ease;
}

.hovered-link:hover::after {
  width: 100%;
}
</style>
