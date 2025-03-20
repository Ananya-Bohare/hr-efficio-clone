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

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
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
            </li>
          </ul>
        </div>

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
            </li>
          </ul>
        </div>

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
              </a>
            </li>
          </ul>
        </div>

      

      </nav>

      <div className="p-3 border-t border-gray-200">
        <a href="#" className="flex items-center p-1.5 rounded-md hover:bg-gray-100">
          <ArrowRightOnRectangleIcon className="h-3.5 w-3.5 mr-2" />
          <span className="text-sm">Log Out</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;