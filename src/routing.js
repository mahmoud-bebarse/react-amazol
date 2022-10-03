import { createBrowserRouter} from "react-router-dom";


import HomeEx from "./Pages/home2";
import About from "./Pages/about";
import Contactus from "./Pages/contactus";
import Categories from "./Pages/catigories";
import Notfound from "./Pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeEx />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contactus",
    element: <Contactus />,
  },
  {
    path: "/:id",
    element: <Categories />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
