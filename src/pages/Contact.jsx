import React from "react";
import bg from "../assets/bg-image.jpg";
import building from "../assets/building.png"
import envelope from "../assets/envelope.png"
import phone from "../assets/phone.png"

function Contact() {
  return (
    <div>
      <div className="relative h-96">
        <div className="relative w-full h-full">
          <img
            src={bg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/20" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h2 className="text-6xl lg:text-8xl text-white font-semibold tracking-wider">
            Contact
          </h2>
        </div>
      </div>

      <div className="lg:flex mt-24 lg:mx-24">
        <form action="/submit" className="px-4">
          <h2 className="text-5xl">Get in Touch</h2>
          <input
            type="text"
            className="my-5 p-2 w-full border  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500   border-gray-300 rounded-md"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="mb-5 p-2 w-full border  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500   border-gray-300 rounded-md"
            placeholder="Enter your Email"
          />
          <input
            type="number"
            className="mb-5 p-2 w-full border  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500   border-gray-300 rounded-md"
            placeholder="Enter your Number"
          />
          <input
            type="text"
            className="mb-5 pb-12 p-2 w-full border  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500   border-gray-300 rounded-md"
            placeholder="Your Message"
          />
        </form>

        <div className="px-12">
          <h2 className="text-5xl  tracking-wide">Our Address</h2>
          <div className="pt-4 flex">
            <img src={building} className="h-5 w-5" alt="" />
            <h2 className="pl-2 font-thin">2130 Fulton Street, San Diego, CA 94117-1080 USA</h2>
          </div>
          <div className="pt-4 flex">
            <img src={phone} className="h-5 w-5" alt="" />
            <h2 className="pl-2 font-thin"> 1-800-1234-567</h2>
          </div>
            <div className="pt-4 flex">
              <img src={envelope} className="h-5 w-5" alt="" />
              <h2 className="pl-2 font-thin">info@demolink.org</h2>
            </div>
          <div className="pt-4 w-full h-full lg:w-96 lg:h-96 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.36962899809!2d-74.00962162450176!3d40.70987883774628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17fed80351%3A0xf3596b913f0c9185!2sFulton%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1747409007346!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
