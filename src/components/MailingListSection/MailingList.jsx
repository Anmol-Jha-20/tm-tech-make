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
