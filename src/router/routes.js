import Home from "../pages/HomePage";
// import AllOrders from "../pages/accounter/AllOrders";
import SalesReport from "../pages/accounter/SalesReport";
import Enumuration from "../pages/accounter/Enumuration";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/OperatorPage.vue")
  },
  {
    path: "/accounter/sales-report",
    name: "top-menu-accounter-sales",
    component: SalesReport
  },
  {
    path: "/accounter/all-orders",
    name: "top-menu-accounter-orders"
    // component: AllOrders
  },
  {
    path: "/accounter/enumeration",
    name: "top-menu-accounter-enumeration",
    component: Enumuration
  }
];
export default routes;
