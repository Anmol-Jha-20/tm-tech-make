import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SonaWebsite from "./Pages/Home.jsx";
import "./index.css";
import App from "./App.jsx";
import TechGallery from "./Pages/Gallery.jsx";
import ContactPage from "./Pages/Contact.jsx";
import AboutUs from "./Pages/About.jsx";
import PouchPackagingMachine from "./components/products/Pouch Packaging Machine/PouchPackagingMachine.jsx";
import SingleHeadROPPCappingMachine from "./components/products/Single Head ROPP Capping Machine/SingleHeadROPPCappingMachine.jsx";
import OilCapSlittingAndFoldingMachine from "./components/products/Oil Cap Slitting And Folding Machine/OilCapSlittingAndFoldingMachine.jsx";
import CapSlittingMachine from "./components/products/Cap Slitting Machine/CapSlittingMachine.jsx";
import CapSlittingAndFoldingMachine from "./components/products/Cap-Slitting-And-Folding-Machine/CapSlittingAndFoldingMachine.jsx";
import AutomaticPouchPackagingMachine from "./components/products/Automatic-Pouch-Packaging-Machine/AutomaticPouchPackagingMachine.jsx";
import ProductsPage from "./Pages/OurProducts.jsx";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./Pages/Blog/Blog.jsx";
import TmtRollingMillBlog from "./Pages/Blog/TmtRollingMillBlog.jsx";
import TmtBarPlantBlog from "./Pages/Blog/TmtBarPlantBlog.jsx";
import TMTMachineEquipmentBlog from "./Pages/Blog/TmtMachineEquipmentBlog.jsx";
import CncMachineEquipmentBlog from "./Pages/Blog/CncMachineEquipmentBlog.jsx";
import TmtPlantEquipmentBlog from "./Pages/Blog/TmtPlantEquipmentBlog.jsx";
import PouchPackagingMachineBlog from "./Pages/Blog/PouchPackagingMachineBlog.jsx";
import ROPPCappingBlog from "./Pages/Blog/SingleHeadRoppBlog.jsx";
import OilCapSlitingFoldingBlog from "./Pages/Blog/OilCapSlittingFolding.jsx";
import CapSlitingBlogPage from "./Pages/Blog/CapSlitingBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SonaWebsite />,
      },

      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/our-products",
        element: <ProductsPage />,
      },
      {
        path: "/gallery",
        element: <TechGallery />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/tmt-rolling-mill-blog",
        element: <TmtRollingMillBlog />,
      },
      {
        path: "/tmt-bar-plant-blog",
        element: <TmtBarPlantBlog />,
      },
      {
        path: "/tmt-machine-equipment-blog",
        element: <TMTMachineEquipmentBlog />,
      },
      {
        path: "/cnc-machine-equipment-blog",
        element: <CncMachineEquipmentBlog />,
      },
      {
        path: "/tmt-plant-equipment-blog",
        element: <TmtPlantEquipmentBlog />,
      },
      {
        path: "/pouch-packaging-machine-blog",
        element: <PouchPackagingMachineBlog />,
      },
      {
        path: "/single-head-ropp-caping-blog",
        element: <ROPPCappingBlog />,
      },
      {
        path: "/oil-cap-slitting-folding-blog",
        element: <OilCapSlitingFoldingBlog />,
      },
      {
        path: "/pouch-packaging-machine",
        element: <PouchPackagingMachine />,
      },
      {
        path: "/single-head-ropp-capping-machine",
        element: <SingleHeadROPPCappingMachine />,
      },
      {
        path: "/oil-cap-slitting-and-folding-machine",
        element: <OilCapSlittingAndFoldingMachine />,
      },
      {
        path: "/cap-slitting-machine",
        element: <CapSlittingMachine />,
      },
      {
        path: "/cap-slitting-and-folding-machine",
        element: <CapSlittingAndFoldingMachine />,
      },
      {
        path: "/automatic-pouch-packaging-machine",
        element: <AutomaticPouchPackagingMachine />,
      },
      {
        path: "/cap-sliting-blog",
        element: <CapSlitingBlogPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
