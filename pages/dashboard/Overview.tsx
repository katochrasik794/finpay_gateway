
import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Clock, 
  Zap,
  CheckCircle2,
  AlertCircle,
  FileText,
  Copy,
  ChevronRight,
  LayoutGrid,
  RefreshCw
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '0', value: 0 },
  { name: '4', value: 0 },
  { name: '8', value: 0 },
  { name: '12', value: 0.2 },
  { name: '16', value: 0.5 },
  { name: '20', value: 0.3 },
  { name: '24', value: 0 },
];

const Overview: React.FC = () => {
  const recentActivity = [
    { type: 'Invoice', date: '2026-01-04 13:40:21', asset: 'INR', network: '', amount: '3799.1', status: 'Expired', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-04 12:11:21', asset: 'USDT', network: 'ERC20', amount: '10', status: 'Expired', assetType: 'crypto' },
    { type: 'Invoice', date: '2026-01-04 12:06:33', asset: 'INR', network: '', amount: '10854.05', status: 'Expired', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-04 12:06:20', asset: 'INR', network: '', amount: '10854.05', status: 'Expired', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-03 11:31:07', asset: 'INR', network: '', amount: '16980.18', status: 'Expired', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-02 15:22:03', asset: 'INR', network: '', amount: '3255.86', status: 'Expired', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-02 13:43:41', asset: 'INR', network: '', amount: '3255.86', status: 'Completed (PaidOver)', assetType: 'fiat' },
    { type: 'Invoice', date: '2026-01-02 08:11:31', asset: 'INR', network: '', amount: '5427.03', status: 'Expired', assetType: 'fiat' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Icon */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2">
        <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg text-primary">
          <LayoutGrid size={20} className="sm:w-6 sm:h-6" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold dark:text-white truncate">Dashboard</h1>
      </div>

      {/* Welcome Banner */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-sm sm:text-base font-bold dark:text-white truncate">Dear METACRM Merchant</h2>
          <p className="text-slate-500 text-[11px] sm:text-xs mt-1 break-words">
            You have <span className="text-amber-500 font-bold">unpaid</span> invoices. Please complete the payment at your earliest convenience.
          </p>
        </div>
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-bold rounded-lg sm:rounded-xl hover:bg-primary/20 transition-all flex items-center gap-2 text-xs sm:text-sm w-full md:w-auto justify-center">
          View Invoices
        </button>
      </div>

      {/* Main Grid: Chart and Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Chart Section */}
        <div className="xl:col-span-2 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Payment</p>
              <h3 className="text-xl sm:text-2xl font-black dark:text-white mt-1">$0.00</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Yesterday: $0.00</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <button className="text-[10px] sm:text-xs font-bold text-slate-400 hover:text-primary">YESTERDAY</button>
              <button className="text-[10px] sm:text-xs font-bold text-primary">TODAY</button>
            </div>
          </div>
          <div className="h-[200px] sm:h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} domain={[0, 1]} ticks={[0, 1]} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} fill="#10B981" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vertical Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-1 gap-3 sm:gap-4 xl:space-y-0">
          {[
            { label: 'Invoice Count', value: '4', sub: 'Yesterday: 1', icon: <FileText />, color: 'bg-blue-500' },
            { label: 'Refund Count', value: '0', sub: 'Yesterday: 0', icon: <RefreshCw />, color: 'bg-red-500' },
            { label: 'Pay Rate', value: '0.00%', sub: 'Yesterday: 0.00%', icon: <Zap />, color: 'bg-green-500' },
            { label: 'Success Rate', value: '0.00%', sub: 'Yesterday: 0.00%', icon: <CheckCircle2 />, color: 'bg-indigo-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-bold dark:text-white truncate">{stat.label}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                </div>
              </div>
              <div className="text-right sm:text-left xl:text-right self-end sm:self-auto">
                <p className="text-base sm:text-lg font-black dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <h2 className="font-bold text-slate-700 dark:text-white text-base sm:text-lg">Recent Activity</h2>
          <select className="text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-3 py-1.5 outline-none cursor-pointer">
            <option>All</option>
            <option>Paid</option>
            <option>Expired</option>
          </select>
        </div>
        {/* Mobile Card View */}
        <div className="block md:hidden divide-y divide-slate-100 dark:divide-slate-800">
          {recentActivity.slice(0, 5).map((row, i) => (
            <div key={i} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg">
                    <FileText size={14} />
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{row.type}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                  row.status.includes('Completed') 
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/20' 
                    : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                }`}>
                  {row.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                {row.assetType === 'fiat' ? (
                  <div className="w-5 h-3 bg-orange-600 rounded-sm relative flex flex-col overflow-hidden">
                    <div className="h-1/3 bg-orange-600"></div>
                    <div className="h-1/3 bg-white flex items-center justify-center"><div className="w-0.5 h-0.5 bg-blue-900 rounded-full"></div></div>
                    <div className="h-1/3 bg-green-600"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-[7px] font-bold">T</div>
                )}
                <span className="font-bold dark:text-white">{row.asset}</span>
                {row.network && <span className="text-slate-400">• {row.network}</span>}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">{row.date}</p>
                  <p className="text-sm font-black dark:text-white mt-0.5">{row.amount}</p>
                </div>
                <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden lg:table-cell">Network</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentActivity.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="p-1.5 lg:p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg">
                        <FileText size={14} className="lg:w-4 lg:h-4" />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300">{row.type}</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap text-xs lg:text-sm text-slate-500 font-medium">{row.date}</td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {row.assetType === 'fiat' ? (
                        <div className="w-5 h-3 lg:w-6 lg:h-4 bg-orange-600 rounded-sm relative flex flex-col overflow-hidden">
                          <div className="h-1/3 bg-orange-600"></div>
                          <div className="h-1/3 bg-white flex items-center justify-center"><div className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-blue-900 rounded-full"></div></div>
                          <div className="h-1/3 bg-green-600"></div>
                        </div>
                      ) : (
                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full flex items-center justify-center text-white text-[7px] lg:text-[8px] font-bold">T</div>
                      )}
                      <span className="text-xs lg:text-sm font-bold dark:text-white">{row.asset}</span>
                      {row.network && <span className="text-[10px] lg:text-xs text-slate-400 lg:hidden">• {row.network}</span>}
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap text-xs lg:text-sm font-bold text-slate-500 hidden lg:table-cell">{row.network}</td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap text-xs lg:text-sm font-black dark:text-white">{row.amount}</td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap">
                    <span className={`text-[10px] font-bold px-2 lg:px-3 py-1 rounded-full ${
                      row.status.includes('Completed') 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/20' 
                        : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 whitespace-nowrap text-center">
                    <button className="p-1.5 lg:p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <Copy size={14} className="lg:w-4 lg:h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
