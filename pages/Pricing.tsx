
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Zap, Globe, Clock, ArrowLeft } from 'lucide-react';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white">
      <nav className="h-20 border-b border-slate-100 flex items-center px-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">METACRM</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Enterprise Tiers</h1>
            <p className="text-xl text-slate-600 font-medium">Professional gateway infrastructure with transparent activation fees and ultra-low transaction costs. Save 50% on every annual renewal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`relative flex flex-col p-12 rounded-[3.5rem] border transition-all duration-500 ${
                tier.popular 
                ? 'bg-slate-900 border-primary shadow-2xl scale-105 z-10 text-white' 
                : 'bg-white border-slate-200 shadow-sm'
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2.5 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg">
                    Best Seller
                  </div>
                )}
                
                <div className="mb-10 text-center">
                  <h3 className={`text-2xl font-black mb-4 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-7xl font-black text-primary">{tier.fee}</span>
                  </div>
                  <p className={`text-sm font-bold mt-2 ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>per transaction</p>
                </div>

                <div className={`space-y-6 mb-12 pb-10 border-b ${tier.popular ? 'border-white/10' : 'border-slate-100'}`}>
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${tier.popular ? 'text-slate-500' : 'text-slate-400'}`}>Activation Fee</span>
                    <span className="text-4xl font-black">{tier.activation} USD</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-2xl">
                    <span className="text-xs font-black text-primary uppercase tracking-tight">Settlement</span>
                    <span className="font-black flex items-center gap-2 text-primary">
                      <Clock size={16} /> {tier.settlement}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className={tier.popular ? 'text-slate-400' : 'text-slate-500'}>Annual Renewal</span>
                    <span className="text-primary font-black">50% DISCOUNT</span>
                  </div>
                </div>

                <div className="space-y-5 flex-1 mb-12">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                      <span className={`text-sm font-bold ${tier.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate('/register')}
                  className={`w-full py-5 rounded-[2rem] font-black text-lg transition-all ${
                    tier.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/30' 
                    : 'bg-slate-900 text-white hover:opacity-95 shadow-xl'
                  }`}
                >
                  Activate Now
                </button>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-16">
             <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/5">
                   <Zap size={36} />
                </div>
                <h4 className="text-2xl font-black mb-4">Instant Scalability</h4>
                <p className="text-slate-500 font-medium leading-relaxed">Upgrade your plan at any time. Activation costs are pro-rated when moving between tiers to ensure fair pricing.</p>
             </div>
             <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/5">
                   <ShieldCheck size={36} />
                </div>
                <h4 className="text-2xl font-black mb-4">Locked Fees</h4>
                <p className="text-slate-500 font-medium leading-relaxed">Once activated, your transaction fee is locked. We guarantee no fee increases for existing active merchant accounts.</p>
             </div>
             <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/5">
                   <Globe size={36} />
                </div>
                <h4 className="text-2xl font-black mb-4">Renewal Bonus</h4>
                <p className="text-slate-500 font-medium leading-relaxed">Keep your gateway active. Renew your plan every year for just 50% of the initial activation cost for lifetime access.</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
