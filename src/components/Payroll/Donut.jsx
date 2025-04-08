import React from 'react';
import {EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const Donut = ({ payrollData }) => {
    const { bonuses, incentives, total, title } = payrollData.bonusesAndIncentives;
    const bonusPercentage = Math.round((bonuses / total) * 100);
    const incentivePercentage = Math.round((incentives / total) * 100);

    const radius = 40;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const bonusCircumference = circumference * (bonuses / total);
    const incentiveCircumference = circumference * (incentives / total);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button className="text-gray-700 mr-4 hover:text-gray-700">
                          <EllipsisVerticalIcon className="h-6 w-6" />
                        </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#f3f4f6"
                            strokeWidth={strokeWidth}
                        />
                        
                        {/* Bonus segment */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${bonusCircumference} ${circumference}`}
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                        
                        {/* Incentive segment - starts where bonus ends */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${incentiveCircumference} ${circumference}`}
                            strokeDashoffset={`-${bonusCircumference}`}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-500">Total</span>
                        <span className="text-xl font-bold text-gray-800">${total.toLocaleString()}</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <div>
                            <div className="text-sm text-gray-600">Bonuses</div>
                            <div className="font-semibold text-blue-600">
                                ${bonuses.toLocaleString()} ({bonusPercentage}%)
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <div>
                            <div className="text-sm text-gray-600">Incentives</div>
                            <div className="font-semibold text-green-600">
                                ${incentives.toLocaleString()} ({incentivePercentage}%)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-auto"> {/* Added padding and pushed to bottom */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded focus:outline-none focus:shadow-outline">
                    More details
                </button>
            </div>
        </div>
    );
};

export default Donut;