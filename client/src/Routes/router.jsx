import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Services from "../pages/Services";
import Mdishes from "../components/Mdishes";
import Fastfood from "../components/Fastfood";
import Thaidish from "../components/Thaidish";
import RiceDish from "../components/RiceDish";
import ContactForm from "../components/ContactForm";
import Gallery from "../pages/Gallery";
import AddItem from "../components/AddItem";
import Booking from "../components/Booking";
import AllItem from "../components/AllItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "main_dishes",
            element: <Mdishes />,
            loader: () => fetch(`http://localhost:5000/menu`),
          },

          {
            path: "fast_food",
            element: <Fastfood />,
            loader: () => fetch("/fastFood.json"),
          },
          {
            path: "rice_dish",
            element: <RiceDish />,
            loader: () => fetch("/riceDish.json",)
          },
          {
            path: "thai",
            element: <Thaidish />,
            loader: ()=> fetch('/thai.json')
          },
        ],
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element:<ContactForm/>
      },
      {
        path: "/gallery",
        element:<Gallery/>
      },
      {
        path: "/add-item",
        element: <AddItem/>
      },
      {
        path: "/booking",
        element: <Booking/>
      },
      {
        path:"/all-item",
        element:<AllItem/>
      }
    ],
  },
]);

export default router;
