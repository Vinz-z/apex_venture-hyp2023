<template>
  <Banner
    imageUrl="https://picsum.photos/id/237/200/300"
    title="Contacts us"
    caption="Sign up for our newsletter to receive the latest news and updates. To get in touch with us, reach out to us via landline phone or email."
  />
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
      <hr style="max-width: 600px" />
      <div class="newsletter">
        <h2 style="color: var(--white-color)">Newsletter</h2>
        <div class="field-row">
          <div class="field">
            <span>Name</span>
            <input type="text" class="input-field" name="name" />
          </div>
          <div class="field">
            <span>Surname</span>
            <input type="text" class="input-field" name="surname" />
          </div>
        </div>
        <div class="field">
          <span>Email</span>
          <input type="email" class="input-field" name="email" />
        </div>
        <div class="field">
          <span>Company</span>
          <input type="text" class="input-field" name="company" />
        </div>
      </div>
      <div class="informative-checkbox">
        <input type="checkbox" name="informative" />
        <span class="informative-text"
          >I declare that I have read the privacy policy and consent to the
          processing of my personal data for the purposes of service delivery
          and for the fulfillment of contractual and legal obligations
        </span>
      </div>
      <button class="av-button">Submit</button>
    </div>
  </div>
</template>


<style>
/* Container */

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
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
  gap: 10px;
}

.phone-container,
.email-container {
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  color: var(--white-color);
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
}

.phone-text-icon-container,
.email-text-icon-container {
  margin-right: 100px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-number{
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

.field-row {
  justify-content: center;
  gap: 30%;
  display: flex;
}

.field {
  text-align: left;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
}

.field > span {
  color: var(--white-color);
}

.input-field {
  background-color: var(--white-color);
  border: transparent;
  width: 100%;
  height: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
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

button:hover {
  cursor: pointer;
}
</style>
