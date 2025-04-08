import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Form = ({ isOpen, onClose, onAddProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('On Track');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      name,
      description,
      team,
      priority,
      status,
      startDate,
      endDate,
      progress: parseInt(progress, 10),
    };
    onAddProject(newProject);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setTeam('');
    setPriority('Medium');
    setStatus('On Track');
    setStartDate('');
    setEndDate('');
    setProgress(0);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-6 border w-full max-w-3xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Add New Project</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Left Column */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="team" className="block text-gray-700 text-sm font-semibold mb-2">
              Team
            </label>
            <input
              type="text"
              id="team"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-semibold mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="priority" className="block text-gray-700 text-sm font-semibold mb-2">
              Priority
            </label>
            <select
              id="priority"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Right Column */}
          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-gray-700 text-sm font-semibold mb-2">
              Status
            </label>
            <select
              id="status"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="On Track">On Track</option>
              <option value="At Risk">At Risk</option>
              <option value="Off Track">Off Track</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-semibold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="progress" className="block text-gray-700 text-sm font-semibold mb-2">
              Progress (%)
            </label>
            <input
              type="number"
              id="progress"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              min="0"
              max="100"
            />
          </div>

          {/* Actions Row - Full Width */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;