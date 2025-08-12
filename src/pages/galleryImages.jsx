import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://kashiyatra.in/wp-content/uploads/2024/09/dev-diwali-varanasi.jpg",
    alt: "Thousands of diyas on the ghats of Varanasi",
  },
  {
    src: "https://roadtotaste.com/wp-content/uploads/2016/12/IMG_6316-01-1024x683.jpg",
    alt: "Aarti ceremony during Dev Deepawali",
  },
  {
    src: "https://vareli.co.in/vareliCMS/public/images/214297571/Dev%20Diwali%20002.jpg",
    alt: "Boat ride with glowing ghats in background",
  },
  {
    src: "https://c8.alamy.com/comp/2H41H6G/enlighten-ganga-ghat-at-varanasi-during-dev-diwali-celebration-2H41H6G.jpg",
    alt: "Crowds enjoying the festive lights",
  },
  {
    src: "https://www.varanasiguru.com/wp-content/uploads/2024/10/Dev-Diwali-Varanasi-Best-Ghat-Top-Attractions-Things-to-do-Dev-Diwali-Booking5.jpg",
    alt: "Dashashwamedh Ghat fully illuminated",
  },
  {
    src: "https://vareli.co.in/vareliCMS/public/images/214297571/Dev%20Diwali%20002.jpg",
    alt: "Close-up of diyas during Dev Deepawali",
  },
  {
    src: "https://media.assettype.com/outlooktraveller%2F2023-11%2F18eebef3-9037-46c8-b107-44c5806ea2fe%2Fshutterstock_1263750487.jpg?auto=format%2Ccompress&w=640",
    alt: "Aerial view of Varanasi ghats lit with lamps",
  },
  {
    src: "https://www.varanasiguru.com/wp-content/uploads/2024/10/Dev-Diwali-Varanasi-Best-Ghat-Top-Attractions-Things-to-do-Dev-Diwali-Booking1.jpg",
    alt: "Spiritual vibes at the Ganga river",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--primary-color,#1e3a8a)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Dev Deepawali Moments
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
              variants={fadeUp}
              custom={index * 0.1}
              initial="hidden"
              whileInView="show"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-44 md:h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-2xl"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
