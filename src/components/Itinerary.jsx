import { motion } from "framer-motion";
import {
  FaHotel,
  FaPlaceOfWorship,
  FaMapMarkedAlt,
} from "react-icons/fa";

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
    <section className="py-8 bg-gradient-to-b from-[#f3f4f6] to-white px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary-color)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Dev Deepawali Package – 2 Nights / 3 Days
        </motion.h2>

        <div className="space-y-8">
          {itinerary.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center shadow`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">
                  {item.day}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
