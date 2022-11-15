import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/tailwind.png";
import project2 from "../assets/tailwind.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Achievement = () => {
  const projects = [
    {
      img: project1,
      details: " ➢   Worked on  building a platform where a  producer can upload his upcoming , recent and ongoing movies, series.",
      github_link: "Intership",
      exper: "➢ Also got to learn how to work in teams  and also involved while deployment of the project",
      tech : "React/Css/Strapi"
    },
    {
      img: project2,
      details: "➢  Solved more than 600+ question on Leetcode",
      github_link: "Coding",
      exper: "➢ Overall more than 800+ question solved and 900+ reputation on Stackoverflow",
      tech : "C++"
    },
    
  ];
  return (
    <section id="achieve"   className="py-[7rem] text-white">
      <div className="text-center rounded-md">
        <h3 className="text-4xl  text-white font-semibold">
          My <span className="text-cyan-600">Achievement</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 p-4 px-5 mx-auto justify-center relative">
        <div className="lg:w-2/3 w-full p-2">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 6000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 pr-6 items-center bg-slate-700 rounded-xl">
                     <a
                      href=""
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 rounded-md inline-block"
                    >
                     {project_info.github_link}
                    </a>
                  {/* <img src={project_info.img} alt="" className="rounded-lg w-[50%] p-4 items-center bg-white pr-10" /> */}
                  <h3 className="text-2xl my-4 font-serif">{project_info.details}<br></br><br></br>{project_info.exper}</h3>
                  <div className="flex gap-3">
                   
                    <a
                      href=""
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                    >
                      {project_info.tech}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default Achievement;