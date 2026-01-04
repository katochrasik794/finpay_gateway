
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
  LayoutGrid
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
    <div className="space-y-6">
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <LayoutGrid size={24} />
        </div>
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
      </div>

      {/* Welcome Banner */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-bold dark:text-white">Dear METACRM Merchant</h2>
          <p className="text-slate-500 text-sm mt-1">
            You have <span className="text-amber-500 font-bold">unpaid</span> invoices. Please complete the payment at your earliest convenience.
          </p>
        </div>
        <button className="px-6 py-2.5 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all flex items-center gap-2">
          View Invoices
        </button>
      </div>

      {/* Main Grid: Chart and Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="xl:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Payment</p>
              <h3 className="text-3xl font-black dark:text-white mt-1">$0.00</h3>
              <p className="text-xs text-slate-400 mt-1">Yesterday: $0.00</p>
            </div>
            <div className="flex gap-4">
              <button className="text-xs font-bold text-slate-400 hover:text-primary">YESTERDAY</button>
              <button className="text-xs font-bold text-primary">TODAY</button>
            </div>
          </div>
          <div className="h-[250px] w-full">
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
        <div className="space-y-4">
          {[
            { label: 'Invoice Count', value: '4', sub: 'Yesterday: 1', icon: <FileText />, color: 'bg-blue-500' },
            { label: 'Refund Count', value: '0', sub: 'Yesterday: 0', icon: <RefreshCw />, color: 'bg-red-500' },
            { label: 'Pay Rate', value: '0.00%', sub: 'Yesterday: 0.00%', icon: <Zap />, color: 'bg-green-500' },
            { label: 'Success Rate', value: '0.00%', sub: 'Yesterday: 0.00%', icon: <CheckCircle2 />, color: 'bg-indigo-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} text-white flex items-center justify-center shadow-lg shadow-${stat.color.split('-')[1]}/20`}>
                  {/* FIX: Cast icon to React.ReactElement<any> to avoid 'size' property error during cloning */}
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-white">{stat.label}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black dark:text-white">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 flex items-center justify-between">
          <h2 className="font-bold text-slate-700 dark:text-white">Recent Activity</h2>
          <select className="text-xs font-bold text-slate-500 border-none bg-transparent outline-none cursor-pointer">
            <option>All</option>
            <option>Paid</option>
            <option>Expired</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Network</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentActivity.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{row.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500 font-medium">{row.date}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {row.assetType === 'fiat' ? (
                        <div className="w-6 h-4 bg-orange-600 rounded-sm relative flex flex-col overflow-hidden">
                          <div className="h-1/3 bg-orange-600"></div>
                          <div className="h-1/3 bg-white flex items-center justify-center"><div className="w-1 h-1 bg-blue-900 rounded-full"></div></div>
                          <div className="h-1/3 bg-green-600"></div>
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-[8px] font-bold">T</div>
                      )}
                      <span className="text-sm font-bold dark:text-white">{row.asset}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-slate-500">{row.network}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-black dark:text-white">{row.amount}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                      row.status.includes('Completed') 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/20' 
                        : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-center">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <Copy size={16} />
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

// Helper for the icon used in stats
const RefreshCw = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default Overview;
