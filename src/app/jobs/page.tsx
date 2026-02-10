'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  LogOut, 
  Briefcase, 
  Hammer, 
  Sprout, 
  Landmark, 
  Bookmark, 
  MapPin, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function JobPortalPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
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
    <div className="bg-[#f6f8f6] dark:bg-[#131f14] min-h-screen text-slate-900 dark:text-slate-100 font-body">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a2a1b] border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#1c5f20] text-white p-1.5 rounded-lg">
              <Sprout size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#1c5f20] dark:text-green-400">Panchayat Job Portal</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold text-[#1c5f20] border-b-2 border-[#1c5f20] pb-1" href="/jobs">Jobs</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1c5f20] transition-colors" href="#">My Applications</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1c5f20] transition-colors" href="#">Profile</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1c5f20] transition-colors" href="#">Help</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            <Input 
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1c5f20] w-64 h-10" 
              placeholder="Search panchayat jobs..." 
            />
          </div>
          <Button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 h-10"
          >
            <LogOut size={18} />
            Log Out
          </Button>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user123/100/100" 
              alt="User Avatar"
              data-ai-hint="portrait person"
            />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 grid grid-cols-12 gap-8">
        {/* Left Sidebar: Filters */}
        <aside className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-white dark:bg-[#1a2a1b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold">Filters</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Refine your job search</p>
              </div>
              <button className="text-xs text-[#1c5f20] font-bold hover:underline">Clear All</button>
            </div>

            {/* Job Categories */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Job Type</h3>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1c5f20]/10 border border-[#1c5f20]/20 text-[#1c5f20]">
                <Briefcase size={18} />
                <span className="text-sm font-semibold">All Categories</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <Hammer size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Daily Wage</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <Sprout size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Agriculture</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <Landmark size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Govt Schemes</span>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['MGNREGA', 'Masonry', 'Plumbing', 'Clerical'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium hover:bg-[#1c5f20] hover:text-white transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content: Search & Listings */}
        <section className="col-span-12 lg:col-span-9 space-y-6">
          {/* Hero Search */}
          <div className="bg-[#1c5f20]/5 dark:bg-[#1c5f20]/10 rounded-xl p-8 border border-[#1c5f20]/10">
            <h2 className="text-2xl font-bold mb-4">Find work in your village</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input 
                  className="w-full pl-12 pr-4 py-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl shadow-sm focus:ring-2 focus:ring-[#1c5f20] focus:border-transparent h-14" 
                  placeholder="Search by job title, skill or keyword..." 
                />
              </div>
              <Button className="bg-[#1c5f20] hover:bg-green-800 text-white px-8 h-14 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                <Search size={20} />
                Search Jobs
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1"><TrendingUp size={14} /> 142 new jobs today</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Near Ramnagar Panchayat</span>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { title: 'Canal Maintenance Worker', loc: 'Vikasgaon Panchayat', type: 'MGNREGA Scheme', wage: '450', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
              { title: 'Senior Mason / Mistri', loc: 'Sultanpur Village', type: 'Construction', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400', wage: '850' },
              { title: 'Data Entry Assistant', loc: 'Ramnagar Block Office', type: 'Skill Training', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400', wage: '600' },
              { title: 'Harvesting Supervisor', loc: 'Ganga-Puri Area', type: 'Agriculture', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', wage: '550' },
              { title: 'Night Security Guard', loc: 'Industrial Zone B', type: 'Urgent Requirement', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400', wage: '400' },
              { title: 'Electrician (Panchayat)', loc: 'Vikasgaon Center', type: 'Technical', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400', wage: '750' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1a2a1b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2.5 py-1 ${job.color} text-[10px] font-bold uppercase rounded tracking-wider`}>{job.type}</span>
                  <button className="text-slate-300 hover:text-[#1c5f20] transition-colors"><Bookmark size={20} /></button>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">{job.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 text-sm">
                  <MapPin size={14} />
                  <span>{job.loc}</span>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Daily Wage</p>
                    <p className="text-2xl font-black text-[#1c5f20] dark:text-green-400">₹{job.wage}<span className="text-sm font-normal text-slate-500">/day</span></p>
                  </div>
                  <Button className="bg-[#1c5f20] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform h-10">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pt-8 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <ChevronLeft size={18} /> Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-[#1c5f20] text-white rounded-lg text-sm font-bold">1</span>
              <button className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm transition-colors">2</button>
              <button className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm transition-colors">3</button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm transition-colors">12</button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Next <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white dark:bg-[#1a2a1b] border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#1c5f20]/20 text-[#1c5f20] p-1 rounded-md">
                <Sprout size={20} />
              </div>
              <span className="font-bold">Panchayat Job Portal</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Connecting rural citizens with meaningful employment and government schemes directly at the village level.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link className="hover:text-[#1c5f20]" href="#">Contact Panchayat Office</Link></li>
              <li><Link className="hover:text-[#1c5f20]" href="#">FAQ</Link></li>
              <li><Link className="hover:text-[#1c5f20]" href="#">User Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Policy</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link className="hover:text-[#1c5f20]" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-[#1c5f20]" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-[#1c5f20]" href="#">Govt. Regulations</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
          © 2024 Digital Panchayat Mission. An initiative for rural employment.
        </div>
      </footer>
    </div>
  );
}
