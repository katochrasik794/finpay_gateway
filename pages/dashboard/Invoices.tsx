
import React from 'react';
import { Plus, Filter, Download, MoreHorizontal, Copy, Eye, Link as LinkIcon } from 'lucide-react';

const Invoices: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">Merchant Invoices</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Create and manage your payment links.</p>
        </div>
        <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full md:w-auto justify-center">
          <Plus size={18} className="sm:w-5 sm:h-5" /> Create New Invoice
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 sm:gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:w-[18px] sm:h-[18px]" size={16} />
          <input 
            type="text" 
            placeholder="Filter by Order ID..."
            className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs sm:text-sm outline-none dark:text-white"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex-1 sm:flex-initial justify-center">Drafts</button>
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex-1 sm:flex-initial justify-center">Expired</button>
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 flex-1 sm:flex-initial justify-center">
            <Download size={14} className="sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Export CSV</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider hidden lg:table-cell">Created</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { id: '#INV-82190', customer: 'john.doe@gmail.com', amount: '2,500.00 USDT', status: 'Paid', date: 'Oct 24, 2024' },
                { id: '#INV-82189', customer: 'crypto_buyer_12@proton.me', amount: '450.00 USDT', status: 'Pending', date: 'Oct 24, 2024' },
                { id: '#INV-82188', customer: 'alice.wonder@web3.com', amount: '12,000.00 USDT', status: 'Paid', date: 'Oct 23, 2024' },
                { id: '#INV-82187', customer: 'bob.builder@construction.co', amount: '89.99 USDT', status: 'Expired', date: 'Oct 22, 2024' },
                { id: '#INV-82186', customer: 'guest_9918@outlook.com', amount: '1,200.00 USDT', status: 'Paid', date: 'Oct 21, 2024' },
              ].map((invoice, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-primary dark:text-primary-light truncate">{invoice.id}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-xs sm:text-sm font-medium dark:text-white truncate">{invoice.customer}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-xs sm:text-sm font-bold dark:text-white truncate">{invoice.amount}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                      invoice.status === 'Paid' ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 
                      invoice.status === 'Pending' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 hidden lg:table-cell">{invoice.date}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                    <div className="flex items-center justify-end gap-1 sm:gap-2">
                      <button className="p-1.5 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all" title="View">
                        <Eye size={14} className="sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all" title="Copy Link">
                        <LinkIcon size={14} className="sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all">
                        <MoreHorizontal size={14} className="sm:w-4 sm:h-4" />
                      </button>
                    </div>
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

export default Invoices;
