
// core components/views for Admin layout
import HomePage from "view/HomePage";
import Cart from "view/Cart";
import Product from "view/Product";
import Login from "view/Login";

const dashboardRoutes = [
  {
    path: "/home",
    name: "home",
    component:HomePage,
  },
  {
    path: "/cart",
    name: "cart",
    component:Cart,
  },
  {
    path: "/product",
    name: "product",
    component:Product,
  },
  {
    path: "/login",
    name: "Login",
    component:Login,
  }
];

export default dashboardRoutes;
