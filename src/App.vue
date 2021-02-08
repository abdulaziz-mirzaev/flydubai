<template>
  <div id="app">
    <template>
      <component :is="shell">
        <router-view :key="$route.fullPath" />
      </component>
    </template>
  </div>
</template>

<script>
import { findLast, has } from 'lodash-es';
import EmptyShell from './shells/EmptyShell';
import {nestedMenu} from "./menu/menu-config";
import menu from "./menu";

export default {
  name: 'App',
  data() {
    return {
      shell: null,
    };
  },
  computed: {
    formattedMenu() {
      return nestedMenu(menu,this.$route)
    }
  },
  created() {
    console.log(this.formattedMenu);
  },
  watch: {
    $route: {
      handler() {
        this.shell =
          findLast(this.$route.matched, route => has(route, 'meta.shell'))?.meta
            ?.shell ?? EmptyShell;
      },
      immediate: true,
    },
  },
};
</script>

<style>

</style>
