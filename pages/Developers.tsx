
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Terminal, Code, Cpu, ExternalLink, ArrowLeft } from 'lucide-react';

const DevelopersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="h-20 border-b border-white/10 flex items-center px-4 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">METACRM</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Overview
          </Link>
        </div>
      </nav>

      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6">
                   <Code size={14} /> FULL API DOCUMENTATION V4.2
                </div>
                <h1 className="text-5xl font-black mb-6">Developer Infrastructure</h1>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                   Comprehensive documentation for our high-frequency payment nodes. Secure, scalable, and built for modern fintech stacks.
                </p>
                <div className="flex gap-4">
                   <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all">
                      Explore Endpoints
                   </button>
                   <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                      Download SDKs
                   </button>
                </div>
             </div>
             <div className="flex-1 w-full">
                <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl font-mono text-sm overflow-hidden">
                   <div className="flex items-center gap-2 mb-6 opacity-40">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="space-y-2 text-primary-light">
                      <p><span className="text-pink-500">const</span> METACRM = require(<span className="text-amber-300">'@metacrm/gateway'</span>);</p>
                      <p><span className="text-pink-500">const</span> gateway = <span className="text-pink-500">new</span> METACRM.Client(<span className="text-amber-300">'pk_live_...'</span>);</p>
                      <br/>
                      <p><span className="text-slate-500">// Initialize a multi-chain charge</span></p>
                      <p><span className="text-pink-500">await</span> gateway.charges.create({'{'}</p>
                      <p className="pl-4">amount: <span className="text-blue-400">120.00</span>,</p>
                      <p className="pl-4">currency: <span className="text-amber-300">'USDT'</span>,</p>
                      <p className="pl-4">metadata: {'{'} orderId: <span className="text-amber-300">'82103'</span> {'}'}</p>
                      <p>{'}'});</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: <Terminal />, title: "RESTful API", desc: "Predictable API endpoints with robust error handling and standardized JSON responses." },
               { icon: <Cpu />, title: "Custom Webhooks", desc: "Real-time payment notifications delivered with automatic exponential backoff retry logic." },
               { icon: <ExternalLink />, title: "Client Side SDKs", desc: "Drop-in payment widgets for React, Vue, iOS, and Android for a seamless checkout experience." }
             ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all">
                   <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                   <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevelopersPage;
