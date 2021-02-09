<template>
  <div class="layout-padding">
    <mobile-menu-app />
    <!-- END: Mobile Menu -->
    <!-- BEGIN: Top Bar -->
    <header-app />
    <!-- END: Top Bar -->
    <!-- BEGIN: Top Menu -->
    <navbar-app />
    <slot />
  </div>
</template>

<script>
import MobileMenuApp from '../components/MobileMenuApp';
import HeaderApp from '../components/HeaderApp';
import NavbarApp from '../components/NavbarApp';
import { nestedMenu } from '../menu/menu-config';
import menu from '../menu';

export default {
  name: 'MainShell',
  components: {
    MobileMenuApp,
    HeaderApp,
    NavbarApp,
  },
  computed: {
    formattedMenu() {
      return nestedMenu(menu, this.$route);
    },
  },
  created() {
    console.log(this.formattedMenu);
  },
};
</script>

<style scoped>
  .layout-padding {
    padding: .75rem 2rem
  }
</style>
