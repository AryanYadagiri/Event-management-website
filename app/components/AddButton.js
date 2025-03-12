"use client";

import { useState } from "react";

export default function AddButton() {
  const [showModal, setShowModal] = useState(false);
  const handleAdd = () => {
    setShowModal(12);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        <button className="relative" onClick={handleAdd}>
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-7 py-1 text-base font-bold text-black uppercase transition duration-100 hover:brightness-50 hover:text-gray-900">
            {showModal ? "Close" : "ADD"}
          </span>
        </button>
      </div>
      {showModal && (
        <form class="max-w-sm mx-auto">
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
                          Add service
                        </h3>
                        <div className="mt-2">
                          <div class="mb-5">
                            <label
                              htmlFor="service_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Service name
                            </label>
                            <input
                              type="text"
                              id="service_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div class="mb-5">
                            <label
                              htmlFor="service_description"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Service description
                            </label>
                            <input
                              type="text"
                              id="service_description"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div class="mb-5">
                            <label
                              htmlFor="countries"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Select categories
                            </label>
                            <div class="flex items-center mb-4">
                              <input
                                id="checkbox-1"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="checkbox-1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Catering
                              </label>
                            </div>
                            <div class="flex items-center mb-4">
                              <input
                                id="checkbox-2"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="checkbox-2"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Renting
                              </label>
                            </div>
                            <div class="flex items-center mb-4">
                              <input
                                id="checkbox-3"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="checkbox-3"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Bar
                              </label>
                            </div>
                            <div class="flex items-center mb-4">
                              <input
                                id="checkbox-4"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="checkbox-4"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Decorators
                              </label>
                            </div>
                          </div>
                          <div class="mb-5">
                            <label
                              htmlFor="charges"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Charges
                            </label>
                            <input
                              type="text"
                              id="charges"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Add
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
        </form>
      )}
    </>
  );
}
