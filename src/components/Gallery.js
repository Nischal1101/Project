import React from "react";
// import images from images folder
//to add another image copy div and change image name
import one from "../images/gallery/1-min.jpg";
import two from "../images/gallery/2-min.jpg";
import nine from "../images/gallery/9-min.jpg";
import five from "../images/gallery/five-min.jpg";
import one2 from "../images/gallery/one-min.jpg";
import two2 from "../images/gallery/two-min.jpg";
import threeRe from "../images/gallery/threeRe-min.jpg";
import baccha from "../images/gallery/baccha-min.jpg";
import Footer from "../components/Footer";
const Gallery = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-[9rem] mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              OUR GALLERY
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are some glimpses of students as well as our teachers.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={one}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={two}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={nine}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={two2}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={five}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={one2}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={threeRe}
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 mx-auto pb-4 md:p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-[20rem] rounded w-full object-cover object-center mb-6"
                  src={baccha} //here baccha is name of image that we imported.
                  alt="content"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <iframe
            className="w-3/4 mx-auto md:1/2 "
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rlzUJYy2Fv4"
            title="Pedagogy youtube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
