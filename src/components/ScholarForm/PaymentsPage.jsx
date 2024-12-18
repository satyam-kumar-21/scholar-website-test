import React, { useEffect } from 'react';
import logo from "../../assets/important/jsrlogo.png";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { submitScholarshipForm } from '../../redux/scholarActions';
// import { submitScholarshipForm } from '../features/scholarshipFormSlice'; // Import your redux action

const PaymentsPage = () => {
  const dispatch = useDispatch();

  const api = "https://scholarship-backend-orpin.vercel.app/api"

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
      const { data } = await axios.post(`${api}/order`, { amount });
      const { data: { keyId } } = await axios.get(`${api}/order/getkey`);

      console.log("Razorpay Key ID: ", keyId);
      const options = {
        key: keyId, // Razorpay Key ID
        amount: data.order.amount, // Amount in paise (INR smallest unit)
        currency: "INR",
        name: "JSR Group",
        description: "Scholarship Form Fee - JSR Group",
        image: logo,
        order_id: data.order.id, // Use the correct order ID from the backend
        callback_url: `${api}/order/paymentVerification`, // Server callback URL
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
        handler: function (response) {
          // Payment success callback
          console.log("Payment Success:", response);
          handlePaymentVerification(response);  // Call the verification function after payment success
        },
       
      };

      const razor = new window.Razorpay(options); // Make sure to use `window.Razorpay` here
      razor.open();
    } catch (error) {
      console.error("Error in checkout handler:", error);
    }
  };

  // Function to handle successful payment verification
  const handlePaymentVerification = async (paymentDetails) => {
    try {
      // Verify the payment on your server with the payment details
      const { data } = await axios.post(`${api}/order/paymentVerification`, paymentDetails);

      if (data.success) {
        console.log("Payment successful. Submitting the form.");

        // Dispatch the form submission after successful payment
        const formData = { /* Your form data here */ };
        dispatch(submitScholarshipForm(formData));  // Replace with the correct Redux action
      } else {
        console.error("Payment verification failed.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  return (
    <div className="h-[50vh] md:h-[80vh] flex items-center justify-center bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg border border-gray-200 p-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Complete Your Payment</h1>
          <p className="text-md sm:text-lg text-gray-600 mt-2">
            Please pay ₹999 to complete your scholarship test registration.
          </p>
        </div>

        {/* Payment Button */}
        <button
          onClick={() => chackoutHandler(999)}
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md mt-4"
        >
          Pay Now
        </button>

        {/* Information Section */}
        <p className="text-xs sm:text-sm text-center text-gray-500 mt-4">
          By proceeding with the payment, you agree to our{" "}
          <a href="/terms" className="text-indigo-600 hover:underline">
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PaymentsPage;
