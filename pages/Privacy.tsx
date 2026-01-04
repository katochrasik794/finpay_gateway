
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="h-20 border-b border-slate-100 flex items-center px-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
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

      <main className="py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
          <p className="text-slate-500 font-medium mb-10">Last updated: October 24, 2024</p>
          
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            To provide our crypto gateway services, we collect minimal personal information necessary to satisfy AML/KYC requirements. This includes email addresses, business registration details, and wallet public keys. We never store private keys or seed phrases.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Use of Blockchain Data</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Transactions processed through our gateway are recorded on public blockchains (Tron, Ethereum, BSC). By using our service, you acknowledge that transaction hash, amount, and wallet addresses are publicly accessible by design.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We employ industry-standard encryption to protect merchant accounts. All API communication is secured via SSL/TLS. Our infrastructure is hosted in ISO 27001 certified data centers.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We may use third-party tools for AML screening and risk analysis. These partners are strictly vetted and are only provided with the data required to perform their specific function.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
