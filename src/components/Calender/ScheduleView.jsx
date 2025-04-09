import React, { useState, useEffect } from 'react';

const ScheduleView = ({ currentDate }) => {
    const [holidays, setHolidays] = useState([]);
    const year = currentDate.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const apiKey = import.meta.env.VITE_API_KEY;
                const response = await fetch(
                    `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=IN&year=${year}`
                );
                const data = await response.json();
                if (data.response && data.response.holidays) {
                    const sortedHolidays = data.response.holidays.sort((a, b) => {
                        const dateA = new Date(a.date.iso);
                        const dateB = new Date(b.date.iso);
                        return dateA - dateB;
                    });
                    setHolidays(sortedHolidays);
                }
            } catch (error) {
                console.error("Error fetching holidays:", error);
            }
        };

        fetchHolidays();
    }, [year]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const dayOfWeek = dayNames[date.getDay()];
        return `${day} ${month}, ${dayOfWeek}`;
    };

    return (
        <div className="rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
                {holidays.map(holiday => (
                    <li key={holiday.name} className="px-4 py-3 flex items-center">
                        <div className="flex-shrink-0 w-14">
                            <p className="text-sm font-semibold text-blue-500">{formatDate(holiday.date.iso).split(' ')[0]}</p>
                            <p className="text-xs text-gray-500">{formatDate(holiday.date.iso).split(' ')[1]}</p>
                            <p className="text-xs text-gray-500">{formatDate(holiday.date.iso).split(', ')[1]}</p>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900">{holiday.name}</h3>
                            <p className="text-gray-500 text-sm">All day</p>
                        </div>
                    </li>
                ))}
                {/* Example of adding a specific event (if needed) */}
                {/* <li className="px-4 py-3 flex items-center">
                    <div className="flex-shrink-0 w-14">
                        <p className="text-sm font-semibold text-blue-500">9</p>
                        <p className="text-xs text-gray-500">May</p>
                        <p className="text-xs text-gray-500">Fri</p>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Birthday of Rabindranath</h3>
                        <p className="text-gray-500 text-sm">All day</p>
                    </div>
                </li> */}
                {/* Add more specific events following the same structure */}
            </ul>
        </div>
    );
};

export default ScheduleView;