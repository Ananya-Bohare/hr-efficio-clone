import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assignees as staticEmployees } from '../Data'; // Import the static employee data

const AddPayrollModal = ({ isOpen, onClose, onAddPayroll }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    baseSalary: '',
    bonus: '',
    deductions: '',
    reimbursement: '',
    notes: '',
  });

  // Use the imported static employee data
  const [employees, setEmployees] = useState(staticEmployees);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.employeeId) {
      alert('Please select an employee');
      return;
    }

    const selectedEmployee = employees.find((emp) => emp.id === formData.employeeId);

    if (!selectedEmployee) {
      alert('Selected employee not found');
      return;
    }

    const newPayroll = {
      employeeName: selectedEmployee.name,
      department: selectedEmployee.department,
      role: selectedEmployee.role,
      totalSalary:
        parseFloat(formData.baseSalary || 0) +
        parseFloat(formData.bonus || 0) -
        parseFloat(formData.deductions || 0),
      reimbursement: parseFloat(formData.reimbursement || 0),
      notes: formData.notes,
    };

    onAddPayroll(newPayroll);
    setFormData({
      employeeId: '',
      baseSalary: '',
      bonus: '',
      deductions: '',
      reimbursement: '',
      notes: '',
    });
    onClose(); // Close the modal after adding payroll
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Add New Payroll</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employee
              </label>
              <select
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Employee</option>
                {employees.length > 0 ? (
                  employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                       {employee.name}
                     </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No employees available
                  </option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Base Salary ($)
              </label>
              <input
                type="number"
                name="baseSalary"
                value={formData.baseSalary}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bonus ($)
              </label>
              <input
                type="number"
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deductions ($)
              </label>
              <input
                type="number"
                name="deductions"
                value={formData.deductions}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reimbursement ($)
              </label>
              <input
                type="number"
                name="reimbursement"
                value={formData.reimbursement}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayrollModal;