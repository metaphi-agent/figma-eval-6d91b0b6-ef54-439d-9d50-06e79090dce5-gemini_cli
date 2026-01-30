import React from 'react';
import Button from '../ui/Button';

const Features = () => {
  const features = [
    {
      title: "Collboration Teams",
      description: "Here you can handle projects together with team virtually",
      image: "./assets/images/feature-collaboration.png",
      bg: "bg-white" // Card styles from design might differ slightly
    },
    {
      title: "Cloud Storage",
      description: "No nedd to worry about storage because we provide storage up to 2 TB",
      image: "./assets/images/feature-cloud.png",
      bg: "bg-white"
    },
    {
      title: "Daily Analytics",
      description: "We always provide useful informatin to make it easier for you every day",
      image: "./assets/images/feature-analytics.png",
      bg: "bg-white"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-20 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-[500px]">
          <h2 className="text-[30px] md:text-[50px] font-semibold text-text-dark leading-[1.2] mb-6 font-inter">
            Our Features you cab get
          </h2>
          <p className="text-lg text-text-dark font-medium leading-[30px]">
            We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
          </p>
        </div>
        <Button variant="primary" size="lg" className="rounded-[70px] px-8">Get Started</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className={`rounded-[20px] p-8 flex flex-col gap-6 transition-transform hover:-translate-y-2 cursor-pointer ${feature.bg} shadow-sm`}>
             <div className="w-full aspect-square relative rounded-[20px] overflow-hidden mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
             </div>
             <h3 className="text-[30px] font-semibold text-text-dark leading-[1] font-inter">
               {feature.title}
             </h3>
             <p className="text-lg text-text-grey font-medium leading-[30px]">
               {feature.description}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
