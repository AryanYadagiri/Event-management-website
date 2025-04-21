"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function Page() {
  const API = "http://localhost:3000/api/profile";
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
  });

  const fields = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    { label: "Email", name: "email" },
    { label: "Phone", name: "phone" },
    { label: "Address", name: "address" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "Pincode", name: "pincode" },
  ];

  const getUser = async () => {
    const response = await axios.get(API, {
      params: { user_id: session?.user?.id, user_type: session?.user?.user_type },
    });
    setUser(response.data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    const response = await axios.put(API, {
      user_type: session.user.user_type,
      id: session.user.id,
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
      password: form.password,
    });
    if (response.status === 200) {
      alert("Profile updated successfully");
      location.reload();
    }
  };

  return (
    <>
      <Navbar />
      {/* {JSON.stringify(user)} */}
      <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Profile
          </h2>

          {!isEditing ? (
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>First name:</strong> {user?.first_name}
              </p>
              <p>
                <strong>Last Name:</strong> {user?.last_name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Phone:</strong> {user?.phone_number}
              </p>
              <p>
                <strong>Address:</strong> {user?.address}
              </p>
              <p>
                <strong>City:</strong> {user?.city}
              </p>
              <p>
                <strong>State:</strong> {user?.state}
              </p>
              <p>
                <strong>Pincode:</strong> {user?.pincode}
              </p>
              <p className="text-red-700">
                <strong>User type:</strong> {user?.user_type}
              </p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Edit
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-gray-900 dark:text-gray-100"
            >
              {fields.map(({ label, name }) => (
                <div key={name}>
                  <label className="block mb-1">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={form[name] ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1">Reset password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
//hii