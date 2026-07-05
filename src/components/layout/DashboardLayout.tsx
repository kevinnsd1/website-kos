import { ReactNode, useState } from 'react';
import { motion } from 'motion/react';
import { 
  HouseLine, 
  Users, 
  Bed, 
  Receipt, 
  List, 
  SignOut, 
  Bell, 
  Gear
} from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const MENU_ITEMS = [
  { icon: HouseLine, label: 'Beranda', href: '/dashboard' },
  { icon: Bed, label: 'Kamar', href: '/dashboard/rooms' },
  { icon: Users, label: 'Penghuni', href: '/dashboard/tenants' },
  { icon: Receipt, label: 'Tagihan', href: '/dashboard/billing' },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#F7F5F2] dark:bg-zinc-950 flex">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white dark:bg-zinc-900 border-r border-black/10 dark:border-white/10 flex flex-col h-screen sticky top-0 overflow-hidden shrink-0"
      >
        <div className="h-20 flex items-center px-6 border-b border-black/10 dark:border-white/10 shrink-0 whitespace-nowrap">
          <span className={`font-bold tracking-tight text-xl ${!isSidebarOpen && 'hidden'}`}>
            KOS. Admin
          </span>
          {!isSidebarOpen && <span className="font-bold tracking-tight text-xl mx-auto">K.</span>}
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {MENU_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.label}
                to={item.href}
                className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-colors group whitespace-nowrap ${
                  isActive 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <item.icon 
                  size={24} 
                  weight={isActive ? "fill" : "regular"}
                  className={isActive ? 'text-white dark:text-black' : 'text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white'} 
                />
                {isSidebarOpen && (
                  <span className={`font-medium ${isActive ? 'text-white dark:text-black' : 'text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white'}`}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-black/10 dark:border-white/10 shrink-0">
          <Link to="/login" className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-colors whitespace-nowrap group">
            <SignOut size={24} className="group-hover:text-red-600" />
            {isSidebarOpen && <span className="font-medium group-hover:text-red-600">Keluar</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Topbar */}
        <header className="h-20 bg-white dark:bg-zinc-900 border-b border-black/10 dark:border-white/10 flex items-center justify-between px-8 shrink-0">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <List size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 relative transition-colors">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Gear size={24} />
            </button>
            <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden ml-2 border border-black/10 dark:border-white/10">
              <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
