import React from "react";
import CTAForm from "../components/CTAForm";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactPage = () => {
  const position = [25.3686, 83.0402]; // approx lat/lng
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}

      {/* Info Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            We value your time and are committed to providing the best travel
            experience. Whether you need more information about our tours,
            special packages, or custom trip planning, our team is ready to
            assist you.
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
      <section className="mt-8 relative">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "400px", width: "100%", zIndex: 1 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Basant Vihar Colony, Akatha, Paharia, <br /> Varanasi, Uttar
              Pradesh 221002
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default ContactPage;
