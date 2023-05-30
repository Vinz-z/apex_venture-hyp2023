<template>
    <Banner
        imageUrl="/images/banners/ourTeam.png"
        title="Our Team"
        caption="When investors, operators, founders and specialists align under one mission and commit as a team, great things are bound to happen"
      />
      <div class="container">
        <OurTeamElement 
            person_name="Claudio Cavallaro"
            person_image="images/team/Roberto-Magnifico.png"
            person_role="President"
            person_address="a"
            person_phone="a"
            person_email="a"
            person_birthday="a"
            person_nationality="a"
            person_longcv="a"
            person_shortcv="An experienced finance professional with a deep understanding of the startup industry and venture capital investment."
            :left=true>
        </OurTeamElement>
        <OurTeamElement 
            person_name="Taddeo Curreri"
            person_image="images/team/Luigi-Capello.png"
            person_role="Executive Director"
            person_address="a"
            person_phone="a"
            person_email="a"
            person_birthday="a"
            person_nationality="a"
            person_longcv="a"
            person_shortcv="A professional with a strong background in investments and acquisitions, responsible for overseeing the operational management and implementation of the investment strategy."
            :left=false>
        </OurTeamElement>
        <OurTeamElement 
            person_name="Cassio Siniscalchi"
            person_image="images/team/Stefano-Pighini.png"
            person_role="Chief Financial Officer"
            person_address="a"
            person_phone="a"
            person_email="a"
            person_birthday="a"
            person_nationality="a"
            person_longcv="a"
            person_shortcv="An accounting and finance expert with in-depth knowledge of financial operations, responsible for financial planning, investment valuation, and portfolio management."
            :left=true>
        </OurTeamElement>
        <OurTeamElement 
            person_name="Sara Genovese"
            person_image="images/team/Antonella-Zullo.png"
            person_role="Investment Director"
            person_address="a"
            person_phone="a"
            person_email="a"
            person_birthday="a"
            person_nationality="a"
            person_longcv="a"
            person_shortcv="An individual with a solid background in investment analysis, responsible for evaluating investment opportunities, managing the portfolio, and implementing exit strategies."
            :left=false>
        </OurTeamElement>
      </div>
    </template>
    
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