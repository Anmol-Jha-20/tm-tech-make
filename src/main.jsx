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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
