
import React from 'react';
import { Plus, Filter, Download, MoreHorizontal, Copy, Eye, Link as LinkIcon } from 'lucide-react';

const Invoices: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Merchant Invoices</h1>
          <p className="text-slate-500 text-sm">Create and manage your payment links.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
          <Plus size={20} /> Create New Invoice
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px] relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Filter by Order ID..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm outline-none dark:text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Drafts</button>
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Expired</button>
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Created</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
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
                <td className="px-6 py-4">
                  <span className="font-mono text-xs font-bold text-primary dark:text-primary-light">{invoice.id}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium dark:text-white">{invoice.customer}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold dark:text-white">{invoice.amount}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                    invoice.status === 'Paid' ? 'bg-green-100 text-green-600' : 
                    invoice.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{invoice.date}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all" title="Copy Link">
                      <LinkIcon size={16} />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
