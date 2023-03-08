import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/dict.png";
import project2 from "../assets/tailwind.png";
import project3 from "../assets/panda.png";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Dictionary_Extension",
      github_link: "https://github.com/manishya1669/Dictionary_Extension",
      live_link: "Web - React/CSS",
      desc:"It is a dictionary extension which help to find the meaning  instantly while reading ."
    },
    
    {
      img: project2,
      name: "Three_in_one",
      github_link: "https://github.com/manishya1669/Three_in_one",
      live_link: "App - Flutter/dart",
      desc:"It's an application in which three games are present flappy bird, snake and chess."
    },
    {
      img: project3,
      name: "Codeie",
      github_link: "https://github.com/manishya1669/Codeie",
      live_link: "App - Flutter/dart",
      desc:" A  need for coding enthusiast where they can track down  upcoming contest on various platform."
    }

    
    
  ];
  return (
    <section id="project"   className="py-[1rem] text-white">
      <div className="text-center">
        <h3 className="text-4xl  text-white font-semibold">
          My <span className="text-cyan-600">Projects</span>
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
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 pr-6 items-center bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-full h-full bg-white pr-10" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex flex-col gap-3">
                    <p>
                      {project_info.desc}
                    </p>

                    <div className='flex flex-row gap-3 '>
                      <a
                      href={project_info.github_link}
                     
                      className="text-cyan-600 rounded-md bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                     
                      className="text-cyan-600 bg-gray-800 px-2  rounded-md py-1 inline-block"
                    >
                      {project_info.live_link}
                    </a>
                    </div>
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

export default Project;