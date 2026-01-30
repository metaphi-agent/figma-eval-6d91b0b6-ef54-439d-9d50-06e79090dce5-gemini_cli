import React from 'react';

const Companies = () => {
  return (
    <section className="py-16 px-4 text-center max-w-[1440px] mx-auto w-full">
      <h2 className="text-[30px] md:text-[40px] font-bold text-text-dark mb-10 font-inter">
        More than 25,000 teams use Collabs
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-10 opacity-80">
        <img 
          src="./assets/icons/company-logos.svg" 
          alt="Company Logos" 
          className="h-[40px] md:h-[50px] w-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Companies;
