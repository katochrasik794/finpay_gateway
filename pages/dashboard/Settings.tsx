
import React, { useState } from 'react';
/* Add Code to the lucide-react imports */
import { User, Bell, Lock, Globe, Moon, CreditCard, LogOut, ArrowLeft, Shield, Mail, CheckCircle2, MapPin, DollarSign, FileText, Code, Clock, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const sections = [
    { id: 'profile', icon: <User size={20} />, label: 'Profile Information', desc: 'Manage your name, email and display preferences.' },
    { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications', desc: 'Configure email and webhook alerts for new payments.' },
    { id: 'security', icon: <Lock size={20} />, label: 'Security & 2FA', desc: 'Enable Two-Factor Authentication and update password.' },
    { id: 'regional', icon: <Globe size={20} />, label: 'Regional Settings', desc: 'Update your timezone and currency localization.' },
    { id: 'billing', icon: <CreditCard size={20} />, label: 'Billing & Plans', desc: 'Manage your enterprise subscription and billing info.' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Profile Information</h2>
             </div>
             <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold border-2 border-primary/20">AM</div>
                   <button className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold dark:text-white">Change Avatar</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">Full Name</label>
                      <input type="text" defaultValue="Admin Merchant" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">Public Email</label>
                      <input type="email" defaultValue="merchant@metacrm.shop" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                   </div>
                </div>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">Update Profile</button>
             </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Notifications</h2>
             </div>
             <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                   <h3 className="font-bold dark:text-white flex items-center gap-2"><Mail size={18} className="text-primary"/> Email Alerts</h3>
                </div>
                {[
                  { title: 'Payment Success', desc: 'Receive an email for every successful charge.' },
                  { title: 'Payout Processed', desc: 'Alert when a batch payout has been confirmed on-chain.' },
                  { title: 'Account Login', desc: 'Email notification for new account sign-ins.' }
                ].map((n, i) => (
                   <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div>
                         <p className="font-bold dark:text-white">{n.title}</p>
                         <p className="text-sm text-slate-500">{n.desc}</p>
                      </div>
                      <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                         <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                   </div>
                ))}
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
                   <h3 className="font-bold dark:text-white flex items-center gap-2 mb-4"><Code size={18} className="text-primary"/> Webhook Alerts</h3>
                   <p className="text-sm text-slate-500 mb-6">Real-time POST requests to your server for event handling.</p>
                   <button className="px-6 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-lg text-sm">Configure Webhooks</button>
                </div>
             </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Security & 2FA</h2>
             </div>
             <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center">
                      <Shield size={28} />
                   </div>
                   <div>
                      <p className="font-bold text-lg dark:text-white">Two-Factor Authentication</p>
                      <p className="text-sm text-slate-500">Secure your account with TOTP (Google Authenticator, Authy).</p>
                   </div>
                </div>
                <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">Enable 2FA</button>
             </div>
             <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="font-bold dark:text-white text-lg">Update Password</h3>
                <div className="space-y-4">
                   <input type="password" placeholder="Current Password" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="password" placeholder="New Password" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                      <input type="password" placeholder="Confirm New Password" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                   </div>
                </div>
                <button className="px-8 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl transition-all">Change Password</button>
             </div>
          </div>
        );
      case 'regional':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Regional Settings</h2>
             </div>
             <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-2"><DollarSign size={14}/> Base Currency</label>
                      <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none dark:text-white">
                         <option>USD ($)</option>
                         <option>EUR (€)</option>
                         <option>GBP (£)</option>
                         <option>TRY (₺)</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-2"><MapPin size={14}/> Timezone</label>
                      <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none dark:text-white">
                         <option>(GMT-08:00) Pacific Time</option>
                         <option>(GMT+00:00) London</option>
                         <option>(GMT+03:00) Istanbul</option>
                         <option>(GMT+08:00) Singapore</option>
                      </select>
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-500">Language Preferences</label>
                   <div className="flex flex-wrap gap-2">
                      {['English', 'Turkish', 'Spanish', 'Russian'].map(lang => (
                         <button key={lang} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${lang === 'English' ? 'bg-primary/10 border-primary text-primary' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'}`}>
                            {lang}
                         </button>
                      ))}
                   </div>
                </div>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">Apply Localization</button>
             </div>
          </div>
        );
      case 'billing':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setActiveTab(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Billing & Plans</h2>
             </div>
             <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[120px]"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div>
                      <span className="px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Active Plan</span>
                      <h3 className="text-4xl font-black mt-4">Growth Hub</h3>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-1.5 text-slate-300 text-sm font-bold">
                           <Zap size={14} className="text-primary" /> 0.30% Fee
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-300 text-sm font-bold">
                           <Clock size={14} className="text-primary" /> 12h Settlement
                        </div>
                      </div>
                   </div>
                   <div className="text-center md:text-right">
                      <p className="text-2xl font-black">$3,000<span className="text-sm text-slate-500 font-bold uppercase ml-1">Paid</span></p>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mt-2">Next Renewal: Oct 2025 (50% OFF)</p>
                   </div>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                     <h3 className="font-bold dark:text-white text-lg flex items-center gap-2"><FileText size={18} className="text-primary"/> Recent Statements</h3>
                     <button className="text-primary text-sm font-bold hover:underline">View All</button>
                  </div>
                  <div className="space-y-2">
                     {[
                       { name: 'Gateway Activation Fee', amount: '3,000.00 USDT', date: 'Oct 1, 2024' },
                       { name: 'October Network Fees', amount: '0.00 USDT', date: 'Nov 1, 2024' }
                     ].map((item, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center justify-between transition-colors">
                           <div>
                              <p className="text-sm font-bold dark:text-white">{item.name}</p>
                              <p className="text-xs text-slate-500">{item.date}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-sm font-bold dark:text-white">{item.amount}</p>
                              <button className="text-xs text-primary font-bold hover:underline">Download PDF</button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-lg font-bold dark:text-white mb-2">Upgrade to 0.15%</h3>
                  <p className="text-sm text-slate-500 mb-6 max-w-[200px]">Unlock Instant Settlement and the lowest fees on the market.</p>
                  <button className="w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl shadow-lg">View Upgrade Path</button>
               </div>
             </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
                {sections.map((section, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveTab(section.id)}
                    className="p-6 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold dark:text-white">{section.label}</h3>
                      <p className="text-sm text-slate-500">{section.desc}</p>
                    </div>
                    <ArrowLeft className="text-slate-300 dark:text-slate-700 rotate-180 group-hover:text-primary transition-all" size={20} />
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="font-bold dark:text-white mb-6">Appearance</h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Moon className="text-primary" size={20} />
                    <div>
                      <p className="text-sm font-semibold dark:text-white">Dark Mode</p>
                      <p className="text-xs text-slate-500">Reduce eye strain in low-light environments</p>
                    </div>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={`w-14 h-7 rounded-full transition-colors relative ${theme === 'dark' ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all ${theme === 'dark' ? 'left-8' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg relative">
                  <span className="text-4xl font-bold text-primary">AM</span>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold dark:text-white">Admin Merchant</h3>
                <p className="text-slate-500 text-sm mb-6 italic">merchant@metacrm.shop</p>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-black rounded-full uppercase tracking-wider">Verified Merchant</span>
                </div>
                <button 
                  onClick={() => navigate('/')}
                  className="w-full py-3 border border-red-200 dark:border-red-900/30 text-red-600 font-bold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={16} /> Log Out
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Account Settings</h1>
        <p className="text-slate-500 text-sm">Configure your personal and workspace preferences.</p>
      </div>
      {renderContent()}
    </div>
  );
};

export default Settings;
