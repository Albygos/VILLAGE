'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Landmark, 
  LayoutDashboard, 
  AlertCircle, 
  ClipboardList, 
  FileText, 
  Users, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  Moon, 
  Download, 
  Plus, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  BadgeCheck,
  MoreVertical,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <div className="bg-[#f6f8f6] dark:bg-[#131f14] font-body text-slate-900 dark:text-slate-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 flex flex-col fixed h-full z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <Landmark size={24} />
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg leading-tight">Gram Panchayat</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Pipariya Portal</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-bold text-sm">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <AlertCircle size={18} />
            Grievances
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <ClipboardList size={18} />
            Schemes
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <FileText size={18} />
            Records
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <Users size={18} />
            Village Directory
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <Settings size={18} />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
            <HelpCircle size={18} />
            Help Center
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-sm font-bold"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 flex flex-col min-w-0">
        {/* Top Nav */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <input 
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20" 
                placeholder="Search grievance ID, citizen name..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <Moon size={20} />
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Rajesh Kumar</p>
                <p className="text-xs text-slate-500 mt-1">Sarpanch Admin</p>
              </div>
              <div className="size-10 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/admin1/100/100" 
                  alt="Official portrait" 
                  className="w-full h-full object-cover"
                  data-ai-hint="portrait official"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Executive Dashboard</h2>
              <p className="text-slate-500 font-medium">Overview of village administration and grievance status.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2 rounded-xl h-11 px-5 font-bold border-2 transition-all">
                <Download size={18} />
                Export Report
              </Button>
              <Button className="gap-2 bg-primary text-white rounded-xl h-11 px-5 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                <Plus size={18} />
                New Scheme Entry
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Grievances</p>
                  <h3 className="text-3xl font-black mt-2">1,240</h3>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl text-blue-600">
                  <MessageSquare size={24} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                  <TrendingUp size={12} />
                  +12%
                </span>
                <span className="text-xs text-slate-400 font-medium">Since last month</span>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pending Actions</p>
                  <h3 className="text-3xl font-black mt-2">86</h3>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-xl text-orange-600">
                  <Clock size={24} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg">
                  <TrendingUp size={12} />
                  +5%
                </span>
                <span className="text-xs text-slate-400 font-medium">Requiring attention</span>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Resolved Cases</p>
                  <h3 className="text-3xl font-black mt-2">1,154</h3>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <CheckCircle2 size={24} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                  <BadgeCheck size={12} />
                  +18%
                </span>
                <span className="text-xs text-slate-400 font-medium">93% success rate</span>
              </div>
            </div>
          </div>

          {/* Charts Section (Mocked Trend) */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Grievance Trends</h3>
                <p className="text-sm text-slate-500 font-medium">Submissions over the last 30 days</p>
              </div>
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Current Year</option>
              </select>
            </div>
            <div className="h-64 w-full relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="gradient-area" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1c5f20', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#1c5f20', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M0,150 Q50,140 100,160 T200,120 T300,130 T400,80 T500,90 T600,40 T700,60 T800,20 T900,40 T1000,10 L1000,200 L0,200 Z" fill="url(#gradient-area)" />
                <path d="M0,150 Q50,140 100,160 T200,120 T300,130 T400,80 T500,90 T600,40 T700,60 T800,20 T900,40 T1000,10" fill="none" stroke="#1c5f20" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>

          {/* Complaints Table Section */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">Recent Grievances</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="h-9 rounded-xl text-xs font-bold border-2">Filter</Button>
                <Button variant="outline" className="h-9 rounded-xl text-xs font-bold border-2">Sort</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                    <th className="px-8 py-5">ID</th>
                    <th className="px-8 py-5">Subject & Citizen</th>
                    <th className="px-8 py-5">Department</th>
                    <th className="px-8 py-5">Priority</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { id: '#GRV-4092', sub: 'Water Supply Interruption', cit: 'Amit Verma • Ward 4', dept: 'Public Health', prio: 'High', pColor: 'bg-red-50 text-red-600', status: 'In Progress', sColor: 'text-orange-600' },
                    { id: '#GRV-4089', sub: 'Streetlight Repair Req.', cit: 'Sunita Devi • School Area', dept: 'Electricity', prio: 'Medium', pColor: 'bg-yellow-50 text-yellow-600', status: 'Pending', sColor: 'text-slate-400' },
                    { id: '#GRV-4075', sub: 'Road Pothole Fix', cit: 'Ravi Shankar • Main Road', dept: 'Infrastructure', prio: 'Low', pColor: 'bg-slate-100 text-slate-600', status: 'Resolved', sColor: 'text-primary' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-8 py-6 font-mono text-xs text-slate-400 font-bold">{row.id}</td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold">{row.sub}</p>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{row.cit}</p>
                      </td>
                      <td className="px-8 py-6 text-sm font-medium text-slate-600 dark:text-slate-400">{row.dept}</td>
                      <td className="px-8 py-6">
                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${row.pColor}`}>{row.prio}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`flex items-center gap-1.5 ${row.sColor}`}>
                          {row.status === 'In Progress' && <span className="size-2 rounded-full bg-orange-600 animate-pulse"></span>}
                          {row.status === 'Resolved' && <CheckCircle2 size={14} />}
                          {row.status === 'Pending' && <Clock size={14} />}
                          <span className="text-xs font-bold">{row.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex gap-4">
                          <button className="text-xs font-bold text-primary hover:underline">Manage</button>
                          <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 flex items-center justify-between">
              <p className="text-xs text-slate-400 font-bold">Showing 1-10 of 1,240 results</p>
              <div className="flex gap-2">
                <Button variant="outline" className="size-8 p-0 rounded-lg border-2"><TrendingUp className="rotate-[-90deg] size-4" /></Button>
                <Button variant="outline" className="size-8 p-0 rounded-lg border-2"><TrendingUp className="rotate-[90deg] size-4" /></Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto p-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2024 Gram Panchayat Pipariya</div>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>
              <div className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Digital India initiative</div>
            </div>
            <div className="flex gap-8">
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">Privacy Policy</button>
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">Security Audit</button>
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">Admin Logs</button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
