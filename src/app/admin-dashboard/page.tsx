'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Landmark, Users, FileText, Settings, LogOut, ChevronRight, Bell, Search, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isAdmin) {
      router.push('/panchayat-login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUsername');
    window.location.href = '/panchayat-login';
  };

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0d140e] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-slate-800 flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Landmark size={20} />
            </div>
            <span className="font-black text-primary text-sm uppercase tracking-tighter">Panchayat Admin</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <div className="bg-primary/5 text-primary px-4 py-3 rounded-xl flex items-center gap-3 font-bold text-sm">
            <Activity size={18} />
            Overview
          </div>
          <div className="px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer">
            <FileText size={18} />
            Complaints Management
          </div>
          <div className="px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer">
            <Users size={18} />
            Citizen Directory
          </div>
          <div className="px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer">
            <Settings size={18} />
            Portal Settings
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <Button 
            onClick={handleLogout}
            variant="ghost" 
            className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl"
          >
            <LogOut size={18} />
            <span className="font-bold">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <input 
              placeholder="Search records, IDs, citizens..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs border-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AD
            </div>
          </div>
        </header>

        <div className="p-10 space-y-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-slate-500 font-medium">Welcome, Administrator. Here's a summary of the village portal activity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">New Complaints</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">24</p>
              <div className="mt-4 flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded w-fit">
                Action Required
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Active Schemes</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">08</p>
              <div className="mt-4 flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded w-fit">
                Live
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Verified Farmers</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">142</p>
              <div className="mt-4 flex items-center text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded w-fit">
                In Marketplace
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">System Status</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">Optimal</p>
              <div className="mt-4 flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                Updated
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-black text-lg">Recent Complaints</h3>
              <Button variant="link" className="text-primary font-bold">View All Records <ChevronRight size={16} /></Button>
            </div>
            <div className="p-0">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Subject</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { id: '#WP-1120', cat: 'Water', sub: 'Pipeline burst in Ward 2', status: 'Pending', color: 'text-amber-600 bg-amber-50' },
                    { id: '#WP-1119', cat: 'Electricity', sub: 'Pole damage near post office', status: 'Assigned', color: 'text-blue-600 bg-blue-50' },
                    { id: '#WP-1118', cat: 'Road', sub: 'Pothole repair request', status: 'Pending', color: 'text-amber-600 bg-amber-50' },
                  ].map((row, i) => (
                    <tr key={i} className="text-sm hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4 font-bold">{row.id}</td>
                      <td className="px-6 py-4 font-medium">{row.cat}</td>
                      <td className="px-6 py-4 text-slate-500">{row.sub}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${row.color}`}>{row.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary font-bold hover:underline">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
