<template>
    <Banner
        imageUrl="/images/banners/collage.png"
        title="Areas"
        caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
    />
    <div class="giga-container">
        <div class="grid">
            <div class="sectors">
                <div class="title">
                    <div>Sectors</div>
                </div>
                <AreaPreview
                    iconUrl="/icons/areas/healthcare.png"
                    title="Health"
                    caption="Invest in medical devices, telemedicine solutions, and software to improve healthcare outcomes and manage health data."
                />
                <AreaPreview
                    iconUrl="/icons/areas/planet-earth.png"
                    title="Green"
                    caption="Invest in clean energy production, waste management, and sustainable mobility solutions to address environmental challenges."
                />
                <AreaPreview
                    iconUrl="/icons/areas/education.png"
                    title="Education"
                    caption="Invest in online learning, professional training, and education management software to improve access to education."
                />
                <AreaPreview
                    iconUrl="/icons/areas/e-commerce.png"
                    title="Finance"
                    caption="Invest in digital payment solutions, fintech, and trading platforms to promote efficient and secure financial transactions."
                />
                <AreaPreview
                    iconUrl="/icons/areas/balls-sports.png"
                    title="Sports"
                    caption="Invest in technologies to improve athlete performance, manage the fan experience, and commercialize sports rights for a better sports industry."
                />
            </div>
            <div class="separator"></div>
            <div class="technologies">
                <div class="title">
                    <div>Technologies</div>
                </div>
                <AreaPreview
                    iconUrl="/icons/areas/iot.png"
                    title="IoT"
                    caption="Invest in solutions for smart homes, Industry 4.0, and mobility that leverage the connection of physical objects to the internet for data collection and exchange."
                />
                <AreaPreview
                    iconUrl="/icons/areas/analytics.png"
                    title="Artificial Intelligence"
                    caption="Invest in machine learning algorithms, robotics, and automation software to create intelligent machines capable of tasks that require human intelligence."
                />
                <AreaPreview
                    iconUrl="/icons/areas/blockchain.png"
                    title="Blockchain"
                    caption="Invest in decentralized applications, cryptocurrencies, and supply chain management solutions using an immutable and secure digital record-keeping system."
                />
                <AreaPreview
                    iconUrl="/icons/areas/vr.png"
                    title="Augmented Reality"
                    caption="Invest in applications that overlay digital elements onto the real world for gaming, education, and tourism."
                />
            </div>
        </div>
    </div>
    
</template>

<script>
import AreaPreview from '~/components/AreaPreview.vue';
</script>

<style scoped>

.giga-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px
}

.grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr; /* Three columns: equal, separator, equal */
    grid-gap: 50px; /* Define spaces between grid items */
    background-color: var(--white-color);
    margin-top: 50px;
    justify-content: center;
}


.title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  width: 500px;
  height: 110px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px var(--big-round);
  margin-bottom: 10px;
}

.title div {
    color: var(--white-color);
    font-size: xx-large;
}

.separator {
  grid-column: 2; /* Place the separator in the second column */
  height: auto;
  margin-top: 150px;
  position: relative;
  width: 1px; /* Set the width of the separator */
  background-color: gray; /* Adjust the color of the separator */
}

.technologies,
.sectors {
  display: grid;
  grid-template-columns: 1fr; /* Specify one column */
  row-gap: 25px; /* Define the fixed spacing between grid rows */
  align-self: start; /* Center align the items horizontally */
}


</style>
