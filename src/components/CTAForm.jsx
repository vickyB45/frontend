import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { sendEnquery } from "../api/api";
import { useState } from "react";

const CTAForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").optional(),
    date: Yup.date()
      .min(today, "Travel date cannot be in the past")
      .required("Date is required"),
    persons: Yup.number()
      .min(1, "At least 1 person required")
      .required("Number of persons is required"),
    purpose: Yup.string().required("Please describe your tour requirement"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await sendEnquery(values);
      setMessage("Thanks for submitting the form! Our team will contact you shortly.");
      resetForm();
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--primary-color)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Enquire Now
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              date: "",
              persons: 1,
              purpose: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              {[ 
                { label: "Name", name: "name", type: "text" },
                { label: "Mobile Number", name: "phone", type: "tel" },
                { label: "Email ", name: "email", type: "email" },
                { label: "Travel Date ", name: "date", type: "date", min: today },
                { label: "Total Persons", name: "persons", type: "number", min: 1 },
              ].map(({ label, name, type, min }, index) => (
                <div key={index}>
                  <label className="block mb-1 font-medium text-gray-700">
                    {label}{type !== "email" && type !== "date" && " *"}
                  </label>
                  <Field
                    type={type}
                    name={name}
                    min={min}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all"
                  />
                  <ErrorMessage
                    name={name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              ))}

              {/* Purpose Textarea */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Purpose of Enquiry *
                </label>
                <Field
                  as="textarea"
                  name="purpose"
                  rows="4"
                  placeholder="e.g. I want to book for Dev Deepawali with family"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all"
                />
                <ErrorMessage
                  name="purpose"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="bg-[var(--primary-color)] hover:bg-[var(--accent-color)] text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto transition-all duration-200"
                >
                  Submit Enquiry
                </motion.button>
              </div>

              {/* ✅ Manual message display */}
              {message && (
                <div className="text-green-600 text-sm mt-2 text-center">
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
