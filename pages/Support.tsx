
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Mail, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const SupportPage: React.FC = () => {
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
          <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6">How can we help?</h1>
          <p className="text-xl text-slate-600 mb-16 font-medium">Our integration experts and account managers are standing by.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <a href="mailto:admin@metacrm.shop" className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary transition-all text-left group">
                <Mail className="text-primary mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-2">Email Support</h3>
                <p className="text-slate-500 font-medium mb-6">Standard response time: &lt; 2 hours.</p>
                <div className="flex items-center gap-2 text-primary font-bold">
                   admin@metacrm.shop <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
             </a>
             <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary transition-all text-left group cursor-pointer">
                <MessageCircle className="text-primary mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-2">24/7 Telegram</h3>
                <p className="text-slate-500 font-medium mb-6">Direct access to technical assistance.</p>
                <div className="flex items-center gap-2 text-primary font-bold">
                   @METACRM_Support <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-left relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
             <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                <div className="flex-1">
                   <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <HelpCircle className="text-primary" /> Technical Documentation
                   </h3>
                   <p className="text-slate-400 font-medium mb-0">
                      Need help with integration? Our comprehensive API documentation and SDK guides cover everything from authentication to webhooks.
                   </p>
                </div>
                <Link to="/developers" className="px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all shrink-0">
                   Go to Docs
                </Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage;
