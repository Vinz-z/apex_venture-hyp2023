<template>
  <Banner
    imageUrl="/images/banners/finance.jpg"
    :title="area.name"
    :caption="area.short_overview"
  />
  <div class="ultra-container self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto">
    <titled-card
      :title="`Investing in ${area.name}`"
      :left="false" class="max-w-2xl">
      <div class="caption mt-[-15px]">
        {{ area.short_overview }}
      </div>
    </titled-card>
    <data-grid
      dataTopLeft="1"
      captionTopLeft="caption Top Left"
      dataTopRight="2"
      captionTopRight="caption Top Right"
      dataBottomLeft="3"
      captionBottomLeft="caption Bottom Left"
      dataBottomRight="4"
      captionBottomRight="caption Bottom Right"
    />
  </div>

  <div class="separator self-center h-[1px] w-1/3 my-10"></div>

  <div class="projects-container flex justify-center self-center px-10 desktop:px-0">
    <TitledCard :title="area.name + ' Projects'" :left="true" class="w-full justify-center">
      <div class="mid-container justify-center flex flex-wrap">
        <project-logo v-for="project in area_projects" class="project-item"
          :project_image="project.logo"
          :project_name="project.name"
          />
        <nuxt-link :to="'/areas/' + area.name + '/projects'" class="little-container w-[190px] h-[150px] flex justify-center">
          <button
            class="see-all h-[150px] w-[150px] rounded-br-[var(--big-round)] rounded-tl-[var(--big-round)] justify-center mb-0 p-3 shadow-md"
          >
            <div class="text-xl font-bold text-white break-word">
              See All Projects
            </div>
          </button>
        </nuxt-link>
      </div>
    </TitledCard>
  </div>
</template>

<script setup>
const route = useRoute();
const area_projects = (await getProjectsOfArea(route.params.name)).slice(0, 4);
const area = await getAreaData(route.params.name);
</script>

<style scoped>
.see-all {
  background-color: var(--clickable-color);
}

.separator {
  background-color: gray;
}
</style>
