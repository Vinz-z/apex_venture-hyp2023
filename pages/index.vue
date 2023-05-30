<template>
  <Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="Banner Title"
    caption="Banner Caption"
  />
  <TitledCard title="Boxed Text Title" :left=false>
    <h1>Gino</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
  </TitledCard>
  <TitledCard title="Boxed Text Title" :left=true>
    <h1>Gino</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
    <button class="av-button">Clicking</button>
  </TitledCard>
  <h1>Hello world!</h1>

  <div class="our-team">
    <img class="photo" src="/images/banners/hometeam.jpeg">
    <div class="green-box">
      <h2 class="text-xl mb-4"><b>Our Team</b></h2>
      <p>When investors, operators, founders, and specialists align under one mission and commit as a team, each with their own unique set of experiences, accomplishments, and failures, great things are bound to happen.</p>
      <div class="button">
        <NuxtLink :to="'/team'"><button class="av-button">See more</button></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.our-team {
  display: flex;
  justify-content: center;
  margin: 10%;
  margin-top: 10%;
  margin-bottom: 10%;
}

.photo {
  max-width: 50%;
  border-radius: var(--big-round) 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.green-box {
  color: var(--white-color);
  border-radius: var(--big-round) 0px;
  position: absolute;
  background-color: var(--secondary-color);
  bottom: 90px;
  width: 30%;
  height: 300px;
  justify-content: center;
  text-align: center;
  padding: 2%;
  align-items: center;
}
</style>
