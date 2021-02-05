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
import { findLast, has } from "lodash-es";
import EmptyShell from "./shells/EmptyShell";

export default {
  name: "App",
  data() {
    return {
      shell: null
    };
  },
  watch: {
    $route: {
      handler() {
        this.shell =
          findLast(this.$route.matched, route => has(route, "meta.shell"))?.meta
            ?.shell ?? EmptyShell;
      },
      immediate: true
    }
  }
};
</script>
