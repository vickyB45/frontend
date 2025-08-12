import React, { useState } from "react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Varanasi Tour",
    image:
      "https://i.pinimg.com/736x/b9/b8/d4/b9b8d4997315c000fd477edb9fb721b1.jpg",
  },
  {
    title: "Ayodhya Tour",
    image:
      "https://i.pinimg.com/736x/f3/86/e6/f386e6e818778ef140d4599dae1249fb.jpg",
  },
  {
    title: "Chitrakoot Tour",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/55/2d/e7/ram-ghat.jpg?h=-1&s=1&w=900",
  },
  {
    title: "Prayagraj Tour",
    image:
      "https://i.pinimg.com/736x/c9/e7/9d/c9e79d02a3dcccb7219ffa660c627da0.jpg",
  },
  {
    title: "Vindhyachal Tour",
    image:
      "https://www.thekumbhyatra.com/wp-content/uploads/2025/04/vindhyachal.webp",
  },
  {
    title: "Bodh Gaya Tour",
    image:
      "https://i.pinimg.com/736x/ed/02/60/ed02605102a3f434103793997256641f.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const OtherPackages = () => {
  const [showForm, setShowForm] = useState(false);

  const handleEnquireClick = () => {
    setShowForm(true);
    // Optional: scroll to form smoothly
    setTimeout(() => {
      document.querySelector("#ctaForm")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry!");
    setShowForm(false);
  };

  return (
    <section className="py-14 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary-color,#1e3a8a)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Explore Other Packages
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md group hover:shadow-2xl transition-all duration-300"
              variants={fadeUp}
              custom={index * 0.15}
              initial="hidden"
              whileInView="show"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-64 w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {pkg.title}
                </h3>
                <button
                  onClick={handleEnquireClick}
                  className="bg-[var(--accent-color,#facc15)] text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-[var(--primary-color,#1e3a8a)] hover:text-white transition"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Form */}
        {showForm && (
          <motion.div
            id="ctaForm"
            className="mt-16 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color,#1e3a8a)]">
              Enquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color,#1e3a8a)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color,#1e3a8a)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-color,#1e3a8a)]"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--primary-color,#1e3a8a)] text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-900 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OtherPackages;
  