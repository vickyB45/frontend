import React from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    title: "Varanasi Tour",
    image:
      "https://i.pinimg.com/736x/b9/b8/d4/b9b8d4997315c000fd477edb9fb721b1.jpg",
    desc: "Explore the spiritual capital of India with visits to Kashi Vishwanath Temple, Ganga Aarti, and ancient ghats."
  },
  {
    title: "Ayodhya Tour",
    image:
      "https://i.pinimg.com/736x/f3/86/e6/f386e6e818778ef140d4599dae1249fb.jpg",
    desc: "Experience the birthplace of Lord Rama with Ram Janmabhoomi, Hanuman Garhi, and Saryu River Aarti.",
  },
  {
    title: "Chitrakoot Tour",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/55/2d/e7/ram-ghat.jpg?h=-1&s=1&w=900",
    desc: "Visit the serene Ram Ghat, Kamadgiri Hill, and Hanuman Dhara in the land of Ramayana legends.",
  },
  {
    title: "Prayagraj Tour",
    image:
      "https://i.pinimg.com/736x/c9/e7/9d/c9e79d02a3dcccb7219ffa660c627da0.jpg",
    desc: "Witness the holy confluence of Ganga, Yamuna, and Saraswati at Triveni Sangam along with Akshayvat Tree.",
  },
  {
    title: "Vindhyachal Tour",
    image:
      "https://www.thekumbhyatra.com/wp-content/uploads/2025/04/vindhyachal.webp",
    desc: "Seek blessings at Maa Vindhyavasini Temple, Kali Khoh, and Ashtabhuja Temple in this sacred Shakti Peeth.",
  },
  {
    title: "Bodh Gaya Tour",
    image:
      "https://i.pinimg.com/736x/ed/02/60/ed02605102a3f434103793997256641f.jpg",
    desc: "Experience peace at the Mahabodhi Temple, Bodhi Tree, and monasteries where Lord Buddha attained enlightenment.",
  },
];

const TourPackagesPage = () => {
const navigate = useNavigate()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative h-60 md:h-72 bg-cover bg-center" style={{
        backgroundImage:
          "url()",
      }}>
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold  text-center">
            Our Tour Packages
          </h1>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{pkg.desc}</p>
                <button
                  onClick={() =>{
                    document
                      .querySelector("form")
                      ?.scrollIntoView({ behavior: "smooth" })
                      navigate("/inquiry")
                  }
                  }
                  className="mt-4 bg-[var(--primary-color,#1e3a8a)] hover:bg-[var(--accent-color,#facc15)] text-white font-semibold px-4 py-2 rounded-md text-sm transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackagesPage;
