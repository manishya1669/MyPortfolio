
import React from "react";
import aboutImg from "../assets/ProfilePhoto.jpeg";

const About = () => {
  const info = [
    { text: "Semester", count: "05" },
    { text: "Intership", count: "01" },
    { text: "Inhouse-Intership", count: "04" },
  ];
  return (
    <section id="about" className="pt-[5rem]  text-white text-2xl                    font-serif">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10  max-w-6xl mx-auto ">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
               I am a 3rd year CSE student from Thakur college of Engineering  , who is aspiring to become a skilled 
               engineer . I like working in team and always ready to try new tech.
              </p>
              <div className="flex mt-10 pl-7 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl  text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              {/* <a href={resume} download>
                <button className="btn-primary bg-cyan-600 text-white rounded-md p-2">Download Resume  

📄</button>
              </a> */}
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;










// import React from "react";
// import { FaChevronDown } from 'react-icons/fa';
// import ScrollIntoView from 'react-scroll-into-view'
// function About(props) {
//   return (
//     <div className="max-w-4xl mt-20 mx-auto">
//       <p className=" text-4xl text-[black] md:text-4xl font-bold text-center">
//         Hello 👋
//       </p>
//       <p className=" text-base  md:text-4xl font-bold text-center text-cyan-600 leading-relaxed mt-4">
//         Hi My Naie is mangal pangle, I am a React Developer and like
//         contributing opne source project{" "}
//       </p>
//       <ScrollIntoView selector="#tech">
//         <div className="mx-auto p-20 sm:p-10">
//           <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-600" />
//         </div>
//       </ScrollIntoView>
//     </div>
//   );
// }

// export default About;
