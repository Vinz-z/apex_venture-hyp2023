<template>
  <banner
    title="About us"
    caption="At Apex Venture, we believe in the power of innovation and are committed to supporting visionary founders in their quest to disrupt industries and drive transformative change. "
    imageUrl="/images/banners/strategy.jpg"
    :percentage=10
  />

  <div class="flex justify-center items-center mt-20 mb-20">
    <div class="grid grid-rows-2 grid-col-2 grid-flow-col gap-4">
      <div class="row-span-2 w-5/6" id="strategy">
        <titled-card title="Investment Strategy" :left=true>
          <p class="mt-5">
            At Apex Venture, we are driven by a forward-thinking investment
            strategy that focuses on identifying and nurturing innovative
            startups with high growth potential. Our goal is to partner with
            visionary entrepreneurs who are disrupting industries and creating
            scalable business models. Through strategic investments and hands-on
            support, we aim to fuel their growth and maximize their success.
          </p>
          <p class="mt-10">
            Our investment strategy is driven by in-depth market research and
            meticulous due diligence. We focus on identifying startups with
            strong market traction, exceptional leadership teams, and a clear
            competitive advantage. By investing across diverse sectors and
            prioritizing sustainability and social responsibility, we aim to
            maximize growth and create lasting value for our investors and
            portfolio companies.
          </p>
          <p class="mt-10">
            To achieve our investment objectives, we take a collaborative approach and work closely with our portfolio companies. We provide them with access to our extensive network of industry experts, mentors, and resources, including financial, operational, and strategic support. Our team of experienced professionals brings a wealth of knowledge and expertise in areas such as finance, marketing, and technology, to help our portfolio companies overcome challenges and scale their businesses.
          </p>
        </titled-card>
      </div>
      <div class="bg-blue-500 justify-center flex items-center">
        <data-card data="35+" description="COMPANY INVESTMENT" color="var(--primary-color)"></data-card>
      </div>
      <div id="graph"><animated-charts /></div>
    </div>
  </div>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import TitledCard from "~/components/TitledCard.vue";
import animatedCharts from "~/components/AnimatedCharts.vue";
import dataCard from "~/components/SingleDataCard.vue";
</script>

<style scoped>
#strategy {
  max-width: 600px;
  justify-content: center;
}

#graph {
  min-width: fit-content;
  justify-content: center;
}
</style>