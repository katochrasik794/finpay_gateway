
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const TermsPage: React.FC = () => {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
          <p className="text-slate-500 font-medium mb-12">By accessing METACRM Gateway, you agree to these terms.</p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Eligibility</h2>
              <p className="text-slate-600 leading-relaxed">
                You must be at least 18 years old and have the legal authority to bind your business to these terms. Our services are not available to residents of sanctioned countries or jurisdictions where crypto-assets are prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Prohibited Activities</h2>
              <p className="text-slate-600 leading-relaxed">
                The gateway may not be used for illegal drugs, weapons, human trafficking, money laundering, or any activity that violates our AML policies. Violation of these terms will result in immediate account termination and freezing of settled funds pending legal review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Fees</h2>
              <p className="text-slate-600 leading-relaxed">
                We charge a flat 0.5% fee on all successful incoming transactions. Network gas fees for withdrawals are the responsibility of the merchant. We reserve the right to update our fee schedule with 30 days' notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Blockchain technology involves inherent risks. We are not liable for network congestion, smart contract failures, or losses due to user error (e.g., sending assets to the wrong address).
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
