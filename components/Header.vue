<!--
    Header of the page
-->
<template>
  <header>
    <nav>
      <div class="navbar-left">
        <NuxtLink to="/">
          <div class="logo-image">
            <img src="~/assets\apex_venture_logo.svg" alt="Logo" />
          </div>
        </NuxtLink>
      </div>
      <div class="navbar-right">
        <ul>
          <li>
            <NuxtLink to="/ourTeam" style="color: var(--white-color)"
              >Team</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contacts" style="color: var(--white-color)"
              >Strategy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contacts" style="color: var(--white-color)"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contacts" style="color: var(--white-color)"
              >Area</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contacts" style="color: var(--white-color)"
              >Contacts</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
header {
  background-color: #00524c;
}

header {
  padding: 20px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-image {
  width: 100px;
  height: 100px;
}

/*put all elements of nav in center*/
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  flex: 1;
}

.navbar-right {
  flex: 6;
  text-align: center;
}

.navbar-right ul {
  list-style-type: none;
}

.navbar-right li {
  display: inline-block;
  font-size: x-large;
}
</style>
