import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ThankYouPage() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">

      <h1 className="text-3xl sm:text-5xl font-semibold mb-2">
        Thank you for choosing{" "}
        <span className="text-orange-500 font-bold">Kashitrips.com</span>
      </h1>

      <div className="w-20 border-t-4 border-orange-500 rounded-full my-4"></div>

      <p className="text-lg text-gray-700 mb-6">
        For immediate assistance, you can{" "}
        <span className="text-orange-500 font-semibold">Call</span> our sales
        team at,
      </p>

      <p className="font-bold text-gray-900">
        Phone/WhatsApp:{" "}
        <a href="tel:+919569275026" className="hover:underline">
          +91 95692 75026
        </a>
      </p>
      <p className="font-bold text-gray-900 mb-6">
        Email:{" "}
        <a href="mailto:info@kashitrips.com" className="hover:underline">
          info@kashitrips.com
        </a>
      </p>

      <p className="text-gray-700 max-w-xl mb-2">
        Our travel expert team will contact you within 24 hours (for any
        additional preferences or customizations).
      </p>

      <p className="mt-6 text-gray-800">
        We look forward to making your trip memorable!
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-10 px-6 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </div>
    
    </>
  );
}
