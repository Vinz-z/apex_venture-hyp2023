<template>
  <div class="chartBarsWrap">
    <div class="chartBars chartBars1">
      <ul class="numbers">
        <li><b>${{ maxBarValue }}M</b></li>
        <li><b>${{ maxBarValue * 0.75 }}M</b></li>
        <li><b>${{ maxBarValue * 0.5 }}M</b></li>
        <li><b>${{ maxBarValue * 0.25 }}M</b></li>
        <li><b>0</b></li>
      </ul>
      <ul class="bars">
        <li>
          <div :data-value="10" class="bar firstBar"></div>
          <b>2015</b>
        </li>
        <li>
          <div :data-value="20" class="bar secondBar"></div>
          <b>2020</b>
        </li>
        <li>
          <div :data-value="30" class="bar thirdBar"></div>
          <b>2023</b>
        </li>
        <li>
          <div :data-value="40" class="bar fourthBar"></div>
          <b>2025</b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxBarValue: 40,
    };
  },
  mounted() {
    this.setupScrollReveal();
  },
  methods: {
    setupScrollReveal() {
      const options = {
        root: null, // Null uses the browser viewport as the root
        rootMargin: '0px', // Margin around the root. Values are similar to CSS margins
        threshold: 0.2, // The percentage of the target's visibility needed to trigger the callback
      };
      
      const observer = new IntersectionObserver(this.scrollReveal, options);
      const bars = Array.from(document.querySelectorAll(".bar"));

      bars.forEach((bar) => {
        observer.observe(bar);
      });
    },
    scrollReveal(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const value = entry.target.getAttribute("data-value");
          const height = (value / this.maxBarValue) * 100 + "%";
          entry.target.style.height = height;
          observer.unobserve(entry.target);
        }
      });
    },
  },
};
</script>

<style scoped>
.chartBarsWrap {
  padding-left: 40px;
  margin: 0 30px 0 20px;
  min-width: 400px;
}

.chartBars {
  position: relative;
  max-width: 600px;
  height: 300px;
  margin: 50px auto 100px;
}

.chartBars .bars {
  display: flex;
  justify-content: space-around;
  border-left: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  width: 100%;
  height: 100%;
  padding: 0;
  padding: 0 1%;
  margin: 0;
}

.chartBars .bars li {
  display: inline-block;
  flex: 0 1 24%;
  height: 100%;
  margin: 0;
  text-align: center;
  position: relative;
  font-size: 16px;
}

.chartBars .bars li .bar {
  width: 100%;
  background: #49E;
  position: absolute;
  font-size: 1.5em;
  padding-top: 18px;
  bottom: 0;
  height: 0;
  overflow: hidden;
  font-weight: bold;
  outline: 2px solid transparent;
  transition: 1.5s height cubic-bezier(.6, .4, .4, 1.1);
}

.chartBars .bars li b {
  color: var(--primary-color);
  width: 100%;
  position: absolute;
  bottom: -2em;
  left: 0;
  text-align: center;
}

.chartBars .numbers {
  width: 50px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: absolute;
  left: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -20px;
  justify-content: space-between;
}

.chartBars .numbers li {
  text-align: right;
  padding-right: 1em;
  list-style: none;
  font-size: 13px;
  color: var(--primary-color);
}

.chartBars1 .bar {
  border-top-left-radius: 15px;
}

.bars li .bar.firstBar {
  background: linear-gradient(to bottom, #E0607E 0%, #FF3C69 100%);
}

.bars li .bar.secondBar {
  background: linear-gradient(to bottom, #E0607E 0%, #FF3C69 100%);
}

.bars li .bar.thirdBar {
  background: linear-gradient(to bottom, #E0607E 0%, #FF3C69 100%);
}

.bars li .bar.fourthBar {
  background: linear-gradient(to bottom, #E0607E 0%, #FF3C69 100%);
}

h1,
h2,
h3 {
  text-align: center;
}

h1 {
  margin: 100px auto 0;
  color: #F0B015;
}

h2 {
  margin: 20px auto 0;
  font-size: 1.2em;
}

p {
  margin: 5vw auto;
  padding: 0 5vw;
  line-height: 2em;
  max-width: 60em;
}
</style>