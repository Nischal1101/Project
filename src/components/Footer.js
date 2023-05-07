import React from "react";
import pedagogy from "../images/pedagogy.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            href="/"
          >
            <img
              className="w-10 h-10 text-white p-2  rounded-full"
              src={pedagogy}
              alt="loading"
            />

            <span className="ml-3 text-xl">pedagogy</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2023 pedagogy —
            <a
              href="https://www.facebook.com/PedagogyHomeTuition "
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pedagogy
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-400"
              href="https://www.facebook.com/PedagogyHomeTuition"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-5 text-gray-400"
              href="https://wa.me/+9779804025561"
            >
              <FaWhatsapp size={25} />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
