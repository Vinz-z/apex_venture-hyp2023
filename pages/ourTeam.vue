<template>
<Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="Our Team"
    caption="When investors, operators, founders and specialists align under one mission and commit as a team, great things are bound to happen"
  />
  <div class="container">
    <OurTeamElement 
        title="Luca Cavallaro"
        role="President" 
        cv="An experienced finance professional with a deep understanding of the startup industry and venture capital investment."
        img="_nuxt/assets/team/Roberto-Magnifico.png"
        :left=true>
    </OurTeamElement>
    <OurTeamElement 
        title="Taddeo Curreri"
        role="Executive Director" 
        cv="A professional with a strong background in investments and acquisitions, responsible for overseeing the operational management and implementation of the investment strategy."
        img="_nuxt/assets/team/Luigi-Capello.png"
        :left=false>
    </OurTeamElement>
    <OurTeamElement 
        title="Cassio Siniscalchi"
        role="Chief Financial Officer" 
        cv="An accounting and finance expert with in-depth knowledge of financial operations, responsible for financial planning, investment valuation, and portfolio management."
        img="_nuxt/assets/team/Stefano-Pighini.png"
        :left=true>
    </OurTeamElement>
    <OurTeamElement 
        title="Sara Genovese"
        role="Investment Director" 
        cv="An individual with a solid background in investment analysis, responsible for evaluating investment opportunities, managing the portfolio, and implementing exit strategies."
        img="_nuxt/assets/team/Antonella-Zullo.png"
        :left=false>
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