import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">KashiTrip</h2>
          <p className="text-sm text-gray-400">
           Kashi Trips Tour & Travels is one of the most trusted and Successful Travel Company in terms of customer satisfaction and delivering unforgettable memories to their guests.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>SA 4/184, Basant Vihar Colony, Pandeypur, Paharia, Varanasi</li>
            <li>📞 <a href="tel:+919569275026" className="hover:underline">+91 9569275026</a></li>
            <li>✉️ <a href="mailto:info@kashitrip.com" className="hover:underline">info@kashitrips.com</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://wa.me/919569275026" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t pt-4">
        © {new Date().getFullYear()} Copyright © 2025 Kashi Trips. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
