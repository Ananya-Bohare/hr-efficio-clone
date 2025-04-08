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
<<<<<<< HEAD

const Sidebar = () => {
=======
import Employees from './Employees';
import Attendance from './Attendance';
import Tasks from './Task/Tasks';
import Inbox from './Inbox';
import Calender from './Calender';
import Payroll from './Payroll/Payroll'
import Hiring from './Hiring'
import Projects from './Projects/Projects'


const Sidebar = ({ onLinkClick }) => {
>>>>>>> e34ec79 (first commit)
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
<<<<<<< HEAD
    <aside className="w-80 bg-white h-screen flex flex-col border-r-4 border-gray-200 ">
      <div className="flex items-center justify-between p-5 border-b border-gray-200">
        <div className="flex items-center">
          <PlusIcon className="h-6 w-6 text-blue-500 mr-2" /> {/* Increased icon size */}
          <span className="text-lg font-semibold">Efficio</span>
        </div>
        <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-600 cursor-pointer" onClick={toggleSidebar} /> {/* Increased icon size */}
      </div>

      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center">
          <img src={profile} alt="Avatar" className="rounded-lg w-10 h-10 mr-2" /> {/* Increased image size */}
          <div>
            <p className="text-sm font-semibold">Arnold Smith</p>
            <p className="text-xs text-gray-500">arnoldsmith@gmail.com</p>
          </div>
        </div>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>

      <nav className="flex-grow px-3 py-2">
        <div className="mb-3">
          <h3 className="text-md font-medium text-gray-500 mb-2">Main Menu</h3>
          <ul className="space-y-0.5">
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <HomeIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <ClipboardDocumentListIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Tasks</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <InboxIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Inbox</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <CalendarDaysIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Calendar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <FolderIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Projects</span>
              </a>
=======
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
              <PlusIcon className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-lg font-semibold">Efficio</span>
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
>>>>>>> e34ec79 (first commit)
            </li>
          </ul>
        </div>

<<<<<<< HEAD
        <div className="mb-3">
          <h3 className="text-md font-medium text-gray-500 mb-2">HR Management</h3>
          <ul className="space-y-0.5">
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <UserIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Employees</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <ClockIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Attendance</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <CreditCardIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Payroll</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <BriefcaseIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Hiring</span>
              </a>
=======
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
>>>>>>> e34ec79 (first commit)
            </li>
          </ul>
        </div>

<<<<<<< HEAD
        <div className="mb-3">
          <h3 className="text-md font-medium text-gray-500 mb-2">Analytics & Reports</h3>
          <ul className="space-y-0.5">
            <li>
            <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <Cog6ToothIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Settings</span>
              </a>
              <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
                <QuestionMarkCircleIcon className="h-3.5 w-3.5 mr-2" />
                <span className="text-sm">Help & Support</span>
=======
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
>>>>>>> e34ec79 (first commit)
              </a>
            </li>
          </ul>
        </div>
<<<<<<< HEAD

      

      </nav>

      <div className="p-3 border-t border-gray-200">
        <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
          <ArrowRightOnRectangleIcon className="h-3.5 w-3.5 mr-2" />
          <span className="text-sm">Log Out</span>
=======
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
>>>>>>> e34ec79 (first commit)
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;