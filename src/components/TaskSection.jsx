import React from 'react';
import { InformationCircleIcon, EllipsisVerticalIcon, CalendarDaysIcon, ListBulletIcon, TableCellsIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const TaskSection = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mr-2">Task</h2>
            <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
        </div>
        <div className="flex items-center">
          <button className="flex items-center border border-gray-500 rounded-md px-3 py-1 text-sm text-gray-700">
            <CalendarDaysIcon className="h-4 w-4 mr-1" />
            01 March 2025
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="ml-2 border border-gray-500 rounded-md p-1">
            <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center text-gray-500 gap-4 mb-4">
        <button className="bg-gray-200 border border-gray-500 rounded-md px-3 py-1 text-sm font-medium flex items-center mr-2">
          <Squares2X2Icon className="h-4 w-4 mr-1" /> {/* Added Squares2X2Icon */}
          Kanban
        </button>
        <button className="text-sm font-medium flex items-center mr-2">
          <TableCellsIcon className="h-4 w-4 mr-1" /> {/* Added TableCellsIcon */}
          Table
        </button>
        <button className="text-sm font-medium flex items-center mr-2">
          <ListBulletIcon className="h-4 w-4 mr-1" /> {/* Added ListBulletIcon */}
          List View
        </button>
        <div className="flex-grow"></div>
        <button className="flex items-center text-sm text-gray-700">
          <FunnelIcon className="h-4 w-4 mr-1" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["New Request 3", "In Progress 6", "Complete 12"].map((status, index) => (
          <div key={index} className="bg-white rounded-md p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">
                <span className={`inline-block w-2 h-2 rounded-full mr-1 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                {status}
              </h3>
              <button className="rounded-full p-1">
                <EllipsisVerticalIcon className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            <button className="w-full bg-slate-200 border border-dashed border-gray-500 rounded-md p-4 text-gray-900 mb-4">
              +
            </button>
            <div className="bg-white rounded-md p-3 border border-spacing-2">
              {index === 0 && (
                <>
                  <div className="flex items-center justify-between mb-2"> {/* Added justify-between and items-center */}
                    <div className="flex flex-wrap gap-2"> {/* Wrapped tags in a div */}
                      <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Recruitment</span>
                      <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Compliance</span>
                    </div>
                    <EllipsisVerticalIcon className="h-5 w-5 text-gray-800" /> 
                  </div>
                  <h4 className="text-sm font-semibold mb-1">Employee Onboarding Approval</h4>
                  <p className="text-xs text-gray-600">A new onboarding request has been submitted for Jane Smith (Marketing Department). HR needs to verify the required documents, approve the onboarding process, and schedule an introduction meeting with the team.</p>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-wrap gap-2"> 
                    <span className="bg-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Finance</span>
                    <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Compensation</span>
                  </div>
                  <EllipsisVerticalIcon className="h-5 w-5 text-gray-800" /> 
                  </div>
                  <h4 className="text-sm font-semibold mb-1">Payroll Processing</h4>
                  <p className="text-xs text-gray-600">HR and the finance team are calculating salaries, bonuses, tax deductions, and overtime pay. Any discrepancies need to be resolved before the final payroll submission on March 10.</p>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-wrap gap-2"> 
                    <span className="bg-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Feedback</span>
                    <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Engagement</span>
                  </div>
                  <EllipsisVerticalIcon className="h-5 w-5 text-gray-800" /> 
                  </div>
                  <h4 className="text-sm font-semibold mb-1">Employee Satisfaction Survey</h4>
                  <p className="text-xs text-gray-600">The HR team has gathered feedback from all departments and is now analyzing the results to identify key areas for improvement.</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSection;