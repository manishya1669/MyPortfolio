import React from 'react'
import Profile from "../assets/github.png";
import { FaGithub ,FaTwitter,FaEnvelope} from "react-icons/fa";
import{ BsLinkedin} from "react-icons/bs";


function Footer(props) {
  return (
    <div className='py-5 m-5 border-t-3/2 '> 
       <div className='flex justify-center mt-4'>
           <a
          className=" text-xl m-1 p-1 hover:bg-[#108d723a] rounded-full hover:bg-grey"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className=" text-xl m-1 p-1   hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaTwitter color="#57ABEF" />
          <span class="sr-only">Github</span>
        </a>
         <a
          className=" text-xl m-1 p-1  hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <FaEnvelope  color="teal" size={20}/>
          <span className="sr-only">Github</span>
        </a>
        <a
          className=" text-xl m-1 p-1 hover:bg-[#108d723a] rounded-full hover:text-white"
          href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm/74365380#74365380"
        >
          <BsLinkedin  color="#3B9CEB"/>
          <span className="sr-only">Github</span>
        </a>
       </div>
        <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by<a className="text-blue-500 hover:underline" href="mailto:me.manishya1669@gmail.com"> Manish Yadav</a>
              </p>
              </div>
    </div>
  )
}


export default Footer;
