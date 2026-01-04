
import React from 'react';
import { History, Search, Filter, HelpCircle, CheckCircle2, XCircle, Clock } from 'lucide-react';

const Refunds: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Refund Requests</h1>
          <p className="text-slate-500 text-sm">Manage and process customer refund claims.</p>
        </div>
        <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold flex items-center gap-2 dark:text-white hover:bg-slate-50 transition-all">
          <HelpCircle size={18} /> Dispute Guidelines
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search by Order ID or Tx..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm outline-none dark:text-white" />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-400 hover:text-primary transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Reference</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Reason</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Network</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { id: '#RFD-882', amount: '240.00 USDT', reason: 'Customer Dispute', network: 'TRC20', status: 'Pending' },
              { id: '#RFD-881', amount: '45.00 USDT', reason: 'Duplicate Payment', network: 'BEP20', status: 'Settled' },
              { id: '#RFD-880', amount: '1,200.00 USDT', reason: 'Order Cancelled', network: 'ERC20', status: 'Cancelled' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-bold dark:text-white">{row.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold dark:text-white">{row.amount}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{row.reason}</td>
                <td className="px-6 py-4 text-xs font-bold text-slate-400">{row.network}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    {row.status === 'Pending' && <Clock size={14} className="text-amber-500" />}
                    {row.status === 'Settled' && <CheckCircle2 size={14} className="text-green-500" />}
                    {row.status === 'Cancelled' && <XCircle size={14} className="text-red-500" />}
                    <span className={`text-[10px] font-black uppercase ${
                      row.status === 'Pending' ? 'text-amber-600' :
                      row.status === 'Settled' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Refunds;
