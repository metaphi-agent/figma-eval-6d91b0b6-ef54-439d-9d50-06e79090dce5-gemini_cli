import React, { useState } from 'react';
import Button from '../ui/Button';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Free",
      description: "Have a go  and test your  superpowers",
      price: 0,
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps"
      ],
      cta: "Signup for free",
      highlight: false
    },
    {
      name: "Pro",
      description: "Experiment the power of infinite possibilities",
      price: 8,
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps"
      ],
      cta: "Go to pro",
      highlight: true
    },
    {
      name: "Business",
      description: "Unveil new superpowers and join the Design Leaque",
      price: 16,
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon"
      ],
      cta: "Goto Business",
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-4 md:px-20 max-w-[1440px] mx-auto w-full text-center">
      <h2 className="text-[30px] md:text-[50px] font-bold text-text-dark mb-4 font-inter">
        Choose Plan That’s Right For You
      </h2>
      <p className="text-lg text-text-grey font-bold mb-10">
        Choose plan that works best for you, feel free to contact us
      </p>

      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-[10px] p-1 shadow-sm inline-flex items-center">
          <button 
            className={`px-6 py-3 rounded-[10px] text-lg font-medium transition-colors cursor-pointer ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-text-dark bg-transparent'}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Bill Monthly
          </button>
          <button 
             className={`px-6 py-3 rounded-[10px] text-lg font-medium transition-colors cursor-pointer ${billingCycle === 'yearly' ? 'bg-primary text-white shadow-md' : 'text-text-dark bg-transparent'}`}
             onClick={() => setBillingCycle('yearly')}
          >
            Bill Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`rounded-[20px] p-8 text-left flex flex-col items-center gap-6 ${plan.highlight ? 'bg-primary text-white shadow-xl scale-105 z-10' : 'bg-white text-text-dark shadow-sm'}`}>
            <div className="text-center">
              <h3 className={`text-[30px] font-semibold mb-2 ${plan.highlight ? 'text-white' : 'text-text-dark'}`}>{plan.name}</h3>
              <p className={`text-lg font-medium max-w-[250px] mx-auto ${plan.highlight ? 'text-white/90' : 'text-text-grey'}`}>{plan.description}</p>
            </div>
            
            <div className="relative">
                <span className="text-[18px] align-top font-medium">$</span>
                <span className="text-[50px] font-bold leading-[1]">{plan.price}</span>
            </div>

            <div className={`w-full p-4 rounded-[10px] ${plan.highlight ? 'bg-white/10' : 'bg-[#F9FAFB]'}`}>
               <ul className="flex flex-col gap-4">
                 {plan.features.map((feature, i) => (
                   <li key={i} className="flex items-center gap-3 text-base font-medium">
                     <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                       <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     {feature}
                   </li>
                 ))}
               </ul>
            </div>

            <Button 
              variant={plan.highlight ? 'ghost' : 'primary'} 
              className={`rounded-[20px] w-full py-4 mt-auto ${plan.highlight ? 'bg-white text-primary hover:bg-white/90' : ''}`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
