import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const features = [
  {
    title: "Collaboration Teams",
    description: "Here you can handle projects together with team virtually",
    image: "./assets/images/feature-collaboration.png"
  },
  {
    title: "Cloud Storage",
    description: "No need to worry about storage because we provide storage up to 2 TB",
    image: "./assets/images/feature-cloud.png"
  },
  {
    title: "Daily Analytics",
    description: "We always provide useful information to make it easier for you every day",
    image: "./assets/images/feature-analytics.png"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <h2 className="text-[50px] font-semibold text-[#191A15] leading-[1.2] max-w-sm">
            Our Features you can get
          </h2>
          <p className="text-lg font-medium text-[#A6A6A6] leading-[30px] max-w-md lg:mx-auto">
            We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily
          </p>
          <Button className="!rounded-full px-8 py-4 !text-lg min-w-[160px]">
            Get Started
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#F9F8FE] rounded-[20px] p-8 pb-0 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-8">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-auto pb-10">
                <h3 className="text-[30px] font-semibold text-[#191A15] mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg font-medium text-[#A6A6A6] leading-[30px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};