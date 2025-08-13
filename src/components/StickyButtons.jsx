import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react"; // icons

const StickyButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3 items-end">
      {/* Call */}
      <a
        href="tel:+919569275026"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md flex items-center justify-center"
      >
        <Phone size={22} />
      </a>

      {/* Chat (WhatsApp) */}
      <a
        href="https://wa.me/+919569275026"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md flex items-center justify-center"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
};

export default StickyButtons;
