import { motion } from 'motion/react';
import { 
  Check, 
  Crown, 
  Zap, 
  Star, 
  ShieldCheck, 
  FileText, 
  Bell, 
  Award,
  CreditCard,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const benefits = [
  { icon: Zap, title: 'Priority Gigs', description: 'See and apply to high-paying gigs before anyone else.' },
  { icon: Star, title: 'Enhanced Visibility', description: 'Your profile and listings are featured at the top of the feed.' },
  { icon: FileText, title: 'Premium Notes', description: 'Unlock certified top-tier notes and previous year lab manuals.' },
  { icon: Bell, title: 'Instant Alerts', description: 'Real-time SMS and App notifications for your favorite categories.' },
  { icon: ShieldCheck, title: 'Verification Badge', description: 'Get a blue checkmark to build trust in the community.' },
  { icon: Crown, title: 'Early Access', description: 'Exclusive early bird registration for major campus fests.' },
];

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="bg-slate-900 rounded-[48px] p-8 lg:p-16 text-center relative overflow-hidden text-white shadow-2xl shadow-indigo-100">
        <div className="absolute top-0 right-0 w-full h-full bg-indigo-600/10 blur-[120px]" />
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-amber-400 text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] mb-8">
            <Crown className="h-4 w-4 mr-2" /> Elevate Your Campus Experience
          </div>
          <h1 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Unlock the Full Power of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">
              Tattva Campus Premium
            </span>
          </h1>
          <p className="text-indigo-100 text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the elite club of students who earn more, study smarter, and get exclusive access to the best campus opportunities.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={cn("text-xs font-black uppercase tracking-widest", selectedPlan === 'monthly' ? "text-white" : "text-slate-500")}>Monthly</span>
            <button 
              onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 bg-indigo-600 rounded-full relative p-1 transition-all"
            >
              <div className={cn("h-5 w-5 bg-white rounded-full transition-all", selectedPlan === 'yearly' ? "ml-7" : "")} />
            </button>
            <span className={cn("text-xs font-black uppercase tracking-widest", selectedPlan === 'yearly' ? "text-white" : "text-slate-500")}>Yearly <span className="text-emerald-400 font-black ml-1">Save 20%</span></span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid lg:grid-cols-3 gap-8 -mt-20 relative z-20 px-4 sm:px-0">
        {/* Free Plan */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Free Starter</h3>
            <div className="text-4xl font-black text-slate-900 mb-6">₹0</div>
            <p className="text-slate-500 font-medium mb-8 text-sm">Perfect for exploring your campus community and basic needs.</p>
            <ul className="space-y-4 mb-10">
              {['Basic Gig Access', 'Note Downloads (3/day)', 'Marketplace Listings'].map((f) => (
                <li key={f} className="flex items-center text-sm font-bold text-slate-700">
                  <Check className="h-5 w-5 text-emerald-500 mr-3 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-4 rounded-3xl bg-slate-50 text-slate-400 font-black uppercase tracking-widest text-[10px] cursor-not-allowed">
            Current Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-indigo-600 rounded-[40px] shadow-2xl shadow-indigo-100 p-10 text-white relative overflow-hidden ring-8 ring-indigo-600/10 scale-105">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Crown className="h-32 w-32 -rotate-12" />
          </div>
          <div>
            <div className="inline-flex px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">Most Popular</div>
            <h3 className="text-xl font-black mb-2">Campus Pro</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-black">₹{selectedPlan === 'monthly' ? '69' : '599'}</span>
              <span className="text-indigo-200 text-sm ml-1">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            <p className="text-indigo-100 font-medium mb-8 text-sm leading-relaxed">The ultimate toolkit for the ambitious student. Pay for itself in just one gig!</p>
            <ul className="space-y-4 mb-10">
              {['Unlimited Gigs & Applications', 'Unlimited Note Downloads', 'Priority Search Ranking', 'Verified Blue Badge', 'Instant SMS Alerts'].map((f) => (
                <li key={f} className="flex items-center text-sm font-bold">
                  <Check className="h-5 w-5 text-white mr-3 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-5 rounded-3xl bg-white text-indigo-700 font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-900/40 hover:bg-slate-50 transition-all flex items-center justify-center group">
            Go Premium Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Team/Org Plan */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Club Elite</h3>
            <div className="text-4xl font-black text-slate-900 mb-6">Custom</div>
            <p className="text-slate-500 font-medium mb-8 text-sm">Best for student bodies, college fests, and campus influencers.</p>
            <ul className="space-y-4 mb-10">
              {['Mass Event Broadcaster', 'Team Management Dashboard', 'Bulk Membership for Members', 'Brand Partnership Tools'].map((f) => (
                <li key={f} className="flex items-center text-sm font-bold text-slate-700">
                  <Check className="h-5 w-5 text-emerald-500 mr-3 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-4 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all">
            Contact Support
          </button>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Why Upgrade?</h2>
          <p className="text-slate-500 font-medium">Invest in your campus success with premium features.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className="flex space-x-6 items-start group"
            >
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{benefit.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Gateway Mock */}
      <section className="bg-slate-50 border border-slate-100 rounded-[48px] p-8 lg:p-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Safe. Secure. Transparent.</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              We process payments via <span className="text-indigo-600 font-bold">Razorpay</span> and <span className="text-indigo-600 font-bold">UPI</span>. Your information is encrypted and never stored on our servers.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center px-4 py-2 bg-white rounded-xl border border-slate-200">
                <CreditCard className="h-5 w-5 text-slate-400 mr-2" />
                <span className="text-xs font-bold text-slate-600">UPI / GPay / PhonePe</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-xl border border-slate-200">
                <ShieldCheck className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-xs font-bold text-slate-600">PCI DSS Compliant</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-80 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Payment Preview</h4>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-500">Subtotal</span>
                <span className="text-slate-900">₹{selectedPlan === 'monthly' ? '69.00' : '599.00'}</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-500">Processing Fee</span>
                <span className="text-slate-900">₹0.00</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-black">
                <span className="text-slate-900">Total</span>
                <span className="text-indigo-600">₹{selectedPlan === 'monthly' ? '69.00' : '599.00'}</span>
              </div>
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
              Pay Securely
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
