import React from 'react';
import { calendarEvents } from '../Data'; // Adjust path as needed
import { TagIcon, PaperClipIcon } from '@heroicons/react/24/outline';

const CalendarView = () => {
  return (
    <div className="p-4 ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Team Project - Timeline</h3>

        {/* Legend */}
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>All Team</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Important</span>
          </span>
          <span>11 Meetings</span>
        </div>

        {/* Date Picker & Settings */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-gray-200 transition">
            24 Sept - 27 Sept 2024
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button className="text-gray-500 hover:text-gray-700 transition">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-2h12M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-4 gap-4">
        {calendarEvents.map((dayData, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">{dayData.day}</h4>

            <div className="space-y-3">
              {dayData.events.map((event, eventIndex) => (
                <div key={eventIndex} className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                  {/* Event Title */}
                  <h5 className="text-sm font-semibold text-indigo-600">{event.title}</h5>
                  <p className="text-xs text-gray-500">{event.time}</p>
                  <p className="text-xs text-gray-700">{event.description?.substring(0, 60)}</p>

                  {/* Tags & Materials */}
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    {event.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                    {event.materials && (
                      <span className="flex items-center">
                        <PaperClipIcon className="h-3 w-3 mr-1" />
                        Materials
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  {event.action && (
                    <button className="mt-3 bg-indigo-500 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-600 transition">
                      {event.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
