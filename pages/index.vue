<template>
  <Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="Banner Title"
    caption="Banner Caption"
  />
  <div class="description
              self-center
              flex">
    Welcome to Apex Venture where innovation meets opportunity. 
    As a leading venture capital firm, we fuel the growth of groundbreaking startups, 
    providing not only capital but also invaluable expertise and guidance. Join us as we reshape industries, 
    redefine possibilities, and create a brighter future together.
  </div>
  <div class="projects-container 
                flex
                flex-column
                justify-center">
        <TitledCard title="Supervised Projects" :left="true">
          <div>
            <div class="mid-container flex flex-wrap justify-start gap-4">
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project1"></ProjectLogo>
                </div>
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project2"></ProjectLogo>
                </div>
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project3"></ProjectLogo>
                </div>
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project5"></ProjectLogo>
                </div>
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project5"></ProjectLogo>
                </div>
            </div>
            <div class="flex justify-center h-[35px]">
              <ApexButton
                  caption="See all Projects"
              />
            </div>
          </div>
            
        </TitledCard>
    </div>

  <div class="our-team">
    <img class="photo" src="/images/banners/hometeam.jpeg">
    <div class="green-box">
      <h2 class="text-xl mb-4"><b>Our Team</b></h2>
      <p>When investors, operators, founders, and specialists align under one mission and commit as a team, each with their own unique set of experiences, accomplishments, and failures, great things are bound to happen.</p>
      <div class="button">
        <NuxtLink :to="'/team'"><button class="av-button">See more</button></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.our-team {
  display: flex;
  justify-content: center;
  margin: 10%;
  margin-top: 10%;
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
