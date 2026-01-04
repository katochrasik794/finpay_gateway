
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RightSidebar from '../components/RightSidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Left Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar">
            <div className="w-full">
              <Outlet />
            </div>
            <footer className="py-12 text-center text-slate-400 text-xs">
              © 2024 METACRM GATEWAY. All rights reserved. Professional Crypto Fintech Infrastructure.
            </footer>
          </main>
          
          {/* Persistent Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
