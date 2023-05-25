<template>
  <button class="rectangle-button" @click="handleClick">
    <span> Submit </span>
  </button>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    handleClick() {
      console.log("Button clicked but not checked");
      if (this.isChecked) {
        console.log("Button clicked");
        this.isClicked = !this.isClicked;
      }
    },
  },
};
</script>

<style scoped>
.rectangle-button {
  margin: 40px;
  background-color: var(--clickable-color);
  color: var(--white-color);
  border: none;
  min-width: 150px;
  min-height: 30px;
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
}

.rectangle-button:hover {
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  background-color: var(--clickable-color);
}
</style>
