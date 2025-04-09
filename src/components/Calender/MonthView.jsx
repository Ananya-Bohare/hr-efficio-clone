import React from 'react';

const MonthView = ({ currentDate, events, openNewEventModal, holidays, highlightedDate, filter }) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const daysFromPrevMonth = firstDayOfMonth.getDay();
    const daysInCurrentMonth = lastDayOfMonth.getDate();

    const days = [];

    // Previous Month Days
    for (let i = 0; i < daysFromPrevMonth; i++) {
        const day = prevMonthLastDay - daysFromPrevMonth + 1 + i;
        days.push({ day, date: new Date(year, month - 1, day), isOutsideMonth: true });
    }

    // Current Month Days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const date = new Date(year, month, i);
        const dateISO = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days.push({
            day: i,
            date,
            isOutsideMonth: false,
            isHoliday: holidays[dateISO],
        });
    }

    // Next Month Days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
        days.push({ day: i, date: new Date(year, month + 1, i), isOutsideMonth: true });
    }

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const getEventsForDay = (date) => {
        if (!date) return [];
        const dateISO = date.toISOString().split('T')[0];
        return events.filter(event => event.date === dateISO);
    };

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const isWeekend = (date) => {
        return !isWeekday(date);
    };

    const filteredDays = days.filter(dayInfo => {
        if (!dayInfo.date) return false;
        if (filter === 'weekdays' && dayInfo.isOutsideMonth === false) {
            return isWeekday(dayInfo.date);
        }
        if (filter === 'weekends' && dayInfo.isOutsideMonth === false) {
            return isWeekend(dayInfo.date);
        }
        return true;
    });

    return (
        <div className="grid grid-cols-7 gap-0 border rounded-lg shadow-sm">
            {dayNames.map(day => (
                <div key={day} className="py-2 text-center text-sm font-semibold text-gray-700 bg-gray-50 border-b">
                    {day}
                </div>
            ))}
            {filteredDays.map((dayInfo, index) => (
                <div
                    key={index}
                    className={`relative border-r border-b p-2 min-h-24 sm:min-h-32 hover:bg-gray-100 cursor-pointer transition-colors duration-150 ${
                        dayInfo.isOutsideMonth ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700'
                    } ${
                        dayInfo.date && new Date().toDateString() === dayInfo.date.toDateString() && !dayInfo.isOutsideMonth ? 'ring-2 ring-indigo-500' : ''
                    } ${
                        highlightedDate && dayInfo.date && highlightedDate.toDateString() === dayInfo.date.toDateString() && !dayInfo.isOutsideMonth ? 'bg-indigo-100' : ''
                    }`}
                    onClick={() => !dayInfo.isOutsideMonth && openNewEventModal(dayInfo.date)}
                >
                    <div className="flex justify-center items-center w-6 h-6 rounded-full text-sm font-medium absolute top-1 right-1">
                        {!dayInfo.isOutsideMonth && dayInfo.day}
                        {dayInfo.date && new Date().toDateString() === dayInfo.date.toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="w-2 h-2 rounded-full bg-red-500 absolute bottom-1 left-1"></div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 9).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="w-2 h-2 rounded-full bg-blue-500 absolute bottom-1 left-1"></div>
                        )}
                    </div>
                    {dayInfo.isHoliday && (
                        <div className="text-xs text-red-500 mt-1">{dayInfo.isHoliday}</div>
                    )}
                    <div className="mt-2 overflow-hidden">
                        {getEventsForDay(dayInfo.date).map(event => (
                            <div
                                key={event.id}
                                className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate"
                                title={event.title}
                            >
                                {event.title}
                            </div>
                        ))}
                        {/* Example Holiday Events (adjust based on your holiday data and styling) */}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 2, 30).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Chaitra Sukhladi</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 2, 31).toDateString() && !dayInfo.isOutsideMonth && (
                            <>
                                <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Ramzan Id</div>
                                <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Gudi Padwa</div>
                                <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Ugadi</div>
                            </>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 6).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Rama Navami</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 10).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Mahavir Jayanti</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 13).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Vaisakhi</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 14).toDateString() && !dayInfo.isOutsideMonth && (
                            <>
                                <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Ambedkar Jayanti</div>
                                <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Mesadi</div>
                            </>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 15).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Bahag Bihu/Vaisakhadi</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 18).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Good Friday</div>
                        )}
                        {dayInfo.date && dayInfo.date.toDateString() === new Date(2025, 3, 20).toDateString() && !dayInfo.isOutsideMonth && (
                            <div className="bg-green-500 text-white text-xs rounded-sm py-0.5 px-1 mb-0.5 w-full truncate">Easter Day</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MonthView;