<template>
    <Banner
        imageUrl="/images/banners/collage.png"
        title="Areas"
        caption="Explore diverse investment areas, empowering visionary entrepreneurs across industries to shape the future."
    />
    <div class="giga-container">
        <div class="flex flex-col desktop:flex-row gap-8">
            <div class="sectors">
                <div class="title">
                    <div>Sectors</div>
                </div>
                <AreaPreview v-for="sector in sectors"
                    :iconUrl="sector.iconUrl"
                    :title="sector.title"
                    :caption="sector.caption"
                />
            </div>
            <div class="hidden desktop:block separator"></div>
            <div class="technologies">
                <div class="title">
                    <div>Technologies</div>
                </div>
                <AreaPreview v-for="technology in technologies"
                    :iconUrl="technology.iconUrl"
                    :title="technology.title"
                    :caption="technology.caption"
                />
            </div>
        </div>
    </div>
    
</template>

<script setup>
import AreaPreview from '~/components/AreaPreview.vue';
const { technologies, sectors } = getAreasData(useSupabaseClient());
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
/*
.grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 50px;
    background-color: var(--white-color);
    margin-top: 50px;
    justify-content: center;
}
*/


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
