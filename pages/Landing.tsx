
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase">METACRM</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('how-it-works')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo('features')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollTo('api-demo')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">API Demo</button>
            <button onClick={() => scrollTo('pricing')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Pricing</button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
            </button>
            <button onClick={() => navigate('/login')} className="px-5 py-2.5 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Login</button>
            <button onClick={() => navigate('/register')} className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark shadow-xl shadow-primary/20 transition-all">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 animate-fade-in">
            <Zap size={16} /> Fast, Secure, Enterprise Crypto Gateway
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
            The Future of <br />
            <span className="text-primary">Crypto Settlement</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Accept USDT across all major chains. Zero-custody, instant reconciliation, and institutional-grade security for high-volume merchants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => navigate('/register')} className="w-full sm:w-auto px-12 py-6 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1">
              Start Accepting Now
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto px-12 py-6 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-xl font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
              Explore Process
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
           <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Supporting Global Networks</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {['Ethereum', 'Tron', 'Binance', 'Solana', 'Polygon'].map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <Globe className="text-primary" size={24} />
                  <span className="text-xl font-bold tracking-tight">{name}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">How it Works</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg">Integrate once, settle globally. Our process is designed for seamless operation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block"></div>
            {[
              { step: "01", title: "Generate Invoice", desc: "Use our API or Merchant Portal to create a secure payment link or QR code for your customer.", icon: <Code /> },
              { step: "02", title: "Customer Pays", desc: "Customer sends USDT on their preferred chain. Our nodes detect and validate the TX in seconds.", icon: <Smartphone /> },
              { step: "03", title: "Instant Settlement", desc: "Funds are automatically bridged to your master wallet or bank-grade custody account.", icon: <Zap /> }
            ].map((s, i) => (
              <div key={i} className="relative z-10 bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                   {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                </div>
                <span className="text-primary font-black text-xs uppercase tracking-widest mb-4">Step {s.step}</span>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API DEMO SECTION */}
      <section id="api-demo" className="py-32 px-4 bg-slate-50 dark:bg-slate-900/30 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Developer Playroom</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Test the power of our REST API in real-time. Experience lightning-fast responses from our global node cluster.</p>
          </div>

          <div className="bg-slate-900 rounded-[3rem] shadow-2xl border border-white/5 overflow-hidden flex flex-col xl:flex-row">
            {/* Sidebar / Tabs */}
            <div className="xl:w-64 border-b xl:border-b-0 xl:border-r border-white/5 p-8 flex flex-row xl:flex-col gap-4 overflow-x-auto">
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
                  className={`flex-1 xl:flex-none p-4 rounded-2xl text-left transition-all group ${
                    apiDemoEndpoint === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{tab.method}</p>
                  <p className="text-sm font-bold">{tab.label}</p>
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
            <div className="flex-1 p-8 md:p-12 flex flex-col lg:flex-row gap-12">
               {/* Request Pane */}
               <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Terminal size={14} className="text-primary" /> Request Body
                    </h4>
                    <span className="text-xs font-bold text-slate-600">application/json</span>
                  </div>
                  <div className="bg-black/40 rounded-3xl p-8 border border-white/5 font-mono text-sm min-h-[300px] shadow-inner">
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
                    className="w-full py-5 bg-primary text-white text-lg font-black rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 disabled:opacity-50"
                  >
                    {isApiLoading ? (
                       <RefreshCw className="animate-spin" size={20} />
                    ) : (
                       <><Play size={20} fill="currentColor" /> Run Request</>
                    )}
                  </button>
               </div>

               {/* Response Pane */}
               <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Database size={14} className="text-primary" /> Live Response
                    </h4>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${apiResponse ? 'bg-green-500/10 text-green-500' : 'bg-slate-700 text-slate-500'}`}>
                      {apiResponse ? '200 OK' : 'Waiting...'}
                    </span>
                  </div>
                  <div className="bg-black/60 rounded-3xl p-8 border border-white/5 font-mono text-sm min-h-[300px] shadow-inner relative group overflow-auto custom-scrollbar">
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
                  <div className="pt-4 flex items-center gap-2 text-xs font-bold text-slate-600">
                    <ShieldCheck size={14} className="text-primary" />
                    ENCRYPTED WITH AES-256-GCM PRODUCTION NODE L-12
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="py-32 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">Bank-Grade Infrastructure</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
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
      <section id="pricing" className="py-32 px-4 scroll-mt-20 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Enterprise Pricing</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Transparent activation costs with 50% annual renewal discounts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`relative flex flex-col p-12 rounded-[3.5rem] border transition-all duration-500 ${
                tier.popular 
                ? 'bg-slate-900 dark:bg-slate-900 border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2.5 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg">
                    Best Value
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-black mb-4 ${tier.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-black text-primary`}>{tier.fee}</span>
                  </div>
                  <p className={`text-sm font-bold mt-2 ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>per transaction</p>
                </div>

                <div className={`space-y-5 mb-10 pb-8 border-b ${tier.popular ? 'border-white/10' : 'border-slate-100'}`}>
                  <div className="flex flex-col gap-1">
                    <span className={tier.popular ? 'text-slate-500 text-[10px]' : 'text-slate-400 text-[10px]'}>Activation Fee</span>
                    <span className={`text-3xl font-black ${tier.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.activation} USD</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={tier.popular ? 'text-slate-400' : 'text-slate-500'}>Settlement Time</span>
                    <span className={`font-black flex items-center gap-1.5 ${tier.popular ? 'text-primary' : 'text-primary'}`}>
                      <Clock size={16} /> {tier.settlement}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-black text-primary bg-primary/5 p-3 rounded-xl border border-primary/10">
                    <span>Renewal Discount</span>
                    <span>50% OFF</span>
                  </div>
                </div>

                <div className="space-y-4 flex-1 mb-10">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                      <span className={`text-sm font-bold ${tier.popular ? 'text-slate-300' : 'text-slate-700 dark:text-slate-400'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate('/register')}
                  className={`w-full py-5 rounded-[2rem] font-black text-lg transition-all ${
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
      <section id="faq" className="py-32 px-4 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Common Questions</h2>
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
      <section id="contact" className="py-32 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
           <div className="lg:w-2/5 bg-slate-900 text-white p-12 lg:p-16 relative">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] -ml-20 -mb-20"></div>
              <h2 className="text-4xl font-black mb-8">Let's Talk Enterprise</h2>
              <p className="text-slate-400 font-medium mb-12 text-lg">Have custom volume requirements or need a tailored integration? Our experts are here to help.</p>
              
              <div className="space-y-8">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Us</p>
                       <p className="text-lg font-bold">admin@metacrm.shop</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                       <MessageCircle size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Telegram</p>
                       <p className="text-lg font-bold">@METACRM_Support</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Global HQ</p>
                       <p className="text-lg font-bold">Singapore Financial Hub</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-3/5 p-12 lg:p-16">
              {contactStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-2xl font-black mb-2">Message Received</h3>
                   <p className="text-slate-500 font-medium">Our account managers will reach out within the next 2 hours.</p>
                   <button onClick={() => setContactStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Company Email</label>
                        <input required type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Interest Tier</label>
                     <select className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all appearance-none cursor-pointer">
                        <option>Starter Node ($1,500)</option>
                        <option>Growth Hub ($3,000)</option>
                        <option>Elite Enterprise ($6,000)</option>
                        <option>Custom Enterprise Volume</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">How can we help?</label>
                     <textarea required rows={4} placeholder="Tell us about your volume and integration needs..." className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all resize-none"></textarea>
                  </div>
                  <button 
                    disabled={contactStatus === 'sending'}
                    type="submit" 
                    className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {contactStatus === 'sending' ? 'Sending Request...' : <><Send size={20} /> Send Inquiry</>}
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
            <div className="flex gap-4">
               {['Twitter', 'Telegram', 'Github', 'LinkedIn'].map(social => (
                  <button key={social} className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors border border-slate-100 dark:border-slate-700">
                     <Globe size={18} />
                  </button>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
             <div className="space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest text-primary">Gateway</h4>
                <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-primary transition-colors">Process</button></li>
                   <li><button onClick={() => scrollTo('features')} className="hover:text-primary transition-colors">Features</button></li>
                   <li><button onClick={() => scrollTo('pricing')} className="hover:text-primary transition-colors">Pricing</button></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest text-primary">Developer</h4>
                <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><Link to="/docs" className="hover:text-primary transition-colors">API Docs</Link></li>
                   <li><Link to="/developers" className="hover:text-primary transition-colors">SDKs</Link></li>
                   <li><Link to="/support" className="hover:text-primary transition-colors">Status</Link></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest text-primary">Company</h4>
                <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-bold">
                   <li><Link to="/compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
                   <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                   <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
           <span>© 2024 METACRM Gateway. Registered in Singapore.</span>
           <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Mainnet Live</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> All Nodes Operational</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
