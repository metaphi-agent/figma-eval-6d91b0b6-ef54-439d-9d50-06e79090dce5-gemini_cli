import React from 'react';

const Benefits = () => {
  const benefits = [
    "Free Consulting With Experet Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transection"
  ];

  return (
    <section className="py-20 px-4 md:px-20 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
      <div className="flex-1">
        <h2 className="text-[30px] md:text-[50px] font-semibold text-text-dark leading-[1.2] mb-10 font-inter">
          What Benifit Will You Get
        </h2>
        <ul className="flex flex-col gap-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-4 text-lg text-text-dark font-medium">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 relative">
         <div className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px] bg-primary/20 rounded-full blur-[40px] -z-10"></div>
         <img 
            src="./assets/images/benefit-image.png" 
            alt="Benefits" 
            className="w-full h-auto object-contain z-10 relative"
            loading="lazy"
         />
         {/* Background elements decoration from design */}
         <div className="absolute top-[10%] -left-[10%] w-[300px] h-[300px] bg-white rounded-full -z-20"></div>
      </div>
    </section>
  );
};

export default Benefits;
