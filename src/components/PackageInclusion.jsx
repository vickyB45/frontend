import { FaHotel, FaUtensils, FaShip, FaCarAlt } from "react-icons/fa";

const inclusions = [
  {
    icon: <FaHotel className="text-white text-xl" />,
    title: "Hotel Accommodation",
    color: "bg-yellow-500",
  },
  {
    icon: <FaUtensils className="text-white text-xl" />,
    title: "Breakfast & Dinner",
    color: "bg-pink-500",
  },
  {
    icon: <FaShip className="text-white text-xl" />,
    title: "Boat Ride & Aarti Ceremony",
    color: "bg-blue-500",
  },
  {
    icon: <FaCarAlt className="text-white text-xl" />,
    title: "AC Car Sightseeing",
    color: "bg-green-500",
  },
];

const PackageInclusion = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--primary-color)]">
          What's Included
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-6 rounded-xl shadow-md hover:shadow-xl  transition-all duration-300 flex flex-col items-center gap-4"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color} shadow-md`}
              >
                {item.icon}
              </div>
              <p className="text-base font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageInclusion;
