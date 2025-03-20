import React from 'react';
import { InformationCircleIcon, EllipsisVerticalIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Import icons

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Total Employees Card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow w-65">
      <div className="flex justify-between items-center mt-5 ml-4 mb-5">
        <h3 className="text-md font-medium text-gray-700 flex items-center">
          Total Employees
          <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
        </h3>
        <button className="text-gray-700 border boundry-gray-800 rounded-md mr-4 hover:text-gray-700">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center mb-7">
        <span className="text-4xl ml-4 font-semibold number">173</span>
        <span className="bg-green-100 text-green-900 px-2 py-1 rounded-lg text-xs flex items-center ml-4">
          <span className=" rounded-full p-0.5 mr-1 border border-green-700"> {/* Green border */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </span>
          1.8%
        </span>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between items-center"> 
        <p className="text-xs text-gray-600">+16 from last month</p>
        <button className="bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-1 font-semibold text-xs flex items-center">
          Details <ArrowRightIcon className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>

      {/* Job Applicant Card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow w-65">
      <div className="flex justify-between items-center mt-5 ml-4 mb-5">
        <h3 className="text-md font-medium text-gray-700 flex items-center">
            Job Applicant
            <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" /> {/* Information icon */}
          </h3>
          <button className="text-gray-700 border boundry-gray-800 rounded-md mr-4 hover:text-gray-700">
            <EllipsisVerticalIcon className="h-5 w-5" /> {/* Ellipsis icon */}
          </button>
        </div>
        <div className="flex items-center mb-7">
        <span className="text-4xl ml-4 font-semibold number">983</span>
        <span className="bg-green-100 text-green-900 px-2 py-1 rounded-lg text-xs flex items-center ml-4">
          <span className=" rounded-full p-0.5 mr-1 border border-green-700"> {/* Green border */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            </span>
            2.4%
          </span>
        </div>
        <div className="bg-gray-100 p-4 flex justify-between items-center"> 
        <p className="text-xs text-gray-600">+32 from last month</p>
        <button className="bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-1 font-semibold text-xs flex items-center">
          Details <ArrowRightIcon className="h-4 w-4 ml-1" />
        </button>
      </div>
      </div>

      {/* Total Revenue Card */}
<div className="bg-white rounded-lg border border-gray-200 shadow w-65">
  <div className="flex justify-between items-center mt-5 ml-4 mb-5">
    <h3 className="text-md font-medium text-gray-700 flex items-center">
      Total Revenue
      <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
    </h3>
    <button className="text-gray-700 border boundry-gray-800 rounded-md mr-4 hover:text-gray-700">
      <EllipsisVerticalIcon className="h-5 w-5" />
    </button>
  </div>
  <div className="flex items-center mb-7">
    <span className="text-4xl ml-4 font-semibold number">
      $4,842
      <span className="text-gray-500">.00</span> {/* Gray zeros */}
    </span>
    <span className="bg-green-100 text-green-900 px-2 py-1 rounded-lg text-xs flex items-center ml-4">
      <span className="rounded-full p-0.5 mr-1 border border-green-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </span>
      4.2%
    </span>
  </div>
  <div className="bg-gray-100 p-4 flex justify-between items-center">
    <p className="text-xs text-gray-600">+$3,834.00 from last month</p>
    <button className="bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-1 font-semibold text-xs flex items-center">
      Details <ArrowRightIcon className="h-4 w-4 ml-1" />
    </button>
  </div>
</div>

      {/* Attendance Rate Card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow w-65">
      <div className="flex justify-between items-center mt-5 ml-4 mb-5">
        <h3 className="text-md font-medium text-gray-700 flex items-center">
            Attendance Rate
            <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" /> {/* Information icon */}
          </h3>
          <button className="text-gray-700 border boundry-gray-800 rounded-md mr-4 hover:text-gray-700">
            <EllipsisVerticalIcon className="h-5 w-5" /> {/* Ellipsis icon */}
          </button>
        </div>
        <div className="flex items-center mb-7">
        <span className="text-4xl ml-4 font-semibold number">75%</span>
        <span className="bg-green-100 text-green-900 px-2 py-1 rounded-lg text-xs flex items-center ml-4">
          <span className=" rounded-full p-0.5 mr-1 border border-green-700"> {/* Green border */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            </span>
            1.7%
          </span>
        </div>
        <div className="bg-gray-100 p-4 flex justify-between items-center"> 
        <p className="text-xs text-gray-600">-6.4% from last month</p>
        <button className="bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-1 font-semibold text-xs flex items-center">
          Details <ArrowRightIcon className="h-4 w-4 ml-1" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cards;