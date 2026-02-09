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
  Circle,
  AlertCircle,
  FileText,
  MapPin,
  Camera,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function ComplaintsPage() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('water');
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    urgency: 'medium',
    location: '',
  });

  const categories = [
    {
      id: 'water',
      title: 'Water',
      description: 'Tap leaks, Well issues, or irregular Supply',
      icon: Droplets,
    },
    {
      id: 'road',
      title: 'Road',
      description: 'Potholes, Blockage, or Street Damage',
      icon: Hammer,
    },
    {
      id: 'electricity',
      title: 'Electricity',
      description: 'Power cuts, Street lights, or Wire hazards',
      icon: Lightbulb,
    },
    {
      id: 'sanitation',
      title: 'Sanitation',
      description: 'Waste collection, Drainage, or Public Toilets',
      icon: Trash2,
    }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const progress = step * 25;

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
              <p className="text-primary font-medium text-lg">Step {step} of 4: {step === 1 ? 'Select Category' : step === 2 ? 'Complaint Details' : step === 3 ? 'Location & Evidence' : 'Final Review'}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-8 border-b border-primary/5">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">Complaint Progress</p>
              <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-3 bg-slate-200 dark:bg-slate-800" />
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <span className={step >= 1 ? 'text-primary' : ''}>1. Category</span>
              <span className={step >= 2 ? 'text-primary' : ''}>2. Details</span>
              <span className={step >= 3 ? 'text-primary' : ''}>3. Location & Photo</span>
              <span className={step >= 4 ? 'text-primary' : ''}>4. Review</span>
            </div>
          </div>

          <div className="p-8 min-h-[400px]">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Tell us more about the issue</h2>
                </div>
                
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-slate-500">Subject / Brief Title</Label>
                    <Input 
                      id="subject"
                      placeholder="e.g. Broken water pipe near main gate"
                      className="h-12 rounded-xl border-slate-200 focus:ring-primary"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-sm font-bold uppercase tracking-wider text-slate-500">Urgency Level</Label>
                    <Select 
                      defaultValue={formData.urgency}
                      onValueChange={(value) => setFormData({...formData, urgency: value})}
                    >
                      <SelectTrigger className="h-12 rounded-xl border-slate-200">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Standard concern</SelectItem>
                        <SelectItem value="medium">Medium - Needs attention soon</SelectItem>
                        <SelectItem value="high">High - Urgent repair needed</SelectItem>
                        <SelectItem value="critical">Critical - Danger to life or property</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-bold uppercase tracking-wider text-slate-500">Detailed Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Please describe the issue in detail so we can help better..."
                      className="min-h-[150px] rounded-xl border-slate-200 focus:ring-primary resize-none"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Where is this happening?</h2>
                </div>

                <div className="grid gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-bold uppercase tracking-wider text-slate-500">Location Landmark / Address</Label>
                    <Input 
                      id="location"
                      placeholder="e.g. Opposite the Village Post Office"
                      className="h-12 rounded-xl border-slate-200 focus:ring-primary"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Evidence / Photos (Optional)</p>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                      <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Camera size={32} className="text-slate-400" />
                      </div>
                      <p className="font-bold text-slate-600 dark:text-slate-400">Click to upload or drag photo here</p>
                      <p className="text-xs text-slate-400 mt-2">Maximum file size: 5MB (JPG, PNG)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <div className="size-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mx-auto mb-4">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-black">Review your Complaint</h2>
                  <p className="text-slate-500">Please verify the details before submitting to the Panchayat.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Category</p>
                      <p className="font-bold text-primary capitalize">{selectedCategory}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Urgency</p>
                      <p className="font-bold text-red-600 capitalize">{formData.urgency}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Subject</p>
                    <p className="font-bold">{formData.subject || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Description</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      "{formData.description || 'No description provided.'}"
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                    <p className="font-bold flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {formData.location || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                  <AlertCircle size={20} className="text-blue-600" />
                  <p className="text-sm text-blue-700 dark:text-blue-400">Your complaint will be recorded in the public registry and assigned to an official within 24 hours.</p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="mt-12 bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-dashed border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Info size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold">Need to report something else?</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">You can provide details about any other issue in the next step.</p>
                    </div>
                  </div>
                  <button className="text-primary font-bold hover:underline decoration-2 underline-offset-4">Talk to an Agent</button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between p-8 border-t border-primary/10 bg-slate-50/50 dark:bg-background-dark/50">
            {step === 1 ? (
              <Link href="/">
                <Button variant="outline" className="px-8 py-6 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all gap-2 h-auto">
                  <ArrowLeft size={20} />
                  Back to Portal
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="px-8 py-6 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all gap-2 h-auto"
              >
                <ArrowLeft size={20} />
                Previous Step
              </Button>
            )}
            
            <Button 
              onClick={handleNext}
              className="px-12 py-6 rounded-xl bg-primary text-white font-black text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all gap-2 h-auto"
            >
              {step === 4 ? 'Submit Complaint' : 'Next Step'}
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
