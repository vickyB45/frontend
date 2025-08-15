import { motion } from "framer-motion";
import { FaHotel, FaUtensils, FaShip, FaCarAlt } from "react-icons/fa";

const inclusions = [
  {
    icon: <FaHotel className="text-white text-2xl" />,
    title: "Hotel Accommodation",
    color: "bg-yellow-500",
  },
  {
    icon: <FaUtensils className="text-white text-2xl" />,
    title: "Breakfast & Dinner",
    color: "bg-pink-500",
  },
  {
    icon: <FaShip className="text-white text-2xl" />,
    title: "Boat Ride & Aarti Ceremony",
    color: "bg-blue-500",
  },
  {
    icon: <FaCarAlt className="text-white text-2xl" />,
    title: "AC Car Sightseeing",
    color: "bg-green-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const PackageInclusion = () => {
  return (
    <section className="py-2 bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-[var(--primary-color,#1e3a8a)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          What's Included
        </motion.h2>

        <div className="grid  grid-cols-2 md:grid-cols-4 md:gap-6 gap-3">
          {inclusions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white cursor-pointer p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center gap-4"
              variants={fadeUp}
              custom={index * 0.15}
              initial="hidden"
              whileInView="show"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${item.color} shadow-md`}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <p className="text-base font-semibold text-gray-800">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageInclusion;
