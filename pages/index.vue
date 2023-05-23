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
</template>
