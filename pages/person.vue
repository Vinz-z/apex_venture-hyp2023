<template>
  <Banner
    imageUrl="_nuxt/assets/banners/bannerPerson.png"
    :title="user"
    caption=""
  />
  <div class="grid-box">
    <div class="first-column">
      <div class="image-box">
        <PictureTitledCard :image="image" :role="role">
        </PictureTitledCard>
      </div>
      <div class="information-box">
          gino
      </div>
    </div>

    <div class="cv-box">
        <TitledCard title="Curriculum Vitae" :left=true>
        gino
        gino
        </TitledCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      image: {},
      role: {},
    }
  },
  mounted() {
    this.user = this.$route.query.title;
    this.image = this.$route.query.img;
    this.role = this.$route.query.role;
  }
}
</script>

<style scoped>
    .grid-box {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 5%;
    }
    .first-column {
      min-width: 500px;
      display: grid;
    }
    .image-box {
    }
    .information-box {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background-color: var(--white-color);
      border-radius: 0px var(--big-round);
      width: 500px;
    }

    .cv-box {
      width: 600px;
    }

</style>