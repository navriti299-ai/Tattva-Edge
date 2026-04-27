import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  ShoppingBag, 
  Calendar, 
  Users, 
  User, 
  Crown, 
  Share2,
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Gigs', href: '/gigs', icon: Briefcase },
  { name: 'Notes', href: '/notes', icon: FileText },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Premium', href: '/premium', icon: Crown },
  { name: 'Referral', href: '/referral', icon: Share2 },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Layout() {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[220px] lg:flex-col bg-primary-theme text-white">
        <div className="flex flex-col flex-grow pt-6 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 mb-10 space-x-2">
            <div className="w-6 h-6 bg-accent-vibrant rounded-md flex items-center justify-center"></div>
            <span className="text-lg font-extrabold tracking-tight">TATTVA CAMPUS</span>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-4 py-2.5 text-sm font-medium rounded-[10px] transition-all duration-200",
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-4 w-4 transition-colors duration-200",
                    isActive ? "text-white" : "text-[#94A3B8] group-hover:text-white"
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <div className="bg-white/10 p-3 rounded-[12px] mb-4">
             <p className="text-[11px] text-[#94A3B8]">Upgrade to</p>
             <p className="text-sm font-bold text-white mt-1 mb-2">Tattva Premium</p>
             <button className="w-full py-2 bg-accent-theme text-white rounded-md text-xs font-semibold hover:opacity-90 transition-opacity">Get Pro ₹69</button>
          </div>
          <button
            onClick={logout}
            className="w-full group flex items-center px-4 py-2 text-sm font-medium rounded-[10px] text-[#94A3B8] hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200"
          >
            <LogOut className="mr-3 h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-[220px] flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-border-theme">
          <div className="flex items-center justify-between h-[72px] px-8">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-slate-500 hover:text-slate-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Search bar */}
            <div className="flex-1 max-w-lg hidden sm:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for Gigs, Notes, or Events..."
                  className="block w-[400px] pl-10 pr-4 py-2.5 border border-border-theme rounded-[10px] bg-bg-light text-slate-900 placeholder-slate-500 font-medium sm:text-[13px] focus:outline-none focus:ring-1 focus:ring-accent-theme transition-all duration-200"
                />
              </div>
            </div>

            {/* Right actions */}
            <div className="ml-4 flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <span className="premium-badge-theme">Premium</span>
                <div className="text-right hidden md:block">
                  <div className="text-sm font-bold text-text-main leading-none">{user?.name}</div>
                  <div className="text-[11px] text-text-muted mt-1 font-medium">{user?.college} • {user?.year}</div>
                </div>
                <div className="h-[40px] w-[40px] rounded-full bg-slate-100 flex items-center justify-center text-text-main font-bold border-2 border-white shadow-[0_0_0_1px_#E2E8F0]">
                  {user?.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">Tattva Campus</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:text-slate-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 px-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                        isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-indigo-600" : "text-slate-400")} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 flex justify-between items-center z-40">
        {navigation.slice(0, 5).map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors",
                isActive ? "text-indigo-600" : "text-slate-500"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-[10px] mt-1 font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
