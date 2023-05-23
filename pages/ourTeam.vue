<template>
<Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="Our Team"
    caption="When investors, operators, founders and specialists align under one mission and commit as a team, great things are bound to happen"
  />
  <div class="container">
    
    <OurTeamElement 
        title="Padre di Vinz"
        role="Role" 
        cv="Curriculum Vitae"
        img="_nuxt/assets/team/Roberto-Magnifico.png">
    </OurTeamElement>
    <OurTeamElement 
        title="Taddeo Curreri"
        role="Role" 
        cv="Curriculum Vitae"
        img="_nuxt/assets/team/Luigi-Capello.png">
    </OurTeamElement>
    
    <OurTeamElement 
        title="Padre di Vinz"
        role="Role" 
        cv="Curriculum Vitae"
        img="_nuxt/assets/team/Stefano-Pighini.png">
    </OurTeamElement>
    <OurTeamElement 
        title="Name Surname"
        role="Role" 
        cv="Curriculum Vitae"
        img="_nuxt/assets/team/Antonella-Zullo.png">
    </OurTeamElement>
  </div>
</template>

<style>
.container {
    padding: 5%;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
}
</style>