import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/Leetcode.png";
import project2 from "../assets/Stackof.png";
import project3 from "../assets/Codechef.png";
import project4 from "../assets/Codewar.png";
import project5 from "../assets/gfglogo.png";
import project_person from "../assets/tailwind.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Codingexp = () => {
  const projects = [
    {
      img: project1,
      name: "LeetCode",
      link: "https://leetcode.com/manishya1669/",
      live_link: "",
    },
    {
      img: project2,
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/17553781/manishyadav",
      live_link: "",
    },
    {
      img: project3,
      name: "CodeChef",
      link: "https://www.codechef.com/users/manishya1669",
      live_link: "",
    },
    {
      img: project4,
      name: "CodeWar",
      link:"https://www.codewars.com/users/manishya1669 ",
       
      live_link: "",
    },
    {
      img: project5,
      name: "GFG",
      link: "https://auth.geeksforgeeks.org/user/manishya1669/",
      live_link: "",
    },
  ];
  return (
    <section id="exper" className="py-[5rem] text-white">
      <div className="text-center">
        <h3 className="text-4xl   text-white font-semibold">
          Coding <span className="text-cyan-600">Experience</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-8xl gap-6 p-14 px-5 mx-auto justify-center relative">
        <div className="lg:w-3/5 w-full  ">
          <Swiper
            slidesPerview={3.0}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i} >
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg bg-white" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="  flex gap-3 m-4 justify-center">
                    <a
                      href={project_info.link}
                    //   target="_blank"
                      className="text-cyan-600  bg-gray-800  rounded-md w-[50%] px-2 py-1 inline-block  text-center"
                    > 
                    Let's GO
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Codingexp;