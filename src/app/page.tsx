import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { QuickStats } from '@/components/sections/QuickStats';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Announcements } from '@/components/sections/Announcements';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow max-w-[1200px] mx-auto px-6 md:px-20 lg:px-10 py-8 w-full">
        <Hero />
        <QuickStats />
        <ServicesGrid />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
}