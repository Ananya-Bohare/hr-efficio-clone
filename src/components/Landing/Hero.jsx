import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../../assets/HR.mp4';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-20 md:py-28 lg:py-36">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left mb-16 lg:mb-0 lg:w-1/2 lg:pr-12">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg animate-fade-down animate-duration-1000 animate-delay-200">
            HR Transformation Simplified
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-down animate-duration-1000 animate-delay-400">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Smarter HR
            </span>
            <br />
            For The Modern Workforce
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-up animate-duration-1000 animate-delay-600">
            Efficio's AI-powered platform automates HR workflows, enhances employee experience, and delivers actionable workforce insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in animate-duration-1000 animate-delay-800">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Free
            </Link>
            <Link
              to="/demo"
              className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg border-2 border-blue-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Watch Demo
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-gray-500 animate-fade-in animate-duration-1000 animate-delay-1000">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 500+ companies
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GDPR compliant
            </div>
          </div>
        </div>

        {/* Right Column: Video */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0 animate-fade-left animate-duration-1000 animate-delay-500">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
            <video
              src={HeroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-blue-500/5"></div>
          </div>
          <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;