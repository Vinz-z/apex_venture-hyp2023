<template>
    <Banner
        imageUrl="/images/banners/finance.jpg"
        :title="$route.params.name"
        caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
    />
    <div class="ultra-container flex gap-20 mt-10">
        <TitledCard
            :title="`Investing in ${$route.params.name}`"
            :left="false"
            class="max-w-[600px] max-h-[500px]">
            <div class="caption mt-[-15px]">
                Investing in finance offers a pathway to financial growth and security. 
                Through prudent allocation of funds, individuals can seize opportunities to multiply their wealth. 
                By diversifying portfolios across stocks, bonds, and other assets, one can mitigate risks and maximize returns. 
                Monitoring market trends and seeking expert advice helps make informed decisions. 
                Investing in finance empowers individuals to build a prosperous future, 
                achieve long-term goals, and enjoy financial independence.
            </div>
        </TitledCard> 
        <DataGrid
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
    <div class="projects-container 
                flex
                self-center">
        <TitledCard title="Supervised Projects" :left="true">
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
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project4"></ProjectLogo>
                </div>
                <div class="project-item">
                    <ProjectLogo project_image="~/../../images/logos/sample.png" project_name="Project5"></ProjectLogo>
                </div>
                <div class="little-container w-[190px] h-[150px] flex justify-center">
                    <button class="see-all
                                    h-[150px] 
                                    w-[150px]
                                    rounded-br-[var(--big-round)] 
                                    rounded-tl-[var(--big-round)] 
                                    justify-center 
                                    mb-0 
                                    p-3 
                                    shadow-md">
                        <div class="text-xl 
                                    font-bold 
                                    text-white
                                    break-word">
                        See All Projects
                        </div>
                    </button>
                </div>
                
            </div>
        </TitledCard>
    </div>
    
        
</template>

<style>

.see-all {
    background-color: var(--clickable-color);
}

</style>