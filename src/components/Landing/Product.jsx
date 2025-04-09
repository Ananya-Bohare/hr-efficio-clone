import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PayrollImage from '../../assets/Payroll.PNG'; 
import AttendanceImage from '../../assets/Hr1.webp'; 
import TaskManagementImage from '../../assets/task.PNG'; 
import EmployeeOrgImage from '../../assets/Emp.PNG';

function ProductSection() {
  return (
    <section id="product-section" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg animate-fade-down">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-down animate-delay-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              HR Tools
            </span> That Work For You
          </h2>
          <p className="text-xl text-gray-600 animate-fade-up animate-delay-400">
            Automate your HR processes with our intelligent platform designed to save time and reduce errors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Payroll Automation */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
            <div className="relative h-48 overflow-hidden">
            <img
  src={PayrollImage}
  alt="Payroll Automation"
  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Payroll Automation</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Error-free payroll processing with automated calculations and compliance management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Automated salary calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tax & deduction management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Seamless payment processing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Attendance Management */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in animate-delay-200">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={AttendanceImage} 
                alt="Attendance Management" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Attendance Tracking</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Modern time tracking with geolocation, biometrics, and smart scheduling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Clock-in/out functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Leave request & approval</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Real-time attendance reports</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Task & Project Management */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in animate-delay-400">
            <div className="relative h-48 overflow-hidden">
            <img
  src={TaskManagementImage}
  alt="Task Management"
  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Task Management</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Streamline HR projects with intuitive task assignment and tracking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Kanban board views</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Task assignment & tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Progress visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Employee Organization */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in animate-delay-600">
            <div className="relative h-48 overflow-hidden">
            <img
  src={EmployeeOrgImage}
  alt="Employee Organization"
  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Employee Organization</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Visualize and manage your workforce structure with interactive tools.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Interactive org chart</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Employee profile management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reporting & analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;