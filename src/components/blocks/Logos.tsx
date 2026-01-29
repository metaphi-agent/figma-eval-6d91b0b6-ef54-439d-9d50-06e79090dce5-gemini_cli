import React from 'react';
import { Container } from '../ui/Container';

export const Logos: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col items-center gap-12 text-center">
          <h2 className="text-[40px] font-bold text-[#191A15] leading-tight">
            More than 25,000 teams use Collabs
          </h2>
          <div className="w-full max-w-[1076px]">
            <img 
              src="./assets/vectors/company-logos.svg" 
              alt="Company Logos" 
              className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};