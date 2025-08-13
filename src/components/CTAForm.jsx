import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { sendEnquery } from "../api/api";
import { useState } from "react";

const CTAForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email"),
    date: Yup.date().min(today, "Travel date cannot be in the past"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      await sendEnquery(values);
      setMessage("✅ Thanks! We'll contact you shortly.");
      resetForm();
      setIsLoading(false);
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <section
    id="inquiry"
    className="bg-gradient-to-b from-white to-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--primary-color,#1e3a8a)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Quick Enquiry
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-md p-5 space-y-4"
        >
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              date: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color,#facc15)]"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Mobile */}
              <div>
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color,#facc15)]"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Optional Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="date"
                    name="date"
                    min={today}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                disabled={isLoading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-[var(--primary-color,#1e3a8a)] hover:bg-[var(--accent-color,#facc15)] text-white font-semibold px-4 py-2 rounded-md text-sm transition"
              >
                {isLoading ? "Submitting..." : "Submit Enquiry"}
              </motion.button>

              {message && (
                <div className="text-green-600 text-xs text-center mt-1">
                  {message}
                </div>
              )}
            </Form>
          </Formik>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAForm;
