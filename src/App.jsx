import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
// import SonaWebsite from "./Pages/Home.jsx";
import { Outlet } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-T39MSMP9",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
