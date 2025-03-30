import React from 'react';
import { taskData,  } from '../Data'; 
import {
  CheckCircleIcon,
  ClockIcon,
  UserCircleIcon,
  TagIcon,
  DocumentIcon,
  Bars3Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import ava1 from '../../assets/ava1.png';
import ava2 from '../../assets/ava2.PNG';
import ava3 from '../../assets/ava3.PNG';
import ava4 from '../../assets/ava4.PNG';
import ava5 from '../../assets/ava5.PNG';
import ava6 from '../../assets/ava6.PNG';

const assigneesAvatars = {
    user1: ava1,
    user2: ava2,
    user3: ava3,
    user4: ava4,
    user5: ava5,
    user6: ava6,
  };

const ListView = () => {
  const notStartedTasks = taskData.filter(task => task.status === 'Not Started');
  const inProgressTasks = taskData.filter(task => task.status === 'In Progress');
  const doneTasks = taskData.filter(task => task.status === 'Done');

  const renderTaskRow = (task) => (
    <tr key={task.id} className="hover:bg-gray-50 cursor-pointer">
      <td className="px-3 py-3 whitespace-nowrap">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
          checked={task.isCompleted}
          readOnly
        />
      </td>
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-800 font-medium">{task.title}</td>
      <td className="px-3 py-3 text-sm text-gray-600">{task.description}</td>
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          {task.assignees && task.assignees.map((assignee) => (
            <img
              key={assignee.id}
              src={assigneesAvatars[assignee.id]} // Use the imported variable
              alt={assignee.name}
              className="h-5 w-5 rounded-full object-cover border border-gray-600"
            />
          ))}
        </div>
      </td>
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
        {task.type && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
            {task.type}
          </span>
        )}
      </td>
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
        {task.timelineDate}
      </td>
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
        {task.priority === 'High' && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            High
          </span>
        )}
        {task.priority === 'Medium' && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Medium
          </span>
        )}
        {task.priority === 'Low' && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Low
          </span>
        )}
        {task.priority === 'Urgent' && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            Urgent
          </span>
        )}
      </td>
      <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
        <Bars3Icon className="h-5 w-5 text-gray-500 cursor-pointer" />
      </td>
    </tr>
  );

  const renderTaskSection = (title, tasks) => (
    tasks.length > 0 && (
      <div className="mb-6">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <h4 className="text-md font-semibold text-gray-700">{title}</h4>
          <span className="text-sm text-gray-500">{tasks.length}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" />
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task Name
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descriptions
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  People
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline Date
                </th>
                <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <FilterIcon className="h-4 w-4 text-gray-500" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map(renderTaskRow)}
            </tbody>
          </table>
        </div>
      </div>
    )
  );

  return (
    <div className="p-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <TagIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-500">Developer Team</span>
          <TagIcon className="h-5 w-5 text-yellow-500" />
          <span className="text-sm text-gray-500">Important</span>
          {/* Placeholder for "11 Task" */}
        </div>

      <div className="mb-4 flex items-center space-x-4">
        <div className="relative">
          <button className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm font-medium flex items-center">
            Not Started
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </button>
          {/* Dropdown for status filter can go here */}
        </div>
        <div className="relative">
          <button className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm font-medium flex items-center">
            Member
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </button>
          {/* Dropdown for member filter can go here */}
        </div>
      </div>
</div>
      {renderTaskSection('Not Started', notStartedTasks)}
      {renderTaskSection('In Progress', inProgressTasks)}
      {renderTaskSection('Done', doneTasks)}

      {taskData.length === 0 && (
        <div className="py-6 text-center text-gray-500">
          No tasks found.
        </div>
      )}
    </div>
  );
};

const FilterIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m9.75 8h-9.75M13.5 14a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 14h3.75m-3.75 4h6.75M19.5 18a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5" />
    </svg>
);

export default ListView;