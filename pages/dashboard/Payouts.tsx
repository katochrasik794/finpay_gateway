
import React from 'react';
import { Users, Plus, Upload, FileText, ArrowRight, Wallet, CheckCircle2, Search, Zap, Clock } from 'lucide-react';

const Payouts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Batch Payouts</h1>
          <p className="text-slate-500 text-sm">Send multi-recipient payments in a single click.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold flex items-center gap-2 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <Upload size={18} /> Bulk Upload CSV
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-all flex items-center gap-2">
            <Plus size={18} /> New Payout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Payouts</p>
            <p className="text-xl font-bold dark:text-white mt-1">12,400.00 USDT</p>
          </div>
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <ArrowRight size={24} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gas Savings</p>
            <p className="text-xl font-bold dark:text-white mt-1">$452.12</p>
          </div>
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center">
            <Zap size={24} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Settlement</p>
            <p className="text-xl font-bold dark:text-white mt-1">45 seconds</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center">
            <Clock size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Users className="text-slate-400" size={20} />
            <h2 className="font-bold dark:text-white">Active Payout Batches</h2>
          </div>
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search batches..." className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm border-none outline-none dark:text-white" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Batch ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Recipients</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Network</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { id: '#BTCH-9021', recipients: 45, amount: '4,500.00 USDT', network: 'TRC20', date: 'Oct 24, 14:00', status: 'Completed' },
                { id: '#BTCH-9020', recipients: 12, amount: '1,200.50 USDT', network: 'ERC20', date: 'Oct 23, 09:15', status: 'Completed' },
                { id: '#BTCH-9019', recipients: 120, amount: '18,400.00 USDT', network: 'BEP20', date: 'Oct 22, 18:44', status: 'In Review' },
              ].map((batch, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-bold text-primary">{batch.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                      </div>
                      <span className="text-sm font-medium dark:text-white">{batch.recipients} users</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold dark:text-white">{batch.amount}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500">{batch.network}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{batch.date}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${batch.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                      {batch.status}
                    </span>
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

export default Payouts;
