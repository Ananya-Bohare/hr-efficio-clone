import React, { useState } from 'react';
import { MagnifyingGlassIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

const TableHeader = ({ children, align = 'left' }) => (
  <th 
    scope="col" 
    className={`px-6 py-3 text-${align} text-xs font-medium text-gray-500 uppercase tracking-wider`}
  >
    {children}
  </th>
);

const PayrollDetailsModal = ({ payroll, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Payroll Details - {payroll.payrollId}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Employee</h3>
              <p className="mt-1 text-sm text-gray-900">{payroll.employeeName}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Department</h3>
              <p className="mt-1 text-sm text-gray-900">{payroll.department}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Role</h3>
              <p className="mt-1 text-sm text-gray-900">{payroll.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
              <p className="mt-1 text-sm text-gray-900">{payroll.dateTime}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Salary</h3>
              <p className="mt-1 text-sm text-gray-900">${payroll.totalSalary.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Reimbursement</h3>
              <p className="mt-1 text-sm text-gray-900">${payroll.reimbursement.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <p className="mt-1 text-sm text-gray-900">{payroll.status}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ payroll, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const statusClasses = {
    Completed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Rejected: 'bg-red-100 text-red-800'
  };

  const handleView = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
      onDelete(payroll.payrollId);
    }

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-150">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
          {payroll.payrollId}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-semibold">
                {payroll.employeeName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{payroll.employeeName}</div>
              <div className="text-sm text-gray-500">{payroll.department}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {payroll.role}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {payroll.dateTime}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
          ${payroll.totalSalary.toLocaleString()}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${payroll.reimbursement.toLocaleString()}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses[payroll.status]}`}>
            {payroll.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
          <button 
            onClick={handleView}
            className="text-indigo-600 hover:text-indigo-900 p-1 rounded-full hover:bg-indigo-50 transition-colors"
            aria-label={`View details for ${payroll.employeeName}`}
            title="View Details"
          >
            <EyeIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={handleDelete}
            className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
            aria-label={`Delete payroll ${payroll.payrollId}`}
            title="Delete"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </td>
      </tr>
      
      <PayrollDetailsModal 
        payroll={payroll} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const List = ({ payrollData, filters, onFilterChange, onDelete  }) => {
  const handleSearchChange = (e) => {
    onFilterChange('search', e.target.value);
  };

  const handleStatusChange = (e) => {
    onFilterChange('status', e.target.value);
  };

  const handleRoleChange = (e) => {
    onFilterChange('role', e.target.value);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5 gap-4">
        <h3 className="text-lg font-semibold text-gray-900">Payroll list</h3>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Employee or ID"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              aria-label="Search employees"
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
          
          <select 
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            aria-label="Filter by status"
            value={filters.status}
            onChange={handleStatusChange}
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          
          <select 
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            aria-label="Filter by role"
            value={filters.role}
            onChange={handleRoleChange}
          >
            <option>All Role</option>
            {Array.from(new Set(payrollData.payrollList.map(p => p.role))).map(role => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader>Payroll ID</TableHeader>
              <TableHeader>Employee</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Date & Time</TableHeader>
              <TableHeader>Total Salary</TableHeader>
              <TableHeader>Reimbursement</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader align="right">Action</TableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payrollData.payrollList.length > 0 ? (
              payrollData.payrollList.map((payroll) => (
                <TableRow 
                  key={payroll.payrollId} 
                  payroll={payroll} 
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  No payroll records found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;