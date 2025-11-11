import React,{ useEffect, useRef } from 'react'
import DigitalClock from '../Clock/DigitalClock'
import dreamimg from '../../assets/dream.webp'
import oldman from '../../assets/oldman.webp'
import shoe from '../../assets/shoe.webp'
import { MdArrowOutward } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import mobile from '../../assets/mobile.webp'
import laptop from '../../assets/laptop.webp'

function Main() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const els = containerRef.current.querySelectorAll('.fade-up')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  return (
    <div ref={containerRef} className="bg-gray-100 bg-cover bg-center p-5 lg:p-10 " >
      <div className='flex flex-col lg:flex-row  justify-between mb-10'>
        <div className="text-center"><DigitalClock/></div>
        <div className='text-xl lg:text-4xl tracking-tight lg:w-[50%] fade-up '><span className='text-red-700 font-bold'>FUTURE THREE®</span> is based in Wiesbaden and supported by an international network. It creates brands and digital experiences where flawless functionality meets editorial aesthetics.<br /><div className='text-black border-2 flex w-max lg:mx-0 mx-auto p-1 px-2 mt-5 font-bold text-sm gap-2 items-center'><span style={{ "font-family": "Helvetica Neue ; " }} >About Us</span><span><CiLocationArrow1 /></span></div>
        </div>

      </div><hr />
      <div className='flex flex-col md:flex-row lg:flex-row md:p-10 md:text-center lg:m-10 mt-10 lg:mt-20 lg:mx-20'>
        <div>
          <div className="relative group inline-block overflow-hidden rounded-xl ">
            <img src={dreamimg} alt="dream" className="lg:h-96 h-60 w-auto border-2 fade-up border-black rounded-xl transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"/>
            <img src={mobile} alt="mobile" className="absolute bottom-0 left-0 w-full h-full object-cover translate-y-full scale-75 opacity-0  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"/>
          </div>


          <div className='flex justify-between '>
            <p className='text-xl font-bold'>01</p>
            <div className='flex items-center '><p className='font-bold text-2xl lg:text-5xl'>TCG DREAM </p><MdArrowOutward /></div>
          </div>
        </div>

          <div className='flex flex-col lg:flex-row  w-full text-base font-bold gap-x-32  lg:px-10 p-5 '>
          <p>Address:</p>
          <div className='text-gray-700 lg:text-black'>
            <p>Future Three</p>
            <p>Äppelallee 27,</p>
            <p>65203 Wiesbaden</p>
          </div>
          <div className=' pt-10 lg:pt-0'>
            <pre><p>Phone <span className='text-gray-700'>+49 157 58518742</span></p></pre>
            <pre><p>Email <span className='text-gray-700 tracking-tight'>+hello@futurethree.studio</span></p></pre>
          </div>
        </div>
      </div>
      <div>
        <div className='lg:absolute lg:right-10'>
          <div className='flex justify-between md:justify-start md:gap-x-5 lg:px-4 py-2 pt-10 lg:pt-0 text-center lg:font-bold'>
            <p>■ Branding</p>
            <p>■ Design</p>
            <p>■ Development</p>
          </div>
          <div className="relative group inline-block overflow-hidden rounded-xl">
              <img src={oldman} alt="old man" className="lg:h-96 h-60 w-auto border-2 fade-up border-black rounded-xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-75"/>
              <img src={laptop} alt="laptop" className="absolute bottom-0 w-full h-full object-cover translate-y-full scale-75 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]  group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"/>
          </div>

          <div className='flex justify-between md:justify-start md:gap-x-48 '>
            <p className='text-xl font-bold'>02</p>
            <div className='flex items-center'><p className='font-bold text-2xl lg:text-5xl'>RODEWALD</p><MdArrowOutward /></div>
          </div>
        </div>
      </div>

     <div className='relative lg:w-max lg:ms-44 '>
          <div className='h-56 md:h-64 md:w-96 lg:h-72 mt-10  lg:mt-80 border-2 border-black rounded-xl overflow-hidden'>
            <img src={shoe} alt="shoe" className='w-screen lg:w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
          </div>
         
      <div className='flex justify-between md:justify-start lg:justify-between'>
            <p className='text-xl font-bold'>03</p>
            <div className='flex items-center md:ml-64'><p className='font-bold text-2xl lg:text-5xl '>EGEON</p><MdArrowOutward/></div>
      </div>
     </div><hr/>
    <div className="relative w-full h-[50vh] lg:h-screen flex flex-col justify-between bg-white mt-10 lg:mt-40 fade-up">
      <img
        className="absolute w-full h-96 lg:h-full object-cover opacity-60"
        src={`${process.env.PUBLIC_URL}/cloud.avif`}
        alt="cloud background"
      />
        <div className="absolute flex items-center justify-center w-full">
        <img className="lg:h-[1000px] h-[500px] pt-20" src={`${process.env.PUBLIC_URL}/boy.webp`} alt="hero"/>
        </div>
        <div><p className='aboslute flex items-center justify-between lg:w-[90%] mx-1 lg:mx-auto inset-0 text-xl font-bold lg:text-7xl z-50'><p>Dream.</p><p> Make.</p><p> Change™️</p></p></div>
        </div>
        <div className="relative lg:static top-44 flex lg:text-4xl  justify-between lg:p-5 font-bold text-gray-900 drop-shadow-md text-center ">
          <p>■ PROJECT</p>
          <p>■ LAUNCHED 2023</p>
        </div>
      
    </div>
  )
}
export default Main