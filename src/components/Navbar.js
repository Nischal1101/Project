import React from "react";
import { Link } from "react-router-dom";
import pedagogy from "../images/pedagogy.png";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link className="mr-5 hover:text-white" to="/home">
              HOME
            </Link>

            <Link className="mr-5 hover:text-white" to="/gallery">
              GALLERY
            </Link>
            <Link className="mr-5 hover:text-white" to="/contact">
              CONTACT US
            </Link>
          
          </nav>
          <a
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
            href="/"
          >
            <img
              className="w-10 h-10 text-white p-2  rounded-full"
              src={pedagogy}
              alt="loading"
            />
            <span className="ml-3 text-xl xl:block lg:hidden">PEDAGOGY</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
