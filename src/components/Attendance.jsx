// Attendance.jsx
import React, { useState, useEffect } from 'react';
import { attendanceData , weekDays} from './Data';
import {
  ClockIcon,
  CalendarIcon,
  UserIcon,
  UsersIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BriefcaseIcon,
  HomeIcon,
  UserCircleIcon,
  DocumentPlusIcon,
  BookOpenIcon,
  InformationCircleIcon,
  ArrowUpRightIcon } from '@heroicons/react/24/outline';
  import { ChartBarIcon } from '@heroicons/react/24/solid';
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const formatDate = (date) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const Attendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showFullLog, setShowFullLog] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);


  const getStatusDisplay = (item) => {
    if (item.status === 'holiday') return 'WFH HLDY'; // Example mapping
    if (item.status === 'weekly-off') return 'W - OFF';
    if (item.status === 'leave') return item.remote ? 'REMOTE LEAVE' : 'LEAVE';
    if (item.status === 'regularise') return 'Regularise';
    if (item.status === 'present' && item.wfh) return 'WFH';
    return item.status.charAt(0).toUpperCase() + item.status.slice(1); // Default capitalization
  };

  const getArrivalDisplay = (item) => {
    if (item.status === 'holiday' || item.status === 'weekly-off' || item.status === 'leave') return '-';
    return item.arrival ? item.arrival.split(' ')[0] : 'On Time'; // Display first part of arrival
  };

  const getLogDisplay = (item) => {
    if (item.status === 'regularise') return 'Regularise';
    if (item.hasIssue) return <span className="text-red-500">!</span>; // Example issue indicator
    if (item.isApproved) return <span className="text-green-500">✓</span>; // Example approval indicator
    return null;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      if (isClockedIn) {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isClockedIn, startTime]);

  const handleClockIn = () => {
    setIsClockedIn(true);
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    console.log('Clocked out after:', formatTime(elapsedTime));
  };

  const handleDayClick = (index) => {
    setSelectedDayIndex(index);
    // In a real application, you would fetch data for the selected day here
    console.log('Selected Day:', weekDays[index].fullDate);
  };

  const todaysDate = formatDate(currentTime);
  const formattedCurrentTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;

  const displayedLogs = showFullLog ? attendanceData : attendanceData.slice(0, 5);
  const selectedDayData = weekDays[selectedDayIndex % weekDays.length]; // Use modulo to handle potential index out of bounds

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Attendance Stats Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Attendance Stats</h3>
        <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none mr-2">
            <ChartBarIcon className="h-4 w-4" />
          </button>
          <div className="text-gray-500 text-sm">
            <InformationCircleIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="rounded-full bg-yellow-100 text-yellow-500 p-2">
                <UserIcon className="h-4 w-4" />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700">My Attendance</p>
              <p className="text-sm text-green-600 font-semibold">On Time</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">10h 25m</p>
            <p className="text-xs text-gray-500">100%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="rounded-full bg-blue-100 text-blue-500 p-2">
                <UsersIcon className="h-4 w-4" />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700">Team Attendance</p>
              <p className="text-sm text-orange-500 font-semibold">Below Avg.</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">7h 15m</p>
            <p className="text-xs text-gray-500">58%</p>
          </div>
        </div>

        <div className="flex items-center justify-between  ">
          <button className="text-indigo-500 hover:text-indigo-700 text-xs font-medium focus:outline-none flex ">
            <span>View Detailed Report</span>
          </button>
          <ArrowUpRightIcon className="text-indigo-500 hover:text-indigo-700 h-4 w-4" />
        </div>
      </div>
    </div>

        {/* Timings Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Today's Schedule</h3>
        <div className="text-gray-500 text-sm">
        <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
        </div>
      </div>
      <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-around">
        {weekDays.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(index)}
            className={`rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium ${
              selectedDayIndex === index ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } focus:outline-none`}
          >
            {day.short}
          </button>
        ))}
      </div>
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <span className="text-xs font-medium text-gray-600">{selectedDayData.fullDate}</span>
          </div>
          <span className="text-xs font-medium text-gray-600">{selectedDayData.schedule}</span>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Expected: {selectedDayData.expectedHours}</span>
            <span>Completed: {selectedDayData.completedHours}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full"
              style={{ width: selectedDayData.progress }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span className="text-xs font-medium text-gray-600">Current Time</span>
          </div>
          <span className="text-xs font-medium text-gray-600">{formattedCurrentTime}</span>
        </div>
      </div>
    </div>

        {/* Actions Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Quick Actions</h3>
        <div className="text-gray-500 text-sm">
        <InformationCircleIcon className="h-4 w-4 text-gray-500 ml-2" />
        </div>
      </div>
      <div className="px-4 py-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center space-x-4 mb-3">
  <p className="text-xl font-bold text-gray-800">
    {isClockedIn ? formatTime(elapsedTime) : formattedCurrentTime}
  </p>
  {!isClockedIn ? (
    <button
      onClick={handleClockIn}
      className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 shadow-sm flex items-center"
    >
      <ClockIcon className="h-5 w-5 mr-2" /> Clock In
    </button>
  ) : (
    <button
      onClick={handleClockOut}
      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 shadow-sm flex items-center"
    >
      <ClockIcon className="h-5 w-5 mr-2" /> Clock Out
    </button>
  )}
</div>
<p className="text-gray-600 font-medium text-sm">{todaysDate}</p>

        <div className="w-full border-t border-gray-100 pt-3">
          <div className="grid grid-cols-3 gap-2">
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <BriefcaseIcon className="h-4 w-4 mr-1" /> Shift
            </button>
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <HomeIcon className="h-4 w-4 mr-1" /> WFH
            </button>
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <UserCircleIcon className="h-4 w-4 mr-1" /> Duty
            </button>
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <DocumentPlusIcon className="h-4 w-4 mr-1" /> Partial
            </button>
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <BookOpenIcon className="h-4 w-4 mr-1" /> Policy
            </button>
            <button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium py-1.5 px-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 flex items-center justify-center">
              <CalendarIcon className="h-4 w-4 mr-1" /> Leave
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Logs & Requests Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Attendance Log</h3>
          <div className="flex space-x-2">
            <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-md transition-colors duration-150">
              Export
            </button>
            <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-md transition-colors duration-150">
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-lg border border-blue-600 focus:z-10 focus:outline-none"
            >
              Attendance Log
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none"
            >
              Calendar
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none"
            >
              Requests
            </button>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => console.log('30 DAYS')} // Replace with your actual logic
              className={`px-3 py-1 text-xs rounded-md bg-blue-600 text-white`}
            >
              30 DAYS
            </button>
            {['FEB', 'JAN', 'DEC', 'NOV', 'OCT', 'SEP'].map((month) => (
              <button
                key={month}
                onClick={() => console.log(month)} // Replace with your actual logic
                className={`px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ATTENDANCE VISUAL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                EFFECTIVE HOURS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GROSS HOURS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ARRIVAL
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                LOG
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedLogs.map((item, index) => (
              <tr key={index} className={item.status === 'weekly-off' ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {/* Placeholder for the visual attendance bar */}
                  <div className="bg-gray-200 h-4 rounded">
                    {item.presentPercentage && (
                      <div className="bg-blue-500 h-4 rounded" style={{ width: `${item.presentPercentage}%` }}></div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    {item.status === 'on-time' && (
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    )}
                    {item.status === 'present' && (
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    )}
                    {item.status === 'late' && (
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                    )}
                    {item.status === 'absent' && (
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                    )}
                    {item.status === 'weekly-off' && (
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-gray-400 mr-2"></span>
                    )}
                    <span className="capitalize">{getStatusDisplay(item)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.effectiveHours || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.grossHours || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {getArrivalDisplay(item)}
                  {item.status === 'regularise' && (
                    <div className="text-xs text-blue-500 cursor-pointer">Regularise</div>
                  )}
                  {item.arrivalDetails && (
                    <div className="relative inline-block">
                      <span className="text-blue-500 cursor-pointer">
                        {getArrivalDisplay(item) === 'On' ? 'On T' : getArrivalDisplay(item)}
                      </span>
                      {/* Implement pop-up on hover here */}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {getLogDisplay(item)}
                  {item.status !== 'weekly-off' && item.status !== 'holiday' && item.status !== 'leave' && !getLogDisplay(item) && (
                    <button className="text-blue-600 hover:text-blue-900">
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {attendanceData.length > 5 && (
        <div className="px-6 py-3 border-t border-gray-100 text-center">
          <button
            onClick={() => setShowFullLog(!showFullLog)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            {showFullLog ? (
              <>
                <ChevronUpIcon className="h-4 w-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDownIcon className="h-4 w-4 mr-1" />
                Show All ({attendanceData.length} records)
              </>
            )}
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Attendance;