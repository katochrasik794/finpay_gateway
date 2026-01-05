
import React, { useState } from 'react';
import { Copy, RefreshCw, Key, Shield, ExternalLink, Check } from 'lucide-react';

const Integrations: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const keys = [
    { label: 'Live API Key', value: '', type: 'public' },
    { label: 'Secret API Key', value: '', type: 'secret' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">API Integrations</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Manage your developer credentials and webhooks.</p>
        </div>
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center">
          <ExternalLink size={14} className="sm:w-4 sm:h-4" /> API Docs
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Key className="text-primary sm:w-5 sm:h-5" size={18} />
                <h2 className="font-bold dark:text-white text-base sm:text-lg">Production Credentials</h2>
              </div>

            <div className="space-y-4 sm:space-y-6">
              {keys.map((key) => (
                <div key={key.label}>
                  <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
                    <label className="text-xs sm:text-sm font-medium text-slate-500">{key.label}</label>
                    <button className="text-primary text-xs font-semibold hover:underline flex items-center gap-1 self-start sm:self-auto">
                      <RefreshCw size={12} /> Regenerate
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm dark:text-slate-300 break-all overflow-x-auto">
                      {key.type === 'secret' ? '••••••••••••••••••••••••••••••••' : key.value}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(key.value, key.label)}
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
                    >
                      {copiedKey === key.label ? <Check size={16} className="sm:w-[18px] sm:h-[18px] text-green-500" /> : <Copy size={16} className="sm:w-[18px] sm:h-[18px] text-slate-400" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-xs sm:text-sm text-primary flex gap-2">
                <Shield size={16} className="sm:w-[18px] sm:h-[18px] shrink-0" />
                <span>Keep your <span className="font-bold">Secret API Key</span> safe. Never expose it in client-side code or public repositories.</span>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6">
            <h2 className="font-bold dark:text-white mb-4 sm:mb-6 text-base sm:text-lg">Webhook Settings</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-medium text-slate-500">Endpoint URL</label>
                <input 
                  type="text" 
                  placeholder="https://yourdomain.com/api/webhooks/metacrm"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none dark:text-white text-xs sm:text-sm"
                />
              </div>
              <div className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4 border-y border-slate-100 dark:border-slate-800">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold dark:text-white">Test Mode</p>
                  <p className="text-[10px] sm:text-xs text-slate-500">Enable dummy transactions for development</p>
                </div>
                <div className="w-11 sm:w-12 h-5 sm:h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer flex-shrink-0">
                   <div className="absolute left-0.5 sm:left-1 top-0.5 sm:top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                </div>
              </div>
              <button className="w-full py-2.5 sm:py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all text-sm sm:text-base">
                Save Webhook Settings
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Plugin Support</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">Download our pre-built plugins for popular e-commerce platforms.</p>
            <div className="space-y-2 sm:space-y-3">
              {['WooCommerce', 'Shopify', 'Magento', 'Prestashop'].map(plugin => (
                <button key={plugin} className="w-full py-2 sm:py-2.5 px-3 sm:px-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between">
                  {plugin} <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
