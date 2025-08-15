import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ravi Kumar",
    rating: 5,
    comment: "Best tour service in Varanasi! Everything was perfectly arranged.",
    date: "Jan 2025",
    image: "https://i.pinimg.com/736x/c0/4a/13/c04a130a651a0ae78f80133f2d54b440.jpg",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Dev Deepawali experience was unforgettable! Highly recommend.",
    date: "Dec 2024",
    image: "https://i.pinimg.com/1200x/9c/8d/e3/9c8de38b722d774ab6b2d48d68b42ad6.jpg",
  },
  {
    name: "Amit Verma",
    rating: 4.5,
    comment: "Very professional and well organized tour.",
    date: "Nov 2024",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Neha Singh",
    rating: 5,
    comment: "Boat ride & Ganga Aarti was magical. Will book again.",
    date: "Nov 2024",
    image: "https://i.pinimg.com/736x/2f/46/d5/2f46d594fb140b5fa75eff67802c064b.jpg",
  },
  {
    name: "Isha Sharma",
    rating: 5,
    comment: "I recently booked a trip with Kashi Trip Travel Agency and I couldn't be happier with their service.",
    date: "jan 2024",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLppsln3zACKYvs7xwKDn8g4ezGfNjTsd7KVRDVvKb1ZXpuEg=w43-h43-p-rp-mo-br100",
  },
];

const ReviewsCarousel = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[var(--primary-color,#1e3a8a)]">
  What Our Guests Say
</h2>
<p className="text-center text-gray-500 mb-4">
  Real stories from happy travelers who explored with us
</p>

{/* Google Business Link */}



        <Swiper
          modules={[Autoplay, ]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" rounded-2xl p-6 cursor-grab active:cursor-grabbing shadow-lg hover:shadow-2xl transition-all h-full flex flex-col border border-gray-100"
              >
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => {
                    if (i + 1 <= review.rating) {
                      return <FaStar key={i} className="text-yellow-500" />;
                    } else if (i + 0.5 === review.rating) {
                      return <FaStarHalfAlt key={i} className="text-yellow-500" />;
                    }
                    return <FaStar key={i} className="text-gray-300" />;
                  })}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic flex-grow leading-relaxed">
                  "{review.comment}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="text-center mb-10">
  <a
    href="https://www.google.com/maps/place/KASHI+TRIPS+-+Best+Tour+%26+Travels+Agency+%7C+Travel+Agent+%7C+Tour+Operator+in+Varanasi,+INDIA/@25.364127,83.001893,16z/data=!4m6!3m5!1s0x398e2f913ecb584d:0x7a6d0685ecfe441e!8m2!3d25.3641273!4d83.0018926!16s%2Fg%2F11s42mllmy?entry=tts&g_ep=EgoyMDI1MDgxMC4wIPu8ASoASAFQAw%3D%3D&skid=74272754-d035-476e-94ef-227ca90c58e1"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-full shadow-lg transition"
  >
    ⭐ Read More Reviews on Google
  </a>
</div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
