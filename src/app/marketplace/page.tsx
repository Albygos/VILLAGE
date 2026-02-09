
'use client';

import React from 'react';
import { 
  Search, 
  Bell, 
  PlusCircle, 
  ChevronDown, 
  SlidersHorizontal, 
  BadgeCheck, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MarketplacePage() {
  const getProductImage = (id: string) => {
    const found = PlaceHolderImages.find(img => img.id === id);
    return {
      url: found?.imageUrl || `https://picsum.photos/seed/${id}/600/400`,
      hint: found?.imageHint || 'crop agriculture'
    };
  };

  const products = [
    { 
      id: 'rice',
      title: 'Basmati Rice', 
      price: '65', 
      unit: '/kg', 
      farmer: 'Rajesh', 
      village: 'Khed', 
      verified: true 
    },
    { 
      id: 'coconuts',
      title: 'Tender Coconuts', 
      price: '40', 
      unit: '/pc', 
      farmer: 'Lakshmi', 
      village: 'Palur', 
      verified: true 
    },
    { 
      id: 'tomatoes',
      title: 'Organic Tomatoes', 
      price: '30', 
      unit: '/kg', 
      farmer: 'Amit', 
      village: 'Roha', 
      verified: true 
    },
    { 
      id: 'wheat',
      title: 'Fresh Wheat', 
      price: '28', 
      unit: '/kg', 
      farmer: 'Suresh', 
      village: 'Khed', 
      verified: true 
    },
    { 
      id: 'chilies',
      title: 'Green Chilies', 
      price: '15', 
      unit: '/250g', 
      farmer: 'Meena', 
      village: 'Palur', 
      verified: false, 
      limited: true 
    },
    { 
      id: 'potatoes',
      title: 'Potatoes', 
      price: '22', 
      unit: '/kg', 
      farmer: 'Vijay', 
      village: 'Roha', 
      verified: true 
    },
    { 
      id: 'honey',
      title: 'Organic Honey', 
      price: '450', 
      unit: '/kg', 
      farmer: 'Sunita', 
      village: 'Palur', 
      verified: true 
    },
    { 
      id: 'cauliflower',
      title: 'Cauliflower', 
      price: '40', 
      unit: '/kg', 
      farmer: 'Ramesh', 
      village: 'Khed', 
      verified: false 
    }
  ];

  return (
    <div className="bg-[#f6f8f6] dark:bg-[#131f14] text-[#101911] dark:text-slate-200 min-h-screen font-body">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e9f1ea] dark:border-primary/20 bg-white dark:bg-[#131f14] px-6 lg:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-[#1c5f20]">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#101911] dark:text-white text-lg font-bold leading-tight tracking-tight">Panchayat Digital</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-[#101911] dark:text-slate-300 text-sm font-medium hover:text-[#1c5f20] transition-colors" href="#">Dashboard</Link>
            <Link className="text-[#1c5f20] text-sm font-bold border-b-2 border-[#1c5f20] pb-1" href="/marketplace">Marketplace</Link>
            <Link className="text-[#101911] dark:text-slate-300 text-sm font-medium hover:text-[#1c5f20] transition-colors" href="/jobs">Services</Link>
            <Link className="text-[#101911] dark:text-slate-300 text-sm font-medium hover:text-[#1c5f20] transition-colors" href="#">Schemes</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <div className="hidden sm:flex items-center w-full max-w-64 h-10 bg-[#e9f1ea] dark:bg-[#1c5f20]/10 rounded-xl overflow-hidden">
            <div className="text-[#1c5f20] pl-4">
              <Search size={20} />
            </div>
            <Input 
              className="border-none bg-transparent focus-visible:ring-0 placeholder:text-[#1c5f20]/60 text-sm font-normal" 
              placeholder="Search crops, farmers..." 
            />
          </div>
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-[#e9f1ea] dark:bg-[#1c5f20]/10 text-[#101911] dark:text-white">
            <Bell size={20} />
          </button>
          <div className="size-10 rounded-full border-2 border-[#1c5f20]/20 overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              width={40} 
              height={40} 
              className="object-cover"
              data-ai-hint="portrait official"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-1 justify-center py-8">
        <div className="w-full max-w-[1200px] px-4 md:px-10 flex flex-col gap-6">
          {/* Page Heading */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-[#1a2a1b] rounded-xl shadow-sm border border-[#e9f1ea] dark:border-[#1c5f20]/20">
            <div className="flex min-w-72 flex-col gap-1">
              <h1 className="text-[#101911] dark:text-white text-3xl font-black leading-tight tracking-tight">Farmer Marketplace</h1>
              <p className="text-[#1c5f20] dark:text-[#1c5f20]/80 text-base font-normal">Direct farm-to-table sales for local rural empowerment.</p>
            </div>
            <Button className="bg-[#1c5f20] hover:bg-[#1c5f20]/90 text-white px-6 h-12 rounded-xl font-bold shadow-lg flex items-center gap-2">
              <PlusCircle size={20} />
              Add Product
            </Button>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Button className="h-10 shrink-0 rounded-full bg-[#1c5f20] px-6 text-white font-bold">
              All Products
            </Button>
            <Button variant="outline" className="h-10 shrink-0 rounded-full bg-white dark:bg-[#1c5f20]/10 border-[#e9f1ea] dark:border-[#1c5f20]/30 px-6 text-[#101911] dark:text-white hover:bg-[#1c5f20]/5 flex items-center gap-2">
              Grains & Pulses <ChevronDown size={18} />
            </Button>
            <Button variant="outline" className="h-10 shrink-0 rounded-full bg-white dark:bg-[#1c5f20]/10 border-[#e9f1ea] dark:border-[#1c5f20]/30 px-6 text-[#101911] dark:text-white hover:bg-[#1c5f20]/5 flex items-center gap-2">
              Vegetables <ChevronDown size={18} />
            </Button>
            <Button variant="outline" className="h-10 shrink-0 rounded-full bg-white dark:bg-[#1c5f20]/10 border-[#e9f1ea] dark:border-[#1c5f20]/30 px-6 text-[#101911] dark:text-white hover:bg-[#1c5f20]/5 flex items-center gap-2">
              Fruits <ChevronDown size={18} />
            </Button>
            <Button variant="outline" className="h-10 shrink-0 rounded-full bg-white dark:bg-[#1c5f20]/10 border-[#e9f1ea] dark:border-[#1c5f20]/30 px-6 text-[#101911] dark:text-white hover:bg-[#1c5f20]/5 flex items-center gap-2">
              Dairy <ChevronDown size={18} />
            </Button>
            <Button variant="outline" className="h-10 shrink-0 rounded-full bg-white dark:bg-[#1c5f20]/10 border-[#e9f1ea] dark:border-[#1c5f20]/30 px-6 text-[#101911] dark:text-white hover:bg-[#1c5f20]/5 flex items-center gap-2">
              Price Range <SlidersHorizontal size={18} />
            </Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
            {products.map((p, idx) => {
              const imageData = getProductImage(p.id);
              return (
                <div key={idx} className="flex flex-col gap-3 bg-white dark:bg-[#1a2a1b] p-3 rounded-2xl shadow-sm border border-[#e9f1ea] dark:border-[#1c5f20]/10 group hover:shadow-md transition-all">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                    {p.verified && (
                      <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-[#131f14]/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <BadgeCheck size={14} className="text-[#1c5f20]" />
                        <span className="text-[10px] font-bold text-[#1c5f20] uppercase tracking-wider">Panchayat Verified</span>
                      </div>
                    )}
                    {p.limited && (
                      <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white px-2 py-0.5 rounded-full shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Limited Stock</span>
                      </div>
                    )}
                    <Image 
                      src={imageData.url} 
                      alt={p.title} 
                      fill 
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={imageData.hint}
                    />
                  </div>
                  <div className="flex flex-col px-1 pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-[#101911] dark:text-white text-lg font-bold leading-tight">{p.title}</p>
                      <p className="text-[#1c5f20] text-lg font-black leading-tight">₹{p.price}<span className="text-xs font-normal text-slate-500 dark:text-slate-400">{p.unit}</span></p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#5d4037] dark:text-[#1c5f20]/70 mb-3">
                      <User size={16} />
                      <p className="text-sm font-medium">{p.farmer}, Village: {p.village}</p>
                    </div>
                    <Button className="w-full py-2.5 bg-[#e9f1ea] dark:bg-[#1c5f20]/20 text-[#1c5f20] dark:text-white rounded-xl text-sm font-bold hover:bg-[#1c5f20] hover:text-white transition-all">
                      Contact Farmer
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center p-8 gap-1">
            <Button variant="ghost" className="size-10 p-0 rounded-xl hover:bg-[#e9f1ea] dark:hover:bg-[#1c5f20]/10 transition-colors">
              <ChevronLeft size={20} />
            </Button>
            <Button className="size-10 p-0 text-sm font-bold rounded-xl bg-[#1c5f20] text-white shadow-lg">1</Button>
            <Button variant="ghost" className="size-10 p-0 text-sm font-medium rounded-xl hover:bg-[#e9f1ea] dark:hover:bg-[#1c5f20]/10">2</Button>
            <Button variant="ghost" className="size-10 p-0 text-sm font-medium rounded-xl hover:bg-[#e9f1ea] dark:hover:bg-[#1c5f20]/10">3</Button>
            <span className="text-sm font-medium flex size-10 items-center justify-center text-slate-400">...</span>
            <Button variant="ghost" className="size-10 p-0 text-sm font-medium rounded-xl hover:bg-[#e9f1ea] dark:hover:bg-[#1c5f20]/10">12</Button>
            <Button variant="ghost" className="size-10 p-0 rounded-xl hover:bg-[#e9f1ea] dark:hover:bg-[#1c5f20]/10 transition-colors">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#131f14] border-t border-[#e9f1ea] dark:border-[#1c5f20]/20 py-8">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf size={20} className="text-[#1c5f20]" />
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Panchayat Digital Service. All local produce is verified by village officials.</p>
          </div>
          <div className="flex gap-6">
            <Link className="text-xs font-medium text-[#1c5f20] uppercase tracking-widest hover:underline" href="#">Support</Link>
            <Link className="text-xs font-medium text-[#1c5f20] uppercase tracking-widest hover:underline" href="#">Terms of Sale</Link>
            <Link className="text-xs font-medium text-[#1c5f20] uppercase tracking-widest hover:underline" href="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
