import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

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
];

const ReviewsCarousel = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--primary-color,#1e3a8a)]">
          What Our Guests Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <FaStar className="text-yellow-500 opacity-60" />
                  )}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic flex-grow">
                  "{review.comment}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
