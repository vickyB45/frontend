// Banner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Common animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

// Slides data
const slides = [
  {
    img: "/image/dev1.png",
    title: "Experience Dev Deepawali",
    desc: "Witness the spiritual magic of Varanasi, where the ghats shine with thousands of diyas and the air echoes with devotion.",
    cta: "/dev-deepawali",
  },
  {
    img: "/image/dev2.png",
    title: "A Night of a Million Lamps",
    desc: "Watch the Ganga glow under starlight as priests perform the grand Aarti with chants and conch shells.",
    cta: "/dev-deepawali",
  },
  {
    img: "/image/dev3.png",
    title: "Sacred Vibes, Divine Light",
    desc: "Feel the peace, power, and purity of Kashi during its most vibrant and soulful celebration.",
    cta: "/dev-deepawali",
  },
];

const Banner = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Text Box */}
              <motion.div
                key={slide.img}
                className="absolute bottom-10 left-1/2 z-20 transform -translate-x-1/2 backdrop-blur-[6px] bg-white/5 px-6 py-8 rounded-xl shadow-xl w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] text-center border border-white/10"
                variants={fadeUp}
                initial="hidden"
                animate="show"
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                  variants={fadeUp}
                  custom={0.2}
                  initial="hidden"
                  animate="show"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-xl mx-auto"
                  variants={fadeUp}
                  custom={0.4}
                  initial="hidden"
                  animate="show"
                >
                  {slide.desc}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href={slide.cta}
                  className="inline-block mt-5 px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                  variants={fadeUp}
                  custom={0.6}
                  initial="hidden"
                  animate="show"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination style */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: white !important;
          opacity: 0.7;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #facc15 !important; /* Tailwind yellow-400 */
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Banner;
