"use client";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const initialValues = {
  service_name: "",
  service_description: "",
  categories: [],
  charges: "",
};

export default function UpdateButton() {
  const [showModal, setShowModal] = useState(false);
  const handleUpdate = () => {
    setShowModal(12);
  };
  return (
    <>
      <button
        type="button"
        onClick={handleUpdate}
        className="border-2 border-solid border-gray-500 rounded-md text-gray-600 px-6 pb-2 pt-2.5 text-xs uppercase"
      >
        {showModal ? "Close" : "Update"}
      </button>

      {showModal && (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(JSON.stringify(values, null, 2));
            const response = await axios.post(API, {
              service_name: values.service_name,
              service_description: values.service_description,
              categories: values.categories,
              charges: values.charges,
            });
            console.log(response);
            if (response.status === 201) {
              alert("action completed");
              setShowModal(false);
            }
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div
                  className="fixed inset-0 bg-gray-500/75 transition-opacity"
                  aria-hidden="true"
                ></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              className="text-base font-semibold text-gray-900"
                              id="modal-title"
                            >
                              Update service
                            </h3>
                            <div className="mt-2">
                              <div className="mb-5">
                                <label
                                  htmlFor="service_name"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Service name
                                </label>
                                <input
                                  type="text"
                                  id="service_name"
                                  value={values.service_name}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="service_description"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Service description
                                </label>
                                <input
                                  type="text"
                                  id="service_description"
                                  value={values.service_description}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="categories"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Select categories
                                </label>
                                <div className="flex items-center mb-4">
                                  <Field
                                    id="checkbox-1"
                                    type="checkbox"
                                    name="categories"
                                    value="catering"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-1"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Catering
                                  </label>
                                </div>
                                <div className="flex items-center mb-4">
                                  <Field
                                    id="checkbox-2"
                                    type="checkbox"
                                    name="categories"
                                    value="renting"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-2"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Renting
                                  </label>
                                </div>
                                <div className="flex items-center mb-4">
                                  <Field
                                    id="checkbox-3"
                                    type="checkbox"
                                    name="categories"
                                    value="bar"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-3"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Bar
                                  </label>
                                </div>
                                <div className="flex items-center mb-4">
                                  <Field
                                    id="checkbox-4"
                                    type="checkbox"
                                    name="categories"
                                    value="decorators"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-4"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Decorators
                                  </label>
                                </div>
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="charges"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Charges
                                </label>
                                <input
                                  type="text"
                                  id="charges"
                                  value={values.charges}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
