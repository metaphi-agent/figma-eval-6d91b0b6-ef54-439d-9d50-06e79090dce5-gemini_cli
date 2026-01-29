import React from 'react';
import { Container } from '../ui/Container';

const benefits = [
  "Free Consulting With Expert Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money For The Future",
  "Online Transaction"
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-10">
            <h2 className="text-[50px] font-bold text-[#191A15] leading-[1.2]">
              What Benefit Will You Get
            </h2>
            
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#54BDAA] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-black group-hover:text-[#54BDAA] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
             {/* Decorative blob behind image matching design roughly */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#54BDAA]/20 blur-[60px] rounded-full z-0"></div>
             
             <img 
               src="./assets/images/benefits-image.png" 
               alt="Benefits" 
               className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
             />
             
             {/* Floating cards could be added here if exported individually, 
                 but keeping it simple with the main composition image which likely includes them 
                 or just the main visual. The exported '0-177' is just the rectangle image. 
                 The floating chips '0-206', '0-217' were separate. 
                 For a prototype, the main image is sufficient or we need to construct the composition.
             */}
          </div>
        </div>
      </Container>
    </section>
  );
};