import React from 'react';
import Cards from './Cards';
import Chart from './Chart';
import { DocumentIcon } from '@heroicons/react/24/outline'; // Import the document icon

const DashboardSummary = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold font-sans">Hallo, Arnold Smith</h2>
          <p className="text-gray-600 ">Wednesday, 06 March 2025</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center">
          <DocumentIcon className="h-5 w-5 mr-2" /> {/* Add the document icon */}
          Export
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Cards />
        <Chart />
      </div>
    </div>
  );
};

export default DashboardSummary;