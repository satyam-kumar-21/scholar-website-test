import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could send to backend or show success message)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 h-full">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Section: University Contact Information */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white flex flex-col justify-center p-12">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-8">
            We're here to assist you. Reach out to us for any inquiries or
            information regarding our university.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-lg">University of Education, Education City, Country</p>
              <p className="text-lg">1234 University Road, Suite 567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-lg">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">contact@university.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  className="text-white hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out the form below, and we will get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
                rows="5"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
