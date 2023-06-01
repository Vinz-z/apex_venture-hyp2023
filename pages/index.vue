<template>
  <banner-home
    imageUrl="/images/banners/homepage.jpg"
    caption="Empowering entrepreneurs to turn their dreams into reality, one investment at a time"
  />
  <div class="description self-center flex px-60 py-20">
    <p class="text-center text-2xl">
      Welcome to <b>Apex Venture</b> where <b>innovation</b> meets
      <b>opportunity</b>. As a leading venture capital firm, we fuel the growth
      of groundbreaking startups, providing not only capital but also invaluable
      expertise and guidance. Join us as we reshape industries, redefine
      possibilities, and create a brighter future together.
    </p>
  </div>
  <div class="projects-container flex justify-center self-center w-3/5">
    <titled-card
      title="Most Relevant Projects"
      class="w-full justify-center"
      :left="true"
    >
      <div>
        <div class="mid-container justify-center flex flex-wrap">
          <project-logo v-for="project in most_relevant" class="project-item"
          :project_image="project.image"
          :project_name="project.name"
          />
        </div>
        <div class="flex justify-center h-[35px]">
          <apex-button caption="See all Projects" />
        </div>
      </div>
    </titled-card>
  </div>

  <div class="separator bg-black h-[1px] self-center w-1/3 my-10"></div>

  <div class="about-us-container flex-wrap self-center w-3/5">
    <titled-card title="About Us" :left="true">
      <div>
        <div
          class="white-cards-container flex flex-wrap justify-center gap-20 pb-10"
        >
          <data-card
            data="35+"
            description="COMPANY INVESTMENTS"
            color="var(--primary-color)"
          />
          <data-card
            data="150+"
            description="FUND INVESTMENTS"
            color="var(--clickable-color)"
          />
          <data-card
            data="$30M"
            description="REALIZED"
            color="var(--decoration-color)"
          />
        </div>
        <div class="caption text-center text-lg">
          At Apex Venture, we believe in the power of innovation and are
          committed to supporting visionary founders in their quest to disrupt
          industries and drive transformative change. With a strategic
          investment approach and a deep understanding of market trends, we
          identify promising opportunities and provide not only capital but also
          strategic guidance to help startups reach their apex of success. Join
          us on this exhilarating journey as we shape the future of innovation
          together.
        </div>
        <div class="flex justify-center h-[35px] mt-10">
          <apex-button caption="See More" />
        </div>
      </div>
    </titled-card>
  </div>

  <div class="separator bg-gray-400 h-[1px] self-center w-1/3 my-10"></div>

  <div class="our-team">
    <img class="photo w-3/5" src="/images/banners/hometeam.jpeg" />
    <div class="green-box">
      <h2 class="text-xl mb-4"><b>Our Team</b></h2>
      <p class="mb-5">
        When investors, operators, founders, and specialists align under one
        mission and commit as a team, each with their own unique set of
        experiences, accomplishments, and failures, great things are bound to
        happen.
      </p>
      <div class="button">
        <nuxt-link :to="'/team'"><apex-button caption="See more" /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const most_relevant = getMostRelevant(useSupabaseClient());
</script>

<style scoped>
.our-team {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20%;
}

.photo {
  border-radius: var(--big-round) 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.green-box {
  top: 70%;
  color: var(--white-color);
  border-radius: var(--big-round) 0px;
  position: absolute;
  background-color: var(--secondary-color);
  width: 30%;
  height: 300px;
  justify-content: center;
  text-align: center;
  padding: 2%;
  align-items: center;
}
</style>
