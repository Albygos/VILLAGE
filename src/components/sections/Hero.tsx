import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Hero() {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-20 flex flex-col items-center text-center">
        {/* Abstract Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        ></div>
        
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl">
          Your Gateway to <br/><span className="text-white/80">Village Progress</span>
        </h1>
        <p className="relative z-10 text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
          Empowering rural India through digital services. Find jobs, sell produce, and connect with your local government instantly.
        </p>
        
        <div className="relative z-10 w-full max-w-2xl">
          <div className="flex w-full items-stretch rounded-2xl h-16 bg-white dark:bg-zinc-800 shadow-2xl p-2 group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <div className="text-primary flex items-center justify-center pl-4 pr-2">
              <Search size={24} />
            </div>
            <Input 
              className="flex w-full min-w-0 flex-1 border-none focus-visible:ring-0 bg-transparent text-foreground placeholder:text-muted-foreground text-lg h-full" 
              placeholder="Search for jobs, market prices, or village schemes..."
            />
            <Button className="bg-primary text-white px-8 rounded-xl font-bold h-full hover:bg-primary/90 transition-all">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}