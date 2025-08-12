import React from "react";
import CTAForm from "../components/CTAForm"; // तुमने जो form दिया है

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[var(--primary-color,#1e3a8a)] text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-90">
          Have questions or want to plan your trip with us? Fill out the quick enquiry form below, or reach us through the contact details provided.
        </p>
      </section>

      {/* Info Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            We value your time and are committed to providing the best travel experience. 
            Whether you need more information about our tours, special packages, or custom trip planning, our team is ready to assist you.
          </p>

          <div className="space-y-4 text-gray-700 text-sm">
            <p>
              <strong>📍 Address:</strong> Varanasi, Uttar Pradesh, India
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 9876543210
            </p>
            <p>
              <strong>✉ Email:</strong> info@yourwebsite.com
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <CTAForm />
        </div>
      </section>

      {/* Map */}
      <section className="mt-8">
  <iframe
    title="Our Location"
    src="https://www.google.com/maps?q=Varanasi%20Uttar%20Pradesh&z=15&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>
    </div>
  );
};

export default ContactPage;
