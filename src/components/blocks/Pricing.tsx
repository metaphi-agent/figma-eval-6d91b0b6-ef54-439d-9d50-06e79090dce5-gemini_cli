import React, { useState } from 'react';
import { Container } from '../ui/Container';

const plans = [
  {
    name: "Free",
    description: "Have a go and test your superpowers",
    price: "0",
    features: ["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"],
    highlight: false
  },
  {
    name: "Pro",
    description: "Experiment the power of infinite possibilities",
    price: "8",
    features: ["4 Users", "All Apps", "Unlimited editable exports", "Folders and collaboration", "All incoming apps"],
    highlight: true,
    badge: "Save $50 a year"
  },
  {
    name: "Business",
    description: "Unveil new superpowers and join the Design League",
    price: "16",
    features: ["All the features of pro plan", "Account success Manager", "Single Sign-On (SSO)", "Co-conception pogram", "Collaboration-Soon"],
    highlight: false
  }
];

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 lg:py-32 bg-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[50px] font-bold text-[#191A15] leading-tight">
            Choose Plan That’s Right For You
          </h2>
          <p className="text-[18px] font-bold text-[#A6A6A6]">
            Choose plan that works best for you, feel free to contact us
          </p>
          
          <div className="flex items-center justify-center pt-8">
            <div className="bg-white shadow-lg rounded-xl p-1.5 flex items-center gap-2">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  billingPeriod === 'monthly' ? 'bg-[#191A15] text-white' : 'text-[#A6A6A6]'
                }`}
              >
                Bill Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-[#191A15] text-white' : 'text-[#A6A6A6]'
                }`}
              >
                Bill Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-[20px] p-8 flex flex-col h-full items-center transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#54BDAA] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-[#191A15] shadow-xl'
              }`}
            >
              <h3 className="text-[30px] font-semibold mb-2">{plan.name}</h3>
              <p className={`text-[18px] font-medium mb-8 max-w-[200px] leading-snug ${
                plan.highlight ? 'text-white' : 'text-[#A6A6A6]'
              }`}>
                {plan.description}
              </p>
              
              <div className="flex items-start mb-8 relative">
                <span className={`text-[18px] font-medium mt-2 mr-1 ${
                  plan.highlight ? 'text-white' : 'text-[#A6A6A6]'
                }`}>$</span>
                <span className="text-[50px] font-semibold leading-none">{plan.price}</span>
                {plan.highlight && plan.badge && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#85DAB9] text-white text-[13px] font-semibold px-4 py-2 rounded-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
              </div>

              <div className={`w-full rounded-[10px] p-6 mb-8 mt-4 text-left ${
                plan.highlight ? 'bg-white text-[#191A15]' : 'bg-[#F9F8FE] text-[#191A15]'
              }`}>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                         plan.highlight ? 'bg-[#54BDAA]' : 'bg-[#54BDAA]'
                      }`}>
                         <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <span className="text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-[20px] text-[18px] font-semibold transition-transform hover:scale-105 ${
                plan.highlight 
                  ? 'bg-white text-[#54BDAA]' 
                  : 'bg-white text-[#54BDAA] shadow-lg'
              }`}>
                Goto Business
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};