import store from '@/store';
import MainShell from '../shells/MainShell';
import EmptyShell from '../shells/EmptyShell';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import Dashboard from '../pages/Dashboard';
import TopMenu from '../pages/TopMenu';

const userRole = store.getters['auth/userRole'];

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      shell: MainShell,
      protected: false,
    },
    redirect: '',
    component: TopMenu,
    beforeEnter: (to, from, next) => {
      if (userRole === 'admin') {
        next();
      } else {
        next({
          path: '/' + userRole,
        });
      }
    },
    children: [
      {
        path: '',
        name: 'top-menu-dashboard',
        component: Dashboard,
      },
      {
        path: '/profile',
        name: 'top-menu-profile',
        component: () => import('../pages/Profile'),
      },
      {
        path: '/resetPassword',
        name: 'resetPassword',
        component: () => import('../pages/ChangePassword'),
      },
    ],
  },
  {
    path: '*',
    name: 'error',
    meta: {
      shell: EmptyShell,
    },
    component: () => import('../pages/error-page/ErrorPage'),
  },
  {
    path: '/client',
    name: 'client',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: () => import('../pages/main/client/Client'),
    beforeEnter: (to, from, next) => {
      if (userRole === 'operator') {
        next();
      } else {
        next({
          path: '/',
        });
      }
    },
  },
  //region Auth Pages
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
  //endregion

  //region Operator Pages
  {
    path: '/operator',
    name: 'operator',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: () => import('../pages/operator/OperatorPage'),
    beforeEnter: (to, from, next) => {
      if (userRole === 'operator' || userRole === 'admin') {
        next();
      } else {
        next({
          path: '/' + userRole,
        });
      }
    },
  },
  //endregion

  //region Cashier Pages
  {
    path: '/cashier',
    name: 'cashier',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: () => import('../pages/cashier/all-orders/Index'),
    beforeEnter: (to, from, next) => {
      if (userRole === 'cashier' || userRole === 'admin') {
        next();
      } else {
        next({
          path: '/' + userRole,
        });
      }
    },
  },
  //endregion

  //region Director Pages
  {
    path: '/director',
    name: 'director',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: () => import('../pages/director/DirectorPage'),
    beforeEnter: (to, from, next) => {
      if (userRole === 'director' || userRole === 'admin') {
        next();
      } else {
        next({
          path: '/' + userRole,
        });
      }
    },
  },
  //endregion

  //region Accountant Pages
  {
    path: '/accounter',
    name: 'accounter-orders',
    meta: {
      shell: MainShell,
      protected: true,
    },
    beforeEnter: (to, from, next) => {
      if (userRole === 'accounter' || userRole === 'admin') {
        next();
      } else {
        next({
          name: userRole,
        });
      }
    },
    component: () => import('../pages/accounter/all-orders/Index'),
  },
  {
    path: '/accounter/orders/create',
    name: 'accounter-orders-create',
    meta: {
      shell: MainShell,
      protected: true,
    },
    component: () => import('../pages/accounter/all-orders/Create'),
  },
  {
    path: '/accounter/orders/edit/:id',
    name: 'accounter-orders-edit',
    meta: {
      shell: MainShell,
      protected: true,
    },
    props: (route => ({ orderId: route.params.id })),
    component: () => import('../pages/accounter/all-orders/Edit'),
  },
  {
    path: '/accounter/sales-report',
    name: 'accounter-sales',
    meta: {
      shell: MainShell,
    },
    component: () => import('../pages/accounter/SalesReport'),
  },
  {
    path: '/accounter/enumeration',
    name: 'accounter-enumeration',
    meta: {
      shell: MainShell,
    },
    component: () => import('../pages/accounter/Enumuration'),
  },
  //endregion
];
export default routes;
