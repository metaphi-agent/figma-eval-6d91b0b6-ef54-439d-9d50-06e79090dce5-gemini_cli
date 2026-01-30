import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 px-4 md:px-20 max-w-[1440px] mx-auto w-full mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
        <div className="max-w-[450px]">
          <h2 className="text-[30px] md:text-[50px] font-semibold mb-4 font-inter leading-[1.2]">
            People are Saying About DoWhith
          </h2>
          <p className="text-text-grey text-lg font-medium mb-8">
            Everything you need to accept to payment and grow your money of manage anywhere on planet
          </p>
          <div className="flex items-center gap-4">
             <img src="./assets/images/avatar-1.png" alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark -ml-0 z-50"/>
             <img src="./assets/images/avatar-2.png" alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark -ml-4 z-40"/>
             <img src="./assets/images/avatar-3.png" alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark -ml-4 z-30"/>
             <img src="./assets/images/avatar-4.png" alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark -ml-4 z-20"/>
             <div className="w-10 h-10 rounded-full border-2 border-background-dark -ml-4 z-10 bg-[#FFC947] flex items-center justify-center text-black font-bold text-xs">
               5+
             </div>
          </div>
          <p className="text-text-grey mt-4 text-sm">Very good works are waiting for you Login Now!!!</p>
        </div>

        <div className="bg-[#222938] p-8 rounded-[20px] flex flex-col items-center text-center max-w-[400px] w-full">
           <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0Z" fill="#54BD95"/>
                <path d="M11 20L17 26L29 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </div>
           <h3 className="text-[30px] font-medium mb-2">Get Started</h3>
           <p className="text-text-grey mb-8">Enter your email to make contact with us</p>
           <div className="relative w-full">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="w-full bg-transparent border border-text-grey rounded-[30px] py-4 px-6 text-white placeholder-text-grey focus:outline-none focus:border-primary pr-14"
             />
             <button className="absolute right-2 top-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors cursor-pointer">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7 13L13 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M13 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-text-grey/20 pt-10">
        <div className="flex flex-col gap-4">
           <span className="text-primary text-[50px] font-semibold leading-[30px] font-inter">Biccas</span>
           <p className="text-text-grey text-lg font-medium">Get started now try our product</p>
           <div className="relative w-full max-w-[300px]">
             <input 
               type="email" 
               placeholder="Enter your email here" 
               className="w-full bg-transparent border border-text-grey rounded-[30px] py-3 px-6 text-white placeholder-text-grey focus:outline-none focus:border-primary pr-12"
             />
             <button className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors cursor-pointer">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L13 6L8 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 6H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </button>
           </div>
        </div>

        <div className="flex gap-10 md:gap-20 text-text-grey">
          <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-lg">Support</li>
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-lg">Help and Solution</li>
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid responde</li>
          </ul>
           <ul className="flex flex-col gap-4">
            <li className="text-white font-medium text-lg">Product</li>
            <li>Update</li>
            <li>Security</li>
            <li>Beta test</li>
            <li>Pricing product</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-6 border-t border-text-grey/20 text-white font-medium text-lg">
        <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-primary transition-colors">Terms and Condtions</a>
          <div className="w-1 h-1 bg-text-grey rounded-full"></div>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
