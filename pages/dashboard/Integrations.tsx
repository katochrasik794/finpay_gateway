
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">API Integrations</h1>
          <p className="text-slate-500 text-sm">Manage your developer credentials and webhooks.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
          <ExternalLink size={16} /> API Docs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Key className="text-primary" size={20} />
              <h2 className="font-bold dark:text-white">Production Credentials</h2>
            </div>

            <div className="space-y-6">
              {keys.map((key) => (
                <div key={key.label}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-500">{key.label}</label>
                    <button className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                      <RefreshCw size={12} /> Regenerate
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 font-mono text-sm dark:text-slate-300 break-all">
                      {key.type === 'secret' ? '••••••••••••••••••••••••••••••••' : key.value}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(key.value, key.label)}
                      className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      {copiedKey === key.label ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-slate-400" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-sm text-primary flex gap-2">
                <Shield size={18} className="shrink-0" />
                <span>Keep your <span className="font-bold">Secret API Key</span> safe. Never expose it in client-side code or public repositories.</span>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="font-bold dark:text-white mb-6">Webhook Settings</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-500">Endpoint URL</label>
                <input 
                  type="text" 
                  placeholder="https://yourdomain.com/api/webhooks/metacrm"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none dark:text-white"
                />
              </div>
              <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                <div className="flex-1">
                  <p className="text-sm font-semibold dark:text-white">Test Mode</p>
                  <p className="text-xs text-slate-500">Enable dummy transactions for development</p>
                </div>
                <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer">
                   <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                </div>
              </div>
              <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all">
                Save Webhook Settings
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <h3 className="text-lg font-bold mb-4">Plugin Support</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Download our pre-built plugins for popular e-commerce platforms.</p>
            <div className="space-y-3">
              {['WooCommerce', 'Shopify', 'Magento', 'Prestashop'].map(plugin => (
                <button key={plugin} className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-left text-sm font-medium transition-all flex items-center justify-between">
                  {plugin} <ExternalLink size={14} />
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
