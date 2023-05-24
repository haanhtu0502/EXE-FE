import Blog from "../components/Blog/Blog";
import TourGuide from "../components/TourGuide/TourGuide";
import TravelPlanner from "../components/TravelPlanner/TravelPlanner";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Login from "../layouts/AuthLayout/Login/Login";
import Register from "../layouts/AuthLayout/Register/Register";
import Home from "../components/Home/Home";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  { path: "/planner", component: TravelPlanner, layout: DefaultLayout },
  { path: "/blog", component: Blog, layout: DefaultLayout },
  { path: "/tourguide", component: TourGuide, layout: DefaultLayout },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
