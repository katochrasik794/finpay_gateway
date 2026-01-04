
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Terminal, Code, Cpu, ExternalLink, ArrowLeft, Book, Key, Wallet, CreditCard, RefreshCw, Send, History, CheckCircle, List, FileText, AlertCircle, Zap, Shield, Globe } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const navItems = [
    { 
      group: 'BASICS',
      items: [
        { id: 'getting-started', label: 'Getting Started', icon: <Book size={18} /> },
        { id: 'api-overview', label: 'API Overview', icon: <Terminal size={18} /> },
        { id: 'specifications', label: 'Specifications', icon: <FileText size={18} /> },
        { id: 'status-codes', label: 'Status Codes', icon: <AlertCircle size={18} /> },
        { id: 'libraries', label: 'Libraries & SDKs', icon: <Zap size={18} /> },
      ]
    },
    { 
      group: 'AUTHENTICATION',
      items: [
        { id: 'auth', label: 'Authentication', icon: <Key size={18} /> },
        { id: 'access-token', label: 'Access Token', icon: <Shield size={18} /> },
      ]
    },
    { 
      group: 'WALLET API',
      items: [
        { id: 'wallet-objects', label: 'Account Objects', icon: <Wallet size={18} /> },
        { id: 'get-balances', label: 'Get Balances', icon: <RefreshCw size={18} /> },
        { id: 'deposit-addr', label: 'Get Deposit Address', icon: <Globe size={18} /> },
      ]
    },
    { 
      group: 'PAYMENTS & CASHIER',
      items: [
        { id: 'payment-api', label: 'Payment API', icon: <CreditCard size={18} /> },
        { id: 'invoice-api', label: 'Cashier (Invoices)', icon: <Send size={18} /> },
        { id: 'exchange-api', label: 'Exchange API', icon: <RefreshCw size={18} /> },
      ]
    },
    { 
      group: 'SYSTEM',
      items: [
        { id: 'webhooks', label: 'Webhooks & IPN', icon: <History size={18} /> },
        { id: 'common-api', label: 'Common API', icon: <List size={18} /> },
      ]
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'getting-started':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-black mb-6">Getting Started With METACRM Gateway</h1>
            <p className="text-xl text-slate-400">METACRM Gateway is a professional fintech infrastructure for high-performance businesses to accept and manage cryptocurrency payments across multiple chains.</p>
            <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 my-10 shadow-2xl">
               <h4 className="text-primary font-bold mb-4 flex items-center gap-2"><Globe size={18}/> Production API Endpoint</h4>
               <code className="text-amber-300 text-lg">https://api.metacrm.shop/v1</code>
            </div>
            <h3>Quick Start</h3>
            <ol className="space-y-4">
              <li className="font-medium text-slate-300">Sign up for a merchant account at METACRM Gateway.</li>
              <li className="font-medium text-slate-300">Obtain your API keys from the Integrations tab.</li>
              <li className="font-medium text-slate-300">Configure your webhook URL for real-time notifications.</li>
              <li className="font-medium text-slate-300">Start integrating using our REST API or official SDKs.</li>
            </ol>
            <div className="mt-12 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
               <h4 className="text-blue-400 font-bold mb-2">Sandbox Environment</h4>
               <p className="text-sm text-slate-400">Test your integration without moving real funds using our public sandbox: <code className="text-amber-200">https://sandbox.metacrm.shop/v1</code></p>
            </div>
          </div>
        );
      case 'auth':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-black mb-6">Authentication</h1>
            <p className="text-slate-400 text-lg leading-relaxed">METACRM Gateway uses API Keys to authenticate requests. You can view and manage your keys in the merchant dashboard under Integrations.</p>
            <h3>Header Authentication</h3>
            <p>All private API calls must include your API Key in the `Authorization` header.</p>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 my-8">
               <pre className="text-sm text-primary-light">
{`curl -X GET https://api.metacrm.shop/v1/wallet/balances \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json"`}
               </pre>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl">
               <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Shield size={18}/> Security Warning</h4>
               <p className="text-sm text-slate-400">Never share your Secret Key or expose it in client-side code (browsers/apps). Always use your Secret Key in server-side environments.</p>
            </div>
          </div>
        );
      case 'wallet-api':
      case 'wallet-objects':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-black mb-6">Wallet API & Objects</h1>
            <p className="text-slate-400">The Wallet API allows you to manage merchant sub-accounts, query real-time balances, and generate deposit addresses.</p>
            <h3>Account Object</h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 overflow-x-auto">
               <pre className="text-xs text-primary-light">
{`{
  "account_id": "ACC_82103",
  "label": "Master Wallet",
  "status": "active",
  "created_at": "2024-10-24T14:22:10Z"
}`}
               </pre>
            </div>
            <h3>Get Balances</h3>
            <p>Fetch your current balance across all active networks (TRC20, ERC20, BEP20, etc.).</p>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
               <h4 className="text-xs font-black text-slate-500 uppercase mb-4">GET /wallet/balances</h4>
               <pre className="text-xs text-primary-light">
{`{
  "status": "success",
  "data": [
    { "currency": "USDT", "chain": "TRC20", "amount": 12400.00 },
    { "currency": "USDT", "chain": "ERC20", "amount": 500.25 }
  ]
}`}
               </pre>
            </div>
          </div>
        );
      case 'payment-api':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-black mb-6">Payment API</h1>
            <p className="text-slate-400">The Payment API handles direct fund transfers and payments between accounts within the METACRM Gateway ecosystem.</p>
            <h3>Create Payment</h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 my-8">
               <h4 className="text-xs font-black text-slate-500 uppercase mb-4">POST /payments/create</h4>
               <pre className="text-xs text-primary-light">
{`{
  "to_address": "TAbc...x82z",
  "amount": 100.00,
  "currency": "USDT",
  "network": "TRC20",
  "notify_url": "https://callback.yoursite.com"
}`}
               </pre>
            </div>
            <h3>Transaction Fee</h3>
            <p>METACRM Gateway charges a flat 0.5% fee on all merchant transactions. Network gas fees are calculated dynamically based on current congestion levels.</p>
          </div>
        );
      case 'invoice-api':
      case 'cashier':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-black mb-6">Cashier & Invoices</h1>
            <p className="text-slate-400">The Cashier module provides high-level invoice management, perfect for e-commerce checkouts.</p>
            <h3>Invoice Payment Flow</h3>
            <ol className="space-y-4">
               <li className="text-slate-300">Create an invoice using <code className="text-primary">POST /invoices</code></li>
               <li className="text-slate-300">Redirect customer to the returned <code className="text-primary">payment_url</code></li>
               <li className="text-slate-300">Listen for the <code className="text-primary">invoice.paid</code> webhook</li>
               <li className="text-slate-300">Confirm payment and fulfill the order</li>
            </ol>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 my-8">
               <h4 className="text-xs font-black text-slate-500 uppercase mb-4">POST /invoices/create</h4>
               <pre className="text-xs text-primary-light">
{`{
  "order_id": "ORD-9918",
  "price_amount": 25.50,
  "price_currency": "USD",
  "pay_currency": "USDT",
  "title": "Monthly Subscription"
}`}
               </pre>
            </div>
          </div>
        );
      case 'webhooks':
        return (
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-black mb-6">Webhooks & IPN</h1>
            <p className="text-slate-400">Webhooks allow you to receive real-time HTTP POST notifications whenever a transaction or invoice status changes.</p>
            <h3>Payload Structure</h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 my-8">
               <pre className="text-xs text-primary-light">
{`{
  "event": "invoice.paid",
  "invoice_id": "INV_82190",
  "status": "confirmed",
  "tx_hash": "0x82...12f",
  "signature": "sha256_hash_here"
}`}
               </pre>
            </div>
            <h3>Security & Verification</h3>
            <p>Every webhook request includes a <code className="text-primary">X-METACRM-Signature</code> header. Use your Secret Key to verify the signature and ensure the request originated from METACRM Gateway nodes.</p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="text-slate-600 mb-6" size={64} />
            <h2 className="text-2xl font-bold dark:text-white">Section Under Construction</h2>
            <p className="text-slate-500 max-w-md mt-2">Our technical writers are currently updating the documentation for {activeSection}. Please check back later or contact support.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <nav className="h-20 border-b border-white/10 flex items-center px-8 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">METACRM DOCS</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Exit Documentation
          </Link>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/10 p-6 overflow-y-auto hidden md:block">
           <nav className="space-y-8">
             {navItems.map((group, idx) => (
               <div key={idx}>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{group.group}</p>
                 <div className="space-y-1">
                   {group.items.map((item) => (
                     <button
                       key={item.id}
                       onClick={() => setActiveSection(item.id)}
                       className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                         activeSection === item.id 
                          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                       }`}
                     >
                       {item.icon}
                       {item.label}
                     </button>
                   ))}
                 </div>
               </div>
             ))}
           </nav>
           
           <div className="mt-12 p-6 bg-slate-900 border border-white/5 rounded-2xl">
              <p className="text-xs font-bold mb-2 flex items-center gap-2 text-primary"><ShieldCheck size={14}/> Verified API v4.2</p>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">METACRM Gateway follows ISO 27001 standards for data security and on-chain ledger integrity.</p>
           </div>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 md:p-16 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
