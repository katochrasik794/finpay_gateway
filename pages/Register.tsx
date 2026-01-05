
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Info, ArrowLeft } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white sm:w-6 sm:h-6" size={20} />
              </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">METACRM</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-xl dark:shadow-slate-900/50 p-6 sm:p-8 md:p-10 border border-slate-100 dark:border-slate-800 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Info size={32} className="sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Account Registration</h1>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
            <p className="text-amber-900 dark:text-amber-200 font-medium leading-relaxed text-sm sm:text-base">
              METACRM Gateway Account Generation is currently <span className="font-bold">Invite-Only</span>.
            </p>
            <p className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm mt-2">
              To activate your gateway account and start accepting crypto payments, please contact our support team.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <a 
              href="mailto:admin@metacrm.shop" 
              className="w-full block py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl sm:rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" /> Contact Support
            </a>
            <Link 
              to="/login" 
              className="w-full block py-3 sm:py-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Return to Login
            </Link>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-center text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
          METACRM COMPLIANCE & SECURITY DEPT.
        </p>
      </div>
    </div>
  );
};

export default Register;
