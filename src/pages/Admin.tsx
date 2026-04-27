import { motion } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  CheckCircle2, 
  XCircle, 
  MoreVertical,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
  { name: 'Total Users', value: '12,450', grow: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Active Subscriptions', value: '342', grow: '+5%', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Reports Pending', value: '14', grow: '-2%', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' },
  { name: 'Net Revenue', value: '₹45,200', grow: '+18%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

const pendingVerifications = [
  { id: 'V1', user: 'Saksham Jain', college: 'NSUT', date: 'Oct 24, 2025' },
  { id: 'V2', user: 'Ritika Singh', college: 'IIT Delhi', date: 'Oct 23, 2025' },
  { id: 'V3', user: 'Abhishek Roy', college: 'DTU', date: 'Oct 23, 2025' },
];

export default function Admin() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
        <div>
          <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Admin Control Center ⚡</h1>
          <p className="text-text-muted font-medium">Manage users, subscriptions, and platform integrity.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-primary-theme text-white px-6 py-2.5 rounded-button text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-md">
            Export Report
          </button>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-card border border-border-theme shadow-card"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.name}</div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                stat.grow.startsWith('+') ? "text-emerald-500" : "text-rose-500"
              )}>
                {stat.grow}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-text-main">{stat.value}</div>
          </motion.div>
        ))}
      </section>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Main Panel: User Management */}
        <div className="space-y-8">
          <section className="bg-white rounded-card border border-border-theme shadow-card overflow-hidden">
            <div className="p-6 border-b border-border-theme flex items-center justify-between">
              <h2 className="text-base font-bold text-text-main tracking-tight">Recent Users</h2>
              <div className="flex space-x-2">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
                  <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-bg-light border border-border-theme rounded-button text-[11px] font-medium w-40" />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-bg-light/50">
                    {['User', 'College', 'Plan', 'Status', ''].map((h) => (
                      <th key={h} className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-text-muted">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-theme">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-bg-light/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img src={`https://i.pravatar.cc/100?u=a${i}`} className="h-8 w-8 rounded-full border border-border-theme" alt="User" referrerPolicy="no-referrer" />
                          <div>
                            <div className="text-xs font-bold text-text-main hover:text-accent-theme cursor-pointer Transition-colors">User {i}</div>
                            <div className="text-[9px] text-text-muted font-bold uppercase tracking-widest">2d ago</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-text-main">IIT Kanpur</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-0.5 rounded-[4px] text-[9px] font-bold uppercase tracking-widest border",
                          i % 3 === 0 ? "bg-accent-theme/10 text-accent-theme border-accent-theme/30" : "bg-bg-light text-text-muted border-border-theme"
                        )}>
                          {i % 3 === 0 ? 'Premium' : 'Free'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active</td>
                      <td className="px-6 py-4 text-right">
                        <MoreVertical className="h-4 w-4 text-text-muted cursor-pointer hover:text-text-main" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Panel: Tasks & Logs */}
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-card border border-border-theme shadow-card">
            <h3 className="text-base font-bold text-text-main tracking-tight mb-6">Pending Verifications</h3>
            <div className="space-y-4">
              {pendingVerifications.map((v) => (
                <div key={v.id} className="flex items-center justify-between p-3 bg-bg-light rounded-item border border-border-theme">
                  <div>
                    <div className="text-xs font-bold text-text-main">{v.user}</div>
                    <div className="text-[10px] font-medium text-text-muted uppercase tracking-widest">{v.college}</div>
                  </div>
                  <div className="flex space-x-1.5">
                    <button className="p-1.5 bg-white text-emerald-500 rounded-md border border-border-theme hover:bg-emerald-50">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 bg-white text-rose-500 rounded-md border border-border-theme hover:bg-rose-50">
                      <XCircle className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 rounded-button bg-accent-theme text-white text-[11px] font-bold uppercase tracking-widest shadow-md hover:opacity-90">
              Review All
            </button>
          </section>

          <section className="bg-primary-theme p-6 rounded-card text-white shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-base font-bold tracking-tight">Platform Health</h3>
              <BarChart3 className="h-5 w-5 text-accent-theme" />
            </div>
            <div className="space-y-5">
              {[
                { label: 'Uptime', value: '99.98%', w: '100%' },
                { label: 'Avg Latency', value: '45ms', w: '85%' },
                { label: 'Live Users', value: '1,240', w: '70%' },
              ].map((m) => (
                <div key={m.label} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/50">
                    <span>{m.label}</span>
                    <span>{m.value}</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-vibrant rounded-full" style={{ width: m.w }}></div>
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
