import React from 'react'
import {useNavigate} from "react-router-dom"

const StickyButtons = () => {
const navigate = useNavigate()
  
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3 items-end">
      {/* Enquiry Button */}
      
     

    
      

      {/* Call */}
      <a
        href="tel:+91 9569275026" // Replace with actual number
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md"
      >
        Call Now
      </a>
      
        {/* Chat (WhatsApp) */}
      <a
        href="https://wa.me/+91 9569275026" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-md"
      >
        Chat With Us
      </a>
       <button
        onClick={() =>
          document
            .querySelector("form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold shadow-md"
      >
        Enquiry Now
      </button>
      <button
        onClick={() =>{
          navigate("/admin-dashboard")
        }
        }
        className="bg-white text-black px-4 py-2 cursor-pointer rounded-full font-semibold shadow-md"
      >
       Login as Admin
      </button>
    </div>
  );
};

export default StickyButtons;
