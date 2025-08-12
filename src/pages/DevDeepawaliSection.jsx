// DevDeepawaliSection.jsx
// React + Tailwind component for a "Dev Deepawali — Varanasi" content section.
// - Default export component
// - Uses Tailwind classes
// - Short CTA form (Name + Mobile mandatory)
// - Gallery grid + Trust logos + CTA buttons
// - Props: images (array of {src, alt}), onEnquire (fn)

import React, { useState } from "react";

export default function DevDeepawaliSection({ images = [], onEnquire = () => {} }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", travelDate: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function validate() {
    if (!form.name.trim()) return "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) return "Please enter a valid 10-digit mobile number";
    return "";
  }

  function handleSubmit(e) {
    e && e.preventDefault();
    const err = validate();
    setError(err);
    if (err) return;

    // Keep payload small (only compulsory fields in most places)
    const payload = { name: form.name.trim(), mobile: form.mobile.trim(), email: form.email.trim(), travelDate: form.travelDate };
    // call parent handler (could post to API)
    try {
      onEnquire(payload);
      setSent(true);
    } catch (err) {
      setError("Server error. Please try again.");
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* HERO */}
      <div className="bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg p-8 md:flex md:items-center md:gap-8">
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Dev Deepawali — Varanasi</h2>
          <p className="mt-3 text-sm md:text-base text-gray-700">
            Dev Deepawali, yaani "Diwali of the Gods", Varanasi ke ghato par manaya jaata hai. Har saal Kartik Purnima ki raat ghats par hazaron diyas jalakar
            ek adbhut roshni ka drishya banta hai — boat rides, Ganga aarti aur dharmik karyakram iska mukhya akarshan hai.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Best ghats to visit: Dashashwamedh Ghat, Assi Ghat, Rajendra Prasad Ghat.</li>
            <li>Perfect for: Spiritual travelers, photographers, cultural tourists.</li>
            <li className="text-xs text-gray-500">(Tip: book boat rides in advance on busy dates.)</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg shadow-sm bg-yellow-500 text-white font-medium">Get Quote</button>
            <button className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-600 font-medium">Learn More</button>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700">Gallery</button>
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white" onClick={() => document.getElementById('customizePackage')?.scrollIntoView({behavior:'smooth'})}>Customize Package</button>
          </div>

          <p className="mt-4 text-xs text-gray-500">Next major observed date: <strong>5 November 2025</strong></p>
        </div>

        {/* SHORT CTA FORM */}
        <div className="mt-6 md:mt-0 md:w-80 bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Quick Enquiry</h3>
          {sent ? (
            <div className="mt-3 text-sm text-green-700">Thank you — we'll contact you soon!</div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-3 space-y-3">
              <div>
                <label className="block text-xs text-gray-600">Name *</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 p-2 border rounded-md text-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-gray-600">Mobile *</label>
                <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="w-full mt-1 p-2 border rounded-md text-sm" placeholder="10-digit mobile" />
              </div>
              <div>
                <label className="block text-xs text-gray-600">Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 p-2 border rounded-md text-sm" placeholder="Optional" />
              </div>
              <div>
                <label className="block text-xs text-gray-600">Travel date</label>
                <input value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} type="date" className="w-full mt-1 p-2 border rounded-md text-sm" />
              </div>

              {error && <div className="text-xs text-red-600">{error}</div>}

              <div className="flex gap-2">
                <button type="submit" className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-md">Enquire</button>
                <button type="button" onClick={() => { setForm({ name: "", mobile: "", email: "", travelDate: ""}); setError(""); }} className="px-3 py-2 border rounded-md">Reset</button>
              </div>
            </form>
          )}

          <div className="mt-3 text-xs text-gray-500">Compulsory fields: Name & Mobile only.</div>
        </div>
      </div>

      {/* GALLERY */}
      <div id="gallery" className="mt-10">
        <h3 className="text-xl font-semibold">Gallery — Moments from Dev Deepawali</h3>
        <p className="text-sm text-gray-600 mt-2">Showcase: Diyas on ghats, close-ups of aarti, boats on the Ganga at night, crowds & cultural programmes.</p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images && images.length > 0 ? (
            images.slice(0, 8).map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-sm bg-gray-50">
                <img src={img.src} alt={img.alt || `Dev Deepawali image ${idx+1}`} className="w-full h-44 object-cover" />
              </div>
            ))
          ) : (
            // placeholders
            new Array(4).fill(0).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center h-44 text-xs text-gray-500">Add high-res Dev Deepawali image</div>
            ))
          )}
        </div>

        <div className="mt-4 text-sm text-gray-500">Tip: Use 1200×800 (or wider) images for gallery thumbnails; keep original hi-res for lightbox.</div>
      </div>

      {/* TRUST LOGOS + TESTIMONIAL PLACEHOLDER */}
      <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-28 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs">UP Tourism Logo</div>
          <div className="w-28 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs">ADTOI Logo</div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md md:flex-1">
          <h4 className="font-semibold">What visitors say</h4>
          <p className="mt-2 text-sm text-gray-600">(Integrate Google My Business reviews here for live testimonials — show 3 latest reviews in a carousel.)</p>
        </div>
      </div>

      {/* CUSTOMIZE PACKAGE CTA SECTION */}
      <div id="customizePackage" className="mt-10 p-6 bg-indigo-50 rounded-2xl shadow-inner">
        <h3 className="text-xl font-semibold">Customize Your Dev Deepawali Package</h3>
        <p className="mt-2 text-sm text-gray-600">Choose boat rides, guided aarti, hotel category, and local experiences. We'll send a tailored quote.</p>
        <div className="mt-4">
          <button className="px-4 py-2 rounded-lg bg-indigo-700 text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Start Customizing</button>
        </div>
      </div>

      {/* FLOATING CUSTOMIZE BUTTON */}
      <button onClick={() => document.getElementById('customizePackage')?.scrollIntoView({behavior:'smooth'})} className="fixed right-4 bottom-6 md:right-8 md:bottom-8 bg-pink-600 text-white px-4 py-3 rounded-full shadow-xl">Customize Package</button>

      {/* DEVELOPER NOTES (visible as comments) */}
      {/*
        SEO suggestions (meta tags):
        title: Dev Deepawali Varanasi 2025 | Boat Rides, Aarti & Tour Packages
        description: Experience Dev Deepawali in Varanasi — millions of diyas, boat rides on the Ganges, and soulful aartis. Book a guided trip for Nov 5, 2025.

        Image prompts (for image generation / sourcing):
        - "Dashashwamedh Ghat at night filled with hundreds of earthen diyas, boats on the Ganges, long-exposure lights, wide-angle, high resolution"
        - "Close-up of brass lamps during Ganga aarti at Dev Deepawali, warm glow, devotional atmosphere, high detail"
        - "Aerial view of Varanasi ghats lit with thousands of diyas during Dev Deepawali, night, dramatic contrast"

        Integration tips:
        - GMB Reviews: Use Google Places API (place_id for business) or embed a curated widget. Cache reviews server-side and show 3 latest.
        - Image gallery: Use lazy-loading and a lightbox (e.g., GLightbox or simple modal) for hi-res previews.
        - Booking / Enquiry: POST the minimal payload to a secure endpoint (name, mobile, optional email & travel date). Send SMS/WhatsApp confirmation via a provider (e.g., Twilio, Fast2SMS).

        Accessibility:
        - Add meaningful alt text to gallery images.
        - Ensure contrast for CTA buttons.

      */}
    </section>
  );
}
