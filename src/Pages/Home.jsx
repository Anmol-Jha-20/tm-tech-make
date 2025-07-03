import React, { useState } from "react";
import {
  ChevronDown,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import SolutionsShowcase from "../components/solutions/Solution.jsx";
import AboutCompany from "../components/about/AboutCompany.jsx";
import CustomerTestimonials from "../components/Testimonials/CustomerTestimonials.jsx";
import MailingListSubscription from "../components/MailingListSection/MailingList.jsx";
import Footer from "../components/footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Logo from "../assets/Logo.jpeg";

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
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <title>TM TECH MAKE</title>

      {/* Top Header */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              Call Us: +91-97371-74655
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
            </div>

            {/* Language Selector */}
            {/* <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent border border-white rounded px-2 py-1 pr-8 text-xs cursor-pointer hover:bg-white hover:text-blue-900 transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="text-black">
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-xs opacity-75">
              {currentTranslation.poweredBy}{" "}
              <span className="text-blue-300">Google</span>
            </span> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={`${Logo}`}
                  className="w-full max-w-[847px] h-[64px]"
                  alt=""
                />
                {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold text-blue-900">SONA</span> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.home}
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  {currentTranslation.aboutUs}{" "}
                  {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  {currentTranslation.products}{" "}
                  {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                </button>
              </div>
              {/* <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  {currentTranslation.investors}{" "}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  {currentTranslation.newsEvents}{" "}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.careers}
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.blogs}
              </a> */}
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.contactUs}
              </a>
            </div>

            {/* Download Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                {currentTranslation.downloadCatalogue}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.home}
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.aboutUs}
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.products}
              </a>
              {/* <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.investors}
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.newsEvents}
              </a> */}
              {/* <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.careers}
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.blogs}
              </a> */}
              <a href="#" className="block text-gray-700 transition-colors">
                Gallery
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {currentTranslation.contactUs}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      <SolutionsShowcase />
      <AboutCompany />
      <CustomerTestimonials />
      <MailingListSubscription />
      <Footer />

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
    </div>
  );
};

export default SonaWebsite;

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   ChevronDown,
//   Phone,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Youtube,
//   Twitter,
//   MessageCircle,
//   Menu,
//   X,
//   Globe,
//   Loader,
// } from "lucide-react";

// const SonaWebsite = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isTranslating, setIsTranslating] = useState(false);
//   const [translations, setTranslations] = useState({});

//   // 40+ languages with their codes
//   const languages = [
//     { code: "en", name: "English", nativeName: "English" },
//     { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
//     { code: "es", name: "Spanish", nativeName: "Español" },
//     { code: "fr", name: "French", nativeName: "Français" },
//     { code: "de", name: "German", nativeName: "Deutsch" },
//     { code: "zh", name: "Chinese", nativeName: "中文" },
//     { code: "ja", name: "Japanese", nativeName: "日本語" },
//     { code: "ko", name: "Korean", nativeName: "한국어" },
//     { code: "ar", name: "Arabic", nativeName: "العربية" },
//     { code: "ru", name: "Russian", nativeName: "Русский" },
//     { code: "pt", name: "Portuguese", nativeName: "Português" },
//     { code: "it", name: "Italian", nativeName: "Italiano" },
//     { code: "nl", name: "Dutch", nativeName: "Nederlands" },
//     { code: "sv", name: "Swedish", nativeName: "Svenska" },
//     { code: "da", name: "Danish", nativeName: "Dansk" },
//     { code: "no", name: "Norwegian", nativeName: "Norsk" },
//     { code: "fi", name: "Finnish", nativeName: "Suomi" },
//     { code: "pl", name: "Polish", nativeName: "Polski" },
//     { code: "cs", name: "Czech", nativeName: "Čeština" },
//     { code: "sk", name: "Slovak", nativeName: "Slovenčina" },
//     { code: "hu", name: "Hungarian", nativeName: "Magyar" },
//     { code: "ro", name: "Romanian", nativeName: "Română" },
//     { code: "bg", name: "Bulgarian", nativeName: "Български" },
//     { code: "hr", name: "Croatian", nativeName: "Hrvatski" },
//     { code: "sr", name: "Serbian", nativeName: "Српски" },
//     { code: "sl", name: "Slovenian", nativeName: "Slovenščina" },
//     { code: "et", name: "Estonian", nativeName: "Eesti" },
//     { code: "lv", name: "Latvian", nativeName: "Latviešu" },
//     { code: "lt", name: "Lithuanian", nativeName: "Lietuvių" },
//     { code: "tr", name: "Turkish", nativeName: "Türkçe" },
//     { code: "el", name: "Greek", nativeName: "Ελληνικά" },
//     { code: "he", name: "Hebrew", nativeName: "עברית" },
//     { code: "th", name: "Thai", nativeName: "ไทย" },
//     { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
//     { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
//     { code: "ms", name: "Malay", nativeName: "Bahasa Melayu" },
//     { code: "tl", name: "Filipino", nativeName: "Filipino" },
//     { code: "sw", name: "Swahili", nativeName: "Kiswahili" },
//     { code: "fa", name: "Persian", nativeName: "فارسی" },
//     { code: "ur", name: "Urdu", nativeName: "اردو" },
//     { code: "bn", name: "Bengali", nativeName: "বাংলা" },
//     { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
//     { code: "te", name: "Telugu", nativeName: "తెలుగు" },
//     { code: "mr", name: "Marathi", nativeName: "मराठी" },
//     { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
//     { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
//     { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
//     { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
//   ];

//   // Original text content that needs translation
//   const originalTexts = {
//     // Navigation
//     home: "Home",
//     aboutUs: "About Us",
//     products: "Products",
//     investors: "Investors",
//     newsEvents: "News & Events",
//     careers: "Careers",
//     blogs: "Blogs",
//     contactUs: "Contact Us",
//     downloadCatalogue: "Download Catalogue",

//     // Hero Section
//     discoverPower: "Discover the Power of",
//     cuttingEdge: "CUTTING-EDGE TECHNOLOGY",
//     riceMilling: "in our Advanced Rice Milling Process",
//     learnMore: "Learn More",
//     watchDemo: "Watch Demo",

//     // Footer/Misc
//     poweredBy: "Powered by",
//     callUs: "Call Us:",

//     // Additional content sections
//     ourServices: "Our Services",
//     whyChooseUs: "Why Choose Us",
//     getInTouch: "Get In Touch",
//     ourProducts: "Our Products",
//     testimonials: "Testimonials",
//     ourTeam: "Our Team",
//     latestNews: "Latest News",
//     companyOverview: "Company Overview",
//     mission: "Our Mission",
//     vision: "Our Vision",
//     values: "Our Values",
//   };

//   // Translation function using LibreTranslate API (free alternative to Google Translate)
//   //   const translateText = useCallback(async (text, targetLang) => {
//   //     if (targetLang === "en") return text;

//   //     try {
//   //       // Using LibreTranslate API (free alternative)
//   //       const response = await fetch("https://libretranslate.de/translate", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           q: text,
//   //           source: "en",
//   //           target: targetLang,
//   //           format: "text",
//   //         }),
//   //       });

//   //       if (!response.ok) {
//   //         throw new Error("Translation failed");
//   //       }

//   //       const data = await response.json();
//   //       return data.translatedText || text;
//   //     } catch (error) {
//   //       console.warn("Translation failed, falling back to original text:", error);
//   //       return text;
//   //     }
//   //   }, []);

//   const translateText = useCallback(async (text, targetLang) => {
//     if (targetLang === "en") return text;

//     try {
//       const response = await fetch("http://localhost:5000/translate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           q: text,
//           source: "en",
//           target: targetLang,
//           format: "text",
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Translation failed");
//       }

//       const data = await response.json();
//       return data.translatedText || text;
//     } catch (error) {
//       console.warn("Translation failed:", error);
//       return text;
//     }
//   }, []);

//   // Batch translate all texts
//   const translateAllTexts = useCallback(
//     async (targetLang) => {
//       if (targetLang === "en") {
//         setTranslations(originalTexts);
//         return;
//       }

//       setIsTranslating(true);
//       const translatedTexts = {};

//       try {
//         // Translate all texts in parallel for better performance
//         const translationPromises = Object.entries(originalTexts).map(
//           async ([key, text]) => {
//             const translatedText = await translateText(text, targetLang);
//             return [key, translatedText];
//           }
//         );

//         const results = await Promise.all(translationPromises);
//         results.forEach(([key, translatedText]) => {
//           translatedTexts[key] = translatedText;
//         });

//         setTranslations(translatedTexts);
//       } catch (error) {
//         console.error("Bulk translation failed:", error);
//         setTranslations(originalTexts);
//       } finally {
//         setIsTranslating(false);
//       }
//     },
//     [translateText, originalTexts]
//   );

//   // Initialize translations and handle language changes
//   useEffect(() => {
//     translateAllTexts(selectedLanguage);
//   }, [selectedLanguage, translateAllTexts]);

//   // Get translated text with fallback
//   const getText = (key) => {
//     return translations[key] || originalTexts[key] || key;
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleLanguageChange = (langCode) => {
//     setSelectedLanguage(langCode);
//     setIsMobileMenuOpen(false); // Close mobile menu if open
//   };

//   const getCurrentLanguage = () => {
//     return (
//       languages.find((lang) => lang.code === selectedLanguage) || languages[0]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* SEO Meta Tags */}
//       <title>SONA - Advanced Rice Milling Technology</title>

//       {/* Top Header */}
//       <div className="bg-blue-900 text-white py-2 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
//           <div className="flex items-center space-x-4 mb-2 sm:mb-0">
//             <span className="flex items-center">
//               <Phone className="w-4 h-4 mr-1" />
//               {getText("callUs")} +91-9599-00-2201
//             </span>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* Social Media Icons */}
//             <div className="flex space-x-2">
//               <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
//               <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
//               <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
//               <Youtube className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
//               <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300 transition-colors" />
//             </div>

//             {/* Language Selector */}
//             <div className="relative">
//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => handleLanguageChange(e.target.value)}
//                 className="bg-transparent border border-white rounded px-2 py-1 pr-8 text-xs cursor-pointer hover:bg-white hover:text-blue-900 transition-colors appearance-none"
//                 disabled={isTranslating}
//               >
//                 {languages.map((lang) => (
//                   <option
//                     key={lang.code}
//                     value={lang.code}
//                     className="text-black"
//                   >
//                     {lang.nativeName}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                 {isTranslating ? (
//                   <Loader className="w-3 h-3 animate-spin" />
//                 ) : (
//                   <Globe className="w-3 h-3" />
//                 )}
//               </div>
//             </div>

//             <span className="text-xs opacity-75">
//               {getText("poweredBy")}{" "}
//               <span className="text-blue-300">LibreTranslate</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">S</span>
//                 </div>
//                 <span className="text-2xl font-bold text-blue-900">SONA</span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("home")}
//               </a>
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
//                   {getText("aboutUs")} <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
//                   {getText("products")} <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
//                   {getText("investors")}{" "}
//                   <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
//                   {getText("newsEvents")}{" "}
//                   <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("careers")}
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("blogs")}
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("contactUs")}
//               </a>
//             </div>

//             {/* Download Button & Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm flex items-center">
//                 {isTranslating && (
//                   <Loader className="w-4 h-4 mr-2 animate-spin" />
//                 )}
//                 {getText("downloadCatalogue")}
//               </button>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={toggleMobileMenu}
//                 className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("home")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("aboutUs")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("products")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("investors")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("newsEvents")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("careers")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("blogs")}
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {getText("contactUs")}
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-white space-y-6">
//               <div className="space-y-4">
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
//                   {getText("discoverPower")}
//                 </h1>
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text">
//                   {getText("cuttingEdge")}
//                 </h2>
//                 <p className="text-xl md:text-2xl text-gray-300 font-light">
//                   {getText("riceMilling")}
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-8">
//                 <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
//                   {getText("learnMore")}
//                 </button>
//                 <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
//                   {getText("watchDemo")}
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Technology Visualization */}
//             <div className="relative">
//               <div className="relative w-full h-96 lg:h-[500px]">
//                 {/* Tablet/Device Mockup */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
//                   <div className="p-8 h-full">
//                     <div className="bg-blue-900 rounded-2xl h-full p-6 relative overflow-hidden">
//                       {/* Screen Content */}
//                       <div className="grid grid-cols-3 gap-4 h-full">
//                         <div className="space-y-4">
//                           <div className="bg-blue-700 rounded-lg h-16 animate-pulse flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("ourServices")}
//                           </div>
//                           <div className="bg-green-600 rounded-lg h-12 animate-pulse delay-300 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("products")}
//                           </div>
//                           <div className="bg-yellow-500 rounded-lg h-20 animate-pulse delay-600 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("whyChooseUs")}
//                           </div>
//                         </div>
//                         <div className="space-y-4">
//                           <div className="bg-purple-600 rounded-lg h-24 animate-pulse delay-200 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("ourTeam")}
//                           </div>
//                           <div className="bg-red-500 rounded-lg h-16 animate-pulse delay-500 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("mission")}
//                           </div>
//                           <div className="bg-indigo-600 rounded-lg h-12 animate-pulse delay-800 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("vision")}
//                           </div>
//                         </div>
//                         <div className="space-y-4">
//                           <div className="bg-teal-500 rounded-lg h-20 animate-pulse delay-400 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("latestNews")}
//                           </div>
//                           <div className="bg-orange-500 rounded-lg h-14 animate-pulse delay-700 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("testimonials")}
//                           </div>
//                           <div className="bg-pink-500 rounded-lg h-18 animate-pulse delay-900 flex items-center justify-center text-white text-xs font-semibold">
//                             {getText("getInTouch")}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Floating Elements */}
//                       <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//                       <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-500"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Tech Elements */}
//                 <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80 animate-float"></div>
//                 <div className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full opacity-80 animate-float delay-1000"></div>
//                 <div className="absolute top-1/2 -right-16 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full opacity-80 animate-float delay-500"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Translation Status Indicator */}
//         {isTranslating && (
//           <div className="fixed top-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center">
//             <Loader className="w-4 h-4 mr-2 animate-spin" />
//             Translating to {getCurrentLanguage().nativeName}...
//           </div>
//         )}

//         {/* Floating Action Buttons */}
//         <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
//           <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors relative">
//             <MessageCircle className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           </button>
//           <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
//             <Phone className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SonaWebsite;
