import React from 'react';

const YearView = ({ currentDate, events, openNewEventModal }) => {
    const year = currentDate.getFullYear();
    const months = Array.from({ length: 12 }, (_, i) => i);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
    };

    const getEventsForDay = (date) => {
        if (!date) return [];
        const dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        return events.filter(event => event.date === dateISO);
    };

    return (
        <div className="grid grid-cols-4 gap-4 p-4 rounded-lg shadow-sm">
            {months.map(month => (
                <div key={month} className="border rounded-md p-2">
                    <h3 className="text-lg font-semibold text-center mb-2">{monthNames[month]}</h3>
                    <div className="grid grid-cols-7 gap-1 text-xs text-gray-600">
                        {dayNames.map(day => (
                            <div key={day} className="text-center">{day}</div>
                        ))}
                        {/* Pad the start of the month with empty cells */}
                        {Array.from({ length: getFirstDayOfMonth(month, year) }, (_, i) => (
                            <div key={`empty-${month}-${i}`} className="" />
                        ))}
                        {/* Render the days of the month */}
                        {Array.from({ length: getDaysInMonth(month, year) }, (_, dayIndex) => {
                            const day = dayIndex + 1;
                            const date = new Date(year, month, day);
                            const isCurrentDay = new Date().toDateString() === date.toDateString();
                            const hasEvents = getEventsForDay(date).length > 0;

                            return (
                                <div
                                    key={`day-${month}-${day}`}
                                    className={`text-center py-1 rounded-full cursor-pointer hover:bg-gray-100 ${
                                        isCurrentDay ? 'bg-blue-500 text-white font-semibold' : ''
                                    } ${hasEvents ? 'font-semibold text-green-700' : ''}`}
                                    onClick={() => openNewEventModal(date)}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YearView;