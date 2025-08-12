import { motion } from "framer-motion";
import {
  FaHotel,
  FaPlaceOfWorship,
  FaMapMarkedAlt,
} from "react-icons/fa";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

// Itinerary data
const itinerary = [
  {
    day: "Day 1: Arrival in Varanasi",
    icon: <FaHotel className="text-white text-2xl" />,
    iconBg: "bg-yellow-500",
    description:
      "Pickup from airport/station → Check-in at hotel → Evening boat ride on the Ganges → Ganga Aarti → Overnight stay.",
  },
  {
    day: "Day 2: Temple Tour + Sarnath",
    icon: <FaPlaceOfWorship className="text-white text-2xl" />,
    iconBg: "bg-red-500",
    description:
      "Early rituals + Boat ride → Visit to temples: Kashi Vishwanath, Annapurna, Durga, etc. → Afternoon visit to Sarnath → Return & overnight stay.",
  },
  {
    day: "Day 3: Departure",
    icon: <FaMapMarkedAlt className="text-white text-2xl" />,
    iconBg: "bg-green-500",
    description:
      "Breakfast → Checkout → Drop at airport/station with divine memories of Kashi.",
  },
];

const Itinerary = () => {
  return (
    <section
      className="py-10 bg-gradient-to-b from-gray-100 to-white px-4"
      id="itinerary"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary-color,#1e3a8a)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Dev Deepawali Package – 2 Nights / 3 Days
        </motion.h2>

        {/* Itinerary Cards */}
        <div className="space-y-8">
          {itinerary.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col sm:flex-row items-start gap-5"
              variants={fadeUp}
              custom={index * 0.2}
              initial="hidden"
              whileInView="show"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-900">
                  {item.day}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
