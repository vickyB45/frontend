// Navbar.jsx
import React, { useState } from "react";
import { Hash, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CTAForm from "./CTAForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/#hero" },
    { label: "Tour Packages", to: "/#toar-package" },
    { label: "Enquiry Now", to: "/#inquiry", onClick: true }, 
  ];

  const handleNavClick = (item) => {
    if (item.onClick) {
      setShowCTA(true);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <HashLink
        smooth
          onClick={() => {
            navigate("/")
            window.scrollTo({top:0,behavior:smooth})
          }}
          >
        
        <button
          className="text-xl font-bold text-indigo-700"
        >
          <img
            src="https://kashitrips.com/wp-content/uploads/2023/08/Kashi-trips-trip-to-kashi-website-logo.webp"
            alt="Kashi Trips Logo"
            className="cursor-pointer h-16 md:ml-8 w-auto object-contain"
          
          />
        </button>

          </HashLink>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) =>
            item.onClick ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
              >
                {item.label}
              </button>
            ) : (
              <HashLink
                key={item.label}
                smooth
                onClick={() => handleNavClick(item)}
                to={item.to}
                className="text-gray-700 hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </HashLink>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden"> <button
                onClick={() =>setShowCTA(true)}
                className="bg-yellow-400 text-xs block md:hidden text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
              >
               Enquiry Now
              </button>
       </div>
       
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-5 flex flex-col">
          {/* Close Button */}
          <button className="self-end mb-5" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>

          {/* Mobile Nav Items */}
         
        </div>
      </div>

      {/* CTA Modal */}
      {showCTA && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={() => setShowCTA(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <CTAForm />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
