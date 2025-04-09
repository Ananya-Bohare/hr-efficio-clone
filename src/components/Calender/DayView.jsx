import React from 'react';
import {
    PlusIcon,
} from '@heroicons/react/24/outline';

const DayView = ({ currentDate, events, openNewEventModal }) => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const dayOfWeek = currentDate.getDay();

    // Get current time position for the red indicator line
    const now = new Date();
    const isToday = now.toDateString() === currentDate.toDateString();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const getEventsForHour = (hour) => {
        const startOfHour = new Date(currentDate);
        startOfHour.setHours(hour, 0, 0, 0);
        const endOfHour = new Date(currentDate);
        endOfHour.setHours(hour + 1, 0, 0, 0);

        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === currentDate.toDateString() && 
                   eventDate.getHours() === hour;
        });
    };

    const getEventPosition = (eventDate) => {
        const minutes = eventDate.getHours() * 60 + eventDate.getMinutes();
        return (minutes / 1440) * 100; // 1440 minutes in a day
    };

    const getEventHeight = (startDate, endDate) => {
        const duration = (endDate - startDate) / (1000 * 60); // duration in minutes
        return (duration / 1440) * 100; // percentage of day
    };

    return (
        <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Day Header */}
            <div className="bg-gray-50 py-3 px-4 border-b flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                        {day}
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{dayNames[dayOfWeek]}</h2>
                        <p className="text-sm text-gray-500">
                            {monthNames[month]} {day}, {year}
                        </p>
                    </div>
                </div>
                <div className="text-sm text-gray-500">
                    GMT+05:30
                </div>
            </div>

            {/* Timeline View */}
            <div className="relative h-[calc(100vh-180px)] overflow-y-auto">
                {/* Current Time Indicator */}
                {isToday && (
                    <div 
                        className="absolute left-0 right-0 h-0.5 bg-red-500 z-10"
                        style={{ top: `${(currentMinutes / 1440) * 100}%` }}
                    >
                        <div className="absolute -left-1 -top-1.5 w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                )}

                {/* Hourly Grid */}
                {hours.map(hour => (
                    <div key={hour} className="flex items-start border-b border-gray-100">
                        {/* Time Label */}
                        <div className="w-16 px-3 py-2 text-right text-xs text-gray-500 font-medium">
                            {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                        </div>

                        {/* Hour Slot */}
                        <div 
                            className="flex-1 h-16 relative border-l border-gray-100"
                            onClick={() => {
                                const newDateTime = new Date(currentDate);
                                newDateTime.setHours(hour, 0, 0, 0);
                                openNewEventModal(newDateTime);
                            }}
                        >
                            {/* Half-hour marker */}
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-100"></div>

                            {/* Events for this hour */}
                            {getEventsForHour(hour).map(event => {
                                const eventDate = new Date(event.date);
                                const endDate = new Date(eventDate.getTime() + (event.duration || 30) * 60000);
                                const top = getEventPosition(eventDate);
                                const height = getEventHeight(eventDate, endDate);

                                return (
                                    <div
                                        key={event.id}
                                        className="absolute left-1 right-1 rounded-md bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs p-1 overflow-hidden"
                                        style={{ 
                                            top: `${top}%`,
                                            height: `${height}%`,
                                            zIndex: 5
                                        }}
                                        title={`${event.title}\n${eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                    >
                                        <div className="font-medium truncate">{event.title}</div>
                                        <div className="text-indigo-600 text-xxs truncate">
                                            {eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Event Floating Button (mobile) */}
            <div className="md:hidden fixed bottom-6 right-6">
                <button
                    onClick={() => openNewEventModal(new Date())}
                    className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors"
                >
                    <PlusIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default DayView;