import MainShell from '../shells/MainShell';
import EmptyShell from '../shells/EmptyShell';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import HomePage from '../pages/HomePage';

// import AllOrders from "../pages/accounter/AllOrders";
import SalesReport from '../pages/accounter/SalesReport';
import Enumuration from '../pages/accounter/Enumuration';
import Client from '../pages/main/client/Client';


const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: HomePage,
  },
  {
    path: '/client',
    name: 'client',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: Client,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../pages/OperatorPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      shell: EmptyShell,
    },
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      shell: EmptyShell,
    },
    component: RegisterPage,
  },
  {
    path: '/accounter/sales-report',
    name: 'top-menu-accounter-sales',
    meta: {
      shell: MainShell,
    },
    component: SalesReport,
  },
  {
    path: '/accounter/all-orders',
    name: 'top-menu-accounter-orders',
    meta: {
      shell: MainShell,
    },
    // component: AllOrders
  },
  {
    path: '/accounter/enumeration',
    name: 'top-menu-accounter-enumeration',
    meta: {
      shell: MainShell,
    },
    component: Enumuration,
  },
];
export default routes;
