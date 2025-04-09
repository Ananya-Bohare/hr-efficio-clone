import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ava1 from '../../assets/ava9.PNG';
import ava2 from '../../assets/ava15.PNG';
import ava3 from '../../assets/ava3.PNG';
import ava4 from '../../assets/ava4.PNG';

const testimonials = [
  {
    quote: 'Efficio HR has transformed our HR operations. We reduced onboarding time by 70% and payroll processing errors to zero.',
    name: 'Sarah Johnson',
    title: 'HR Director at TechCorp',
    image: ava1,
    industry: 'Technology',
    impact: '70% faster onboarding',
    stats: '98% accuracy in payroll'
  },
  {
    quote: 'The attendance and leave management system saved us over 20 hours per week in administrative work. Game changer!',
    name: 'Michael Chen',
    title: 'Operations Manager at HealthPlus',
    image: ava2,
    industry: 'Healthcare',
    impact: '20+ hours saved weekly',
    stats: '100% compliance rate'
  },
  {
    quote: 'From retail with 100+ locations to our corporate office, Efficio scales beautifully across our entire organization.',
    name: 'David Wilson',
    title: 'VP of HR at UrbanRetail',
    image: ava3,
    industry: 'Retail',
    impact: 'Unified 100+ locations',
    stats: '40% cost reduction'
  },
  {
    quote: 'As a financial institution, compliance is critical. Efficio keeps us audit-ready at all times with automated reporting.',
    name: 'Emily Rodriguez',
    title: 'Compliance Officer at FirstBank',
    image: ava4,
    industry: 'Finance',
    impact: '100% audit readiness',
    stats: '60% faster reporting'
  },
];

function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setDirection(-1);
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const goToNext = () => {
    setDirection(1);
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  // Industry logos with icons
  const industries = [
    { name: 'Technology', icon: '💻' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Finance', icon: '💰' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Education', icon: '🎓' },
    { name: 'Manufacturing', icon: '🏭' }
  ];

  return (
    <section id="industries-section" className="relative py-10 bg-gray-900  overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Floating orb elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[90px] opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-5 animate-float animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg">
            Industry-Leading Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Transformative Results
            </span> Across Sectors
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            How forward-thinking organizations leverage Efficio to redefine HR excellence
          </p>
        </div>

        {/* 3D Card Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <div className="perspective-1000">
            <div 
              className={`relative transition-all duration-700 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] transform-style-preserve-3d ${direction > 0 ? 'rotate-y-5' : '-rotate-y-5'}`}
              style={{
                transform: `rotateY(${direction * 5}deg)`
              }}
            >
              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Testimonial */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-8">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75"></div>
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-2xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                        <p className="text-blue-300">{testimonials[currentIndex].title}</p>
                      </div>
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                      <span className="text-5xl leading-none text-blue-400/50 mr-2">"</span>
                      {testimonials[currentIndex].quote}
                      <span className="text-5xl leading-none text-blue-400/50 ml-2">"</span>
                    </blockquote>
                  </div>

                  {/* Right Column - Industry & Stats */}
                  <div className="lg:col-span-1 space-y-8">
                    {/* Industry Badge */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-blue-300 uppercase tracking-wider">Industry</p>
                          <h3 className="text-2xl font-bold text-white">{testimonials[currentIndex].industry}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-5">
                        <p className="text-sm text-blue-300 uppercase tracking-wider mb-1">Key Impact</p>
                        <p className="text-xl font-bold text-white">{testimonials[currentIndex].impact}</p>
                      </div>
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-5">
                        <p className="text-sm text-blue-300 uppercase tracking-wider mb-1">Performance Metric</p>
                        <p className="text-xl font-bold text-white">{testimonials[currentIndex].stats}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 bg-gray-800 hover:bg-gray-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 group"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white group-hover:text-cyan-400" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 bg-gray-800 hover:bg-gray-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 group"
          >
            <ChevronRightIcon className="h-6 w-6 text-white group-hover:text-cyan-400" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 20000);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8' : 'bg-gray-700 w-4'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Industry Ecosystem */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-medium text-blue-300 mb-8">Trusted by innovators across sectors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((item) => (
              <div 
                key={item.name} 
                className={`bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 transition-all duration-300 ${testimonials[currentIndex].industry === item.name ? 'ring-2 ring-cyan-400/50' : ''}`}
              >
                <p className="text-sm font-medium text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;