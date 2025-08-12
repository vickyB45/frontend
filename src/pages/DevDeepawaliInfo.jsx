import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTAForm from "../components/CTAForm";

const DevDeepawaliInfo = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800 relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/dev5.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Dev Deepawali – The Festival of Lights in Varanasi
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <motion.h2
          className="text-3xl font-bold text-[var(--primary-color,#1e3a8a)] mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          About Dev Deepawali
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Dev Deepawali, also known as the “Diwali of the Gods,” is one of the
          most spectacular festivals celebrated in Varanasi, Uttar Pradesh. It
          falls on the full moon day (Kartik Purnima) and marks the victory of
          Lord Shiva over the demon Tripurasura. On this night, the ghats of the
          holy river Ganga are lit with millions of diyas, creating a
          breathtaking view that attracts visitors from all over the world.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-[var(--primary-color,#1e3a8a)] mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Highlights of Dev Deepawali
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Millions of Diyas",
                img: "https://cdn.zeebiz.com/sites/default/files/2022/11/08/209411-no8-12.jpg",
              },
              {
                title: "Ganga Aarti",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/2560px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
              },
              {
                title: "Boat Rides on Ganga",
                img: "https://www.newsband.in/uploads/blog_main_img/fdd7e74da3136763ad531db95ea66706_1.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time & Tips */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <motion.h2
          className="text-3xl font-bold text-[var(--primary-color,#1e3a8a)] mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Best Time to Visit
        </motion.h2>
        <p className="mb-6 text-gray-700">
          The festival usually falls in November, on Kartik Purnima. The entire
          city comes alive in the evening, and the best experience is from a
          boat ride on the Ganga.
        </p>

        <motion.h3
          className="text-2xl font-semibold mb-3 text-gray-800"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Travel Tips
        </motion.h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Book your stay and boat rides in advance.</li>
          <li>Carry warm clothes as evenings can be chilly.</li>
          <li>Reach the ghats early to avoid heavy crowds.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className=" py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Witness the Magic of Dev Deepawali</h2>
        <p className="mb-6">
          Plan your visit to Varanasi and experience the divine light festival
          like never before.
        </p>
       
      </section>

      {/* Overlay CTAForm */}
      {showCTA && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
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
    </div>
  );
};

export default DevDeepawaliInfo;
