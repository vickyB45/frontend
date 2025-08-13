import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/10/fa/43/10fa43f6ca49b841569267a8ef8e0b44.jpg",
    alt: "Thousands of diyas on the ghats of Varanasi",
  },
  {
    src: "/image/gallery/1.png",
    alt: "Aarti ceremony during Dev Deepawali",
  },
  {
     src: "/image/gallery/2.png",
    alt: "Boat ride with glowing ghats in background",
  },
  {
     src: "/image/gallery/3.png",
    alt: "Crowds enjoying the festive lights",
  },
  {
     src: "/image/gallery/4.png",
    alt: "Dashashwamedh Ghat fully illuminated",
  },
  {
     src: "/image/gallery/5.png",
    alt: "Close-up of diyas during Dev Deepawali",
  },
  {
     src: "/image/gallery/6.png",
    alt: "Aerial view of Varanasi ghats lit with lamps",
  },
  {
     src: "/image/gallery/7.png",
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
    <section id="gallery" className="py-4 bg-white px-4">
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
              className="max-h-[100%] max-w-[100%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
