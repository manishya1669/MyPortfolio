import React from 'react'
import {SiFlutter, SiStrapi, SiJavascript,SiTailwindcss,SiCplusplus, SiC} from 'react-icons/si';
import {FaReact,FaCss3Alt} from 'react-icons/fa';

function Skills(props) {
  return (
    <div className='max-w-7xl mx-auto  py-[6rem]' id='skill'>
        <p className='text-2xl text-cyan-600 text-center sm:text-4xl font-bold'>Technologies</p>
        <p className="text-gray-400 mt-3 text-lg text-center">Tool and Tech</p>

        <div className='flex m-5 flex-wrap justify-center pt-2'>
            <div className='flex flex-col  p-2 m-3 md:w-[15%] md:h-[20%]    overflow-hidden bg-white shadow-2xl rounded-xl  transform transition duration-500 hover:scale-110'>
              <SiC color='#57ABEF' className='mx-auto text-xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
             <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52   transform transition duration-500 hover:scale-110'>
              <SiCplusplus color='#0B6CBB' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
             <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiJavascript color='#DBCB1B' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
             <div className='flex flex-col md:w-[15%] md:h-[20%] p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiFlutter color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
             <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <FaReact color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
             <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiTailwindcss color='#00c0a3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div> <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <FaCss3Alt color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Flutter</p>
            </div>
            <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiStrapi color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Strapi</p>
            </div>
            <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiStrapi color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Strapi</p>
            </div>
            <div className='flex flex-col md:w-[15%] md:h-[20%]  p-2 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52  transform transition duration-500 hover:scale-110'>
              <SiStrapi color='#2196f3' className='mx-auto text-2xl sm:text-4xl'/>
              <p className='mt-6 text-xl sm:text-2xl text-semibold text-center'>Strapi</p>
            </div>
        </div>
    </div>

  )
}


export default Skills;
