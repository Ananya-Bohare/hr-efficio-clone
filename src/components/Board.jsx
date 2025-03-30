import React from 'react';
import { taskData } from '../Data'; // Adjust the path as needed
import { UserCircleIcon, TagIcon } from '@heroicons/react/24/outline';

const BoardView = () => {
  const todoTasks = taskData.filter(task => task.status === 'To Do');
  const inProgressTasks = taskData.filter(task => task.status === 'In Progress');
  const inReviewTasks = taskData.filter(task => task.status === 'In Review');
  const completedTasks = taskData.filter(task => task.status === 'Completed' || task.status === 'Done'); // Include 'Done' as well

  const renderTaskCard = (task) => (
    <div key={task.id} className="bg-white rounded-md shadow-sm p-4 mb-4 border border-gray-100 cursor-grab">
      <div className="flex items-center justify-between mb-2">
        {task.priority === 'High' && (
          <TagIcon className="h-4 w-4 text-red-500 mr-1" />
        )}
        {task.priority === 'Urgent' && (
          <TagIcon className="h-4 w-4 text-orange-500 mr-1" />
        )}
        {task.priority === 'Medium' && (
          <TagIcon className="h-4 w-4 text-yellow-500 mr-1" />
        )}
        {task.priority === 'Low' && (
          <TagIcon className="h-4 w-4 text-green-500 mr-1" />
        )}
        <span className="text-xs text-gray-500">{task.type}</span>
        <span className="text-xs text-gray-500">{task.timelineDate ? task.timelineDate.split('-')[1]?.trim() : 'D - ???'}</span> {/* Example for D - ??? */}
      </div>
      <h4 className="text-sm font-semibold text-gray-800 mb-2">{task.title}</h4>
      <p className="text-xs text-gray-600 mb-2">{task.description?.substring(0, 80)}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          {task.assignees && task.assignees.slice(0, 3).map((assignee, index) => (
            <img
              key={index}
              src={assignee.avatar} // Assuming you've handled avatar paths correctly
              alt={assignee.name}
              className="h-5 w-5 rounded-full object-cover"
            />
          ))}
          {task.assignees && task.assignees.length > 3 && (
            <span className="rounded-full bg-gray-200 h-5 w-5 flex items-center justify-center text-xs">+ {task.assignees.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderColumn = (title, tasks) => (
    <div key={title} className="w-64 bg-gray-100 rounded-md p-4 flex-shrink-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-md font-semibold text-gray-700">{title}</h3>
        <span className="text-sm text-gray-500">{tasks.length}</span>
      </div>
      <div className="space-y-3">
        {tasks.map(renderTaskCard)}
        <button className="w-full text-sm text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-center">
          + Add new
        </button>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 p-4">
        {renderColumn('To Do', todoTasks)}
        {renderColumn('On Progress', inProgressTasks)}
        {renderColumn('In Review', inReviewTasks)}
        {renderColumn('Completed', completedTasks)}
      </div>
    </div>
  );
};

export default BoardView;