import { motion } from 'motion/react';
import { 
  Share2, 
  Copy, 
  Users, 
  Gift, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Smartphone,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { cn } from '../lib/utils';
import { useState } from 'react';

const rewards = [
  { id: 1, friends: 2, title: 'Silver Badge', description: 'Unlock the Silver Badge and get 100 Tattva points.', icon: Award, color: 'text-slate-400' },
  { id: 2, friends: 5, title: 'Premium Free (1mo)', description: 'Unlock one month of premium membership for free.', icon: Gift, color: 'text-indigo-500' },
  { id: 3, friends: 10, title: 'Campus Influencer', description: 'Become an official campus influencer and get featured.', icon: TrendingUp, color: 'text-amber-500' },
];

export default function Referral() {
  const { user } = useAuthStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://tattvacampus.in/join?ref=${user?.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="bg-primary-theme rounded-[32px] p-8 lg:p-12 text-center relative overflow-hidden text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-theme/20 rounded-full translate-x-20 -translate-y-20 blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 bg-accent-vibrant/20 border border-accent-vibrant/30 rounded-full font-bold uppercase tracking-widest text-[10px] mb-8 text-accent-vibrant">
            <Share2 className="h-4 w-4 mr-2" /> Spread the word
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tighter leading-tight">
            Invite Friends, <br />
            <span className="text-accent-theme">Earn Rewarding Perks.</span>
          </h1>
          <p className="text-white/80 text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Every friend who joins using your link brings you closer to exclusive badges, premium access, and campus recognition.
          </p>

          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-item flex items-center gap-4">
            <div className="flex-1 text-left px-4">
              <div className="text-[9px] uppercase font-bold text-white/50 tracking-widest leading-none mb-1.5">Your Referral Link</div>
              <div className="text-sm font-semibold truncate leading-none">https://tattvacampus.in/join?ref={user?.referralCode}</div>
            </div>
            <button 
              onClick={handleCopy}
              className={cn(
                "flex items-center px-6 py-3 rounded-button text-xs font-bold transition-all shadow-md",
                copied ? "bg-emerald-500 text-white" : "bg-accent-vibrant text-white hover:opacity-90"
              )}
            >
              {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="ml-2">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress Card */}
        <div className="lg:col-span-2 space-y-8">
          <section className="geometric-card p-10">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-xl font-bold text-text-main tracking-tight">Your Referral Progress</h2>
                <p className="text-text-muted text-sm font-medium">Tracking your invites and unlocked rewards.</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold text-accent-theme tracking-tighter">3</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Friends Joined</div>
              </div>
            </div>

            <div className="relative pt-10 pb-20">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-bg-light -translate-y-1/2"></div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                className="absolute top-1/2 left-0 h-1 bg-accent-vibrant -translate-y-1/2"
              ></motion.div>

              {/* Milestones */}
              <div className="flex justify-between relative z-10">
                {[0, 2, 5, 10].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-all",
                      step <= 3 ? "bg-accent-theme text-white" : "bg-bg-light text-text-muted"
                    )}>
                      {step <= 3 ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-xs font-bold">{step}</span>}
                    </div>
                    <div className="mt-4 text-[9px] font-bold uppercase tracking-widest text-text-muted">{step === 0 ? 'Start' : `${step} Friends`}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className={cn(
                  "p-6 rounded-item border border-border-theme transition-all",
                  reward.friends <= 3 ? "bg-bg-light border-accent-theme/20" : "bg-white opacity-60"
                )}>
                  <div className={cn("h-8 w-8 mb-4", reward.color)}>
                    <reward.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-text-main text-sm mb-1">{reward.title}</h4>
                  <p className="text-[11px] text-text-muted font-medium leading-relaxed">{reward.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Share Section */}
        <div className="space-y-8">
          <section className="bg-primary-theme p-8 rounded-card text-white overflow-hidden relative shadow-xl">
            <h3 className="text-base font-bold mb-8 tracking-tight">Quick Share</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-item hover:bg-white/10 transition-all border border-white/5">
                <Smartphone className="h-6 w-6 text-accent-theme mb-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">WhatsApp</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-item hover:bg-white/10 transition-all border border-white/5">
                <Facebook className="h-6 w-6 text-blue-400 mb-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Facebook</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-item hover:bg-white/10 transition-all border border-white/5">
                <Twitter className="h-6 w-6 text-sky-400 mb-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Twitter</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-item hover:bg-white/10 transition-all border border-white/5">
                <Linkedin className="h-6 w-6 text-blue-600 mb-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">LinkedIn</span>
              </button>
            </div>
          </section>

          <section className="bg-white p-8 rounded-card border border-border-theme shadow-card">
            <h3 className="text-base font-bold text-text-main tracking-tight mb-6">Recent Joins</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <img src={`https://i.pravatar.cc/100?u=friend${i}`} className="h-10 w-10 rounded-full border border-border-theme" alt="Friend" referrerPolicy="no-referrer" />
                  <div>
                    <div className="text-sm font-bold text-text-main">Student {i}</div>
                    <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Joined 2 days ago</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
