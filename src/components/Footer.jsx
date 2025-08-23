import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F0B100] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">KashiTrip</h2>
          <p className="text-sm text-black leading-relaxed">
            Kashi Trips Tour & Travels is one of the most trusted travel companies, 
            delivering unforgettable memories to guests with exceptional service.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm text-black space-y-2">
            <li>
              SA 4/184, Basant Vihar Colony, Pandeypur, Paharia, Varanasi
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+919569275026"
                className="hover:underline text-white"
              >
                +91 9569275026
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@kashitrip.com"
                className="hover:underline text-white"
              >
                info@kashitrips.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-black">
            <a href="https://www.facebook.com/people/KASHI-TRIPS/100083009542231/?mibextid=ZbWKwL" target="_blank" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/919569275026"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Tourism Logos */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Associations</h3>
          <div className="flex sm:flex-row gap-4 items-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOypbhFDsrKBJuVFFlGMwbHGC0DuKVQQSKlw&s"
              alt="Uttar Pradesh Tourism"
              className="h-12 bg-white p-1 rounded shadow"
            />
            <img
              src="https://www.adtoi.in/images/adtoi-icon.jpg"
              alt="ADTOI"
              className="h-12 bg-white p-1 rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-black text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kashi Trips. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
