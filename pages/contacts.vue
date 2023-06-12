<template>
    <banner
        imageUrl="images/banners/contacts.jpeg"
        title="Contact us"
        caption="Sign up for our newsletter to receive the latest news and updates. To get in touch with us, reach out to us via landline phone or email."
        percentage="80"
    />

    <div
        v-if="registrationSuccess"
        class="flex justify-center mt-4 mb-14 tablet:mt-20"
    >
        <div
            class="bg-[var(--secondary-color)] min-w-[220px] w-[30%] rounded-br-3xl rounded-tl-3xl text-center justify-center flex flex-col p-10 text-[var(--white-color)]"
        >
            <div class="text-3xl font-bold mb-4">Thanks!</div>
            <div class="text-xl">
                Thank you {{ this.name }}, you have been registered successfully
                to our newsletter
            </div>
            <div>
                <div class="email_animation flex items-center justify-center mt-10 h-2">
                    <img class="h-10"
                        src="~/assets/icons/email.svg"
                    />
                </div>
            </div>
        </div>
    </div>
    <div
        v-else="registrationSuccess"
        class="main-container mt-4 tablet:mt-20 mb-4 tablet:mb-20"
    >
        <div class="card rounded-br-3xl rounded-tl-3xl">
            <div class="card-body ml-[10%] mr-[10%]">
                <div class="contacts-container grid grid-rows-2 gap-10">
                    <div
                        class="phone-container grid place-items-center grid-cols-1 tablet:grid-cols-2"
                    >
                        <div
                            class="phone-text-icon-container grid place-items-center gap-5 grid-cols-1 tablet:grid-cols-2"
                        >
                            <div
                                class="phone-icon flex justify-self-center tablet:place-self-end"
                            >
                                <img
                                    src="~/assets/icons/telephone.svg"
                                    alt="phone"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                            <div
                                class="flex whitespace-nowrap font-bold text-[var(--white-color)] justify-self-center"
                            >
                                Landline Phone:
                            </div>
                        </div>
                        <span class="phone-number text-[var(--white-color)]"
                            >+00 123 456 789</span
                        >
                    </div>
                    <div
                        class="email-container grid place-items-center grid-cols-1 tablet:grid-cols-2"
                    >
                        <div
                            class="email-text-icon-container grid place-items-center gap-5 grid-cols-1 tablet:grid-cols-2"
                        >
                            <div class="mail-icon flex justify-self-center">
                                <img
                                    src="~/assets/icons/email.svg"
                                    alt="email"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                            <div
                                class="flex whitespace-nowrap font-bold text-[var(--white-color)] justify-self-center"
                            >
                                Mail:
                            </div>
                        </div>
                        <span class="email-address text-[var(--white-color)]"
                            >example@apex-venture.com</span
                        >
                    </div>
                </div>
            </div>
            <hr />
            <form @submit.prevent="checkIfCorrect">
                <div class="newsletter">
                    <h2 style="color: var(--white-color)">Newsletter</h2>
                    <div class="field-row grid desktop:grid-cols-2 gap-x-36">
                        <div class="field">
                            <span class="text-[var(--white-color)]"
                                >Name
                                <b class="text-[var(--decoration-color)]"
                                    >*</b
                                ></span
                            >
                            <input
                                type="text"
                                class="input-field focus:outline-none focus:ring-2 focus:ring-[var(--clickable-color)]"
                                name="name"
                                v-model="name"
                            />
                            <span v-if="errors.name" class="text-yellow-500"
                                >Please enter your name.</span
                            >
                        </div>
                        <div class="field">
                            <span class="text-[var(--white-color)]"
                                >Surname
                                <b class="text-[var(--decoration-color)]"
                                    >*</b
                                ></span
                            >
                            <input
                                type="text"
                                class="input-field focus:outline-none focus:ring-2 focus:ring-[var(--clickable-color)]"
                                name="surname"
                                v-model="surname"
                            />
                            <span v-if="errors.surname" class="text-yellow-500"
                                >Please enter your surname.</span
                            >
                        </div>
                    </div>
                    <div class="field">
                        <span class="text-[var(--white-color)]"
                            >Email
                            <b class="text-[var(--decoration-color)]">*</b>
                        </span>
                        <input
                            type="email"
                            class="input-field focus:outline-none focus:ring-2 focus:ring-[var(--clickable-color)]"
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
                            class="input-field focus:outline-none focus:ring-2 focus:ring-[var(--clickable-color)]"
                            name="company"
                        />
                    </div>
                </div>
                <div class="informative-checkbox">
                    <div class="flex gap-1">
                        <input
                            type="checkbox"
                            name="informative"
                            v-model="checkBoxValue"
                            @change="handleChangeCheckbox"
                        />
                        <b class="text-[var(--decoration-color)]">*</b>
                    </div>
                    <span class="informative-text"
                        >I declare that I have read the privacy policy and
                        consent to the processing of my personal data for the
                        purposes of service delivery and for the fulfillment of
                        contractual and legal obligations
                    </span>
                </div>
                <span v-if="checkboxError" class="text-yellow-500"
                    >Please check the box</span
                >
                <div class="mt-10">
                    <apex-button caption="Submit" @click="checkIfCorrect" />
                </div>
            </form>
        </div>
    </div>
    <Circle top="30" left="90" size="400" color="var(--clickable-color)" />
    <Circle top="45" left="95" size="350" color="var(--decoration-color)" />
    <Circle top="75" left="-10" size="400" color="var(--decoration-color)" />
    <Circle top="70" left="-8" size="250" color="var(--clickable-color)" />
</template>

<script>
import ApexButton from "~/components/ApexButton.vue";
import Banner from "~/components/Banner.vue";
import Circle from "~/components/BackgroundCircle.vue";

export default {
    components: {
        ApexButton,
        Banner,
        Circle,
    },

    data() {
        return {
            name: "",
            surname: "",
            email: "",
            checkbox: "",
            checkBoxValue: false,
            checkboxError: false,
            errors: {},
            registrationSuccess: false,
        };
    },

    methods: {
        checkIfCorrect() {
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

            if (!this.checkBoxValue) {
                this.checkboxError = true;
            } else {
                this.checkboxError = false;
            }

            if (Object.keys(this.errors).length === 0 && this.checkBoxValue) {
                this.handleClick();
            }
        },

        isValidEmail(email) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        },

        async handleClick() {
            console.log("Button clicked");
            return await useFetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                }),
            })
                .then(({ data }) => {
                    this.registrationSuccess = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        handleChangeCheckbox() {
            this.checkboxError = false;
        },
    },
};

useHead({ title: "Apex Venture | Contact Us" });
</script>

<style scoped>
/* Container */
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.card {
    position: relative;
    background-color: var(--secondary-color);
    padding: 5%;
    min-height: 600px;
    max-width: 800px;
    width: 80%; /* Larghezza massima */
    height: auto;
    text-align: center;
    justify-content: centers;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

.field {
    text-align: left;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5%;
}

.input-field {
    padding-left: 1%;
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

.email_animation {
    animation: tilt-n-move-shaking 2s infinite;
}

@keyframes tilt-n-move-shaking {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
        transform: translate(0, 0) rotate(0eg);
    }
    75% {
        transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}
</style>
