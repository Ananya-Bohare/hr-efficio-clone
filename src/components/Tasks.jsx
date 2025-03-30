import React, { useState } from 'react';
import BoardView from './Board'; 
import ListView from './List';   
import CalendarView from './Calender'; 
import {
  Squares2X2Icon,
  Bars4Icon,
  CalendarDaysIcon,
  SquaresPlusIcon, // Example for Board icon
  ShareIcon,
  PlusIcon,
  BellAlertIcon,
  UserPlusIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import AddTaskForm from './AddTaskForm';
import { taskData } from '../Data';

const Tasks = () => {
  const [activeView, setActiveView] = useState('Calendar');
  const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);
  const [tasks, setTasks] = useState(taskData); 

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const openAddTaskForm = () => {
    setIsAddTaskFormOpen(true);
  };

  const closeAddTaskForm = () => {
    setIsAddTaskFormOpen(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    // In a real application, you would likely send this data to your backend
    console.log('New Task Added:', newTask);
  };


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Good Morning, Arnold Smith ✨</h2>
          <p className="text-gray-600 text-sm">Monday, 28 March 2025</p>
        </div>
        <div className="flex items-center space-x-4">
          <BellAlertIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <UserPlusIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          <Cog6ToothIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* View Navigation */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <button
              onClick={() => handleViewChange('Board')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                activeView === 'Board' ? 'bg-indigo-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <SquaresPlusIcon className="h-4 w-4 mr-1" />
              Board
            </button>
            <button
              onClick={() => handleViewChange('List')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                activeView === 'List' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Bars4Icon className="h-4 w-4 mr-1" />
              List
            </button>
            <button
              onClick={() => handleViewChange('Calendar')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                activeView === 'Calendar' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CalendarDaysIcon className="h-4 w-4 mr-1" />
              Calendar
            </button>
            
          </div>
          <div className="flex items-center space-x-2">
            <ShareIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            onClick={openAddTaskForm}>
              <PlusIcon className="text-white h-4 w-4 mr-1" />Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Task View Area */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeView === 'Board' && <BoardView />}
        {activeView === 'List' && <ListView />}
        {activeView === 'Calendar' && <CalendarView />}
      </div>
      {isAddTaskFormOpen && (
        <AddTaskForm onClose={closeAddTaskForm} onAddTask={handleAddTask} />
      )}
    </div>
  );
};

export default Tasks;