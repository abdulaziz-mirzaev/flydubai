import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";

Vue.use(Vuex);

const authState = createPersistedState({
  key: "auth",
  paths: ["auth"]
});

export default new Vuex.Store({
  modules: { auth },
  plugins: [authState]
});
