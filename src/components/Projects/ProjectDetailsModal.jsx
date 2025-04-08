import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-6 border w-full max-w-lg shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Project Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Project Name</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">{project.name}</dd>
          </div>
          {project.description && (
            <div>
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-gray-700">{project.description}</dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-medium text-gray-500">Team</dt>
            <dd className="mt-1 text-gray-700">{project.team}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Priority</dt>
            <dd className="mt-1 text-gray-700">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                project.priority === 'High' ? 'bg-red-100 text-red-800' :
                project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                project.priority === 'Low' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.priority}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-gray-700">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                project.status === 'On Track' ? 'bg-green-100 text-green-800' :
                project.status === 'At Risk' ? 'bg-yellow-100 text-yellow-800' :
                project.status === 'Off Track' ? 'bg-red-100 text-red-800' :
                project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Start Date</dt>
            <dd className="mt-1 text-gray-700">{new Date(project.startDate).toLocaleDateString()}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">End Date</dt>
            <dd className="mt-1 text-gray-700">{new Date(project.endDate).toLocaleDateString()}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Progress</dt>
            <dd className="mt-1 text-gray-700">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      project.progress < 30 ? 'bg-red-500' :
                      project.progress < 70 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 ml-2">{project.progress}%</span>
              </div>
            </dd>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;