import React from "react";
import Profile from "../assets/ProfilePhoto.jpeg";
import { FaGithub ,FaTwitter,FaEnvelope} from "react-icons/fa";
import{ BsLinkedin} from "react-icons/bs";
import { FaChevronDown } from 'react-icons/fa';
 import ScrollIntoView from 'react-scroll-into-view'
function Card(props) {
  return (
    <div className="max-w-full   w-[80%] m-5 pt-10 mx-auto  bg-gray-600     ">
      <div className="flex flex-col justify-center w-[60%] md:w-[45%] max-w-lg mx-auto bg-[white] shadow-xl rounded-lg p-2 transform transition duration-500 hover:scale-110 sm:max-w-2xl ">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={Profile}
            alt="myface"
          />
        </div>
        <div className="text-center  items-center mt-5 ">
          <p className="text-xl font-bold text-cyan-600 sm:text-2xl"> Manish Yadav</p>
          <p className="text-xs  sm:text-base text-[#868283] pt-2 pb-4 w-auto font-bold inline-block border-b-2  ">
            
            Flutter/React Developer
          </p>
        </div>
        <div className="flex  align-center justify-center mt-4 sm:max-w-full ">
        <a
          className=" text-xl m-1  hover:bg-[#108d723a] rounded-full hover:bg-grey md:px-2" 
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className=" text-xl m-1  md:px-2 hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaTwitter color="#57ABEF" />
          <span class="sr-only">Github</span>
        </a>
         <a
          className=" text-xl m-1  md:px-2 hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaEnvelope  color="teal" size={20}/>
          <span className="sr-only">Github</span>
        </a>
        <a
          className=" text-xl m-1 md:px-2 hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <BsLinkedin  color="#3798E8"/>
          <span className="sr-only">Github</span>
        </a>
       
        </div>
       
      </div>
       <ScrollIntoView selector="#about">
         <div className="mx-auto m-6   sm:p-10">
           <FaChevronDown className="animate-bounce mx-auto p--0 text-3xl text-cyan-600" />         </div>
       </ScrollIntoView>
    </div>
  );
}

export default Card;
