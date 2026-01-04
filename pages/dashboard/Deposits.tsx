
import React from 'react';
import { ArrowDownCircle, Search, ExternalLink, Filter } from 'lucide-react';

const Deposits: React.FC = () => {
  return (
    <div className="space-y-6">
       <div>
          <h1 className="text-2xl font-bold dark:text-white">Deposit History</h1>
          <p className="text-slate-500 text-sm">Track all incoming customer payments and deposits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Inflow</p>
                 <p className="text-xl font-bold dark:text-white mt-1">4,280.00 USDT</p>
              </div>
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center">
                 <ArrowDownCircle size={24} />
              </div>
           </div>
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Confirmation</p>
                 <p className="text-xl font-bold dark:text-white mt-1">150.00 USDT</p>
              </div>
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-full flex items-center justify-center animate-pulse">
                 <ArrowDownCircle size={24} />
              </div>
           </div>
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Avg</p>
                 <p className="text-xl font-bold dark:text-white mt-1">82,400.00 USDT</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full flex items-center justify-center">
                 <ArrowDownCircle size={24} />
              </div>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
             <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Tx Hash / Address..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm border-none outline-none dark:text-white"
                />
             </div>
             <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                <Filter size={18} />
             </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Network</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Confirmations</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { hash: 'TAbc...x82z', network: 'TRC20', amount: '1,500.00 USDT', confirms: '19/20', status: 'Completed' },
                { hash: '0x82...11f2', network: 'ERC20', amount: '240.50 USDT', confirms: '12/12', status: 'Completed' },
                { hash: '0xa1...f92b', network: 'BEP20', amount: '3,000.00 USDT', confirms: '15/15', status: 'Completed' },
                { hash: 'TH92...p81l', network: 'TRC20', amount: '150.00 USDT', confirms: '2/20', status: 'Pending' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm dark:text-white">{row.hash}</span>
                      <ExternalLink size={12} className="text-primary cursor-pointer hover:opacity-80" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">{row.network}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold dark:text-white">{row.amount}</td>
                  <td className="px-6 py-4">
                    <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: row.status === 'Completed' ? '100%' : '15%' }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 mt-1 block">{row.confirms} Confirmed</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${row.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Deposits;
