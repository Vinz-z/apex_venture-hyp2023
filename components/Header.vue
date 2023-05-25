<template>
  <nav class="w-full p-4 bg-[var(--primary-color)] fixed top-0 z-10" id="header">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <NuxtLink to="/">
          <img
            src="~/assets/logos/apex_venture_logo.svg"
            alt="logo"
            class="h-auto w-20"
          />
        </NuxtLink>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-[var(--white-color)]"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:flex w-full justify-center">
        <ul class="flex space-x-20 text-l items-center">
          <li>
            <NuxtLink
              to="/ourTeam"
              style="color: var(--white-color)"
              class="hovered-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              Team
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              style="color: var(--white-color)"
              class="hovered-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              >Strategy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/projects"
              style="color: var(--white-color)"
              class="hovered-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              style="color: var(--white-color)"
              class="hovered-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              >Areas</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacts"
              style="color: var(--white-color)"
              class="hovered-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              >Contacts</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-[var(--primary-color)] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4 text-[var(--white-color)]"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <div>
            <img
              src="~/assets/logos/apex_venture_logo.svg"
              alt="logo"
              class="h-auto w-20"
            />
          </div>
        </span>

        <ul class="divide-y font-sans">
          <li>
            <NuxtLink
              to="/ourTeam"
              style="color: var(--white-color)"
              class="my-4 inline-block"
              @click="isOpen = false"
              >Team</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              style="color: var(--white-color)"
              class="my-4 inline-block"
              @click="isOpen = false"
              >Strategy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/projects"
              style="color: var(--white-color)"
              class="my-4 inline-block"
              @click="isOpen = false"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/"
              style="color: var(--white-color)"
              class="my-4 inline-block"
              @click="isOpen = false"
              >Areas</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacts"
              style="color: var(--white-color)"
              class="my-4 inline-block"
              @click="isOpen = false"
              >Contacts</NuxtLink
            >
          </li>
        </ul>
      </aside>
    </div>
  </nav>
  <div id="spacer" :style="{ height: spacerHeight }"></div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      isOpen: false,
      spacerHeight: 0,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    handleMouseEnter() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    calculateSpacerHeight() {
      const headerElement = document.getElementById('header');
      const headerHeight = headerElement.offsetHeight - 5;
      this.spacerHeight = `${headerHeight}px`;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
      
    },
  },
  mounted() {
    this.calculateSpacerHeight();
  },
};
</script>

<style>
.hovered-link {
  position: relative;
}

.hovered-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--clickable-color);
  transition: width 0.2s ease;
}

.hovered-link:hover::after {
  width: 100%;
}

#header {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
