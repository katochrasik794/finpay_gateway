
import React from 'react';
import { NavLink } from 'react-router-dom';
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
  BookOpen
} from 'lucide-react';

const Sidebar: React.FC = () => {
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

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 flex flex-col hidden lg:flex">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <ShieldCheck className="text-white" size={20} />
        </div>
        <span className="text-xl font-bold tracking-tight dark:text-white uppercase">METACRM</span>
      </div>
      
      {/* Container for links with the new beautiful custom scrollbar */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nodes: Online</span>
          </div>
          <p className="text-[9px] font-medium text-slate-400">Secure Protocol v2.4.0</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
