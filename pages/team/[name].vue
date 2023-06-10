<template>
  <banner 
      :imageUrl="'/images/banners/person.png'"
      :title=person.name
  />
  <div class="grid-box mt-32">
    <div class="first-column">
      <div class="image-box">
        <picture-titled-card :image="person.image" :role="person.role"/>
      </div>
      <white-box>
        <p><b>Address: </b>{{ person.address }}</p>
        <p><b>Phone: </b>{{ person.phone }}</p>
        <p><b>Email: </b>{{ person.email }}</p>
        <p><b>Date of Birth: </b>{{ person.birthday }}</p>
        <p><b>Nationality: </b>{{ person.nationality }}</p>
      </white-box>
    </div>
    <div class="cv-box">
        <titled-card title="Curriculum Vitae" :left=true>
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
        </titled-card>
    </div>
    <div v-if="person.supervised.length > 0" class="w-full flex flex-col">
      <div class="separator self-center h-[1px] w-2/3 mb-10"></div>
      <div class="projects">
        <div class="projects-container flex justify-center self-center desktop:px-0">
          <titled-card
            title="Supervised Projects"
            class="w-full justify-center"
            :left="true"
          >
            <div class="mid-container justify-center flex flex-wrap">
              <project-logo
                v-for="project in person.supervised"
                :project_image=project.logo
                :project_name=project.name>
              </project-logo>
            </div>
          </titled-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const target = route2name(useRoute().params.name)
  const person = await useSupabaseClient().from('persons')
    .select('*, supervised:projects(name, logo)')
    .eq('name', target)
    .single()
    .then(( {data, error} ) => {
        if (error) throw createError({ statusCode: 404, statusMessage: error.message })
        return data;
    });
  setProjectList(person.supervised.map(project => project.name))
  useHead({title: `Apex Venture | ${person.name}`});
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