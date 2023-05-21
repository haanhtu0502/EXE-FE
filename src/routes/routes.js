import Blog from "../components/Blog/Blog";
import TourGuide from "../components/TourGuide/TourGuide";
import TravelPlanner from "../components/TravelPlanner/TravelPlanner";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Login from "../layouts/components/AuthLayout/Login/Login";
import Register from "../layouts/components/AuthLayout/Register/Register";

const publicRoutes = [
  {
    path: "/",
    component: TravelPlanner,
    layout: DefaultLayout,
  },
  { path: "/blog", component: Blog, layout: DefaultLayout },
  { path: "/tourguide", component: TourGuide, layout: DefaultLayout },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
