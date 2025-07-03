// import { useState } from "react";

// export default function MailingListSubscription() {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!email.trim()) return;

//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubscribed(true);
//       setIsLoading(false);
//       setEmail("");
//     }, 1000);
//   };

//   const resetForm = () => {
//     setIsSubscribed(false);
//     setEmail("");
//   };

//   return (
//     <section
//       className="bg-blue-800 py-16 px-4 sm:py-20 lg:py-24"
//       role="banner"
//       aria-labelledby="newsletter-heading"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         {!isSubscribed ? (
//           <>
//             <h1
//               id="newsletter-heading"
//               className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8"
//             >
//               Join our Mailing List
//             </h1>

//             <p className="text-white text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
//               Subscribe to our newsletter for latest updates in the Industry
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-lg mx-auto">
//               <div className="flex-1">
//                 <label htmlFor="email-input" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email-input"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Your email address"
//                   className="w-full px-4 py-3 sm:py-4 text-gray-700 bg-white border-0 rounded-l-md sm:rounded-r-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 text-sm sm:text-base"
//                   required
//                   aria-describedby="email-description"
//                   disabled={isLoading}
//                 />
//                 <div id="email-description" className="sr-only">
//                   Enter your email address to subscribe to our newsletter
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 disabled={!email.trim() || isLoading}
//                 className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 sm:py-4 rounded-r-md sm:rounded-l-none rounded-l-md transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
//                 aria-label={
//                   isLoading ? "Subscribing..." : "Subscribe to newsletter"
//                 }
//               >
//                 {isLoading ? (
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="animate-spin h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Subscribing...
//                   </span>
//                 ) : (
//                   "Subscribe now"
//                 )}
//               </button>
//             </div>

//             <p className="text-blue-100 text-xs sm:text-sm mt-4 max-w-md mx-auto">
//               By subscribing, you agree to receive marketing emails. You can
//               unsubscribe at any time.
//             </p>
//           </>
//         ) : (
//           <div className="text-center">
//             <div className="mb-6">
//               <svg
//                 className="mx-auto h-16 w-16 text-green-400 mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>

//             <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
//               Thank You for Subscribing!
//             </h2>

//             <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-md mx-auto">
//               You'll receive the latest industry updates directly in your inbox.
//             </p>

//             <button
//               onClick={resetForm}
//               className="bg-white hover:bg-gray-100 text-blue-800 font-semibold px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
//             >
//               Subscribe Another Email
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

//----------------------------------

// import { useState } from "react";

// export default function MailingListSubscription() {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = () => {
//     if (!email.trim()) return;

//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       alert("Successfully subscribed!");
//       setIsLoading(false);
//       setEmail("");
//     }, 1000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   return (
//     <section className="bg-blue-900 py-16 mt-1 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-white text-4xl font-bold mb-6">
//           Join our Mailing List
//         </h1>

//         <p className="text-white text-lg mb-10 leading-relaxed">
//           Subscribe to our newsletter for latest updates in
//           <br />
//           the Industry
//         </p>

//         <div className="flex justify-center items-center max-w-2xl mx-auto">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Your email address"
//             className="flex-1 px-6 py-4 text-gray-700 bg-white text-base focus:outline-none focus:ring-0 border-0"
//             style={{
//               borderTopLeftRadius: "4px",
//               borderBottomLeftRadius: "4px",
//               borderTopRightRadius: "0px",
//               borderBottomRightRadius: "0px",
//             }}
//             disabled={isLoading}
//           />

//           <button
//             onClick={handleSubmit}
//             disabled={!email.trim() || isLoading}
//             className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 text-base transition-colors duration-200 focus:outline-none"
//             style={{
//               borderTopLeftRadius: "0px",
//               borderBottomLeftRadius: "0px",
//               borderTopRightRadius: "4px",
//               borderBottomRightRadius: "4px",
//             }}
//           >
//             {isLoading ? "Subscribing..." : "Subscribe now"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

export default function MailingListSubscription() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      alert("Successfully subscribed!");
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="bg-blue-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">
          Join our Mailing List
        </h1>

        <p className="text-white text-base sm:text-lg mb-10 leading-relaxed">
          Subscribe to our newsletter for latest updates in
          <br className="hidden sm:block" />
          the Industry
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 max-w-2xl mx-auto w-full px-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Your email address"
            className="w-full sm:flex-1 px-4 py-3 text-gray-700 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-300 rounded sm:rounded-l sm:rounded-r-none"
            disabled={isLoading}
          />

          <button
            onClick={handleSubmit}
            disabled={!email.trim() || isLoading}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 text-base transition-colors duration-200 focus:outline-none rounded sm:rounded-r sm:rounded-l-none"
          >
            {isLoading ? "Subscribing..." : "Subscribe now"}
          </button>
        </div>
      </div>
    </section>
  );
}
