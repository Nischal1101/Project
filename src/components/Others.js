import React from "react";
import student from "../images/student.jpg";
import parent from "../images/parent.jpg";
import teacher from "../images/teacher.jpg";
const Others = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={parent}
                />
                <p className="leading-relaxed">
                  I'm so grateful that I found this tuition center for my child!
                  The monthly tests and competitions have not only boosted my
                  child's academic progress, but also their confidence and
                  speaking ability. The environment is friendly and cooperative,
                  and the experienced tutors are truly dedicated to their
                  students. I highly recommend this center to any parent looking
                  for quality education for their child.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  SHIV NARAYAN YADAV
                </h2>
                <p className="text-gray-500">
                  Parent, Founder of Greenland College BRT
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={student}
                />
                <p className="leading-relaxed">
                  So yesss...I luckily got the opportunity to learn from
                  Pedagogy tutions....🙏I got an awesome teacher n a guider who
                  guided me as an elder brother ...he not only gave me bookish
                  knowledge but helped me know the outer world...I may be the
                  first one to say that I enjoyed to read tution bcoz I got to
                  learn something new everyday ..so I am grateful to Pedagogy
                  tuition for providing a tutor like him.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  RIDHIMA AGRAWAL
                </h2>
                <p className="text-gray-500">Student</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={teacher}
                />
                <p className="leading-relaxed">
                  I would like to share my experience as a tutor at Pedagogy
                  Tuitions. The trainings and webinars offered by Pedagogy
                  Tuitions have been extremely fruitful for me. It's great to
                  see that the management at Pedagogy Tuitions values the growth
                  of both students and tutors. I am grateful to be a part of
                  such an amazing team and look forward to continuing to
                  contribute to the development of our students.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  KABIR PANTA
                </h2>
                <p className="text-gray-500">Tutor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
