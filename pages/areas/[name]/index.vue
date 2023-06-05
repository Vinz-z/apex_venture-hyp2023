<template>
  <Banner
    imageUrl="/images/banners/finance.jpg"
    :title="$route.params.name"
    caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
  />
  <div class="ultra-container self-center grid grid-cols-1 gap-4 max-w-6xl place-item-center m-4 desktop:grid-cols-2 desktop:mx-auto">
    <titled-card
      :title="`Investing in ${$route.params.name}`"
      :left="false" class="max-w-2xl">
      <div class="caption mt-[-15px]">
        Investing in finance offers a pathway to financial growth and security.
        Through prudent allocation of funds, individuals can seize opportunities
        to multiply their wealth. By diversifying portfolios across stocks,
        bonds, and other assets, one can mitigate risks and maximize returns.
        Monitoring market trends and seeking expert advice helps make informed
        decisions. Investing in finance empowers individuals to build a
        prosperous future, achieve long-term goals, and enjoy financial
        independence.
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
    <TitledCard :title="$route.params.name + ' Projects'" :left="true" class="w-full justify-center">
      <div class="mid-container justify-center flex flex-wrap">
        <div class="project-item">
          <project-logo
            project_image="/images/projects/logos/sample.png"
            project_name="Project1"
          ></project-logo>
        </div>
        <div class="project-item">
          <project-logo
          project_image="/images/projects/logos/sample.png"
            project_name="Project2"
          ></project-logo>
        </div>
        <div class="project-item">
          <project-logo
          project_image="/images/projects/logos/sample.png"
            project_name="Project3"
          ></project-logo>
        </div>
        <div class="project-item">
          <project-logo
          project_image="/images/projects/logos/sample.png"
            project_name="Project5"
          ></project-logo>
        </div>
        <nuxt-link :to="'/areas/' + $route.params.name + '/projects'" class="little-container w-[190px] h-[150px] flex justify-center">
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

<style scoped>
.see-all {
  background-color: var(--clickable-color);
}

.separator {
  background-color: gray;
}
</style>
