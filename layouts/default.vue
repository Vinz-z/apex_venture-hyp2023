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
  background-color: #f3eff5;
  margin: 0;
}

:root {
  --primary-color: #00524cff;
  --secondary-color: #49817f;
  --clickable-color: #2effd1ff;
  --white-color: #f3eff5ff;
  --black-color: #2e2836ff;
  --decoration-color: #e0607eff;

  font-family: "Heebo", sans-serif;
}
</style>
