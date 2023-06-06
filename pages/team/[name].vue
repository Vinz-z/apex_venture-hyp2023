<template>
  <banner 
      :imageUrl="'/images/banners/person.png'"
      :title=person.name
  />
  <div class="grid-box mt-32">
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
          <p class="my-4">
            <h2 class="text-xl font-bold">Education:</h2>
            <ul class="list-disc ml-5">
              <li v-for="education in person.education">
                {{ education }}
              </li>
            </ul>
          </p>
          <p class="my-4">
            <h2 class="text-xl font-bold">Experience:</h2>
            <ul class="list-disc ml-5">
              <li v-for="experience in person.experience">
                {{ experience }}
              </li>
            </ul>
          </p>
          <p class="my-4">
            <h2 class="text-xl font-bold">Skills:</h2>
            <ul class="list-disc ml-5">
              <li v-for="skill in person.skills">
                {{ skill }}
              </li>
            </ul>
          </p>
          <p class="my-4">
            <h2 class="text-xl font-bold">Languages:</h2>
            <ul class="list-disc ml-5">
              <li v-for="language in person.languages">
                {{ language }}
              </li>
            </ul>
          </p>
        </TitledCard>
    </div>
    <div v-if="toShow" class="separator self-center h-[1px] w-2/3 mb-10"></div>
    <div class="projects">
      <div v-if="toShow" class="projects-container flex justify-center self-center desktop:px-0">
        <titled-card
          title="Supervised Projects"
          class="w-full justify-center"
          :left="true"
        >
          <div class="mid-container justify-center flex flex-wrap">
            <ProjectLogo
              v-for="project in supervised"
              :project_image=project.logo_path
              :project_name=project.name>
            </ProjectLogo>
          </div>
        </titled-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import TitledCard from "~/components/TitledCard.vue";

const route = useRoute();
const person = await getPersonData(route2name(route.params.name));
const supervised = await getSupervised(person.name);
const toShow = supervised.length > 0;

</script>


<style scoped>
    .grid-box {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      justify-content: center;
      vertical-align: top;
      margin-left: 5%;
      margin-right: 5%;
      max-height: 90%;
    }
    .first-column {
      padding-top: 5%;
      padding-bottom: 40px;
      padding-left: 3%;
      padding-right: 3%;
      width: 500px;
      max-height: 90%;
      display: grid;
    }

    .cv-box {

      padding-left: 3%;
      padding-right: 3%;
      width: 500px;
      vertical-align: top;
    }

    .separator {
      background-color: gray;
    }

    .projects {
      justify-content: center;
      display: wrap;
      margin-bottom: 5%;
      height: fit-content;
    }

</style>