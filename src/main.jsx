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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
