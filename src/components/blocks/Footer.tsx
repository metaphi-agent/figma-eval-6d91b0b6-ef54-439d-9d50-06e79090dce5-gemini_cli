import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161C28] text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-[50px] font-semibold text-[#54BDAA] leading-none">
              Biccas
            </h2>
            <p className="text-[18px] font-medium text-[#A6A6A6]">
              Get started now try our product
            </p>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email here" 
                className="w-full px-6 py-4 rounded-full bg-[#161C28] border border-[#A6A6A6] text-white placeholder-gray-500 focus:outline-none focus:border-[#54BDAA] pr-16"
              />
              <div className="absolute right-2 top-2 p-2 bg-[#54BDAA] rounded-full cursor-pointer hover:bg-[#54BDAA]/90 transition-colors">
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-3 gap-8">
             <div className="space-y-6">
               <h4 className="text-lg font-medium text-white">Support</h4>
               <ul className="space-y-4 text-[#A6A6A6]">
                 <li><a href="#" className="hover:text-white transition-colors">Help centre</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Account information</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
               </ul>
             </div>
             <div className="space-y-6">
               <h4 className="text-lg font-medium text-white">Help</h4>
               <ul className="space-y-4 text-[#A6A6A6]">
                 <li><a href="#" className="hover:text-white transition-colors">Talk to support</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Support docs</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">System status</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Covid responde</a></li>
               </ul>
             </div>
             <div className="space-y-6">
               <h4 className="text-lg font-medium text-white">Product</h4>
               <ul className="space-y-4 text-[#A6A6A6]">
                 <li><a href="#" className="hover:text-white transition-colors">Update</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Beta test</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Pricing product</a></li>
               </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-[18px] font-medium">
          <p>&copy; 2022 Biccas Inc. Copyright and rights reserved</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#54BDAA]">Terms and Conditions</a>
            <a href="#" className="hover:text-[#54BDAA]">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};