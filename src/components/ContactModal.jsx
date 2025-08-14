  import React from "react";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import { sendOtherCostomizePackege } from "../api/api";
  import toast from "react-hot-toast";

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers are allowed")
      .max(10, "Number should not exceed 10 digits")
      .required("Mobile number is required"),
    people: Yup.number()
      .typeError("Must be a number")
      .positive("Must be greater than zero"),
    message: Yup.string(),
  });

  const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
            Customised Plan
          </h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              date: "",
              people: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendOtherCostomizePackege(values);
              toast.success("Send Query Successfully.");
              resetForm();
              onClose();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    type="date"
                    name="date"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    type="number"
                    name="people"
                    placeholder="Number of People *"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="people"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message (Optional)"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800"
                >
                  Submit Enquiry
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  export default ContactModal;
