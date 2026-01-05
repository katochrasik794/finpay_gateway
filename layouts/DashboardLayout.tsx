
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RightSidebar from '../components/RightSidebar';

const DashboardLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Left Navigation */}
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 w-full lg:w-auto">
        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto custom-scrollbar w-full">
            <div className="w-full max-w-full">
              <Outlet />
            </div>
            <footer className="py-6 sm:py-8 md:py-12 text-center text-slate-400 text-xs text-[10px] sm:text-xs">
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
