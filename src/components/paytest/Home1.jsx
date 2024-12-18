import axios from "axios";

import React, { useEffect } from "react";
import Card from "./Card";
import logo from "../../assets/important/jsrlogo.png"

const Home1 = () => {

    // Load Razorpay script dynamically
    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        console.log("Razorpay script loaded successfully");
      };
      script.onerror = (error) => {
        console.error("Error loading Razorpay script:", error);
      };
      document.body.appendChild(script);
    }, []);

    
  const chackoutHandler = async (amount) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/order", { amount });
      const { data: { keyId } } = await axios.get("http://localhost:5000/api/getkey");
  
      console.log("Razorpay Key ID: ", keyId);
      const options = {
        key: keyId, // Razorpay Key ID
        amount: data.order.amount, // Amount in paise (INR smallest unit)
        currency: "INR",
        name: "JSR Group",
        description: "Scholarship Form Fee - JSR Group",
        image: logo,
        order_id: data.order.id, // Use the correct order ID from the backend
        callback_url: "http://localhost:5000/api/paymentVerification", // Server callback URL
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#45D347",
        },
      };
  
      const razor = new window.Razorpay(options); // Make sure to use `window.Razorpay` here
      razor.open();
    } catch (error) {
      console.error("Error in checkout handler:", error);
    }
  };
  

  return (
    <>
      <h2 className="text-center text-5xl font-bold mb-10">Product List</h2>
      <div className="flex justify-center items-center">
        <Card
          chackoutHandler={chackoutHandler}
          amount={5000}
          image="https://th.bing.com/th/id/OIP.yaxfsfMeCPqMQx-s2FHGRQHaFf?pid=ImgDet&rs=1"
        />
        <Card
          chackoutHandler={chackoutHandler}
          amount={6000}
          image="https://th.bing.com/th/id/OIP.wIX0BanzjbbmuUgLy6VJ6QHaHa?pid=ImgDet&rs=1"
        />
      </div>
    </>
  );
};

export default Home1;