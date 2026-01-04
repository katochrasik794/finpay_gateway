
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, Layers, Lock, Cpu, Database, Repeat } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">METACRM</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary">Back to Home</Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Built for High Volume</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Our infrastructure is engineered to handle millions of requests while maintaining military-grade security for your funds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Cpu />, title: "Distributed Node Network", desc: "Our proprietary load balancer routes transactions through the fastest available nodes on Tron, Ethereum, and BSC." },
              { icon: <Database />, title: "Real-time Ledgering", desc: "Every satoshi is tracked. Our immutable internal database provides instant reconciliation for your accounting team." },
              { icon: <Repeat />, title: "Automated Refunds", desc: "Simplify customer disputes with one-click refund processing that sends assets back to the original sender address." },
              { icon: <Lock />, title: "Non-Custodial Bridges", desc: "Maintain full control. Connect your enterprise Fireblocks or Ledger wallet for non-custodial settlement." },
              { icon: <Layers />, title: "Multi-Wallet Management", desc: "Separate revenue streams with ease. Create unlimited sub-wallets for different projects or departments." },
              { icon: <ShieldCheck />, title: "KYT Analytics", desc: "Know Your Transaction. Automated risk scoring for every incoming payment to protect your business." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
             <h2 className="text-3xl font-bold mb-6">Ready to see it in action?</h2>
             <Link to="/register" className="inline-block px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all">
                Request a Demo
             </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;
