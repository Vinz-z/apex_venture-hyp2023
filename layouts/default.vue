<!--
    Default layout used by all the page
-->
<template>
  <div class="page">
    <Header />
    <Circle top="30" left="90" size="400" color="var(--clickable-color)" />
    <Circle top="45" left="95" size="350" color="var(--decoration-color)" />
    <Circle top="75" left="-10" size="400" color="var(--decoration-color)" />
    <Circle top="70" left="-8" size="250" color="var(--clickable-color)" />
    <slot />
    <Footer />
  </div>
</template>

<script>
  import Circle from "~/components/BackgroundCircle.vue";

  export default {
      components: {
          Circle,
      }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Tilt+Prism&display=swap");

body {
  margin: 0;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  margin: 0;
  overflow: hidden;
  position: relative;
}

:root {
  --primary-color: #00524c;
  --secondary-color: #49817f;
  --clickable-color: #26cfaa;
  --white-color: #f3eff5;
  --black-color: #2e2836;
  --decoration-color: #e0607eff;

  --big-round: 30px;
  --medium-round: 20px;

  font-family: "Poppins", sans-serif;
}
</style>
