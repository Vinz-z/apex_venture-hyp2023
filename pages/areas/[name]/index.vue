<template>
  <Banner
    :imageUrl= "area.banner"
    :title="area.name"
    :caption="area.short_overview"
  />
  <div class="ultra-container self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto">
    <titled-card
      :title="`Investing in ${area.name}`"
      :left="false" class="max-w-2xl">
      <div class="caption mt-[-15px]">
        {{ area.long_description }}
      </div>
    </titled-card>
    <data-grid
      :dataTopLeft="area.stats[0].value"
      :captionTopLeft="area.stats[0].caption"
      :dataTopRight="area.stats[1].value"
      :captionTopRight="area.stats[1].caption"
      :dataBottomLeft="area.stats[2].value"
      :captionBottomLeft="area.stats[2].caption"
      :dataBottomRight="area.stats[3].value"
      :captionBottomRight="area.stats[3].caption"
    />
  </div>

  <div class="separator self-center h-[1px] w-1/3 my-10"></div>

  <div class="projects-container flex justify-center self-center px-10 desktop:px-0">
    <TitledCard :title="area.name + ' Projects'" :left="true" class="w-full justify-center">
      <div class="mid-container justify-center flex flex-wrap">
        <project-logo v-for="project in area.projects" class="project-item"
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
const target = route2name(useRoute().params.name);
const area = await useSupabaseClient().from('areas')
    .select('*, stats:area_statistics(*), projects:projects(name, logo)')
    .eq('name', target)
    .single()
    .then(({data, error}) => {
        if (error) throw createError({statusCode: 404, stastusMessage: 'Area not found.', message : error.message});
        return data;
    });
setProjectList(area.projects.map(project => project.name));
useHead({title: `Apex Venture | ${area.name}`});
</script>

<style scoped>
.see-all {
  background-color: var(--clickable-color);
}

.separator {
  background-color: gray;
}
</style>
