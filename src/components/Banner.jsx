import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Image + Text content for each slide
const slides = [
  {
    img: "/image/dev1.png",
    title: "Experience Dev Deepawali",
    desc: "Witness the spiritual magic of Varanasi, where the ghats shine with thousands of diyas and the air echoes with devotion.",
  },
  {
    img: "/image/dev2.png",
    title: "A Night of a Million Lamps",
    desc: "Watch the Ganga glow under starlight as priests perform the grand Aarti with chants and conch shells.",
  },
  {
    img: "/image/dev3.png",
    title: "Sacred Vibes, Divine Light",
    desc: "Feel the peace, power, and purity of Kashi during its most vibrant and soulful celebration.",
  },
];

const Banner = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
       <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative transition-all duration-500"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/30 z-10" />

              {/* Frosted text box */}
              <motion.div
                key={slide.img}
                className="absolute bottom-10 left-1/2 z-20 transform -translate-x-1/2 backdrop-blur-[6px] bg-white/5 px-6 py-8 rounded-xl shadow-xl w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] text-center border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1
                  className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-gray-100 leading-relaxed max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.desc}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
