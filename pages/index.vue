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
  <div class="projects-container flex flex-column justify-center">
    <TitledCard title="Supervised Projects" :left="true">
      <div>
        <div class="mid-container flex flex-wrap justify-start gap-4">
          <div class="project-item">
            <ProjectLogo
              project_image="~/../../images/logos/sample.png"
              project_name="Project1"
            ></ProjectLogo>
          </div>
          <div class="project-item">
            <ProjectLogo
              project_image="~/../../images/logos/sample.png"
              project_name="Project2"
            ></ProjectLogo>
          </div>
          <div class="project-item">
            <ProjectLogo
              project_image="~/../../images/logos/sample.png"
              project_name="Project3"
            ></ProjectLogo>
          </div>
          <div class="project-item">
            <ProjectLogo
              project_image="~/../../images/logos/sample.png"
              project_name="Project5"
            ></ProjectLogo>
          </div>
          <div class="project-item">
            <ProjectLogo
              project_image="~/../../images/logos/sample.png"
              project_name="Project5"
            ></ProjectLogo>
          </div>
        </div>

        <div class="flex justify-center h-[35px]">
          <ApexButton caption="See all Projects" />
        </div>
      </div>
    </TitledCard>
  </div>

  <div class="separator self-center h-[1px] w-1/3 my-10"></div>

  <div class="about-us-container flex flex-column justify-center px-60">
    <TitledCard title="About Us" :left="true">
      <div>
        <div class="white-cards-container flex flex-wrap justify-center gap-20 pb-10">
          <data-card data="35+" description="COMPANY INVESTMENTS" color="var(--primary-color)"/>
          <data-card data="150+" description="FUND INVESTMENTS" color="var(--clickable-color)"/>
          <data-card data="$30M" description="REALIZED" color="var(--decoration-color)"/>
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
          <ApexButton caption="See More" />
        </div>
      </div>
    </TitledCard>
  </div>

  <div class="separator self-center h-[1px] w-1/3 mt-10 mb-20"></div>

  <div class="our-team">
    <img class="photo" src="/images/banners/hometeam.jpeg" />
    <div class="green-box">
      <h2 class="text-xl mb-4"><b>Our Team</b></h2>
      <p class="mb-5">
        When investors, operators, founders, and specialists align under one
        mission and commit as a team, each with their own unique set of
        experiences, accomplishments, and failures, great things are bound to
        happen.
      </p>
      <div class="button">
        <NuxtLink :to="'/team'"><ApexButton caption="See more" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerHome from "@/components/BannerHome.vue";
import TitledCard from "@/components/TitledCard.vue";
import ProjectLogo from "@/components/ProjectLogo.vue";
import ApexButton from "@/components/ApexButton.vue";
import DataCard from "~/components/SingleDataCard.vue";
</script>

<style scoped>
.our-team {
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
}

.photo {
  max-width: 50%;
  border-radius: var(--big-round) 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.green-box {
  color: var(--white-color);
  border-radius: var(--big-round) 0px;
  position: absolute;
  background-color: var(--secondary-color);
  bottom: 90px;
  width: 30%;
  height: 300px;
  justify-content: center;
  text-align: center;
  padding: 2%;
  align-items: center;
}
</style>
