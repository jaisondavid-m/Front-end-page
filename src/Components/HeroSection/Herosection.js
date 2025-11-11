import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

function Herosection() {
  return (
    <div className='motion-preset-rebound-down motion-delay-[900ms] text-white flex flex-col  justify-between mt-8 md:mt-16 lg:mt-32 '>
      <div className='pt-6 lg:pt-0 md:pt-0 px-6 flex flex-col gap-y-5'>
        <h1 className='lg:text-6xl/10 text-3xl md:text-4xl  tracking-tight font-bold'>Born to Create™</h1>
        <p className='text-base lg:text-2xl'>Brand. Design. Development.</p>
      </div>
      <div className='lg:flex justify-between items-end mt-5 lg:mt-10 lg:ps-8'>
        <div className='lg:w-[25%] p-2 text-center pt-10 md:text-2xl md:w-[80%]  lg:mx-0 mx-auto lg:pt-0 md:text-left lg:text-left tracking-tight text-current/0 pb-1'>
          As a multi-award-winning studio,FUTURE THREE® creates award winning websites and sets international standards.
        </div>
        <div className='lg:mx-10 md:mt-14 mt-10 p-3 lg:p-0 lg:w-[50%] flex-wrap gap-x-5 gap-y-1 lg:gap-y-0 w-full flex lg:gap-x-10 justify-center items-center  bg-gray-950 '>
          <p className='flex items-center gap-2 text-sm tracking-[0.2em] font-semibold uppercase text-gray-200'>■ Our latest work</p>
          <p className='text-sm lg:text-2xl font-bold'><span className='lg:hidden'>■ </span>More Nutrition</p>
          <p><span className='lg:hidden'>■ </span>Design, Development</p><span className='lg:hidden'><br/></span>
          <button className='flex items-center m-1 justify-center p-1 tracking-wide border-2 border-gray-900 motion-translate-x-in-[13%]'><span style={{"font-family": "Helvetica Neue"}}>VIEW</span><span><CiLocationArrow1 /></span></button>
        </div>
      </div>
    </div>
      )
}

export default Herosection
