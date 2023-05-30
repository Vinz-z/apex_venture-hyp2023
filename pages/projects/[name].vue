<template>
    <banner 
    :imageUrl="project.banner ?? `/images/banners/sports.png`"
    :title="project.name"
    :caption="project.short_overview"
    />
    <div class="grid grid-cols-2 gap-4">
        <titled-card :title="project.name" class="col-span-2">
            <div class="flex items-center">
                <div class="m-4 w-1/5">
                    <img :src="project.logo" class="logo-image">
                    <div class="text-xl font-bold">Office</div>
                    <div class="text-xl">{{ project.office }}</div>
                    <div class="text-xl font-bold">Supervisor</div>
                    <nuxt-link :to="person2route(project.supervisor)" class="text-xl" style="color: var(--clickable-color)">{{ project.supervisor }}</nuxt-link>
                </div>
                <p class="m-4 w-4/5">{{ project.overview_text }}</p>
            </div>
        </titled-card>
        <titled-card :title="`The impact of ${project.name}`">
            <p>{{ project.impact_text }}</p>
        </titled-card>
        <div class="grid grid-cols-2 divider-x-2 divider-y-2">
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>d</div>
        </div>
        <img :src="project.team_image">
        <titled-card :title="`${project.name} Team`" class="object-contain">
            <div class="grid grid-cols-2 gap-4">
                <div v-for="[ key, value ] of Object.entries(project.team)" class="align-self-center object-contain">
                {{ console.log(key, value) }}
                <div class="text-xl font-bold">{{ key }}</div>
                <div class="flex flex-wrap flex-col">
                    <div  v-for="person in value">
                        {{ person }}
                    </div>
                </div>
            </div>
            </div>
        </titled-card>
        <div class="col-span-2">
            previous project | next project
        </div>
    </div>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import TitledCard from "~/components/TitledCard.vue";

const route = useRoute();

// this is the data that i should fetch from the api
const project = {
    name: route.params.name,
    logo: "/images/logos/sample.png",
    banner: "/images/banners/sports.png",
    office: "London",
    supervisor: "Taddeo Curreri",
    short_overview: "A sports app",
    overview_text: "Airbnb is a global hospitality platform, established in 2008, that connects travelers with local hosts, offering unique accommodations worldwide. By facilitating the rental of homes, apartments, and rooms, Airbnb fosters community and cultural exchange. Through its user-friendly marketplace, millions of people have unlocked the potential of their properties, providing personalized and immersive travel experiences. With a focus on inclusivity, Airbnb continues to reshape the industry, promoting meaningful connections between hosts and guests around the world.",
    impact_text: "Airbnb has revolutionized the hospitality sector by democratizing travel. By creating a peer-to-peer marketplace for accommodations, it empowers individuals to become hosts, unlocking the untapped potential of their properties. Travelers benefit from a diverse range of unique and authentic stays, fostering cultural immersion and meaningful connections. This innovative approach has transformed the sector, promoting inclusivity and redefining the way people experience travel.",
    team: {
        'Software Engineers': [
        'Martina Marchetti',
        'Emma Rousseau',
        'David Muller'
        ],
        'Marketing Specialist': ['Gabriel Lefevre'],
        'Sales Representative': ['Ethan Murphy'],
        'Product Manager': ['Oliver Parker'],
        'Graphic Designer': [
        'Aanya Patel',
        'Ariun Kapoor',
        'Riya Sharma'
        ],
        'Customer Support': ['Liam Davis'],
    },
    team_image: "/images/team/sports.png",
    statistics: {
        'Customer Satisfaction Rating': '95%',
        'New Products Launched': '3',
        'Year-Over-Year Revenue Growth': '25%',
        'Employees': '60+',
    },
    areas: [
    { id: 0, name: 'E-Commerce', icon: '/icons/areas/e-commerce.png' },
    { id: 0, name: 'Travelling', icon: '/icons/areas/travelling.png'}
    ]
}
</script>

<style scoped>
.logo-image {
    background-color: var(--white-color);
    border-radius: var(--big-round) 0px;
    padding: var(--big-round)/2;
    margin: 10px;
    height: 200px;
    width: 200px;
    object-fit: cover;
}
</style>