// Dashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardSummary from '../components/DashboardSummary';
import TaskSection from '../components/TaskSection';

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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
