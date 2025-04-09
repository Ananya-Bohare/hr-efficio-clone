import React, { useState } from 'react';
import profile from '../assets/profile.jpg';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  InboxIcon,
  CalendarDaysIcon,
  FolderIcon,
  UserIcon,
  ClockIcon,
  CreditCardIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Employees from './Employees';
import Attendance from './Attendance';
import Tasks from './Task/Tasks';
import Inbox from './Inbox';
import Calender from './Calender/Calender';
import Payroll from './Payroll/Payroll';
import Hiring from './Hiring';
import Projects from './Projects/Projects';
import { Link } from 'react-router-dom'; 

const Sidebar = ({ onLinkClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white h-screen flex flex-col border-r border-gray-200 flex-shrink-0 transition-all duration-300 overflow-hidden`}>
      {/* Header with logo */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        {isCollapsed ? (
          <div className="flex items-center justify-center w-full">
            <PlusIcon className="h-6 w-6 text-blue-500" />
            <AdjustmentsHorizontalIcon 
              className="h-5 w-5 text-gray-600 cursor-pointer ml-2" 
              onClick={toggleSidebar} 
            />
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-xl font-bold text-cyan-700"> {/* Wrap with Link */}
                <PlusIcon className="h-7 w-7 mr-2 text-blue-500" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                  Efficio HR
                  </span>
              </Link>
            </div>
            <AdjustmentsHorizontalIcon 
              className="h-5 w-5 text-gray-600 cursor-pointer" 
              onClick={toggleSidebar} 
            />
          </>
        )}
      </div>

      {/* User profile */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center p-3' : 'justify-between p-3'} border-b border-gray-200`}>
        {isCollapsed ? (
          <img src={profile} alt="Avatar" className="rounded-lg w-10 h-10" />
        ) : (
          <>
            <div className="flex items-center">
              <img src={profile} alt="Avatar" className="rounded-lg w-10 h-10 mr-2" />
              <div>
                <p className="text-sm font-semibold">Arnold Smith</p>
                <p className="text-xs text-gray-500">arnoldsmith@gmail.com</p>
              </div>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-1 py-1 overflow-y-auto">
        {/* Main Menu */}
        <div className="mb-2">
          {!isCollapsed && <h3 className="text-md font-medium text-gray-500 mb-1 px-2">Main Menu</h3>}
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onLinkClick(null)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Dashboard"
              >
                <HomeIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Dashboard</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Tasks />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Tasks"
              >
                <ClipboardDocumentListIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Tasks</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Inbox />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Inbox"
              >
                <InboxIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Inbox</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Calender />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Calendar"
              >
                <CalendarDaysIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Calendar</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Projects />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Projects"
              >
                <FolderIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Projects</span>}
              </button>
            </li>
          </ul>
        </div>

        {/* HR Management */}
        <div className="mb-2">
          {!isCollapsed && <h3 className="text-md font-medium text-gray-500 mb-1 px-2">HR Management</h3>}
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onLinkClick(<Employees />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Employees"
              >
                <UserIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Employees</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Attendance />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Attendance"
              >
                <ClockIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Attendance</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Payroll />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Payroll"
              >
                <CreditCardIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Payroll</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => onLinkClick(<Hiring />)}
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Hiring"
              >
                <BriefcaseIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Hiring</span>}
              </button>
            </li>
          </ul>
        </div>

        {/* Analytics & Reports */}
        <div className="mb-2">
          {!isCollapsed && <h3 className="text-md font-medium text-gray-500 mb-1 px-2">Analytics & Reports</h3>}
          <ul className="space-y-1">
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Settings"
              >
                <Cog6ToothIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Settings</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title="Help & Support"
              >
                <QuestionMarkCircleIcon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2 text-sm">Help & Support</span>}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Logout */}
      <div className="p-1.5 border-t border-gray-200">
        <a 
          href="#" 
          className={`flex items-center p-2 rounded-md hover:bg-gray-100 w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
          title="Log Out"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2 text-sm">Log Out</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;