<template>
    <banner 
        :imageUrl="'/images/banners/person.png'"
        :title="person.name"
    />
    <div class="grid-box">
    <div class="first-column">
      <div class="image-box">
        <PictureTitledCard :image="person.image" :role="person.role">
        </PictureTitledCard>
      </div>
      <WhiteBox>
        <p><b>Address: </b>{{ person.address }}</p>
        <p><b>Phone: </b>{{ person.phone }}</p>
        <p><b>Email: </b>{{ person.email }}</p>
        <p><b>Date of Birth: </b>{{ person.birthday }}</p>
        <p><b>Nationality: </b>{{ person.nationality }}</p>
      </WhiteBox>
    </div>
    <div class="cv-box">
        <TitledCard title="Curriculum Vitae" :left=true>
        {{ person.longcv }}
        </TitledCard>
    </div>
    <div class="separator self-center h-[1px] w-2/3 my-10"></div>
    <div class="projects">
      <TitledCard title="Supervised Projects" :left="true">
        <ProjectLogo project_image=/images/logos/sample.png project_name="Project1"></ProjectLogo>
        <ProjectLogo project_image=/images/logos/sample.png project_name="Project2"></ProjectLogo>
        <ProjectLogo project_image=/images/logos/sample.png project_name="Project3"></ProjectLogo>
        <ProjectLogo project_image=/images/logos/sample.png project_name="Project4"></ProjectLogo>
        <ProjectLogo project_image=/images/logos/sample.png project_name="Project5"></ProjectLogo>
      </TitledCard>
    </div>
  </div>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import TitledCard from "~/components/TitledCard.vue";

const route = useRoute();
// this is the data that i should fetch from the api
const person = {
    name: route2person(route.params.name),
    image: "/images/team/Luigi-Capello.png",
    role: "Role",
    address: "Address",
    phone: "+39 012 34 56 789",
    email: route.params.name + "@apexventure.com",
    birthday: "01/01/1970",
    nationality: "Italian",
    longcv: "Long CV",
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
      padding-bottom: 0%;
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

    .separator {
      background-color: gray;
    }

    .projects {
      justify-content: center;
      display: wrap;
      margin-left: 20%;
      margin-right: 20%;
      margin-bottom: 10%;
      height: fit-content;
      min-width: 500px;
      width: fit-content;
    }

</style>