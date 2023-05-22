<!--
    Default layout used by all the page
-->
<template>
  <div class="page">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");

body {
  margin: 0;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F3EFF5;
  margin: 0;
}

:root {
  --primary-color: #00524C;
  --secondary-color: #49817f;
  --clickable-color: #26CFAA;
  --white-color: #F3EFF5;
  --black-color: #2E2836;
  --decoration-color: #e0607eff;

  --big-round: 30px;

  font-family: "Heebo", sans-serif;
}
</style>
