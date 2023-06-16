<!-- Group of Single Data Card, it is used in the About Us page to give some information and statistics about the Venture Capital-->
<template>
    <div class="deck">
      <div class="card">
        <div class="cardBody">
          <single-data-card data="35+" description="COMPANY INVESTMENTS" color="var(--primary-color)"/>
        </div>
      </div>
  
      <div class="card">
        <div class="cardBody">
          <single-data-card data="$30M" description="REALIZED" color="var(--decoration-color)"/>
        </div>
      </div>
  
      <div class="card">
        <div class="cardBody">
          <single-data-card data="150+" description="FUND INVESTMENTS" color="var(--clickable-color)"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SingleDataCard from "~/components/SingleDataCard.vue";
  </script>

  <style scoped>
  
  .card {
    width: fit-content;
    height: auto;
    position: relative;
    z-index: 5;
    border-radius: 2px;
    transition: 200ms ease-in-out;
  }
  
  .card:hover {
    z-index: 7;
    transform: scale(1.1);
  }
  
  .card:first-of-type {
    margin-left: -4em;
    margin-right: 3em;
    @media (max-width: 705px) {
      margin-left: -1em;
      margin-right: 1em;
    }
    @media (max-width: 550px) {
      margin: 0;
    }
  }
  
  .card:nth-of-type(2) {
    margin-left: 6em;
    margin-right: -4em;
    margin-top: -4em;
    @media (max-width: 705px) {
      margin-left: 1em;
      margin-right: -1em;
      margin-top: 1em;
    }
    @media (max-width: 550px) {
      margin: 1em 0 0;
    }
  }
  
  .card:nth-of-type(3) {
    margin-top: -4em;
    margin-left: -4em;
    margin-right: 3em;
    @media (max-width: 705px) {
      margin-left: -1em;
      margin-right: 1em;
      margin-top: 1em;
    }
  }
  
  @media (max-width: 550px) {
    .card:nth-of-type(3) {
      margin: 1em 0 0;
    }
  }
  
  .cardBody {
    display: flex;
    margin: 0 10px 10px;
  }
  </style>