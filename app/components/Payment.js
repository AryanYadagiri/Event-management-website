"use client";
import Script from "next/script";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Payment({ service, business_info }) {
  const { data: session } = useSession();
  const createOrderId = async () => {
    try {
      const API = "http://localhost:3000/api/create-order";
      const response = await axios.post(API, {
        service_id: service,
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const data = response.data;
      return data.orderId;
    } catch (error) {
      console.error(
        "There was a problem with your fetch operation:",
        error.message
      );
    }
  };

  const processPayment = async () => {
    // e.preventDefault();
    try {
      const API = "http://localhost:3000/api/verify-order";
      const orderId = await createOrderId();
      const options = {
        key: process.env.NEXT_PUBLIC_RAYZORPAY_KEY_ID,
        // amount: parseFloat(amount) * 100,
        // currency: currency,
        // name: "name",
        // description: "description",
        order_id: orderId,
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            user_email: session.user.email,
            business_email: business_info.business_email,
          };

          const result = await axios.post(API, data);
          if (result.status === 200) {
            alert("payment succeed");
          } else {
            alert(result.message);
          }
        },
        prefill: {
          name: session?.user?.first_name,
          email: session?.user?.email,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {/* {JSON.stringify(session)} */}
      <button
        className="uppercase py-2 px-4 rounded-lg bg-blue-700 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
        onClick={processPayment}
      >
        Book Service
      </button>
    </>
  );
}
