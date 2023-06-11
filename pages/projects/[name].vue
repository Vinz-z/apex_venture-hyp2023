<template>
    <banner
        :imageUrl="project.banner ?? `/images/banners/sports.png`"
        :title="project.name"
        :caption="project.short_description"
    />
    <div
        class="self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto"
    >
        <div class="relative text-[var(--white-color)] desktop:col-span-2">
            <titled-card :title="project.name" class="z-0">
                <div class="flex flex-col tablet:flex-row items-center">
                    <div class="m-4 tablet:w-1/5">
                        <img
                            :src="project.logo"
                            class="w-40 h-40 p-2 my-2 bg-white object-contain drop-shadow-lg rounded-tl-2xl rounded-br-2xl"
                        />
                        <div class="text-xl font-bold">Office</div>
                        <div class="text-xl">{{ project.office }}</div>
                        <div class="text-xl font-bold">Supervisor</div>
                        <nuxt-link
                            :to="`/team/${name2route(project.supervisor.name)}`"
                            class="text-xl"
                            style="color: var(--clickable-color)"
                            >{{ project.supervisor.name }}</nuxt-link
                        >
                    </div>
                    <p class="m-4 tablet:w-4/5 text-xl">
                        {{ project.long_description }}
                    </p>
                    <div class="hidden desktop:block mr-40"></div>
                </div>
            </titled-card>
            <div
                class="flex flex-col z-10 items-center top-0 bottom-0 right-[-4rem] justify-center desktop:absolute"
            >
                <nuxt-link
                    v-for="area in project.areas"
                    :to="`/areas/${name2route(area.name)}`"
                    class="flex flex-row content-center justify-start items-center w-60 my-4 py-2 medium-round-right bg-[var(--clickable-color)] drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition duration-100 ease-out hover:ease-in"
                >
                    <img :src="area.icon" class="w-10 h-10 mx-6" />
                    <div class="text-xl font-bold">{{ area.name }}</div>
                </nuxt-link>
            </div>
        </div>
        <titled-card :title="`The impact of ${project.name}`">
            <p class="text-xl">{{ project.impact_description }}</p>
        </titled-card>
        <data-grid
            :dataTopLeft="project.stats[0].value"
            :captionTopLeft="project.stats[0].caption"
            :dataTopRight="project.stats[1].value"
            :captionTopRight="project.stats[1].caption"
            :dataBottomLeft="project.stats[2].value"
            :captionBottomLeft="project.stats[2].caption"
            :dataBottomRight="project.stats[3].value"
            :captionBottomRight="project.stats[3].caption"
        />
        <img :src="project.team_image" class="my-auto big-round-left shadow" />
        <titled-card :title="`${project.name} Team`" class="object-contain">
            <div class="grid grid-cols-2 gap-4">
                <div
                    v-for="[role, people] of Object.entries(
                        // group by person role
                        project.team.reduce(
                            (acc, { person_role, person_name }) => {
                                if (!acc[person_role]) {
                                    acc[person_role] = [];
                                }
                                acc[person_role].push(person_name);
                                return acc;
                            },
                            {}
                        )
                    )"
                    :key="role"
                    class="align-self-center object-contain"
                >
                    <div class="text-xl font-bold">{{ role }}</div>
                    <div class="flex flex-wrap flex-col text-xl">
                        <div v-for="person in people">{{ person }}</div>
                    </div>
                </div>
            </div>
        </titled-card>
    </div>
    <div
        v-if="project_list.length > 1"
        class="buttons-phone w-full h-auto my-20 tablet:hidden"
    >
        <div class="flex justify-center">
            <nuxt-link
                :to="`/projects/${name2route(previous.name)}`"
                class="previous-button flex h-[130px] w-3/4 mb-5"
            >
                <div class="arrow-left w-2/6 flex justify-center items-center">
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
                <div class="banner w-4/6">
                    <div class="banner-image-left">
                        <div class="banner-content">
                            <div class="banner-caption-phone text-center">
                                {{ previous.name }}
                            </div>
                        </div>
                        <img
                            :src="previous.banner"
                            alt="Banner Image"
                            :style="`object-position: center ${percentage}%;`"
                        />
                        <div class="banner-overlay-left"></div>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div class="flex justify-center">
            <nuxt-link
                :to="`/projects/${name2route(next.name)}`"
                class="next-button-phone h-[130px] flex w-3/4 hover:scale-105 hover:shadow-2xl duration-300"
            >
                <div class="banner w-4/6">
                    <div class="banner-image-right">
                        <div class="banner-content">
                            <div class="banner-caption-phone text-center">
                                {{ next.name }}
                            </div>
                        </div>
                        <img
                            :src="next.banner"
                            alt="Banner Image"
                            :style="`object-position: center ${percentage}%;`"
                        />
                        <div class="banner-overlay-right"></div>
                    </div>
                </div>
                <div class="arrow-right w-2/6 flex justify-center items-center">
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
    </div>
    <div
        v-if="project_list.length > 1"
        class="buttons w-full h-[10vw] justify-center my-20 hidden tablet:flex desktop:col-span-2"
    >
        <nuxt-link
            :to="`/projects/${name2route(previous.name)}`"
            class="previous-button flex w-1/3 rounded-tr-[50px] rounded-bl-[50px] hover:scale-105 hover:shadow-2xl duration-300"
        >
            <div class="arrow-left w-2/6 flex justify-center items-center">
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
            <div class="banner w-4/6">
                <div class="banner-image-left">
                    <div class="banner-content text-center">
                        <div class="banner-caption text-center">
                            {{ previous.name }}
                        </div>
                    </div>
                    <img
                        :src="previous.banner"
                        alt="Banner Image"
                        :style="`object-position: center ${percentage}%;`"
                    />
                    <div class="banner-overlay-left"></div>
                </div>
            </div>
        </nuxt-link>
        <div
            class="separator w-[1px] h-[10vw] mx-[5vw] self-center bg-gray-400"
        ></div>
        <nuxt-link
            :to="`/projects/${name2route(next.name)}`"
            class="next-button flex w-1/3 rounded-tl-[50px] rounded-br-[50px] hover:scale-105 hover:shadow-2xl duration-300"
        >
            <div class="banner w-4/6">
                <div class="banner-image-right">
                    <div class="banner-content text-center">
                        <div class="banner-caption text-center">
                            {{ next.name }}
                        </div>
                    </div>
                    <img
                        :src="next.banner"
                        alt="Banner Image"
                        :style="`object-position: center ${percentage}%;`"
                    />
                    <div class="banner-overlay-right"></div>
                </div>
            </div>
            <div
                class="arrow-right w-2/6 rounded-br-[50px] flex justify-center items-center"
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
const target = route2name(useRoute().params.name);
const project_list = await getProjectList();

const index = project_list.findIndex((project) => project.name === target);
const project = project_list[index];
if (!project)
    throw createError({
        statusCode: 404,
        statusMessage: `Project '${target}' not found.`,
    });
const previous =
    project_list[(index - 1 + project_list.length) % project_list.length];
const next = project_list[(index + 1) % project_list.length];

useHead({ title: `Apex Venture | ${project.name ?? ":("}` });
</script>

<style scoped>
.upper-icon {
    margin-left: 8%;
    width: 90px;
    height: 90px;
}

.upper-icon-phone {
    width: 75px;
    height: 75px;
}
.upper-caption {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--secondary-color);
    z-index: 1;
    width: 85%;
}

.upper-caption-phone {
    background-color: var(--secondary-color);
    z-index: 1;
}

.area-button {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--clickable-color);
    z-index: 1;
    width: 15%;
}

.area-button-phone {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--clickable-color);
    z-index: 1;
    border-radius: 0px 0px var(--big-round) 0px;
}

.previous-button-phone {
    border-radius: 0px 0px 0px var(--big-round);
}

.arrow-left {
    background-color: var(--clickable-color);
    border-bottom-left-radius: var(--big-round);
}

.arrow-right {
    background-color: var(--clickable-color);
    border-bottom-right-radius: var(--big-round);
}

.banner-image-left {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: var(--big-round);
}

.banner-image-left img {
    filter: blur(1px);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: var(--big-round);
}

.banner-overlay-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-right-radius: var(--big-round);
}

.banner-image-right {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: var(--big-round);
}

.banner-image-right img {
    filter: blur(1px);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: var(--big-round);
}

.banner-overlay-right {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: var(--big-round);
}
.banner-content {
    position: absolute;
    color: var(--white-color);
    display: flex;
    z-index: 2;
    width: 50%;
}

.banner-caption {
    font-weight: bold;
    font-size: 2vw;
    display: flex-wrap;
    text-align: center;
}

.banner-caption-phone {
    font-weight: bold;
    font-size: 100%;
    display: flex-wrap;
    text-align: center;
}

.banner {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 1;
}
</style>
