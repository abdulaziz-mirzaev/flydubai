import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.protected)) {
    if (store.getters['auth/isAuthenticated']) {
      next();
    } else {
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});

export default router;
