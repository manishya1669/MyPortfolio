import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
   
    <div className={`w-full sticky top-0 z-50 font-serif   scroll-smooth  ${!nav && "sticky"}` } >
      <nav className="flex  w-full mx-auto justify-between bg-gray-600  scroll-smooth" >
        <div className=" flow-root p-4 w-full   text-whiteLike px-10">
         
          <div className="float-right hidden lg:block text-lg">
            <ul className="flex  px-6 ">
         
              <div className=" text-[white] pt-2">
                <a
                  href="#home"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300 hover:text-cyan-600"
                >Home
                </a>
                <a
                  href="#about"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300  hover:text-cyan-600"
                >About
                </a>
                 <a
                  href="#skill"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300  hover:text-cyan-600"
                >Skills
                </a>
                <a
                  href="#exper"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300  hover:text-cyan-600"
                >Experience
                </a>
                <a
                  href="#project"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300  hover:text-cyan-600"
                >Projects
                </a>
                 <a
                  href="#achieve"
                  className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300  hover:text-cyan-600"
                >Achievement
                </a>
                 
              </div>
             
            </ul>
          </div>
        </div>

        <div
          onClick={() => setNav((prev) => !prev)}
          className="p-3 lg:hidden top-0 right-0 z-10 fixed"
        >
          {!nav ? (
            <AiOutlineClose color="crimsonLike" size={30} />
          ) : (
            <AiOutlineMenu color="crimsonLike" size={30} />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[50%] h-screen border-r border-r-grey-900  bg-gray-500 ease-in-out duration-700"
              : "fixed left-[100%] ease-in-out h-screen duration-700"
          }
        >
          {/* <h1 className='  w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1> */}
          {/* <div className="flex items-center justify-center text-2xl flex-shrink-0 text-whiteLike mr-6 px-10">
            
          </div> */}
          <ul className="pt-24 uppercase ">
            <div
              className={`text-lg  lg:w-auto justify-between px-10 lg:block ${
                nav && "hidden"
              }`}
            >
              <a
                href="#home"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
                About 
              </a>
              <a
                href="#skill"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
                Skills
              </a>
              <a
                href="#contact-us"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
                Experience
              </a>
              <a
                href="#contact-us"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
                Projects
              </a>
              <a
                href="#contact-us"
                className="block mt-4 lg:inline-block lg:mt-0 text-ligthGreen hover:text-crimsonLike px-5 transition duration-300"
                onClick={() => setNav((prev) => !prev)}
              >
               Achievements
              </a>
              
            </div>
          </ul>
        </div>
      </nav>
    </div>
   
  );
};

export default Navbar;
