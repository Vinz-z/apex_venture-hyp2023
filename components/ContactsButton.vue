<template>
  <button :class="buttonClass" @click="handleClick" :disabled="isDisabled">
    <span v-if="isClicked">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    </span>
    <span v-else> Button </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      isClicked: false,
      isDisabled: false,
    };
  },
  computed: {
    buttonClass() {
      return {
        "square-button": this.isClicked,
        "rectangle-button": !this.isClicked,
      };
    },
  },
  methods: {
    handleClick() {
      console.log("isChecked: " + this.isChecked);
      if (this.isChecked) {
        console.log("Button clicked");
        this.isClicked = !this.isClicked;
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped>
.square-button {
  margin: 40px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: var(--clickable-color);
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

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
}
</style>
