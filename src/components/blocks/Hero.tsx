import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative px-4 md:px-20 py-10 md:py-20 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Background Blobs - approximated */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-100px] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

      <div className="flex-1 flex flex-col gap-8 max-w-[600px] z-10">
        <h1 className="text-[50px] md:text-[80px] font-bold text-text-dark leading-[1.1] font-inter">
          We’re here to Increase your Productivity
        </h1>
        
        <p className="text-lg text-text-dark font-medium leading-[30px] max-w-[480px]">
          Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
        </p>
        
        <div className="flex items-center gap-6 mt-4">
          <Button variant="primary" size="lg" className="rounded-[40px] px-8">Try free trial</Button>
          <button className="flex items-center gap-3 text-text-dark font-medium text-lg hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-transparent border border-primary flex items-center justify-center">
               <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.048 6.17248C11.6661 6.55883 11.6661 7.44117 11.048 7.82752L1.69665 13.6721C1.04509 14.0794 0.199951 13.6106 0.199951 12.8446V1.15541C0.199951 0.389396 1.04509 -0.0793774 1.69665 0.327898L11.048 6.17248Z" fill="#54BD95"/>
              </svg>
            </div>
            View Demo
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end z-10 relative">
        <img 
          src="./assets/images/hero-illustration.png" 
          alt="Productivity Dashboard" 
          className="w-full max-w-[650px] h-auto object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
