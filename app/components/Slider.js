"use client";
import { useState } from "react";
import { Card } from "./Card";
import axios, { all } from "axios";

export default function Slider() {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    const API = "http://localhost:3000/api/services";
    const response = await axios.get(API, { params: {
        category: "all",
        cursor: 0,
        button: "next"
    } });
    setServices(response);
  };
//   getServices()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
      <Card />
      {JSON.stringify(services)}
    </div>
  );
}
