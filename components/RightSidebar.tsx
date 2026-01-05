
import React from 'react';
import { ArrowDownCircle, ArrowUpCircle, ChevronRight, LayoutGrid, Zap } from 'lucide-react';

const RightSidebar: React.FC = () => {
  const portfolio = [
    { name: 'INR', full: 'Indian Rupee', rate: '@0.01', balance: '2930.4', value: '$29.304', type: 'fiat' },
    { name: 'USDT', full: 'USDT', rate: '@1.00', balance: '3.55', value: '$3.55', type: 'crypto' },
    { name: 'EUR', full: 'Euro', rate: '@1.17', balance: '0', value: '$0', type: 'fiat_eu' },
    { name: 'USD', full: 'United States Dollar', rate: '@1.00', balance: '0', value: '$0', type: 'fiat_us' },
    { name: 'SOL', full: 'SOL', rate: '@134.79', balance: '0', value: '$0', type: 'crypto_sol' },
  ];

  return (
    <aside className="w-80 flex-shrink-0 bg-transparent h-full sticky top-0 hidden xl:flex flex-col p-4 xl:p-6 gap-4 xl:gap-6">
      {/* My Wallet Card */}
      <div className="bg-primary rounded-[2rem] p-6 text-white shadow-xl shadow-primary/30 relative overflow-hidden group">
        {/* Geometric Pattern Overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="currentColor" transform="translate(10, 10)" />
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="currentColor" transform="translate(40, 20)" />
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="currentColor" transform="translate(70, 10)" />
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="currentColor" transform="translate(30, 50)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-sm sm:text-base">My Wallet</h3>
            <span className="text-[9px] sm:text-[10px] font-bold opacity-60 truncate">UID: 1005859</span>
          </div>
          
          <p className="text-[10px] sm:text-xs font-medium opacity-80">Balance</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-2xl sm:text-3xl font-black">$32.85</h2>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-bold">
              <TrendingDown size={9} className="sm:w-[10px] sm:h-[10px]" /> -8.95%
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold opacity-60">-$3.23</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8">
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all border border-white/10">
              <ArrowDownCircle size={12} className="sm:w-[14px] sm:h-[14px]" /> Deposit
            </button>
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all border border-white/10">
              <ArrowUpCircle size={12} className="sm:w-[14px] sm:h-[14px]" /> Payment
            </button>
          </div>
        </div>
      </div>

      {/* My Portfolio Section */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-bold dark:text-white mb-3 sm:mb-4">My Portfolio</h3>
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 flex-1 shadow-sm flex flex-col">
          <div className="space-y-4 sm:space-y-6 flex-1">
            {portfolio.map((item, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {item.type === 'fiat' && (
                      <div className="w-8 h-6 bg-orange-600 rounded flex flex-col overflow-hidden shadow-sm">
                        <div className="h-1/3 bg-orange-600"></div>
                        <div className="h-1/3 bg-white flex items-center justify-center"><div className="w-1 h-1 bg-blue-900 rounded-full"></div></div>
                        <div className="h-1/3 bg-green-600"></div>
                      </div>
                    )}
                    {item.type === 'crypto' && (
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm">T</div>
                    )}
                    {item.type === 'fiat_eu' && (
                      <div className="w-8 h-6 bg-blue-800 rounded flex items-center justify-center relative overflow-hidden shadow-sm">
                         <div className="grid grid-cols-3 gap-0.5">
                            {[...Array(6)].map((_, j) => <div key={j} className="w-0.5 h-0.5 bg-yellow-400 rounded-full"></div>)}
                         </div>
                      </div>
                    )}
                    {item.type === 'fiat_us' && (
                      <div className="w-8 h-6 bg-blue-900 rounded flex flex-col overflow-hidden shadow-sm">
                         <div className="h-1/2 flex">
                            <div className="w-1/2 bg-blue-800 flex flex-wrap p-0.5 gap-0.5">
                               {[...Array(4)].map((_, j) => <div key={j} className="w-0.5 h-0.5 bg-white rounded-full"></div>)}
                            </div>
                            <div className="flex-1 flex flex-col">
                               <div className="h-1/4 bg-red-600"></div>
                               <div className="h-1/4 bg-white"></div>
                               <div className="h-1/4 bg-red-600"></div>
                               <div className="h-1/4 bg-white"></div>
                            </div>
                         </div>
                         <div className="flex-1 flex flex-col">
                            <div className="h-1/4 bg-red-600"></div>
                            <div className="h-1/4 bg-white"></div>
                            <div className="h-1/4 bg-red-600"></div>
                            <div className="h-1/4 bg-white"></div>
                         </div>
                      </div>
                    )}
                    {item.type === 'crypto_sol' && (
                       <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shadow-sm">
                          <div className="space-y-0.5">
                             <div className="w-4 h-1 bg-purple-400 rounded-full"></div>
                             <div className="w-4 h-1 bg-green-400 rounded-full"></div>
                             <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
                          </div>
                       </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs sm:text-sm font-black dark:text-white leading-none truncate">{item.name}</p>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate hidden sm:inline">{item.full}</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 mt-0.5 truncate">{item.rate}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs sm:text-sm font-black dark:text-white leading-none truncate">{item.balance}</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 mt-0.5 truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 sm:mt-8 py-2 sm:py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl transition-all">
            See All
          </button>
        </div>
      </div>
    </aside>
  );
};

const TrendingDown = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);

export default RightSidebar;
