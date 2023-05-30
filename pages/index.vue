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
</template>
