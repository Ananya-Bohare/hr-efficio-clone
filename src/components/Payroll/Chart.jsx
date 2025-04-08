import React from 'react';

const Chart = ({ payrollData }) => {
    const { title, monthlyData } = payrollData.payrollCostOverview;
    const maxYValue = 15000;

    // Y-axis labels
    const yAxisLabels = ['$15k', '$12k', '$9k', '$6k', '$3k', '$0'];

    // Format number with comma as decimal separator
    const formatNumber = (num) => {
        return num.toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full p-5 mb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none">
                    More details →
                </button>
            </div>

            {/* Chart Container */}
            <div className="relative h-64 mb-8">
                {/* Y-axis Labels */}
                <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between">
                    {yAxisLabels.map((label, index) => (
                        <div key={index} className="text-xs text-gray-500 text-right pr-2">
                            {label}
                        </div>
                    ))}
                </div>

                {/* Grid Lines */}
                <div className="absolute left-10 right-0 top-0 bottom-0 flex flex-col justify-between">
                    {yAxisLabels.map((_, index) => (
                        <div key={index} className="border-t border-gray-100 w-full"></div>
                    ))}
                </div>

                {/* Stacked Bars */}
                <div className="absolute left-10 right-0 top-0 bottom-0 flex items-end justify-between px-2">
                    {monthlyData.map((data) => {
                        const costHeight = (data.cost / maxYValue) * 100;
                        const expenseHeight = (data.expense / maxYValue) * 100;
                        const total = data.cost + data.expense;
                        const costPercentage = ((data.cost / total) * 100).toFixed(1);
                        const expensePercentage = ((data.expense / total) * 100).toFixed(1);

                        return (
                            <div key={data.month} className="flex flex-col items-center h-full flex-1 group">
                                <div className="relative w-10 h-full flex flex-col justify-end">
                                    {/* Expense (top segment) */}
                                <div
                                        className="bg-indigo-400 rounded-t-sm transition-all duration-200 hover:bg-indigo-500 hover:shadow-md"
                                        style={{ height: `${expenseHeight}%` }}
                                        aria-label={`${data.month} Expense: $${data.expense}`}
                                    >
                                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {/* Tooltip is rendered on the cost segment to avoid duplication */}
                                        </div>
                                    </div>

                                    {/* Cost (bottom segment) */}
                                    <div
                                        className="bg-indigo-600 rounded-t-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md"
                                        style={{ height: `${costHeight}%` }}
                                        aria-label={`${data.month} Cost: $${data.cost}`}
                                    >
                                    </div>
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
    <div className="bg-white text-gray-800 text-sm p-3 rounded-lg shadow-xl min-w-[230px] border border-gray-300">
        <div className="font-semibold mb-2 text-center">{data.month} 2024</div>
        
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
                <div className="text-gray-700">Cost</div>
            </div>
            <div className="font-medium text-indigo-600 flex items-center">
                ${formatNumber(data.cost)}
                <svg className="w-3 h-3 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-500">{costPercentage}%</span>
            </div>
        </div>
        
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-400 mr-2"></div>
                <div className="text-gray-700">Expense</div>
            </div>
            <div className="font-medium text-indigo-400 flex items-center">
                ${formatNumber(data.expense)}
                <svg className="w-3 h-3 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-500 ">{expensePercentage}%</span>
            </div>
        </div>

        {/* Arrow at the bottom pointing upwards */}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-white"></div>
    </div>
</div>
                                    
                                </div>
                                
                                {/* X-axis Label */}
                                <span className="text-xs text-gray-500 mt-2 group-hover:text-gray-900 group-hover:font-medium transition-all">
                                    {data.month}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-8 mb-3">
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-sm bg-indigo-400 mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Expense</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-sm bg-indigo-600 mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Cost</span>
                </div>
            </div>
        </div>
    );
};

export default Chart;