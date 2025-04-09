import React, { useState } from 'react';
import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [hoveredTier, setHoveredTier] = useState(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with HR automation',
      price: {
        monthly: '$29',
        annual: '$25',
      },
      cta: 'Get Started',
      popular: false,
      features: [
        'Up to 50 employees',
        'Core HR management',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing organizations',
      price: {
        monthly: '$79',
        annual: '$69',
      },
      cta: 'Start Free Trial',
      popular: true,
      features: [
        'Up to 200 employees',
        'Advanced analytics',
        'Payroll integration',
        'Priority support',
        'Custom workflows',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: {
        monthly: 'Custom',
        annual: 'Custom',
      },
      cta: 'Contact Sales',
      popular: false,
      features: [
        'Unlimited employees',
        'Dedicated account manager',
        'White-glove onboarding',
        'HR consulting hours',
        'Custom integrations',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <section id="pricing-section" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg">
            Flexible Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Simple, Scalable
            </span> Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your organization's needs. Scale up or down as you grow.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'annual' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Annual (Save 20%)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200 shadow-lg'} ${hoveredTier === index ? 'transform hover:-translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg shadow-md">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price[billingCycle]}
                  </span>
                  {plan.price[billingCycle] !== 'Custom' && (
                    <span className="text-gray-600">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                  )}
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg' 
                    : 'bg-white border border-gray-300 text-gray-800 hover:border-blue-500 hover:text-blue-600'}`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="border-t border-gray-200 bg-gray-50 p-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ/Note section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need help deciding?</h3>
              <p className="text-gray-600 mb-4">
                Our HR specialists can help you choose the right plan and even customize a solution for your unique needs.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Contact our team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;