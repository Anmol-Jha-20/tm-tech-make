import React, { useState } from "react";

import SolutionsShowcase from "../components/solutions/Solution.jsx";
import AboutCompany from "../components/about/AboutCompany.jsx";
import CustomerTestimonials from "../components/Testimonials/CustomerTestimonials.jsx";
import MailingListSubscription from "../components/MailingListSection/MailingList.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { Helmet } from "react-helmet";

const SonaWebsite = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Russian",
  ];

  const translations = {
    English: {
      home: "Home",
      aboutUs: "About Us",
      products: "Products",
      investors: "Investors",
      newsEvents: "News & Events",
      careers: "Careers",
      blogs: "Blogs",
      contactUs: "Contact Us",
      downloadCatalogue: "Download Brochure",
      discoverPower: "Discover the Power of",
      cuttingEdge: "CUTTING-EDGE TECHNOLOGY",
      riceMilling: "in our Advanced Rice Milling Process",
      poweredBy: "Powered by",
    },
    Hindi: {
      home: "होम",
      aboutUs: "हमारे बारे में",
      products: "उत्पाद",
      investors: "निवेशक",
      newsEvents: "समाचार और घटनाएं",
      careers: "करियर",
      blogs: "ब्लॉग",
      contactUs: "संपर्क करें",
      downloadCatalogue: "कैटलॉग डाउनलोड करें",
      discoverPower: "की शक्ति की खोज करें",
      cuttingEdge: "अत्याधुनिक प्रौद्योगिकी",
      riceMilling: "हमारी उन्नत चावल मिलिंग प्रक्रिया में",
      poweredBy: "द्वारा संचालित",
    },
    Spanish: {
      home: "Inicio",
      aboutUs: "Sobre Nosotros",
      products: "Productos",
      investors: "Inversionistas",
      newsEvents: "Noticias y Eventos",
      careers: "Carreras",
      blogs: "Blogs",
      contactUs: "Contáctanos",
      downloadCatalogue: "Descargar Catálogo",
      discoverPower: "Descubre el Poder de",
      cuttingEdge: "TECNOLOGÍA DE VANGUARDIA",
      riceMilling: "en nuestro Proceso Avanzado de Molienda de Arroz",
      poweredBy: "Desarrollado por",
    },
  };

  const currentTranslation =
    translations[selectedLanguage] || translations.English;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <html lang="en" />
        <title>TM TECH MAKE | Advanced Packaging & Slitting Machines</title>
        <meta
          name="description"
          content="Explore TM TECH MAKE's cutting-edge packaging, cap elevator, and slitting machines designed for next-gen industrial solutions."
        />
        <meta
          name="keywords"
          content="Packaging Machine, Cap Elevator Machine, Slitting Machine, Industrial Machines, TM TECH MAKE"
        />
        <meta name="author" content="Webvortex Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tmteckmake.com/" />
        <meta
          property="og:title"
          content="TM TECH MAKE | Packaging & Slitting Experts"
        />
        <meta
          property="og:description"
          content="Discover our innovative solutions in packaging and slitting machinery. Built for performance and efficiency."
        />
        <meta property="og:url" content="https://tmteckmake.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Top Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <Hero />

      <SolutionsShowcase />
      <AboutCompany />
      <CustomerTestimonials />
      <MailingListSubscription />
      {/* <Footer /> */}

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default SonaWebsite;
