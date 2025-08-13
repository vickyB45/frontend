// Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // smooth scroll links

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/#hero" },
    { label: "Tour Packages", to: "/#toar-package" },
    { label: "Inquiry Now", to: "/#inquiry" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-indigo-700"
        >
          <img
            src="https://lp.kashitrips.com/wp-content/uploads/2025/06/Kashi-trips-trip-to-kashi-website-logo-1.webp"
            alt="Kashi Trips Logo"
            className="h-20 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <HashLink
              key={item.label}
              smooth
              to={item.to}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </HashLink>
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
        className={`fixed inset-0 bg-black/20 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-5 flex flex-col">
          {/* Close Button */}
          <button className="self-end mb-5" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <HashLink
                key={item.label}
                smooth
                to={item.to}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </HashLink>
            ))}
          </nav>

          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
