import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/tailwind.png";
import project2 from "../assets/tailwind.png";
import project3 from "../assets/tailwind.png";
import project4 from "../assets/tailwind.png";
import project5 from "../assets/tailwind.png";
import project_person from "../assets/tailwind.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Blog WebApp",
      github_link: "",
      live_link: "",
      desc:"It is a blog webapp where you can write short blog and perform CRUD function."
    },
    {
      img: project2,
      name: "CodeAck",
      github_link: "",
      live_link: "",
      desc:" A coding platform for student to maintain their consistency through the month."
    },
    
    
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
                  <img src={project_info.img} alt="" className="rounded-lg w-full bg-white pr-10" />
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
                      Live Demo
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