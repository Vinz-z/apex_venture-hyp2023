<template>
  <Banner
    imageUrl="/images/banners/person.png"
    :title="person_name"
    caption=""
  />
  <div class="grid-box">
    <div class="first-column">
      <div class="image-box">
        <PictureTitledCard :image="person_image" :role="person_role">
        </PictureTitledCard>
      </div>
      <WhiteBox>
        <p><b>Address: </b>{{ person_address }}</p>
        <p><b>Phone: </b>{{ person_phone }}</p>
        <p><b>Email: </b>{{ person_email }}</p>
        <p><b>Date of Birth: </b>{{ person_birthday }}</p>
        <p><b>Nationality: </b>{{ person_nationality }}</p>
      </WhiteBox>
    </div>
    <div class="cv-box">
        <TitledCard title="Curriculum Vitae" :left=true>
        {{ person_longcv }}
        </TitledCard>
    </div>
    <div class="projects">
      <TitledCard title="Supervised Projects" :left="true">
        <ProjectLogo :project_image="person_image" project_name="Project1"></ProjectLogo>
        <ProjectLogo :project_image="person_image" project_name="Project2"></ProjectLogo>
        <ProjectLogo :project_image="person_image" project_name="Project3"></ProjectLogo>
        <ProjectLogo :project_image="person_image" project_name="Project4"></ProjectLogo>
        <ProjectLogo :project_image="person_image" project_name="Project5"></ProjectLogo>
        <ProjectLogo :project_image="person_image" project_name="Project6"></ProjectLogo>
      </TitledCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person_name: {},
      person_image: {},
      person_role: {},
      person_address: {},
      person_phone: {},
      person_email: {},
      person_birthday: {},
      person_nationality: {},
      person_longcv: {},
      person_shortcv: {},
    }
  },
  mounted() {
    this.person_name = this.$route.query.person_name;
    this.person_image = this.$route.query.person_image;
    this.person_role = this.$route.query.person_role;
    this.person_address = this.$route.query.person_address;
    this.person_phone = this.$route.query.person_phone;
    this.person_email = this.$route.query.person_email;
    this.person_birthday = this.$route.query.person_birthday;
    this.person_nationality = this.$route.query.person_nationality;
    this.person_longcv = this.$route.query.person_longcv;
  }
}
</script>

<style scoped>
    .grid-box {
      margin-top: 5%;
      padding-top: 5%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      text-align: center;
      justify-content: center;
      vertical-align: top;

    }
    .first-column {
      padding-top: 5%;
      margin-left: 5%;
      margin-right: 5%;
      padding-bottom: 5%;
      width: 500px;
      display: grid;
    }

    .cv-box {
      padding-bottom: 5%;
      margin-left: 5%;
      margin-right: 5%;
      width: 500px;
      vertical-align: top;
    }

    .projects {
      display: wrap;
      margin-left: 20%;
      margin-right: 20%;
      margin-bottom: 10%;
      height: fit-content;
      min-width: 500px;
      width: fit-content;
    }

</style>