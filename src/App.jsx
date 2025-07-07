import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
// import SonaWebsite from "./Pages/Home.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
