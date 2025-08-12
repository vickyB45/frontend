// Navbar.jsx
// Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dev Deepawali", href: "/dev-deepawali" },
    { label: "Tour Packages", href: "/other-pacheges" },
    { label: "Inquiry Now", href: "/inquiry" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={()=>navigate("/")} className="text-xl font-bold text-indigo-700">
           <img 
    src="https://lp.kashitrips.com/wp-content/uploads/2025/06/Kashi-trips-trip-to-kashi-website-logo-1.webp" 
    alt="Kashi Trips Logo" 
    className="h-20 w-auto object-contain" // height fix, width auto
  /> {/* TravelSite */}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={()=>navigate(item.href)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black/20 bg-opacity-50 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-5 flex flex-col">
          {/* Close Button */}
          <button
            className="self-end mb-5"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-6 flex flex-col space-y-3">
            <button
            
              className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-500 hover:text-white transition text-center"
              onClick={() => {
                navigate('/inquiry')
                setMenuOpen(false)}
              }
            >
              Enquiry
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
