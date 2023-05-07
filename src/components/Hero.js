import React from "react";
import Typed from "react-typed";
import laptopmin from "../images/hero/laptop-min.jpg";
import threemin from "../images/hero/three-min.jpg";
import sevenmin from "../images/hero/seven-min.jpg";
import twomin from "../images/hero/two-min.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-[9rem] mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mx-auto text-center   ">
              <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-[#00df9a]">
                SPREADING KNOWLEDGE
              </h1>
              <div>
                <p className=" w-full leading-relaxed text-gray-500 text-2xl text-bold mt-10">
                  Welcome to Pedagogy Tuitions, where we provide experienced and
                  qualified tutors, personalized learning, regular feedback and
                  suggestion, monthly examinations, competitions, webinars and
                  training for both students and tutors. Join us to unlock your
                  child's full potential.
                </p>
                <p className=" w-full leading-relaxed text-3xl text-bold text-[#00df9a]">
                  Where you can find
                </p>
                <Typed
                  className="pl-2 text-2xl text-bold font-comforter"
                  strings={[
                    "Experienced tutors",
                    "Qualified tutors",
                    "Committed tutors",
                    "Personalized tutors",
                    "Supportive tutors",
                  ]}
                  typeSpeed={120}
                  backSpeed={200}
                  loop
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={threemin}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={laptopmin}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={sevenmin}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={twomin}
                  alt="content"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              href="/"
              type="submit"
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-6"
            >
              <Link className="mr-5 hover:text-white" to="/book ">
                BOOK A TUTOR
              </Link>

              {/* <a href="/book">Book a tutor</a> */}
            </button>
            <button
              type="submit"
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4"
            >
              <Link className="mr-5 hover:text-white" to="/apply">
                APPLY AS A TUTOR
              </Link>
              {/* <a href="/apply">Apply as a tutor</a> */}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
