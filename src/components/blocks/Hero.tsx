import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            <div className="relative">
              <h1 className="text-[50px] lg:text-[80px] font-bold text-dark-bg leading-[1.1] tracking-tight">
                We’re here to Increase your Productivity
              </h1>
              <img 
                src="./assets/vectors/hero-underline.svg" 
                alt="" 
                className="absolute -bottom-4 left-0 w-full max-w-[480px] h-auto" 
              />
            </div>
            
            <p className="text-lg lg:text-[18px] font-medium text-black leading-[30px] max-w-lg mt-8">
              Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <Button size="lg" className="!rounded-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium text-lg">
                Try free trial
              </Button>
              
              <button className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <img src="./assets/vectors/play-icon.svg" alt="Play" className="w-full h-full" />
                </div>
                <span className="text-lg font-medium text-[#191A15]">View Demo</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10">
            <img 
              src="./assets/images/hero-graphic.png" 
              alt="Taskio Dashboard" 
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};