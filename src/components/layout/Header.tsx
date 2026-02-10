'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sprout, Globe, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    // Use window.location for a full refresh to ensure all components sync the logged-out state
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-solid border-primary/10 px-6 md:px-20 lg:px-40 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-10 bg-primary text-white flex items-center justify-center rounded-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Sprout size={24} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight">Panchayat Portal</h2>
              <span className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-wider">Digital Village Initiative</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 text-sm font-semibold hover:text-primary transition-colors">Home</Link>
            <Link href="/jobs" className="text-foreground/80 text-sm font-semibold hover:text-primary transition-colors">Services</Link>
            <Link href="/marketplace" className="text-foreground/80 text-sm font-semibold hover:text-primary transition-colors">Marketplace</Link>
            <Link href="#" className="text-foreground/80 text-sm font-semibold hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/5 dark:bg-primary/10 text-primary hover:bg-primary/10 rounded-xl text-sm font-bold">
                <Globe size={16} />
                <span>English</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 rounded-xl border-primary/10">
              <DropdownMenuItem className="cursor-pointer">മലയാളം</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">हिन्दी</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">తెలుగు</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isLoggedIn ? (
            <Button 
              onClick={handleLogout}
              className="rounded-xl h-10 px-6 bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all flex items-center gap-2"
            >
              <LogOut size={16} />
              Log Out
            </Button>
          ) : (
            <Link href="/login">
              <Button className="rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
