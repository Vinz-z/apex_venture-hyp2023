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
              <b>Landline Phone: </b>
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
              <b>Mail: </b>
            </div>
            <span class="email-address">example@apex-venture.com</span>
          </div>
        </div>
      </div>
      <hr style="max-width: 600px" />
      <div class="newsletter">
        <h3 style="color: var(--white-color)">Newsletter</h3>
        <div>
          <label class="label name">
            <span class="required">Name</span>
            <input type="text" class="text" name="name" />
          </label>
        </div>
        <div>
          <label class="label surname">
            <span class="required">Surname</span>
            <input type="text" class="text" name="surname" />
          </label>
        </div>
        <div>
          <label class="label email">
            <span class="required">Email</span>
            <input type="email" class="text" name="email" />
          </label>
        </div>
        <div>
          <label class="label company">
            <span>Company</span>
            <input type="text" class="text" name="company" />
          </label>
        </div>
      </div>
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

.card-body {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card {
  position: relative;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: var(--secondary-color);
  padding: 20px;
  min-height: 600px;
  max-width: 800px;
  width: 80%; /* Larghezza massima */
  height: auto;
  text-align: center;
  justify-content: centers;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Contacts */

.contacts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.phone-container,
.email-container {
  justify-content: center;
  display: flex;
  gap: 100px;
  color: var(--white-color);
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
}

.phone-text-icon-container,
.email-text-icon-container {
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 20px;
}

.newsletter h4 {
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 10px;
}

.btn-primary {
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: var(--clickable-color);
}
</style>
