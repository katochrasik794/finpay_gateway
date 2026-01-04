
import React, { useState } from 'react';
import { 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard,
  History,
  Info,
  Copy,
  Check,
  QrCode
} from 'lucide-react';

const Wallet: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const balances = [
    { currency: 'USDT', chain: 'TRC20', amount: '42,100.00', value: '$42,100.00', color: 'bg-red-500', address: 'TAbc123xyz890METACRM_GWAY_TRC' },
    { currency: 'USDT', chain: 'ERC20', amount: '12,500.50', value: '$12,500.50', color: 'bg-blue-500', address: '0x82103f92b...E420_ERC_GWAY' },
    { currency: 'USDT', chain: 'BEP20', amount: '27,800.50', value: '$27,800.50', color: 'bg-amber-500', address: '0xa1f92b...9021_BEP_GWAY' },
    { currency: 'TRX', chain: 'TRON', amount: '1,200.00', value: '$144.00', color: 'bg-red-600', address: 'TAbc123xyz890METACRM_GWAY_TRX' },
  ];

  const copyAddress = (address: string, id: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Merchant Wallet</h1>
          <p className="text-slate-500 text-sm">Manage your settled balances and payouts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
            <ArrowDownRight size={18} /> Withdraw
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-all">
            <Plus size={18} /> Top Up Gas
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {balances.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden group shadow-sm">
            <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity -mr-8 -mt-8 rounded-full`}></div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${item.color}`}>
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="font-bold dark:text-white">{item.currency}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.chain} Network</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold dark:text-white">{item.amount}</p>
              <p className="text-sm text-slate-500">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Network Deposit Addresses */}
      <div className="space-y-4">
         <h2 className="text-xl font-bold dark:text-white">Network Deposit Addresses</h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {balances.filter(b => b.currency === 'USDT').map((item, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                     <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.color} bg-opacity-10 ${item.color.replace('bg-', 'text-')}`}>
                        USDT {item.chain}
                     </span>
                     <QrCode size={18} className="text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Deposit Address</p>
                     <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                        <span className="font-mono text-xs dark:text-slate-300 truncate flex-1">{item.address}</span>
                        <button 
                           onClick={() => copyAddress(item.address, `addr-${idx}`)}
                           className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                        >
                           {copiedId === `addr-${idx}` ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-slate-400" />}
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-bold dark:text-white flex items-center gap-2">
            <History className="text-slate-400" size={20} /> Recent Wallet Activity
          </h2>
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex">
            <button className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm rounded-md dark:text-white">All</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white">Deposits</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white">Payouts</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Network</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { date: 'Oct 24, 2024 14:22', type: 'Merchant Settlement', chain: 'TRC20', amount: '+12,400.00 USDT', status: 'Completed' },
                { date: 'Oct 23, 2024 09:15', type: 'System Withdrawal', chain: 'ERC20', amount: '-1,000.00 USDT', status: 'Completed' },
                { date: 'Oct 22, 2024 18:44', type: 'Fee Collection', chain: 'TRC20', amount: '-62.00 USDT', status: 'Completed' },
                { date: 'Oct 21, 2024 11:30', type: 'Merchant Settlement', chain: 'BEP20', amount: '+800.50 USDT', status: 'Completed' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-4 text-sm font-semibold dark:text-white whitespace-nowrap">{row.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                      {row.chain}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold whitespace-nowrap ${row.amount.startsWith('+') ? 'text-green-600' : 'text-slate-900 dark:text-white'}`}>
                    {row.amount}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-6 rounded-2xl flex gap-4">
        <Info className="text-blue-600 shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-blue-900 dark:text-blue-400">Gas Monitoring Enabled</h4>
          <p className="text-blue-800 dark:text-blue-300 text-sm mt-1 leading-relaxed">
            Your TRON energy and Ethereum gas levels are being monitored. Settlements will continue automatically as long as your gas wallet maintains a balance of at least $10.00 equivalent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
