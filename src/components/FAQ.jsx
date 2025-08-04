import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is Dev Deepawali and why is it special in Varanasi?",
    answer:
      "Dev Deepawali, or 'Diwali of the Gods', is celebrated 15 days after Diwali. Ghats are lit with thousands of diyas and a grand Ganga Aarti is performed.",
  },
  {
    question: "What is included in the Dev Deepawali tour package?",
    answer:
      "Hotel stay (2 nights), breakfast & dinner, boat ride, Ganga Aarti, local sightseeing by AC car, pickup & drop service.",
  },
  {
    question: "Are train/flight tickets included in the package?",
    answer:
      "No, but we can assist in booking if required. Travel cost is not part of the standard package.",
  },
  {
    question: "Can we customize the itinerary or include additional destinations?",
    answer:
      "Yes, you can add nearby places like Ayodhya, Prayagraj, Bodh Gaya etc. based on availability.",
  },
  {
    question: "Is the boat ride on Dev Deepawali private or shared?",
    answer:
      "Standard package includes shared boat ride. Private boats can be arranged on request (extra charges apply).",
  },
  {
    question: "What type of hotel accommodation is provided?",
    answer:
      "We offer clean and comfortable hotels in mid to premium categories, depending on your budget.",
  },
  {
    question: "Are meals included during the stay?",
    answer: "Yes, daily breakfast and dinner are included at the hotel.",
  },
  {
    question: "Is this package suitable for senior citizens or families with kids?",
    answer:
      "Absolutely. The itinerary is designed to be comfortable, safe, and family-friendly.",
  },
  {
    question: "What is the best time to book the Dev Deepawali package?",
    answer:
      "We recommend booking at least 1–2 months in advance due to high demand during Dev Deepawali.",
  },
  {
    question: "What if my train/flight is delayed on the day of arrival or departure?",
    answer:
      "We monitor arrival timings and adjust pick-up schedules. Inform us early in case of delays.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md shadow-sm bg-white overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                <span>{item.question}</span>
                <span className="ml-4 text-sm">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
