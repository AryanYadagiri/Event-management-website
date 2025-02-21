"use client";
import { useFormik, Formik, Form } from "formik";
const initialValues = {
  first_name: "",
  last_name: "",
  password: "",
  confirm_password: "",
  phone_number: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

// function onSubmit(values) {
//   alert(JSON.stringify(values, null, 2));
// }
export default function Page() {
  //   const { values, handleSubmit, handleChange, handleBlur } = useFormik({
  //     initialValues: initialValues,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, errors, handleSubmit, handleChange }) => (
        <form className="text-black" onSubmit={handleSubmit}>
          <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Registration Form</p>
                      <p>Please fill out all the fields.</p>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                          <label htmlFor="first_name">First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.first_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="last_name">Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.last_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.confirm_password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="confirm_password">Confirm Password</label>
                          <input
                            type="text"
                            name="Password"
                            id="Password"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="email@domain.com"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="">Phone Number</label>
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label htmlFor="address">Address / Street</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.address}
                            onChange={handleChange}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={values.city}
                            onChange={handleChange}
                            placeholder=""
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="state">State</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              name="state"
                              id="state"
                              placeholder="State"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              value={values.state}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="pincode">Pincode</label>
                          <input
                            type="text"
                            name="pincode"
                            id="pincode"
                            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            value={values.pincode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
