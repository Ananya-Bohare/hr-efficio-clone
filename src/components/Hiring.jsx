import React, { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon, ChevronDownIcon, BriefcaseIcon, UserGroupIcon, CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import {  hiringData as initialHiringData } from './Data'; // Import from Data.js
import AddPositionForm from './AddPositionForm';
const Hiring = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [isAddPositionFormOpen, setIsAddPositionFormOpen] = useState(false);
  const [hiringData, setHiringData] = useState(initialHiringData);

  const handleOpenAddPositionForm = () => {
    setIsAddPositionFormOpen(true);
  };

  const handleCloseAddPositionForm = () => {
    setIsAddPositionFormOpen(false);
  };

  const handleAddPosition = (newPosition) => {
    const updatedHiringData = {
      ...hiringData,
      positions: [...hiringData.positions, { ...newPosition, id: Date.now() }], // Assign a temporary ID
    };
    setHiringData(updatedHiringData);
    handleCloseAddPositionForm();
  };

  // Extract positions from hiringData
  const positions = hiringData.positions || [];
  const stats = hiringData.stats || {};

  // Get unique values for filters
  const departments = [...new Set(positions.map(position => position.department))];
  const statuses = [...new Set(positions.map(position => position.status))];
  const types = [...new Set(positions.map(position => position.type))];

  // Filter positions based on search and filters
  const filteredPositions = positions.filter(position => {
    const matchesSearch = 
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.hiringManager.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || position.status === statusFilter;
    const matchesDepartment = departmentFilter === 'All' || position.department === departmentFilter;
    const matchesType = typeFilter === 'All' || position.type === typeFilter;

    return matchesSearch && matchesStatus && matchesDepartment && matchesType;
  });

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-800';

    switch(status) {
      case 'Active':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        break;
      case 'On Hold':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        break;
      case 'Closed':
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        break;
      default:
        break;
    }

    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => {
    let bgColor = 'bg-green-500';
    if (progress < 30) bgColor = 'bg-red-500';
    else if (progress < 70) bgColor = 'bg-yellow-500';

    return (
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${bgColor}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-500 ml-2">{progress}%</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hiring Dashboard</h1>
          <p className="text-gray-500">Manage open positions and candidates</p>
        </div>
        <button 
        onClick={handleOpenAddPositionForm}
        className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          New Position
        </button>
      </div>

      <AddPositionForm
        isOpen={isAddPositionFormOpen}
        onClose={handleCloseAddPositionForm}
        onAddPosition={handleAddPosition}
        departments={departments}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          icon={<BriefcaseIcon className="h-6 w-6 text-indigo-600" />}
          title="Open Positions"
          value={stats.openPositions || 0}
          change={stats.openPositionsChange || '+0'}
          color="indigo"
        />
        <StatCard 
          icon={<UserGroupIcon className="h-6 w-6 text-green-600" />}
          title="Total Applicants"
          value={stats.totalApplicants || 0}
          change={stats.totalApplicantsChange || '+0'}
          color="green"
        />
        <StatCard 
          icon={<CheckCircleIcon className="h-6 w-6 text-blue-600" />}
          title="Hiring Rate"
          value={stats.hiringRate || '0%'}
          change={stats.hiringRateChange || '+0%'}
          color="blue"
        />
        <StatCard 
          icon={<ClockIcon className="h-6 w-6 text-yellow-600" />}
          title="Avg Time to Hire"
          value={stats.avgTimeToHire || '0 days'}
          change={stats.avgTimeToHireChange || '+0 days'}
          color="yellow"
        />
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search positions, departments, or managers..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <FilterDropdown 
              options={['All', ...statuses]}
              value={statusFilter}
              onChange={setStatusFilter}
              label="Status"
            />
            <FilterDropdown 
              options={['All', ...departments]}
              value={departmentFilter}
              onChange={setDepartmentFilter}
              label="Department"
            />
            <FilterDropdown 
              options={['All', ...types]}
              value={typeFilter}
              onChange={setTypeFilter}
              label="Type"
            />
          </div>
        </div>
      </div>

      {/* Positions Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        {filteredPositions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableHeader>Position</TableHeader>
                  <TableHeader>Department</TableHeader>
                  <TableHeader>Applicants</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Progress</TableHeader>
                  <TableHeader>Posted</TableHeader>
                  <TableHeader align="right">Actions</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPositions.map((position) => (
                  <tr key={position.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{position.title}</div>
                      <div className="text-sm text-gray-500">{position.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {position.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{position.applicants}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={position.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ProgressBar progress={position.progress} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {new Date(position.posted).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState onAddNew={handleOpenAddPositionForm}  />
        )}
      </div>
    </div>
  );
};

// Reusable Components

const StatCard = ({ icon, title, value, change, color }) => {
  const colorClasses = {
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600' }
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className={`text-2xl font-semibold ${colorClasses[color].text}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color].bg}`}>
          {icon}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{change} from last month</p>
    </div>
  );
};

const FilterDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-40"
      >
        {value}
        <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map(option => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                value === option ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const TableHeader = ({ children, align = 'left' }) => (
  <th 
    scope="col" 
    className={`px-6 py-3 text-${align} text-xs font-medium text-gray-500 uppercase tracking-wider`}
  >
    {children}
  </th>
);

const EmptyState = ({ onAddNew }) => (
  <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
    <div className="mx-auto h-12 w-12 text-gray-400">
      <BriefcaseIcon className="h-full w-full" />
    </div>
    <h3 className="mt-2 text-sm font-medium text-gray-900">No positions found</h3>
    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
    <div className="mt-6">
      <button
        onClick={onAddNew}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
        New Position
      </button>
    </div>
  </div>
);

export default Hiring;