
import React from 'react';
import { RefreshCw, ArrowUpDown, Info } from 'lucide-react';

const Exchange: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Crypto Exchange</h1>
        <p className="text-slate-500 text-sm">Swap settled assets between different chains.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-slate-500 px-1">
            <span>From</span>
            <span>Balance: 42,100 USDT</span>
          </div>
          <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <input 
              type="number" 
              placeholder="0.00" 
              className="flex-1 bg-transparent text-2xl font-bold outline-none dark:text-white"
            />
            <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600 cursor-pointer">
              <span className="font-bold dark:text-white">USDT</span>
              <span className="text-[10px] font-bold text-red-500">TRC20</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-4 relative z-10">
          <button className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform">
            <ArrowUpDown size={24} />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-slate-500 px-1">
            <span>To (Estimated)</span>
            <span>Balance: 12,500 USDT</span>
          </div>
          <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <input 
              type="number" 
              placeholder="0.00" 
              readOnly
              className="flex-1 bg-transparent text-2xl font-bold outline-none dark:text-white"
            />
            <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600 cursor-pointer">
              <span className="font-bold dark:text-white">USDT</span>
              <span className="text-[10px] font-bold text-blue-500">ERC20</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-500 uppercase tracking-wider">Exchange Rate</span>
            <span className="dark:text-white">1 USDT (TRC20) = 0.998 USDT (ERC20)</span>
          </div>
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-500 uppercase tracking-wider">Slippage Tolerance</span>
            <span className="dark:text-white">0.5%</span>
          </div>
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-500 uppercase tracking-wider">Protocol Fee</span>
            <span className="dark:text-white text-primary">Free</span>
          </div>
        </div>

        <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
          <RefreshCw size={20} /> Preview Exchange
        </button>

        <div className="flex items-start gap-3 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
          <Info size={16} className="shrink-0" />
          <p>Exchanges are processed via our bridge nodes. Settlement usually occurs within 2-5 network confirmations depending on the target chain.</p>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
