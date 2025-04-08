import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AddPositionForm = ({ isOpen, onClose, onAddPosition, departments }) => {
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState(departments[0] || ''); // Default to the first department
  const [hiringManager, setHiringManager] = useState('');
  const [type, setType] = useState('Full-time');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPosition = {
      title,
      department,
      hiringManager,
      type,
      status,
      applicants: 0, // Initialize applicants to 0
      posted: new Date().toISOString().split('T')[0], // Set current date as posted date
      progress: 0, // Initialize progress to 0
    };
    onAddPosition(newPosition);
    // Reset form fields
    setTitle('');
    setHiringManager('');
    setType('Full-time');
    setStatus('Active');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-6 border w-full max-w-md shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Add New Position</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Position Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="hiringManager" className="block text-sm font-medium text-gray-700">
              Hiring Manager
            </label>
            <input
              type="text"
              id="hiringManager"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={hiringManager}
              onChange={(e) => setHiringManager(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Position Type
            </label>
            <select
              id="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="On Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Position
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPositionForm;