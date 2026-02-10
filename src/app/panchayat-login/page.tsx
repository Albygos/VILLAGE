'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Landmark, Lock, User, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function PanchayatLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (isAdmin) {
      router.push('/admin-dashboard');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Admin credentials check: admin / 123456
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('isLoggedIn', 'true'); // Also mark as logged in for general access
        window.location.href = '/admin-dashboard';
      } else {
        setError('Invalid admin credentials.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f1] dark:bg-[#0d140e] flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="size-14 bg-primary text-white flex items-center justify-center rounded-2xl shadow-xl shadow-primary/30">
          <Landmark size={32} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-foreground text-2xl font-black leading-tight tracking-tight uppercase">Panchayat Administration</h2>
          <span className="text-xs text-primary font-bold uppercase tracking-[0.2em]">Official Portal Access</span>
        </div>
      </div>

      <Card className="w-full max-w-md border-primary/20 shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-zinc-900">
        <CardHeader className="space-y-1 bg-primary/5 pb-8 pt-8 text-center border-b border-primary/10">
          <div className="mx-auto size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
            <ShieldCheck size={24} />
          </div>
          <CardTitle className="text-2xl font-black">Authorized Login</CardTitle>
          <CardDescription>Administrative access only. Personnel must verify identity.</CardDescription>
        </CardHeader>
        <CardContent className="pt-8 px-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="rounded-xl border-destructive/20 bg-destructive/5">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Admin Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="Enter official username" 
                  className="pl-10 h-12 rounded-xl border-primary/20 focus:ring-primary bg-slate-50 dark:bg-slate-800/50"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Security Key</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 h-12 rounded-xl border-primary/20 focus:ring-primary bg-slate-50 dark:bg-slate-800/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-xl bg-primary text-white font-black text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all gap-2"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Access Administration'}
              {!isLoading && <ArrowRight size={20} />}
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-primary/5 text-center">
            <Link href="/login" className="text-sm font-bold text-primary hover:underline">
              Standard Citizen Login
            </Link>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-12 text-center">
        <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">Ministry of Panchayati Raj • Official 2024</p>
      </footer>
    </div>
  );
}
