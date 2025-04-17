"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Formik } from "formik";
import { ContactUsValidation } from "@/schemas";
import axios from "axios";

const initialValues = {
  subject: "",
  email: "",
  message: "",
};

export default function Page() {
  const API = "http://localhost:3000/api/contact-us";
  return (
    <>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={ContactUsValidation}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values, null, 2));
          const response = await axios.post(API, {
            subject: values.subject,
            email: values.email,
            message: values.message,
          });
          // console.log('response',response?.data?.message);
          if (response.status === 200) {
            alert("Email sent successfully");
          }
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <div className="p-8 mt-8 max-w-lg mx-auto">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">
              Contact Form
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    value={values.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && touched.subject ? (
                    <p className="text-red-700">{errors.subject}</p>
                  ) : null}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-700">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="text-red-700">{errors.message}</p>
                  ) : null}
                </div>
              </div>
              <div className="p-2 w-full">
                <div>
                  <button
                    type="submit"
                    className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
      <Footer />
    </>
  );
}
