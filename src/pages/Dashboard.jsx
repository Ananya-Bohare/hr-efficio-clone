import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardSummary from '../components/DashboardSummary';
import TaskSection from '../components/TaskSection';

const Dashboard = () => {
  return (
    <div className="flex h-screen"> {/* Removed flex-col */}
      <Sidebar />
      <div className="flex flex-col flex-1"> {/* Added flex-col */}
        <Header />
        <div className="flex-grow p-6"> {/* Increased padding */}
          <DashboardSummary />
          <TaskSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;