"use client";
import { VendorValidation } from "@/schemas";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import axios from "axios";

const initialValues = {
  first_name: "",
  last_name: "",
  password: "",
  confirm_password: "",
  phone_number: "",
  email: "",
  GST_number: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export default function Page() {
  const router = useRouter();
  const API = "http://localhost:3000/api/vendor-signup";
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      const response = await axios.post(API, {
        first_name: values.first_name,
        last_name: values.last_name,
        password: values.password,
        business_number: values.phone_number,
        business_email: values.email,
        GST_number: values.GST_number,
        business_address: values.address,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
      });
      console.log(response);
      if (response.status === 201) {
        router.push("/login");
      }
    },
    validationSchema: VendorValidation,
  });

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Registration Form</p>
                  <p>Please fill out all the fields.</p>
                  <p className="mt-10 text-sm font-light text-black-600 dark:text-black-400">
                    Already a vendor ?{" "}
                    <a
                      href="/login"
                      className="font-bold text-black-600 hover:underline dark:text-black-500"
                    >
                      Login here
                    </a>
                  </p>
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
                      {errors.first_name && touched.first_name ? (
                        <p className="text-red-700">{errors.first_name}</p>
                      ) : null}
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
                      {errors.last_name && touched.last_name ? (
                        <p className="text-red-700">{errors.last_name}</p>
                      ) : null}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && touched.password ? (
                        <p className="text-red-700">{errors.password}</p>
                      ) : null}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="confirm_password">Confirm Password</label>
                      <input
                        type="text"
                        name="confirm_password"
                        id="confirm_password"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={values.confirm_password}
                        onChange={handleChange}
                      />
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="text-red-700">
                          {errors.confirm_password}
                        </p>
                      ) : null}
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="GST_number">GST Number</label>
                      <input
                        type="text"
                        name="GST_number"
                        id="GST_number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={values.GST_number}
                        onChange={handleChange}
                      />
                      {errors.GST_number && touched.GST_number ? (
                        <p className="text-red-700">{errors.GST_number}</p>
                      ) : null}
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
                      {errors.email && touched.email ? (
                        <p className="text-red-700">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={values.phone_number}
                        onChange={handleChange}
                      />
                      {errors.phone_number && touched.phone_number ? (
                        <p className="text-red-700">{errors.phone_number}</p>
                      ) : null}
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
                      {errors.address && touched.address ? (
                        <p className="text-red-700">{errors.address}</p>
                      ) : null}
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
                      {errors.city && touched.city ? (
                        <p className="text-red-700">{errors.city}</p>
                      ) : null}
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
                        {errors.state && touched.state ? (
                          <p className="text-red-700">{errors.state}</p>
                        ) : null}
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
                      {errors.pincode && touched.pincode ? (
                        <p className="text-red-700">{errors.pincode}</p>
                      ) : null}
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
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
  );
}
