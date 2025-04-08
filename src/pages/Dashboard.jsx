<<<<<<< HEAD
import React from 'react';
=======
// Dashboard.jsx
import React , { useState }from 'react';
>>>>>>> e34ec79 (first commit)
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardSummary from '../components/DashboardSummary';
import TaskSection from '../components/TaskSection';

<<<<<<< HEAD
const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden"> {/* Removed flex-col */}
      <Sidebar />
      <div className="flex flex-col flex-1"> {/* Added flex-col */}
        <Header />
        <div className="flex-grow p-5 overflow-y-auto"> {/* Increased padding */}
          <DashboardSummary />
          <TaskSection />
=======

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onLinkClick={setSelectedComponent} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-grow p-6 overflow-y-auto">
          {selectedComponent ? (
            selectedComponent
          ) : (
            <>
              <DashboardSummary />
              <TaskSection />
            </>
          )}
>>>>>>> e34ec79 (first commit)
        </div>
      </div>
    </div>
  );
};

export default Dashboard;