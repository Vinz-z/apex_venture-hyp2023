<!-- Page that contains short informations about all the team members of the Venture Capital-->
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
            :left="item.id % 2 !== 0">
        </OurTeamElement>

    </div>
</template>

<script setup>
    const team = await useSupabaseClient().from('persons')
        .select('name, image, role, shortcv, id')
        .order('id', { ascending: true })
        .then(({ data, error }) => {
            if (error) throw createError({ statusCode: 404, statusMessage: `Team non found` })
            return data;
        });
    useHead({htmlAttrs: {lang: "en"}, title: "Apex Venture | Our Team"});
    useSeoMeta({
        title: "Apex Venture | Our Team",
        description: "When investors, operators, founders and specialists align under one mission and commit as a team, great things are bound to happen",
        image: "/images/banners/ourTeam.png",
        url: "https://apexventure.com/team"
    })
</script>

<style scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    padding-top: 5%;
    padding-bottom: 5%;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
}
</style>