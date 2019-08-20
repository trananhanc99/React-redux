
import Dashboard from "@material-ui/icons/Dashboard";
import AddCircle from "@material-ui/icons/AddCircle";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import CreateRUD from "views/CRUD/CRUD.jsx";
import TableList from "views/TableList/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "List Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/creatpd",
    name: "CRUD",
    rtlName: "طباعة",
    icon: AddCircle,
    component: CreateRUD,
    layout: "/admin"
  }
];

export default dashboardRoutes;
