import React, { useState } from 'react';
import { payrollData as initialPayrollData } from '../Data';
import { PlusIcon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Cards from './Cards';
import Donut from './Donut';
import Chart from './Chart';
import List from './List';
import AddPayrollModal from './AddPayrollModal';

const Payroll = () => {
  const [payrollData, setPayrollData] = useState({
    ...initialPayrollData,
    stats: initialPayrollData.stats || {
      totalPayroll: 0,
      pending: 0,
      completed: 0
    }
  });
  
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    status: 'All Status',
    role: 'All Role'
  });

  // Handle adding new payroll
  const handleAddPayroll = (newPayroll) => {
    const updatedPayrollList = [
      ...payrollData.payrollList,
      {
        ...newPayroll,
        payrollId: `PY-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        status: 'Pending',
        dateTime: new Date().toLocaleString()
      }
    ];
  
    setPayrollData(prev => ({
      ...prev,
      payrollList: updatedPayrollList,
      stats: {
        ...prev.stats,
        totalPayroll: prev.stats.totalPayroll + (newPayroll.totalSalary || 0),
        pending: prev.stats.pending + 1
      }
    }));
  
    setIsAddModalOpen(false);
  };
  
  // ✅ Moved outside
  const handleDelete = (payrollId) => {
    const updatedPayrollList = payrollData.payrollList.filter(p => p.payrollId !== payrollId);
    const deletedPayroll = payrollData.payrollList.find(p => p.payrollId === payrollId);
  
    setPayrollData(prev => ({
      ...prev,
      payrollList: updatedPayrollList,
      stats: {
        ...prev.stats,
        totalPayroll: prev.stats.totalPayroll - (deletedPayroll?.totalSalary || 0),
        pending: deletedPayroll?.status === 'Pending' ? prev.stats.pending - 1 : prev.stats.pending,
        completed: deletedPayroll?.status === 'Completed' ? prev.stats.completed - 1 : prev.stats.completed
      }
    }));
  };
  

  // Handle export functionality
  const handleExport = () => {
    const headers = ['Payroll ID', 'Employee Name', 'Role', 'Salary', 'Status', 'Date & Time'];
    
    const csvRows = [
      headers.join(','), // header row
      ...payrollData.payrollList.map(p => [
        p.payrollId,
        `"${p.employeeName}"`, // quote in case of commas
        p.role,
        p.totalSalary,
        p.status,
        p.dateTime
      ].join(','))
    ];
  
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'payroll_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  // Filter payroll data based on current filters
  const filteredPayrollList = payrollData.payrollList.filter(payroll => {
    const matchesSearch = 
      (payroll.employeeName?.toLowerCase() || '').includes(filters.search.toLowerCase()) ||
      (payroll.payrollId?.toLowerCase() || '').includes(filters.search.toLowerCase());
    
    const matchesStatus = filters.status === 'All Status' || payroll.status === filters.status;
    const matchesRole = filters.role === 'All Role' || payroll.role === filters.role;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Announcement Banner */}
      {showAnnouncement && (
        <div className="relative bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-start">
            <div className="flex-2">
              <strong className="font-semibold">Important: </strong>
              Payroll submission for the current pay period is due in 2 days. 
              Review and finalize all employee payroll details.
            </div>
            <button 
              className="ml-40 text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none"
              aria-label="More details"
            >
              MORE DETAILS
            </button>
          </div>
          <button 
            className="absolute top-3 right-3 text-blue-400 hover:text-blue-600 focus:outline-none"
            aria-label="Close announcement"
            onClick={() => setShowAnnouncement(false)}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payroll Management</h1>
          <p className="text-gray-500">Process and manage employee compensation</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button 
            onClick={handleExport}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-colors"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New Payroll
          </button>
        </div>
      </div>

      {/* Add Payroll Modal */}
      <AddPayrollModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPayroll={handleAddPayroll}
      />

      {/* Components */}
      <Cards payrollData={payrollData} />
      
      {/* Combined Chart and Donut Row */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6 h-full">
        <div className="lg:w-2/3">
          <Chart payrollData={payrollData} />
        </div>
        <div className="lg:w-1/3">
          <Donut payrollData={payrollData} />
        </div>
      </div>
      
      <List 
        payrollData={{
          ...payrollData,
          payrollList: filteredPayrollList
        }}
        filters={filters}
        onFilterChange={handleFilterChange}
        onDelete={handleDelete} 
      />
    </div>
  );
};

export default Payroll;