
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, FileText, CheckCircle } from 'lucide-react';

const CompliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="h-20 bg-white border-b border-slate-100 flex items-center px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">METACRM</span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary">Back to Home</Link>
        </div>
      </nav>

      <main className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Trust & Compliance</h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              We operate at the highest standards of regulatory compliance to ensure your merchant account remains secure and legally compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200">
                <Scale className="text-primary mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">AML / CTF Standards</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   Our Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) policies are aligned with FATF standards. We perform rigorous risk assessments for all merchants and monitor real-time transaction flows.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200">
                <FileText className="text-primary mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Regulatory Monitoring</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   We constantly monitor the evolving legal landscape for virtual asset service providers (VASPs) to ensure our gateway adapts to new requirements instantly.
                </p>
             </div>
          </div>

          <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm">
             <h3 className="text-2xl font-bold mb-8 text-center">Our Compliance Pillars</h3>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  "On-Chain KYC",
                  "Sanctions Screening",
                  "Risk Management",
                  "Audited Reserves"
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                     <CheckCircle className="text-primary mx-auto" size={32} />
                     <p className="font-bold text-slate-700">{item}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompliancePage;
