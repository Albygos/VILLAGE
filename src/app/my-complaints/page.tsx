'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  PlusCircle, 
  AccountBalance, 
  Description, 
  PendingActions, 
  TaskAlt, 
  ExpandMore, 
  CheckCircle, 
  ArrowForward, 
  Engineering, 
  Person, 
  Check, 
  Verified, 
  Warning, 
  ImageNotSupported, 
  ContactSupport, 
  Call, 
  Chat,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function MyComplaintsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loginStatus = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
    if (!loginStatus) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = '/login';
  };

  if (isLoading) return null;

  return (
    <div className="bg-[#f6f8f6] dark:bg-[#131f14] min-h-screen font-body text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-10 lg:px-40 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <AccountBalance size={24} />
              </div>
              <div>
                <h2 className="text-primary dark:text-green-400 text-lg font-bold leading-tight tracking-tight">Digital Panchayat</h2>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Government of India</p>
              </div>
            </Link>
            {/* Search */}
            <div className="hidden md:flex flex-col min-w-64">
              <div className="flex w-full items-stretch rounded-xl h-10 bg-slate-100 dark:bg-slate-800">
                <div className="text-slate-500 flex items-center justify-center pl-4">
                  <Search size={18} />
                </div>
                <Input className="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500 px-4 pl-2 h-full" placeholder="Search complaints..."/>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden lg:flex items-center gap-6">
              <Link className="text-primary font-bold text-sm border-b-2 border-primary pb-1" href="/my-complaints">Dashboard</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
              <Button variant="ghost" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0 h-auto font-bold text-sm flex items-center gap-1">
                <LogOut size={16} /> Log Out
              </Button>
            </nav>
            <Link href="/complaints">
              <Button className="flex items-center gap-2 bg-primary text-white rounded-xl h-10 px-4 text-sm font-bold hover:bg-green-800 transition-colors shadow-sm">
                <PlusCircle size={18} />
                <span className="hidden sm:inline">New Complaint</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-4">
              <div className="size-9 rounded-full border-2 border-primary/20 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/user88/100/100" 
                  alt="User profile"
                  data-ai-hint="portrait person"
                />
              </div>
              <div className="hidden xl:block">
                <p className="text-xs font-bold leading-none">Ramesh Kumar</p>
                <p className="text-[10px] text-slate-500">Ward 4, Village A</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Namaste, Ramesh</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Track the progress of your submitted service requests here.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Filed</p>
              <Description size={20} className="text-slate-400" />
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">12</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-amber-500 transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">In Progress</p>
              <PendingActions size={20} className="text-amber-500" />
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">04</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-primary transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resolved</p>
              <TaskAlt size={20} className="text-primary" />
            </div>
            <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">08</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Your Complaints
            <span className="text-xs font-normal bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full">Recent</span>
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Button className="h-9 shrink-0 rounded-xl bg-primary text-white px-4 text-sm font-medium">
              All
            </Button>
            <Button variant="outline" className="h-9 shrink-0 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
              Submitted <ExpandMore size={16} />
            </Button>
            <Button variant="outline" className="h-9 shrink-0 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
              In Progress <ExpandMore size={16} />
            </Button>
            <Button variant="outline" className="h-9 shrink-0 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
              Resolved <ExpandMore size={16} />
            </Button>
          </div>
        </div>

        {/* Complaint List */}
        <div className="space-y-6">
          {/* Complaint Card 1: In Progress */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 md:p-6 flex flex-col lg:flex-row gap-6">
              {/* Visual Thumbnail */}
              <div 
                className="w-full lg:w-48 h-32 rounded-lg bg-cover bg-center shrink-0" 
                style={{ backgroundImage: 'url("https://picsum.photos/seed/lamp/400/300")' }}
                data-ai-hint="broken streetlight"
              ></div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        In Progress
                      </span>
                      <span className="text-slate-400 text-xs font-medium">#WP-1024 • Jan 12, 2024</span>
                    </div>
                    <button className="text-primary hover:text-green-800 text-sm font-bold flex items-center gap-1 transition-colors">
                      View Details <ArrowForward size={14} />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Repairing Street Lights - Main Road Ward 4</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-1">Three street lights are not working for the past week near the primary school area. It's unsafe for children at night.</p>
                </div>
                {/* Progress Timeline */}
                <div className="mt-6">
                  <div className="relative flex justify-between items-center">
                    {/* Connection Lines */}
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0"></div>
                    <div className="absolute top-4 left-0 w-1/3 h-0.5 bg-primary -z-0"></div>
                    {/* Steps */}
                    <div className="flex flex-col items-center gap-2 relative z-10 bg-white dark:bg-slate-900 pr-2">
                      <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <Check size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-slate-900 dark:text-white">Filed</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 relative z-10 bg-white dark:bg-slate-900 px-2">
                      <div className="size-8 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary">
                        <Person size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-primary">Assigned</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 relative z-10 bg-white dark:bg-slate-900 px-2 opacity-40">
                      <div className="size-8 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-slate-400">
                        <Engineering size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase">Working</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 relative z-10 bg-white dark:bg-slate-900 pl-2 opacity-40">
                      <div className="size-8 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-slate-400">
                        <Check size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase">Fixed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint Card 2: Resolved */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 md:p-6 flex flex-col lg:flex-row gap-6">
              <div 
                className="w-full lg:w-48 h-32 rounded-lg bg-cover bg-center shrink-0" 
                style={{ backgroundImage: 'url("https://picsum.photos/seed/water/400/300")' }}
                data-ai-hint="clean water tap"
              ></div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle size={12} />
                        Resolved
                      </span>
                      <span className="text-slate-400 text-xs font-medium">#WP-0988 • Jan 05, 2024</span>
                    </div>
                    <button className="text-primary hover:text-green-800 text-sm font-bold flex items-center gap-1 transition-colors">
                      View Details <ArrowForward size={14} />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Water Pipeline Leakage near Panchayat Office</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-1">Heavy water leakage from the main pipe. Large amount of water is being wasted daily on the road.</p>
                </div>
                {/* Mini Summary */}
                <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Verified size={18} />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900 dark:text-white">Resolved by Officer Amit Singh</p>
                    <p className="text-slate-500">Pipeline replaced and road patched on Jan 10.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint Card 3: Action Needed */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-red-100 dark:border-red-900/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 md:p-6 flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-48 h-32 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <ImageNotSupported size={32} className="text-slate-400" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Warning size={12} />
                        Action Needed
                      </span>
                      <span className="text-slate-400 text-xs font-medium">#WP-1105 • Jan 14, 2024</span>
                    </div>
                    <Button variant="destructive" className="h-7 px-3 py-0 text-xs font-bold rounded-lg">
                      Fix Photo
                    </Button>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Request for New Garbage Bin - Ward 2</h3>
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1 font-medium">Please upload a clear photo of the location. The previous photo was too dark to identify the spot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-8 bg-primary/5 dark:bg-primary/10 rounded-2xl border-2 border-dashed border-primary/20 flex flex-col md:flex-row items-center gap-8">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
            <ContactSupport size={40} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Need help with your complaint?</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-lg">If you are facing issues tracking your request or need technical support, you can call our village helpdesk or visit the Panchayat office.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
              <a className="flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="tel:1800-123-456">
                <Call size={18} />
                1800-123-456
              </a>
              <a className="flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="#">
                <Chat size={18} />
                Chat with Sahayak
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <AccountBalance size={20} className="text-primary" />
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">© 2024 Digital Panchayat Portal</p>
          </div>
          <div className="flex gap-6">
            <Link className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</Link>
            <Link className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Official Gazette</Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Project by</span>
            <span className="text-sm font-black text-slate-800 dark:text-slate-200">MeitY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
