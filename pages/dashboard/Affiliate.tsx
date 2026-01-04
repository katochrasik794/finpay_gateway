
import React from 'react';
import { Share2, Users, TrendingUp, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';

const Affiliate: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText('https://metacrm.shop/ref/admin_82103');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Affiliate Program</h1>
        <p className="text-slate-500 text-sm">Earn 10% of the platform fee for every merchant you refer.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <h3 className="text-xl font-bold dark:text-white mb-6">Your Referral Link</h3>
            <div className="flex gap-4">
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 font-mono text-sm dark:text-slate-300 flex items-center overflow-hidden whitespace-nowrap">
                metacrm.shop/ref/admin_82103
              </div>
              <button 
                onClick={copyLink}
                className={`px-8 rounded-2xl font-bold transition-all flex items-center gap-2 ${
                  copied ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="flex-1 py-3 bg-[#1DA1F2] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Share on X
              </button>
              <button className="flex-1 py-3 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
               <h3 className="font-bold dark:text-white">Recent Referrals</h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Merchant ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Total Volume</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Your Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { id: 'MER-811', date: 'Oct 20, 2024', volume: '124,000 USDT', earnings: '62.00 USDT' },
                  { id: 'MER-809', date: 'Oct 18, 2024', volume: '15,500 USDT', earnings: '7.75 USDT' },
                  { id: 'MER-792', date: 'Oct 15, 2024', volume: '2,400 USDT', earnings: '1.20 USDT' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 font-bold text-sm dark:text-white">{row.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{row.date}</td>
                    <td className="px-6 py-4 text-sm font-medium dark:text-white">{row.volume}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-bold text-primary">+{row.earnings}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            <TrendingUp className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8" />
            <p className="text-primary-light font-bold uppercase tracking-widest text-xs mb-2">Total Commissions</p>
            <h2 className="text-4xl font-black mb-6">452.12 USDT</h2>
            <button className="w-full py-3 bg-white text-primary font-black rounded-xl hover:bg-slate-50 transition-colors">
              Withdraw Earnings
            </button>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                   <Users size={24} />
                </div>
                <div>
                   <h4 className="font-bold dark:text-white">Tier 1 Rewards</h4>
                   <p className="text-xs text-slate-400">12 Active Merchants</p>
                </div>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed mb-6">You are currently on the <span className="text-primary font-bold">Standard Partner</span> tier. Increase your referred volume to 1M USDT monthly to unlock 15% commissions.</p>
             <button className="text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                View Partner Tiers <ExternalLink size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
