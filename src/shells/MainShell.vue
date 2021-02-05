<template>
  <div>
    <mobile-menu-app />
    <!-- END: Mobile Menu -->
    <!-- BEGIN: Top Bar -->
    <header-app />
    <!-- END: Top Bar -->
    <!-- BEGIN: Top Menu -->
    <navbar-app />
    <slot />
    <div
      data-url="top-menu-dark-dashboard.html"
      class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10"
    >
      <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
      <div class="dark-mode-switcher__toggle border"></div>
    </div>
  </div>
</template>

<script>
import MobileMenuApp from "../components/MobileMenuApp";
import HeaderApp from "../components/HeaderApp";
import NavbarApp from "../components/NavbarApp";

export default {
  name: "MainShell",
  components: {
    MobileMenuApp,
    HeaderApp,
    NavbarApp
  }
};
</script>

<style scoped></style>
