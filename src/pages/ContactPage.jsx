import React, { useState } from "react";
import ContactModal from "../components/ContactModal";

const CustomPlanSection = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative py-16"
        style={{
          backgroundImage:
            "radial-gradient(#FFD700 1px, transparent 1px), radial-gradient(#FFD700 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
          backgroundColor: "#E09E55",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-0 leading-snug">
            Need a Customised Plan <br /> We Can Manage too!
          </h2>

          {/* Button */}
        <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white px-6 py-3 rounded shadow hover:shadow-lg"
      >
        Contact Us →
      </button>
       <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </div>
      </section>
    </>
  );
};

export default CustomPlanSection;
