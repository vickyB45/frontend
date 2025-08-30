import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/10/fa/43/10fa43f6ca49b841569267a8ef8e0b44.jpg",
    alt: "Thousands of diyas on the ghats of Varanasi",
  },
  {
    src: "https://i.pinimg.com/736x/16/ee/49/16ee49fd1f421f4e69424d85b86a124c.jpg",
    alt: "Aarti ceremony during Dev Deepawali",
  },
  {
     src: "https://static.toiimg.com/photo/115340033.cms",
    alt: "Boat ride with glowing ghats in background",
  },
  {
     src: "https://static.wixstatic.com/media/f31e44_d008579e635b49599a1108c7fc1fec6c~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/f31e44_d008579e635b49599a1108c7fc1fec6c~mv2.jpg",
    alt: "Crowds enjoying the festive lights",
  },
  {
     src: "https://www.varanasiguru.com/wp-content/uploads/2024/10/Dev-Diwali-Varanasi-Best-Ghat-Top-Attractions-Things-to-do-Dev-Diwali-Booking5.jpg",
    alt: "Dashashwamedh Ghat fully illuminated",
  },
  {
     src: "https://static.wixstatic.com/media/f31e44_64fb3594aab147378512d9e454e44a64~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/f31e44_64fb3594aab147378512d9e454e44a64~mv2.jpg",
    alt: "Close-up of diyas during Dev Deepawali",
  },
  {
     src: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/PTI11_27_2023_000282A-scaled.jpg?size=%2A%3A900",
    alt: "Aerial view of Varanasi ghats lit with lamps",
  },
  {
     src: "https://static2.tripoto.com/media/filter/tst/img/1322504/TripDocument/1564077275_1564077254489.jpg",
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
