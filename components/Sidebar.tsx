
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowDownCircle, 
  RefreshCw, 
  Users, 
  FileText, 
  ShieldCheck, 
  Settings, 
  Code,
  CreditCard,
  MessageSquareShare,
  History,
  Repeat,
  BookOpen,
  X
} from 'lucide-react';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  const sections = [
    {
      title: 'OVERVIEW',
      items: [
        { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
      ]
    },
    {
      title: 'FINANCIAL HUB',
      items: [
        { label: 'Wallet', path: '/dashboard/wallet', icon: <Wallet size={20} /> },
        { label: 'Deposits', path: '/dashboard/deposits', icon: <ArrowDownCircle size={20} /> },
        { label: 'Exchange', path: '/dashboard/exchange', icon: <RefreshCw size={20} /> },
        { label: 'Payouts', path: '/dashboard/payouts', icon: <Users size={20} /> },
      ]
    },
    {
      title: 'MERCHANT TOOLS',
      items: [
        { label: 'Invoices', path: '/dashboard/invoices', icon: <FileText size={20} /> },
        { label: 'Asset Manager', path: '/dashboard/apps', icon: <CreditCard size={20} /> },
        { label: 'Refunds', path: '/dashboard/refunds', icon: <Repeat size={20} /> },
      ]
    },
    {
      title: 'GROWTH & DEV',
      items: [
        { label: 'Affiliate', path: '/dashboard/affiliate', icon: <MessageSquareShare size={20} /> },
        { label: 'API Integrations', path: '/dashboard/integrations', icon: <Code size={20} /> },
        { label: 'Documentation', path: '/docs', icon: <BookOpen size={20} /> },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { label: 'Settings', path: '/dashboard/settings', icon: <Settings size={20} /> },
      ]
    }
  ];

  const activeClass = "bg-primary text-white shadow-lg shadow-primary/20";
  const inactiveClass = "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white";

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 flex flex-col hidden lg:flex">
        <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white sm:w-5 sm:h-5" size={16} />
            </div>
          <span className="text-sm sm:text-base font-bold tracking-tight dark:text-white uppercase truncate">METACRM</span>
        </div>
        
        {/* Container for links with the new beautiful custom scrollbar */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 custom-scrollbar">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-3 sm:px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/dashboard'}
                    className={({ isActive }) => 
                      `flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <span className="shrink-0">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}</span>
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nodes: Online</span>
            </div>
            <p className="text-[9px] font-medium text-slate-400">Secure Protocol v2.4.0</p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 flex flex-col lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={16} />
            </div>
            <span className="text-sm font-bold tracking-tight dark:text-white uppercase truncate">METACRM</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-3 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/dashboard'}
                    onClick={handleNavClick}
                    className={({ isActive }) => 
                      `flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 ${isActive ? activeClass : inactiveClass}`
                    }
                  >
                    <span className="shrink-0">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}</span>
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-200 dark:border-slate-800">
          <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nodes: Online</span>
            </div>
            <p className="text-[9px] font-medium text-slate-400">Secure Protocol v2.4.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
