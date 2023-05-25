<template>
  <banner
    imageUrl="_nuxt/assets/banners/bannerContacts.jpeg"
    title="Contact us"
    caption="Sign up for our newsletter to receive the latest news and updates. To get in touch with us, reach out to us via landline phone or email."
  />
  <Circle top="30" left="90" size="400" color="var(--clickable-color)" />
  <Circle top="45" left="95" size="350" color="var(--decoration-color)" />
  <Circle top="75" left="-10" size="400" color="var(--decoration-color)" />
  <Circle top="70" left="-8" size="250" color="var(--clickable-color)" />
  <div class="main-container">
    <div class="card">
      <div class="card-body">
        <div class="contacts-container">
          <div class="phone-container">
            <div class="phone-text-icon-container">
              <div class="phone-icon">
                <img
                  src="~/assets/icons/telephone.svg"
                  alt="phone"
                  width="30px"
                  height="30px"
                />
              </div>
              <h3>Landline Phone:</h3>
            </div>
            <span class="phone-number">+00 123 456 789</span>
          </div>
          <div class="email-container">
            <div class="email-text-icon-container">
              <div class="mail-icon">
                <img
                  src="~/assets/icons/email.svg"
                  alt="email"
                  width="30px"
                  height="30px"
                />
              </div>
              <h3>Mail:</h3>
            </div>
            <span class="email-address">example@apex-venture.com</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="newsletter">
        <h2 style="color: var(--white-color)">Newsletter</h2>
        <div class="field-row">
          <div class="field">
            <span class="text-[var(--white-color)]">Name</span>
            <input type="text" class="input-field" name="name" v-model="name" />
            <span v-if="errors.name" class="text-yellow-500"
              >Please enter your name.</span
            >
          </div>
          <div class="field">
            <span class="text-[var(--white-color)]">Surname</span>
            <input
              type="text"
              class="input-field"
              name="surname"
              v-model="surname"
            />
            <span v-if="errors.surname" class="text-yellow-500"
              >Please enter your surname.</span
            >
          </div>
        </div>
        <div class="field">
          <span class="text-[var(--white-color)]">Email</span>
          <input
            type="email"
            class="input-field"
            name="email"
            v-model="email"
          />
          <span v-if="errors.email" class="text-yellow-500"
            >Please enter a valid email address.</span
          >
        </div>
        <div class="field">
          <span class="text-[var(--white-color)]">Company</span>
          <input
            type="text"
            class="input-field"
            name="company"
          />
        </div>
      </div>
      <div class="informative-checkbox">
        <input
          type="checkbox"
          name="informative"
          v-model="checkBoxValue"
          @change="handleChangeCheckbox"
        />
        <span class="informative-text"
          >I declare that I have read the privacy policy and consent to the
          processing of my personal data for the purposes of service delivery
          and for the fulfillment of contractual and legal obligations
        </span>
      </div>
      <div>
        <contacts-button
          :isChecked="canSubmit"
          @click="checkIfCorrect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsButton from "~/components/ContactsButton.vue";
import Banner from "~/components/Banner.vue";
import Circle from "~/components/BackgroundCircle.vue";

export default {
  components: {
    ContactsButton,
    Banner,
    Circle,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      checkBoxValue: false,
      canSubmit: false,
      errors: {},
    };
  },
  methods: {
    handleChangeCheckbox() {

      console.log("Checkbox value: " + this.checkBoxValue);
    },
    checkIfCorrect() {
      this.canSubmit = false;
      this.errors = {};

      if (this.name.trim() === "") {
        this.errors.name = true;
      }
      if (this.surname.trim() === "") {
        this.errors.surname = true;
      }
      if (this.email.trim() === "" || !this.isValidEmail(this.email)) {
        this.errors.email = true;
      }

      // Viene fatto l'handleclick 
      //del pulsante prima che ci sia questo controllo, trovare un modo per fare le cose sequenziali

      if (Object.keys(this.errors).length === 0) {
        // Tutti i campi sono validi, esegui azioni aggiuntive
        console.log("Tutti i campi sono validi.");
        if (this.checkBoxValue){
          this.canSubmit = true;
        }
      } else {
        // Ci sono errori nei campi
        console.log("Ci sono errori nei campi.");
      }
    },
    isValidEmail(email) {
      // Verifica se l'email è valida
      // Puoi utilizzare una regex o altre logiche di validazione qui
      // In questo esempio, verifichiamo solo che l'email contenga una '@'
      return email.includes("@");
    },
  },
};
</script>

<style>
/* Container */
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 2%;
}

.card {
  gap: 20px;
  position: relative;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: var(--secondary-color);
  padding: 30px;
  min-height: 600px;
  max-width: 800px;
  width: 80%; /* Larghezza massima */
  height: auto;
  text-align: center;
  justify-content: centers;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

/* Contacts */

.contacts-container {
  justify-content: center;
  align-items: center;
}

.phone-container,
.email-container {
  padding: 3%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  color: var(--white-color);
  text-align: center;
  align-items: center;
  font-size: large;
}

.phone-text-icon-container,
.email-text-icon-container {
  margin-right: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-number {
  flex-wrap: nowrap;
}

.phone-icon,
.mail-icon {
  display: inline;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

/* Form */

.newsletter {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10% auto 10%;
}

.newsletter > h2 {
  font-size: x-large;
}

.field-row {
  justify-content: center;
  gap: 30%;
  display: flex;
}

.field {
  text-align: left;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5%;
}

.input-field {
  background-color: var(--white-color);
  border: transparent;
  width: 100%;
  height: 20px;
  border-radius: 5px;
}

.informative-text {
  font-size: x-small;
}

.informative-checkbox {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10% auto 10%;
}

.informative-checkbox > span {
  text-align: left;
  color: var(--white-color);
}

hr {
  width: 80%;
  margin: 20px 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
