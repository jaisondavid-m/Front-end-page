import React,{useState} from 'react'
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' flex justify-between p-5 lg:px-10 lg:py-6'>
      <div className='flex flex-col lg:gap-y-5 gap-y-3'>
        <img src="https://cdn.prod.website-files.com/68459d875477b104545f768c/6883fd37ab828e6d0395a4bb_6877fe6955a53e3cb0fdb317_4ba5f60b36c63c19844ab2a70f4762dd_logo-future-part.svg"
       alt="Logo" className='h-8 md:h-16 lg:h-32 motion-preset-rebound-down motion-delay-[650ms]'/>
       <img src="https://cdn.prod.website-files.com/68459d875477b104545f768c/6877fe75d7d5139c30ab99ed_8165e81d43205e802f88dfe1ea2622b9_logo-three-part.svg"
       alt="Logo" className='h-8 md:h-16 lg:h-32 motion-preset-rebound-down motion-delay-[400ms]'/>
      </div>
      <div className='hidden text-white lg:flex gap-8 justify-center font-bold text-2xl'>
        <p className='cursor-pointer motion-preset-rebound-down motion-delay-[650ms]'>Studio</p>
        <p className='cursor-pointer motion-preset-rebound-down motion-delay-[750ms]'>Services</p>
        <p className='cursor-pointer motion-preset-rebound-down motion-delay-[850ms]'>Contact</p>
      </div>
      <div className="lg:hidden">
          <Hamburger color="white" toggled={isOpen} toggle={setIsOpen} />
        </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div key="mobile-menu" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="fixed inset-0 bg-black text-white flex flex-col items-center py-20 z-50">
          <div className="absolute top-5 right-5">
            <Hamburger color="white" toggled={isOpen} toggle={setIsOpen} />
          </div>
          <div className="flex flex-col items-center gap-8 mt-10">
             <p onClick={() => setIsOpen(false)} className="text-3xl font-bold cursor-pointer">Studio</p>
             <p onClick={() => setIsOpen(false)} className="text-3xl font-bold cursor-pointer">Services</p>
             <p onClick={() => setIsOpen(false)}className="text-3xl font-bold cursor-pointer">Contact</p>
             <pre><p className='cursor-pointer mt-16'>  தமிழ்</p></pre>
             <p className='cursor-pointer'>■ English</p>
          </div>
        </motion.div>
        )}
    </AnimatePresence>
        
      <div className='hidden lg:block text-white font-bold'>
        <pre><p className='cursor-pointer'>  தமிழ்</p></pre>
        <p className='cursor-pointer'>■ English</p>
      </div>
    </div>
  )
}

export default Navbar
