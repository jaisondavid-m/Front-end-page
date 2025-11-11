import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Herosection from '../Components/HeroSection/Herosection';
import Main from '../Components/Main/Main';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';


function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[100svh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
          src={`${process.env.PUBLIC_URL}/bg.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10">
          <Navbar />
          <Herosection />
        </div>
      </div>
      <Main />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
