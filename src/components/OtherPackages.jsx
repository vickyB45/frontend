import React from 'react'
const packages = [
  {
    title: "Varanasi Tour",
    image: "https://i.pinimg.com/736x/b9/b8/d4/b9b8d4997315c000fd477edb9fb721b1.jpg",
    link: "#",
  },
  {
    title: "Ayodhya Tour",
    image: "https://i.pinimg.com/736x/f3/86/e6/f386e6e818778ef140d4599dae1249fb.jpg",
    link: "#",
  },
  {
    title: "Chitrakoot Tour",
    image: "https://i.pinimg.com/1200x/75/ab/52/75ab52ccc5e79556cda6cdaa26808ef8.jpg",
    link: "#",
  },
  {
    title: "Prayagraj Tour",
    image: "https://i.pinimg.com/736x/c9/e7/9d/c9e79d02a3dcccb7219ffa660c627da0.jpg",
    link: "#",
  },
  {
    title: "Vindhyachal Tour",
    image: "https://i.pinimg.com/1200x/0b/72/91/0b72916248c041b816ac85290d7bb152.jpg",
    link: "#",
  },
  {
    title: "Bodh Gaya Tour",
    image: "https://i.pinimg.com/736x/ed/02/60/ed02605102a3f434103793997256641f.jpg",
    link: "#",
  },
];

const OtherPackages = () => {
  return (
    <section className="py-8 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">
          Explore Other Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-68 w-full object-cover"
              />
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <button
                 onClick={() =>
          document
            .querySelector("form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
                  className="inline-block bg-[var(--accent-color)] hover:bg-[var(--primary-color)] hover:text-white  px-4 py-2 rounded text-sm font-medium text-center"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPackages;
