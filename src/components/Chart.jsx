import React from "react";
import { InformationCircleIcon, CalendarDaysIcon, DocumentDuplicateIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const Chart = () => {
  const gridData = [
    [200, 150, 180, 190, 170, 160, 200, 150, 180, 190, 170],
    [100, 120, 110, 140, 130, 125, 50, 80, 70, 60, 90],
    [150, 140, 160, 180, 170, 155, 180, 200, 190, 175, 195],
    [180, 200, 190, 175, 195, 185, 200, 190, 180, 170, 160],
  ];

  const colors = ["#E6F2FF", "#B3D9FF", "#66B3FF", "#3399FF"]; // Adjusted colors

  const getColor = (value) => {
    if (value >= 190) return colors[3]; // Darkest blue
    if (value >= 170) return colors[2]; // Medium blue
    if (value >= 130) return colors[1]; // Light blue
    return colors[0]; // Lightest blue
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 bg-white rounded-lg"> {/* Added background, rounded corners, padding */}
      <div className="flex items-center">
        <h3 className="text-md font-medium text-gray-700 flex items-center">
          Attendance Report
          <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
        </h3>
      </div>
      <div className="flex items-center space-x-2"> {/* Added space-x-2 for spacing */}
        <button className="border rounded-md px-2 py-1 text-sm flex items-center text-gray-700">
          <CalendarDaysIcon className="h-4 w-4 mr-1" />
          01 March 2025
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button className="text-gray-500 border rounded-md p-1 hover:text-gray-700">
          <DocumentDuplicateIcon className="h-5 w-5" />
        </button>
        <button className="border rounded-md p-1 text-gray-500 hover:text-gray-700">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </button>
      </div>
    </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-4 gap-2 mb-10">
        <div className="relative">
<<<<<<< HEAD
          <p className="text-3xl font-semibold number">173</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-12">Total Employ</p>
        </div>
        <div className="relative">
          <p className="text-3xl font-semibold number ml-4">128</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-16">On Time</p>
        </div>
        <div className="relative">
          <p className="text-3xl font-semibold number">21</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-11">Absent</p>
        </div>
        <div className="relative">
          <p className="text-3xl font-semibold number">24</p>
=======
          <p className="text-2xl font-semibold number">173</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-12">Total Employ</p>
        </div>
        <div className="relative">
          <p className="text-2xl font-semibold number ml-4">128</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-16">On Time</p>
        </div>
        <div className="relative">
          <p className="text-2xl font-semibold number">21</p>
          <p className="text-sm text-gray-700 absolute top-4 ml-11">Absent</p>
        </div>
        <div className="relative">
          <p className="text-2xl font-semibold number">24</p>
>>>>>>> e34ec79 (first commit)
          <p className="text-sm text-gray-700 absolute top-4 ml-11">Late</p>
        </div>
      </div>

      <div className="relative">
  {/* Y-Axis Labels */}
<div className="absolute -left-2 -top-4 h-full flex flex-col justify-evenly text-center text-xs text-gray-500">
  <span>200</span>
  <span>100</span>
  <span>50</span>
  <span>10</span>
</div>

        {/* Grid of Squares */}
        <div className="grid grid-cols-11 gap-2 ml-6">
          {gridData.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-9 h-9 rounded-sm"
                style={{ backgroundColor: getColor(value) }}
              ></div>
            ))
          )}
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-4 text-xs text-gray-500 pl-20">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;