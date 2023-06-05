<template>
  <Banner
    :title="`${$route.params.name} Projects`"
    imageUrl="/images/banners/finance.jpg"
  />
  <div class="w-full h-auto mb-10 tablet:hidden">
    <div
      class="upper-caption-phone flex h-auto w-auto items-start justify-start"
    >
      <div class="mx-5 my-3 text-2xl text-white">
        Invest in digital payment solutions, fintech, and trading platforms to
        promote efficient and secure financial transactions.
      </div>
    </div>
    <nuxt-link
      :to="'/areas/' + $route.params.name"
      class="area-button-phone flex w-auto h-auto my-1 items-center justify-center gap-4"
    >
      <div class="upper-icon-phone flex justify-center items-center">
        <img src="/icons/areas/healthcare.png" alt="Icon Image" />
      </div>
      <div class="max-w-[40%] flex h-auto w-auto items-center justify-center">
        <div class="mx-5 my-3 text-2xl text-white">
          {{ $route.params.name }}
        </div>
      </div>
      <div class="upper-arrow flex justify-center items-center">
        <svg
          class="w-full h-full"
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
  <div class="upper-container flex w-full h-[100px] mb-10 hidden tablet:flex">
    <div class="upper-caption flex h-auto items-start justify-start">
      <div class="mx-5 my-3 text-2xl text-white">
        Invest in digital payment solutions, fintech, and trading platforms to
        promote efficient and secure financial transactions.
      </div>
    </div>
    <nuxt-link
      :to="'/areas/' + $route.params.name"
      class="area-button flex h-auto rounded-br-[50px]"
    >
      <div class="upper-icon flex justify-center items-center">
        <img src="/icons/areas/healthcare.png" alt="Icon Image" />
      </div>
      <div class="upper-arrow flex justify-center items-center">
        <svg
          class="w-full h-full"
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
  <div
    class="w-auto flex flex-wrap justify-center tablet:justify-start content-center"
  >
    <project-preview
      v-for="item in projects"
      :logo_path="item.logo_path"
      :name="item.name"
      :areas="areasOfProject(item)"
      :short_overview="item.short_overview"
      class="place-self-center"
    />
  </div>
  <div class="buttons-phone w-full h-auto my-20 tablet:hidden">
    <div class="flex justify-center">
      <div class="previous-button flex h-[130px] w-3/4 mb-5">
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
              <div class="banner-caption-phone">previous area projects</div>
            </div>
            <img
              src="/images/banners/education.jpg"
              alt="Banner Image"
              :style="`object-position: center ${percentage}%;`"
            />
            <div class="banner-overlay-left"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="next-button-phone h-[130px] flex w-3/4 hover:scale-105 hover:shadow-2xl duration-300"
      >
        <div class="banner w-4/6">
          <div class="banner-image-right">
            <div class="banner-content">
              <div class="banner-caption-phone">next area projects</div>
            </div>
            <img
              src="/images/banners/sports.png"
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
      </div>
    </div>
  </div>
  <div
    class="buttons flex w-full h-[10vw] justify-center my-20 hidden tablet:flex"
  >
    <div
      class="previous-button flex w-1/3 bg-blue-500 rounded-tr-[50px] rounded-bl-[50px] hover:scale-105 hover:shadow-2xl duration-300"
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
            <div class="banner-caption">previous area projects</div>
          </div>
          <img
            src="/images/banners/education.jpg"
            alt="Banner Image"
            :style="`object-position: center ${percentage}%;`"
          />
          <div class="banner-overlay-left"></div>
        </div>
      </div>
    </div>
    <div
      class="separator w-[1px] h-[10vw] mx-[5vw] self-center bg-gray-400"
    ></div>
    <div
      class="next-button flex w-1/3 bg-green-500 rounded-tl-[50px] rounded-br-[50px] hover:scale-105 hover:shadow-2xl duration-300"
    >
      <div class="banner w-4/6">
        <div class="banner-image-right">
          <div class="banner-content">
            <div class="banner-caption">next area projects</div>
          </div>
          <img
            src="/images/banners/sports.png"
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
    </div>
  </div>
</template>


<script setup>
/*
let { projects, areas } = getAllProjectsData(useSupabaseClient());
const areasOfProject = function (project) {
  return areas.filter((area) => project.areas.includes(area.id));
};
*/

const projects = await getAllProjectsData();
const { data, error } = await getAreasData();
const areas = data;

const areasOfProject = function (project) {
  return areas.filter((area) => project.areas.includes(area.id));
};

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
