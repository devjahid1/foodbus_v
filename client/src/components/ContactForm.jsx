import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactBanner from "./ContactBanner";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nc8l7tm", // replace with your service ID
        "template_2rbxgev", // replace with your template ID
        form.current,
        "smxWcsgIy9KGfbmuJ" // replace with your public key
      )
      .then(
        () => {
          toast.success(" Message sent successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + error.text, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <div className="mb-[40px]">
      <ContactBanner />
      <h2 className="text-2xl font-semibold mb-6 text-center mt-10">Contact Us</h2>

      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="p-6 bg-white mt-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                name="user_address"
                placeholder="Your Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-white hover:text-black border transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="ml-5 flex flex-col gap-5 mt-0 lg:mt-10">
          <div className="flex items-center gap-2 mb-2">
            <FaLocationDot className="text-black text-[20px]" />
            <h1 className="text-black">East Mirabazar Dadapir Mazar Road, Sylhet</h1>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-black text-[20px]" />
            <a href="tel:+8801714974833" target="_blank" className="text-black">
              +880-1714-974-833
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MdOutlineAccessTimeFilled className="text-black text-[20px]" />
            <h1 className="text-black">Always Open</h1>
          </div>
        </div>
      </div>

      {/* Toast container should be rendered once */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
