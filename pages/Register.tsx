
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Info, ArrowLeft } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-slate-900">METACRM</span>
          </Link>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-10 border border-slate-100 text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Info size={40} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Account Registration</h1>
          <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl mb-8">
            <p className="text-amber-900 font-medium leading-relaxed">
              METACRM Gateway Account Generation is currently <span className="font-bold">Invite-Only</span>.
            </p>
            <p className="text-amber-800 text-sm mt-2">
              To activate your gateway account and start accepting crypto payments, please contact our support team.
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:admin@metacrm.shop" 
              className="w-full block py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
            >
              <Mail size={20} /> Contact Support
            </a>
            <Link 
              to="/login" 
              className="w-full block py-4 bg-white text-slate-600 font-bold border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} /> Return to Login
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs uppercase tracking-widest font-semibold">
          METACRM COMPLIANCE & SECURITY DEPT.
        </p>
      </div>
    </div>
  );
};

export default Register;
