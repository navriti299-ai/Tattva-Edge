import { motion } from 'motion/react';
import { 
  Briefcase, 
  FileText, 
  ShoppingBag, 
  Calendar, 
  TrendingUp, 
  ArrowUpRight, 
  MapPin, 
  Clock,
  LayoutDashboard,
  Bell,
  Star,
  ChevronRight,
  Plus,
  Share2
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'Gigs Completed', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Points Earned', value: '450', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { name: 'Rating', value: '4.8', icon: Star, color: 'text-amber-600', bg: 'bg-amber-100' },
  { name: 'Notes Shared', value: '5', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

const newGigs = [
  { id: 1, title: 'PPT for Semester Project', budget: '₹500', time: '2 hours ago', location: 'Remote' },
  { id: 2, title: 'UX/UI Review for App', budget: '₹1200', time: '5 hours ago', location: 'Hostel A' },
  { id: 3, title: 'Maths Tutoring (12th Std)', budget: '₹800/hr', time: '1 day ago', location: 'Library' },
];

const latestNotes = [
  { id: 1, title: 'Microprocessors Lab Manual', dept: 'ECE', downloads: 145 },
  { id: 2, title: 'Previous Year Papers 2024', dept: 'CS', downloads: 890 },
  { id: 3, title: 'Compiler Design Hand-notes', dept: 'CS', downloads: 230 },
];

const itemsForSale = [
  { id: 1, name: 'Sci-Calculator fx-991ES', price: '₹700', image: 'https://picsum.photos/seed/calc/200/200' },
  { id: 2, name: 'DS LR Panda Cycle', price: '₹3500', image: 'https://picsum.photos/seed/cycle/200/200' },
];

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
        <div>
          <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Welcome back, {user?.name}! 👋</h1>
          <p className="text-text-muted font-medium mt-1">Here's what's happening at <span className="text-accent-theme font-bold">{user?.college}</span> today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-5 py-2.5 bg-accent-theme text-white rounded-button text-sm font-bold shadow-md hover:opacity-90 transition-all">
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </button>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-5 rounded-[16px] border border-border-theme shadow-card flex flex-col"
          >
            <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1">{stat.name}</div>
            <div className="text-2xl font-extrabold text-text-main">{stat.value}</div>
          </motion.div>
        ))}
      </section>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column: Gigs & Notes */}
        <div className="space-y-8">
          {/* New Gigs Section */}
          <section className="bg-white p-6 rounded-card border border-border-theme shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-text-main flex items-center tracking-tight">
                Active Gigs Nearby
              </h2>
              <Link to="/gigs" className="text-[12px] font-bold text-accent-theme hover:underline">
                View All
              </Link>
            </div>
            <div className="grid gap-3">
              {newGigs.map((gig) => (
                <div key={gig.id} className="flex items-center justify-between p-4 bg-bg-light rounded-item border border-transparent hover:border-border-theme transition-all group cursor-pointer">
                  <div className="gig-info">
                    <h4 className="text-sm font-semibold text-text-main">{gig.title}</h4>
                    <p className="text-[12px] text-text-muted font-medium">{gig.location} • {gig.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-emerald-600 mb-1">{gig.budget}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Latest Notes Section */}
          <section className="bg-white p-6 rounded-card border border-border-theme shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-text-main flex items-center tracking-tight">
                Recommended Notes
              </h2>
              <Link to="/notes" className="text-[12px] font-bold text-accent-theme hover:underline">
                Explore
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {latestNotes.map((note) => (
                <div key={note.id} className="p-4 border border-border-theme rounded-item bg-white flex flex-col gap-2 hover:border-accent-theme/30 transition-all cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className={cn(
                      "px-2 py-0.5 rounded-[4px] text-[10px] font-bold",
                      note.dept === 'ECE' ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                    )}>
                      {note.dept} • NOTES
                    </span>
                  </div>
                  <h4 className="font-bold text-text-main text-[13px]">{note.title}</h4>
                  <p className="text-[11px] text-text-muted font-medium">{note.downloads} Downloads</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Marketplace, Referrals & Activity */}
        <div className="space-y-8">
          {/* Referral Reward Progress */}
          <section className="bg-primary-theme rounded-card p-6 text-white shadow-xl relative overflow-hidden">
            <h3 className="text-lg font-extrabold mb-1">Referral Rewards</h3>
            <p className="text-white/80 text-[12px] mb-6 font-medium leading-tight">Invite 5 friends to unlock Tattva Premium for FREE!</p>
            
            <div className="space-y-3">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  className="h-full bg-accent-vibrant rounded-full"
                />
              </div>
              <p className="text-[11px] font-bold">3 / 5 Friends Joined</p>
            </div>
            
            <button className="w-full mt-6 bg-accent-vibrant text-white py-2.5 rounded-button text-sm font-bold hover:opacity-90 transition-opacity shadow-lg">
              Invite Friends
            </button>
          </section>

          {/* Activity Feed */}
          <section className="bg-white p-6 rounded-card border border-border-theme shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <h2 className="text-[12px] font-bold text-text-main uppercase tracking-widest">Campus Activity</h2>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex space-x-3 items-start">
                  <div>
                    <p className="text-[12px] text-text-main font-medium leading-snug">
                      {i === 1 ? 'Rahul sold "Scientific Calculator" for ₹500.' : i === 2 ? 'New notes shared in Mechanical Dept.' : 'Fresh gig: Data Entry for Seminar.'}
                    </p>
                    <p className="text-[11px] text-text-muted font-medium mt-1 uppercase tracking-wider">{i}h ago</p>
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
