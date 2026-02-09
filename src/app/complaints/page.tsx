'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Droplets, 
  Hammer, 
  Lightbulb, 
  Trash2, 
  Info, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Bell,
  ChevronDown,
  Circle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function ComplaintsPage() {
  const [selectedCategory, setSelectedCategory] = useState('water');

  const categories = [
    {
      id: 'water',
      title: 'Water',
      description: 'Tap leaks, Well issues, or irregular Supply',
      icon: Droplets,
      color: 'bg-yellow-400/20 text-yellow-600',
      borderColor: 'border-yellow-400',
    },
    {
      id: 'road',
      title: 'Road',
      description: 'Potholes, Blockage, or Street Damage',
      icon: Hammer,
      color: 'bg-primary/10 text-primary',
      borderColor: 'border-slate-100 dark:border-slate-800',
    },
    {
      id: 'electricity',
      title: 'Electricity',
      description: 'Power cuts, Street lights, or Wire hazards',
      icon: Lightbulb,
      color: 'bg-primary/10 text-primary',
      borderColor: 'border-slate-100 dark:border-slate-800',
    },
    {
      id: 'sanitation',
      title: 'Sanitation',
      description: 'Waste collection, Drainage, or Public Toilets',
      icon: Trash2,
      color: 'bg-primary/10 text-primary',
      borderColor: 'border-slate-100 dark:border-slate-800',
    }
  ];

  return (
    <div className="bg-[#f6f8f6] dark:bg-[#131f14] font-body min-h-screen text-slate-900 dark:text-slate-100">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-[#131f14] px-6 lg:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4 text-primary">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-primary text-xl font-black leading-tight tracking-tight">Modern Panchayat</h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="#">My Complaints</Link>
            <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="/jobs">Services</Link>
            <Link className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="#">Contact</Link>
          </nav>
          <button className="flex cursor-pointer items-center justify-center rounded-full size-10 bg-primary/10 text-primary hover:bg-primary/20 transition-all">
            <Bell size={20} />
          </button>
          <div className="size-10 rounded-full border-2 border-primary/20 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user99/100/100" 
              alt="User profile"
              data-ai-hint="portrait person"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-1 justify-center py-10 px-4">
        <div className="flex flex-col max-w-[1000px] flex-1 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-primary/10 overflow-hidden">
          <div className="flex flex-wrap justify-between items-end gap-3 p-8 bg-primary/5 border-b border-primary/10">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">Register a New Complaint</h1>
              <p className="text-primary font-medium text-lg">Step 1 of 4: Select the category of your issue</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-8 border-b border-primary/5">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">Complaint Progress</p>
              <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">25% Complete</span>
            </div>
            <Progress value={25} className="h-3 bg-slate-200 dark:bg-slate-800" />
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <span className="text-primary">1. Category</span>
              <span>2. Details</span>
              <span>3. Location & Photo</span>
              <span>4. Review</span>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-slate-900 dark:text-white text-2xl font-extrabold leading-tight tracking-tight mb-6">What can we help you with today?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <div 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group flex flex-col gap-4 rounded-xl border-2 p-6 cursor-pointer hover:shadow-lg transition-all ${
                    selectedCategory === cat.id 
                      ? 'border-yellow-400 bg-yellow-400/5' 
                      : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50'
                  }`}
                >
                  <div className={`rounded-xl size-14 flex items-center justify-center transition-colors ${
                    selectedCategory === cat.id ? 'bg-yellow-400/20 text-yellow-600' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    <cat.icon size={32} strokeWidth={selectedCategory === cat.id ? 2.5 : 2} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-black leading-tight">{cat.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{cat.description}</p>
                  </div>
                  {selectedCategory === cat.id && (
                    <div className="mt-auto pt-4 flex items-center gap-2 text-yellow-600 font-bold text-sm">
                      <CheckCircle2 size={16} />
                      Selected
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-dashed border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold">Need to report something else?</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">You can select 'Others' in the next step if your issue isn't listed here.</p>
                  </div>
                </div>
                <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4">Talk to an Agent</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-8 border-t border-primary/10 bg-slate-50/50 dark:bg-background-dark/50">
            <Link href="/">
              <Button variant="outline" className="px-8 py-6 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all gap-2 h-auto">
                <ArrowLeft size={20} />
                Back to Portal
              </Button>
            </Link>
            <Button className="px-12 py-6 rounded-xl bg-primary text-white font-black text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all gap-2 h-auto">
              Next Step
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center">
        <p className="text-slate-400 dark:text-slate-600 text-sm font-medium">Digital India Initiative • Panchayat Portal © 2024</p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <img className="h-8 grayscale" src="https://picsum.photos/seed/gov1/100/100" alt="Emblem" />
          <img className="h-8 grayscale" src="https://picsum.photos/seed/gov2/100/100" alt="Digital India" />
        </div>
      </footer>
    </div>
  );
}
