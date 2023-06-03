<template>
    <Banner
        imageUrl="/images/banners/ourTeam.png"
        title="Our Team"
        caption="When investors, operators, founders and specialists align under one mission and commit as a team, great things are bound to happen"
      />
    <div class="container">
        <OurTeamElement 
            v-for="item in team"
            :person_name=item.name
            :person_image=item.image
            :person_role=item.role
            :person_shortcv=item.shortcv
            :left=left_right(item.id)>
        </OurTeamElement>

    </div>
</template>

<script setup>
import left_right from '~/composables/left_right';
    const team = await getTeamData();
</script>

<style scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 5%;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
}
</style>