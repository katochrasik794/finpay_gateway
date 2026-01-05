
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Globe, Lock, CheckCircle2, 
  Code, Layers, Repeat, Cpu, Database, 
  Mail, MessageCircle, Clock, Flashlight, ChevronDown, 
  Smartphone, BarChart3, ShieldAlert, Send, Phone, MapPin, 
  Moon, Sun, RefreshCw, Play, Terminal, Copy
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { hash } = useLocation();

  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [apiDemoEndpoint, setApiDemoEndpoint] = useState<'invoice' | 'balance' | 'payout'>('invoice');
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    setTimeout(() => setContactStatus('sent'), 1500);
  };

  const runApiDemo = () => {
    setIsApiLoading(true);
    setApiResponse(null);
    
    const responses = {
      invoice: {
        status: "success",
        data: {
          id: "INV_82910_XQ",
          payment_url: "https://pay.metacrm.shop/INV_82910_XQ",
          amount: "250.00",
          currency: "USDT",
          network: "TRC20",
          expires_at: new Date(Date.now() + 3600000).toISOString()
        }
      },
      balance: {
        status: "success",
        data: [
          { currency: "USDT", chain: "TRC20", balance: "42100.00" },
          { currency: "USDT", chain: "ERC20", balance: "1250.25" },
          { currency: "TRX", chain: "TRON", balance: "840.00" }
        ]
      },
      payout: {
        status: "processing",
        data: {
          batch_id: "BTCH_9921_L",
          recipients: 12,
          total_payout: "1200.00 USDT",
          tx_hash: "0x82f...a1b2",
          estimated_completion: "45 seconds"
        }
      }
    };

    setTimeout(() => {
      setApiResponse(responses[apiDemoEndpoint]);
      setIsApiLoading(false);
    }, 1000);
  };

  const pricingTiers = [
    {
      name: "Starter Node",
      fee: "0.6%",
      activation: "$1,500",
      settlement: "T+1 (24h)",
      features: ["Unified Multi-Chain", "Standard API Access", "Email Support", "TRC20 & BEP20", "50% Off Annual Renewal"],
      popular: false
    },
    {
      name: "Growth Hub",
      fee: "0.30%",
      activation: "$3,000",
      settlement: "12 Hours",
      features: ["Priority Processing", "Webhook Alerts", "Dedicated Manager", "All USDT Networks", "50% Off Annual Renewal"],
      popular: true
    },
    {
      name: "Elite Enterprise",
      fee: "0.15%",
      activation: "$6,000",
      settlement: "Instant",
      features: ["Lowest Market Fees", "Custom Node Cluster", "24/7 VIP Support", "Batch Payouts Free", "50% Off Annual Renewal"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 h-14 sm:h-16 md:h-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1 sm:gap-2 cursor-pointer min-w-0 flex-shrink">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
              <ShieldCheck className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" size={18} />
            </div>
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight uppercase truncate">METACRM</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollTo('how-it-works')} className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">Process</button>
            <button onClick={() => scrollTo('features')} className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">Features</button>
            <button onClick={() => scrollTo('api-demo')} className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">API Demo</button>
            <button onClick={() => scrollTo('pricing')} className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors whitespace-nowrap">Pricing</button>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-shrink-0">
            <button 
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex-shrink-0"
            >
              {theme === 'light' ? <Moon size={16} className="sm:w-5 sm:h-5" /> : <Sun size={16} className="sm:w-5 sm:h-5 text-yellow-400" />}
            </button>
            <button onClick={() => navigate('/login')} className="px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap">Login</button>
            <button onClick={() => navigate('/register')} className="px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-primary text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:bg-primary-dark shadow-xl shadow-primary/20 transition-all whitespace-nowrap">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 px-3 sm:px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 md:mb-8 animate-fade-in">
            <Zap size={12} className="sm:w-4 sm:h-4" /> <span className="whitespace-nowrap">Fast, Secure, Enterprise Crypto Gateway</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight px-2">
            The Future of <br className="hidden sm:block" />
            <span className="text-primary break-words">Crypto Settlement</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 font-medium leading-relaxed px-2 break-words">
            Accept USDT across all major chains. Zero-custody, instant reconciliation, and institutional-grade security for high-volume merchants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-2">
            <button onClick={() => navigate('/register')} className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-primary text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 whitespace-nowrap">
              Start Accepting Now
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
              Explore Process
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-6 sm:py-8 md:py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
           <p className="text-center text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 sm:mb-8 md:mb-10">Supporting Global Networks</p>
           <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {['Ethereum', 'Tron', 'Binance', 'Solana', 'Polygon'].map((name) => (
                <div key={name} className="flex items-center gap-1.5 sm:gap-2">
                  <Globe className="text-primary sm:w-5 sm:h-5 md:w-6 md:h-6" size={18} />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold tracking-tight whitespace-nowrap">{name}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-tight break-words">How it Works</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-xs sm:text-sm md:text-base lg:text-lg break-words px-2">Integrate once, settle globally. Our process is designed for seamless operation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block"></div>
            {[
              { step: "01", title: "Generate Invoice", desc: "Use our API or Merchant Portal to create a secure payment link or QR code for your customer.", icon: <Code /> },
              { step: "02", title: "Customer Pays", desc: "Customer sends USDT on their preferred chain. Our nodes detect and validate the TX in seconds.", icon: <Smartphone /> },
              { step: "03", title: "Instant Settlement", desc: "Funds are automatically bridged to your master wallet or bank-grade custody account.", icon: <Zap /> }
            ].map((s, i) => (
              <div key={i} className="relative z-10 bg-white dark:bg-slate-950 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 text-primary rounded-xl sm:rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                   {React.cloneElement(s.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="text-primary font-black text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">Step {s.step}</span>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 break-words">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-xs sm:text-sm md:text-base break-words">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API DEMO SECTION */}
      <section id="api-demo" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 bg-slate-50 dark:bg-slate-900/30 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-tight break-words px-2">Developer Playroom</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto break-words px-2">Test the power of our REST API in real-time. Experience lightning-fast responses from our global node cluster.</p>
          </div>

          <div className="bg-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 overflow-hidden flex flex-col xl:flex-row">
            {/* Sidebar / Tabs */}
            <div className="xl:w-64 border-b xl:border-b-0 xl:border-r border-white/5 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-row xl:flex-col gap-2 sm:gap-3 md:gap-4 overflow-x-auto">
              {[
                { id: 'invoice', label: 'Create Invoice', method: 'POST' },
                { id: 'balance', label: 'Get Balances', method: 'GET' },
                { id: 'payout', label: 'Bulk Payout', method: 'POST' },
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => {
                    setApiDemoEndpoint(tab.id as any);
                    setApiResponse(null);
                  }}
                  className={`flex-1 xl:flex-none p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl text-left transition-all group min-w-[120px] sm:min-w-0 ${
                    apiDemoEndpoint === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5 sm:mb-1">{tab.method}</p>
                  <p className="text-xs sm:text-sm font-bold truncate">{tab.label}</p>
                </button>
              ))}
              <div className="hidden xl:block mt-auto pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">API Status: 100%</span>
                </div>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">v4.2 PROD_REGION_ASIA</p>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
               {/* Request Pane */}
               <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-1.5 sm:gap-2 truncate">
                      <Terminal size={12} className="sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> <span className="truncate">Request Body</span>
                    </h4>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-600 whitespace-nowrap shrink-0">application/json</span>
                  </div>
                  <div className="bg-black/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/5 font-mono text-[10px] sm:text-xs md:text-sm min-h-[200px] sm:min-h-[250px] md:min-h-[300px] shadow-inner overflow-x-auto">
                    {apiDemoEndpoint === 'invoice' && (
                      <pre className="text-emerald-400">
{`{
  "amount": 250.00,
  "currency": "USDT",
  "network": "TRC20",
  "order_id": "METACRM_9912",
  "notify_url": "https://yourhooks.com/in"
}`}
                      </pre>
                    )}
                    {apiDemoEndpoint === 'balance' && (
                      <pre className="text-emerald-400">
{`{
  "account_id": "MASTER_82103",
  "networks": ["TRC20", "ERC20"]
}`}
                      </pre>
                    )}
                    {apiDemoEndpoint === 'payout' && (
                      <pre className="text-emerald-400">
{`{
  "batch_id": "BTCH_9921_L",
  "recipients": [
    {"addr": "TAbc...", "amt": 100.00},
    {"addr": "TAbc...", "amt": 1100.00}
  ],
  "network": "TRC20"
}`}
                      </pre>
                    )}
                  </div>
                  <button 
                    onClick={runApiDemo}
                    disabled={isApiLoading}
                    className="w-full py-3 sm:py-4 md:py-5 bg-primary text-white text-xs sm:text-sm md:text-base lg:text-lg font-black rounded-xl sm:rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-2xl shadow-primary/30 disabled:opacity-50"
                  >
                    {isApiLoading ? (
                       <RefreshCw className="animate-spin" size={16} className="sm:w-5 sm:h-5" />
                    ) : (
                       <><Play size={16} className="sm:w-5 sm:h-5" fill="currentColor" /> <span className="whitespace-nowrap">Run Request</span></>
                    )}
                  </button>
               </div>

               {/* Response Pane */}
               <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-1.5 sm:gap-2 truncate">
                      <Database size={12} className="sm:w-3.5 sm:h-3.5 text-primary shrink-0" /> <span className="truncate">Live Response</span>
                    </h4>
                    <span className={`text-[9px] sm:text-[10px] font-black uppercase px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${apiResponse ? 'bg-green-500/10 text-green-500' : 'bg-slate-700 text-slate-500'}`}>
                      {apiResponse ? '200 OK' : 'Waiting...'}
                    </span>
                  </div>
                  <div className="bg-black/60 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/5 font-mono text-[10px] sm:text-xs md:text-sm min-h-[200px] sm:min-h-[250px] md:min-h-[300px] shadow-inner relative group overflow-auto custom-scrollbar">
                    {!apiResponse && !isApiLoading && (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-bold opacity-30">
                        CLICK RUN TO FETCH DATA
                      </div>
                    )}
                    {isApiLoading && (
                      <div className="space-y-4">
                         <div className="h-4 w-3/4 bg-white/5 rounded-full animate-pulse"></div>
                         <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse"></div>
                         <div className="h-4 w-2/3 bg-white/5 rounded-full animate-pulse"></div>
                      </div>
                    )}
                    {apiResponse && (
                       <pre className="text-primary-light animate-fade-in whitespace-pre-wrap">
                        {JSON.stringify(apiResponse, null, 2)}
                       </pre>
                    )}
                    {apiResponse && (
                      <button 
                        onClick={() => navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2))}
                        className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 opacity-0 group-hover:opacity-100 transition-all"
                        title="Copy Response"
                      >
                        <Copy size={16} />
                      </button>
                    )}
                  </div>
                  <div className="pt-2 sm:pt-4 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-slate-600 flex-wrap">
                    <ShieldCheck size={12} className="sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                    <span className="break-words">ENCRYPTED WITH AES-256-GCM PRODUCTION NODE L-12</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
           <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight break-words">Bank-Grade Infrastructure</h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed break-words">
                We don't just process payments; we protect your enterprise. Our zero-custody model ensures you remain in control of your private keys while we handle the network complexity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: <Lock />, title: "Non-Custodial Bridges", desc: "Funds route directly to your wallet." },
                   { icon: <ShieldCheck />, title: "ISO 27001 Certified", desc: "Data security is our foundation." },
                   { icon: <Database />, title: "Immutable Ledgering", desc: "On-chain proof for every cent." },
                   { icon: <RefreshCw />, title: "Auto-Reconciliation", desc: "Real-time accounting sync." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                       </div>
                       <div>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="flex-1 w-full max-w-lg">
              <div className="bg-slate-800 rounded-[3rem] p-10 border border-white/5 shadow-2xl relative">
                 <div className="space-y-6">
                    <div className="flex justify-between items-center pb-6 border-b border-white/5">
                       <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="font-bold text-sm tracking-tight">Security Node 82-X Online</span>
                       </div>
                       <ShieldAlert className="text-primary" size={20} />
                    </div>
                    <div className="space-y-4">
                       <div className="h-4 w-3/4 bg-white/5 rounded-full"></div>
                       <div className="h-4 w-1/2 bg-white/5 rounded-full"></div>
                       <div className="h-4 w-5/6 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="pt-6">
                       <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-between">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest">Risk Score: 0.001 (SAFE)</span>
                          <CheckCircle2 className="text-primary" size={16} />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-tight break-words px-2">Enterprise Pricing</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-400 font-medium break-words px-2">Transparent activation costs with 50% annual renewal discounts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`relative flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[3.5rem] border transition-all duration-500 ${
                tier.popular 
                ? 'bg-slate-900 dark:bg-slate-900 border-primary shadow-2xl shadow-primary/20 md:scale-105 z-10' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 bg-primary text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                    Best Value
                  </div>
                )}
                
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 sm:mb-3 md:mb-4 break-words ${tier.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary break-words`}>{tier.fee}</span>
                  </div>
                  <p className={`text-xs sm:text-sm font-bold mt-1 sm:mt-2 ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>per transaction</p>
                </div>

                <div className={`space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-10 pb-4 sm:pb-6 md:pb-8 border-b ${tier.popular ? 'border-white/10' : 'border-slate-100'}`}>
                  <div className="flex flex-col gap-1">
                    <span className={tier.popular ? 'text-slate-500 text-[10px]' : 'text-slate-400 text-[10px]'}>Activation Fee</span>
                    <span className={`text-xl sm:text-2xl md:text-3xl font-black break-words ${tier.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.activation} USD</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={tier.popular ? 'text-slate-400' : 'text-slate-500'}>{tier.popular ? 'Settlement Time' : 'Settlement'}</span>
                    <span className={`font-black flex items-center gap-1.5 text-primary truncate ${tier.popular ? 'text-primary' : 'text-primary'}`}>
                      <Clock size={14} className="sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">{tier.settlement}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-black text-primary bg-primary/5 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-primary/10">
                    <span className="truncate">Renewal Discount</span>
                    <span className="whitespace-nowrap">50% OFF</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1 mb-6 sm:mb-8 md:mb-10">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                      <span className={`text-xs sm:text-sm font-bold break-words ${tier.popular ? 'text-slate-300' : 'text-slate-700 dark:text-slate-400'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate('/register')}
                  className={`w-full py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl md:rounded-[2rem] font-black text-xs sm:text-sm md:text-base lg:text-lg transition-all ${
                    tier.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/30' 
                    : 'bg-slate-900 dark:bg-white dark:text-slate-900 text-white hover:opacity-90 shadow-xl'
                  }`}
                >
                  Activate Gateway
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 bg-slate-50 dark:bg-slate-900/50 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 break-words px-2">Common Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about the METACRM Gateway.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Which USDT networks do you support?", a: "We support USDT on TRC20, ERC20, and BEP20. Support for Polygon and Solana is currently in private beta." },
              { q: "Is the gateway non-custodial?", a: "Yes. Funds are settled directly into your provided master wallet address. We never hold your private keys." },
              { q: "How does the 50% renewal work?", a: "Your initial activation fee covers the first year. Every subsequent year, you pay only 50% of the initial cost to maintain your node cluster." },
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade between tiers at any time. Activation costs are pro-rated based on your remaining year." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {item.q}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 px-3 sm:px-4 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
           <div className="lg:w-2/5 bg-slate-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 relative">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] -ml-20 -mb-20"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 md:mb-8 break-words px-2">Let's Talk Enterprise</h2>
              <p className="text-slate-400 font-medium mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base lg:text-lg break-words">Have custom volume requirements or need a tailored integration? Our experts are here to help.</p>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                 <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary shrink-0">
                       <Mail size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                       <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest">Email Us</p>
                       <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold truncate break-all">admin@metacrm.shop</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary shrink-0">
                       <MessageCircle size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                       <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest">Telegram</p>
                       <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold truncate">@METACRM_Support</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary shrink-0">
                       <MapPin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                       <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest">Global HQ</p>
                       <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold break-words">Singapore Financial Hub</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
              {contactStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 break-words">Message Received</h3>
                   <p className="text-slate-500 font-medium">Our account managers will reach out within the next 2 hours.</p>
                   <button onClick={() => setContactStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all text-xs sm:text-sm md:text-base" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest px-1">Company Email</label>
                        <input required type="email" placeholder="john@company.com" className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all text-xs sm:text-sm md:text-base" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest px-1">Interest Tier</label>
                     <select className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all appearance-none cursor-pointer text-xs sm:text-sm md:text-base">
                        <option>Starter Node ($1,500)</option>
                        <option>Growth Hub ($3,000)</option>
                        <option>Elite Enterprise ($6,000)</option>
                        <option>Custom Enterprise Volume</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest px-1">How can we help?</label>
                     <textarea required rows={4} placeholder="Tell us about your volume and integration needs..." className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all resize-none text-xs sm:text-sm md:text-base"></textarea>
                  </div>
                  <button 
                    disabled={contactStatus === 'sending'}
                    type="submit" 
                    className="w-full py-3 sm:py-4 md:py-5 bg-primary text-white font-black rounded-xl sm:rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 text-xs sm:text-sm md:text-base"
                  >
                    {contactStatus === 'sending' ? 'Sending Request...' : <><Send size={16} className="sm:w-5 sm:h-5" /> <span className="whitespace-nowrap">Send Inquiry</span></>}
                  </button>
                </form>
              )}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 py-24 px-4 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">METACRM</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-relaxed mb-8">
              Professional crypto payment infrastructure for high-growth enterprises. Accept tokens, manage wallets, and settle in fiat or stablecoins.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
               {['Twitter', 'Telegram', 'Github', 'LinkedIn'].map(social => (
                  <button key={social} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors border border-slate-100 dark:border-slate-700 shrink-0">
                     <Globe size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </button>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full md:w-auto">
             <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-widest text-primary">Gateway</h4>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-primary transition-colors break-words text-left">Process</button></li>
                   <li><button onClick={() => scrollTo('features')} className="hover:text-primary transition-colors break-words text-left">Features</button></li>
                   <li><button onClick={() => scrollTo('pricing')} className="hover:text-primary transition-colors break-words text-left">Pricing</button></li>
                </ul>
             </div>
             <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-widest text-primary">Developer</h4>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><Link to="/docs" className="hover:text-primary transition-colors break-words">API Docs</Link></li>
                   <li><Link to="/developers" className="hover:text-primary transition-colors break-words">SDKs</Link></li>
                   <li><Link to="/support" className="hover:text-primary transition-colors break-words">Status</Link></li>
                </ul>
             </div>
             <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-widest text-primary">Company</h4>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><Link to="/compliance" className="hover:text-primary transition-colors break-words">Compliance</Link></li>
                   <li><Link to="/privacy" className="hover:text-primary transition-colors break-words">Privacy</Link></li>
                   <li><Link to="/terms" className="hover:text-primary transition-colors break-words">Terms</Link></li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-4 sm:pt-6 md:pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4">
           <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left break-words">© 2024 METACRM Gateway. Registered in Singapore.</span>
           <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center sm:justify-end">
              <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div> <span className="whitespace-nowrap">Mainnet Live</span></span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div> <span className="whitespace-nowrap">All Nodes Operational</span></span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
