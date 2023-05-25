<template>
    <Banner
        imageUrl="_nuxt/images/banners/collage.png"
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
                    iconUrl="_nuxt/assets/areas icons/planet-earth.png"
                    title="Green"
                    caption="Invest in clean energy production, waste management, and sustainable mobility solutions to address environmental challenges."
                />
            </div>
        
            <div class="technologies">
                <div class="title">
                    <div>Technologies</div>
                </div>
                <AreaPreview
                    iconUrl="_nuxt/assets/areas icons/iot.png"
                    title="IoT"
                    caption="Invest in solutions for smart homes, Industry 4.0, and mobility that leverage the connection 
                    of physical objects to the internet for data collection and exchange."
                />
            </div>
        </div>
    </div>
    
</template>

<script>
import AreaPreview from '~/components/AreaPreview.vue';
</script>

<style>

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
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    grid-gap: 10px; /* Define spaces between grid items */
    background-color: var(--white-color);
    margin-top: 50px;
    justify-content: center;
}


.title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  width: 400px;
  height: 100px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px var(--big-round);
}

.title div {
    color: var(--white-color);
    font-size: xx-large;
}

.technologies,
.sectors {
    display: block ;
    margin-bottom: 20px;
}


</style>
