import { useState } from "react";
import { motion } from "framer-motion";

const DevDeepawaliInfo = () => {
  const sections = [
    {
      title: "Dev Deepawali Varanasi – A Divine Celebration on the Ghats",
      content: `Dev Deepawali, often referred to as the "Festival of Gods," is one of the most spiritually significant and visually mesmerizing festivals celebrated in Varanasi. Observed on the full moon night of Kartik Purnima—15 days after Diwali—this festival commemorates Lord Shiva’s triumph over the demon Tripurasur. On this special evening, the ghats of the sacred Ganges are lit with thousands of oil lamps, creating a spectacular sight.`
    },
    {
      title: "When is Dev Deepawali in 2025?",
      content: `In 2025, Dev Deepawali will be celebrated on November 05. As night falls, the ghats of Varanasi will once again be bathed in the warm glow of countless diyas, attracting pilgrims, photographers, and tourists from around the globe.`
    },
    {
      title: "What Makes Dev Deepawali in Varanasi So Unique?",
      content: `Varanasi, often hailed as the spiritual heart of India, transforms into a divine spectacle during Dev Deepawali. Millions gather at the riverbanks to witness the magical fusion of faith, culture, and visual grandeur. The sight of the entire city lit up with diyas, the soulful sound of chants, and the aroma of incense create an unforgettable ambiance filled with devotion and festivity.`
    },
    {
      title: "How to Best Experience Dev Deepawali in Varanasi",
      content: `🔸 Boat Rides on the Ganges: One of the most breathtaking ways to take in the beauty of the illuminated ghats is through a night boat ride. Services such as Kashiyatra offer curated boat tours, offering a close-up view of the flickering lights and ongoing rituals.\n\n🔸 Visit Prominent Ghats: Make sure to explore famous ghats like Dashashwamedh Ghat, Assi Ghat, and Rajendra Prasad Ghat—key locations for the grand Ganga Aarti and other cultural programs.\n\n🔸 Explore Historic Temples: Don’t miss out on visiting Varanasi’s iconic temples, including Kashi Vishwanath Temple and Sankat Mochan Hanuman Temple, which hold special spiritual ceremonies during this time.\n\n🔸 Participate in Sacred Rituals: Thousands of devotees take a holy dip in the Ganga on Kartik Purnima, believing it to be a path to spiritual cleansing and inner peace.`
    }
  ];

  const [showFull, setShowFull] = useState(false);

  const previewText = sections[0].content.slice(0, 350);

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl my-8 mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8"
    >
      {sections.map((sec, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            {sec.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-line">
            {showFull ? sec.content : idx === 0 ? `${previewText}...` : ""}
          </p>
        </div>
      ))}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowFull(!showFull)}
          className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base font-medium rounded-md shadow-md transition-all duration-300"
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      </div>
    </motion.div>
  );
};

export default DevDeepawaliInfo;
