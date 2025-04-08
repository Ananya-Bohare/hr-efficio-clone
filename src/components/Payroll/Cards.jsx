import React from 'react';

const MetricCard = ({ title, value, change, color }) => {
  const colorClasses = {
    indigo: 'text-indigo-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    blue: 'text-blue-600'
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className={`text-2xl font-semibold ${colorClasses[color] || 'text-gray-900'}`}>{value}</p>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
};

const Cards = ({ payrollData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <MetricCard 
        title="Payrolls Cost" 
        value={`$${payrollData.payrollCost.toLocaleString()}`} 
        change={payrollData.payrollCostChange}
        color="indigo"
      />
      <MetricCard 
        title="Total Expense" 
        value={`$${payrollData.totalExpense.toLocaleString()}`} 
        change={payrollData.totalExpenseChange}
        color="green"
      />
      <MetricCard 
        title="Pending payments" 
        value={`$${payrollData.pendingPayments.toLocaleString()}`} 
        change={payrollData.pendingPaymentsChange}
        color="yellow"
      />
      <MetricCard 
        title="Total Payrolls" 
        value={payrollData.totalPayrolls} 
        change={payrollData.newEmployees}
        color="blue"
      />
    </div>
  );
};

export default Cards;