"use client";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import axios, { all } from "axios";

export default function Slider() {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    const API = "http://localhost:3000/api/services";
    const response = await axios.get(API, { params: {
        category: "renting",
        cursor: 1,
        button: "next"
    } });
    setServices(response?.data?.items);
  };
  useEffect(()=>{
    getServices();
  },[])
//   getServices()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 py-10 justify-items-center">
      {/* <Card /> */}
      {/* <button onClick={getServices}>hii</button> */}
      {JSON.stringify(services)}
    </div>
  );
}
