
import React, { useState } from 'react';
import { CreditCard, ExternalLink, Globe, Smartphone, Package, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

const Apps: React.FC = () => {
  const [networks, setNetworks] = useState([
    { name: 'TRC-20', chain: 'Tron Network', enabled: true, fee: '0.5%', status: 'Stable' },
    { name: 'ERC-20', chain: 'Ethereum', enabled: true, fee: '0.5%', status: 'Stable' },
    { name: 'BEP-20', chain: 'BNB Smart Chain', enabled: false, fee: '0.5%', status: 'Stable' },
    { name: 'POLYGON', chain: 'Polygon (Matic)', enabled: true, fee: '0.5%', status: 'Stable' },
    { name: 'SOLANA', chain: 'Solana', enabled: false, fee: '0.5%', status: 'Beta' },
  ]);

  const toggleNetwork = (index: number) => {
    const newNetworks = [...networks];
    newNetworks[index].enabled = !newNetworks[index].enabled;
    setNetworks(newNetworks);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Supported Assets & Networks</h1>
        <p className="text-slate-500 text-sm">Configure which USDT networks are active for your gateway.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
        <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
           <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center">
              <span className="text-3xl font-black">USDT</span>
           </div>
           <div>
              <h2 className="text-2xl font-bold dark:text-white">Tether USD (USDT)</h2>
              <p className="text-slate-500 font-medium">Primary settlement currency for METACRM Gateway.</p>
           </div>
           <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 size={14} /> System Verified
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((net, i) => (
            <div key={i} className={`p-6 rounded-2xl border transition-all duration-300 ${
              net.enabled 
                ? 'bg-white dark:bg-slate-800 border-primary/30 shadow-lg shadow-primary/5' 
                : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="font-bold dark:text-white text-lg">{net.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">{net.chain}</p>
                 </div>
                 <button 
                  onClick={() => toggleNetwork(i)}
                  className={`w-12 h-6 rounded-full transition-all relative ${net.enabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                 >
                   <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${net.enabled ? 'left-7' : 'left-1'}`}></div>
                 </button>
              </div>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Gateway Fee</span>
                    <span className="font-bold dark:text-white">{net.fee}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Network Status</span>
                    <span className={`font-bold flex items-center gap-1 ${net.status === 'Beta' ? 'text-amber-500' : 'text-green-500'}`}>
                       <div className={`w-1.5 h-1.5 rounded-full ${net.status === 'Beta' ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                       {net.status}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 flex gap-4">
        <AlertCircle className="text-blue-600 shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-blue-900 dark:text-blue-400">Multi-Chain Settlements</h4>
          <p className="text-blue-800 dark:text-blue-300 text-sm mt-1 leading-relaxed">
            When multiple networks are enabled, your customers can choose their preferred chain at checkout. All funds are consolidated into your unified USDT merchant balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apps;
