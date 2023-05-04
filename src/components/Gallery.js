import React from "react";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
const Gallery = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              OUR GALLERY
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are some glimpses of students as well as our teachers.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={three}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={five}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={two}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={four}
                  alt="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
