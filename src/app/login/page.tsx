'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sprout, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Demo credentials check: village / 123456
    setTimeout(() => {
      if (username === 'village' && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        router.push('/');
      } else {
        setError('Invalid username or password. Try village/123456.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-3 mb-8 group">
        <div className="size-12 bg-primary text-white flex items-center justify-center rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
          <Sprout size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-tight">Panchayat Portal</h2>
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">Digital Village Initiative</span>
        </div>
      </Link>

      <Card className="w-full max-w-md border-primary/10 shadow-2xl rounded-3xl overflow-hidden">
        <CardHeader className="space-y-1 bg-primary/5 pb-8 pt-8 text-center">
          <CardTitle className="text-2xl font-black">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
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
              <Label htmlFor="username" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="village" 
                  className="pl-10 h-12 rounded-xl border-primary/10 focus:ring-primary"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 h-12 rounded-xl border-primary/10 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl bg-primary text-white font-black text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all gap-2"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {!isLoading && <ArrowRight size={20} />}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-8 pt-4 px-8 border-t border-primary/5 mt-4">
          <div className="bg-slate-50 dark:bg-primary/5 p-3 rounded-xl border border-primary/10 w-full">
            <p className="text-[10px] font-bold text-primary uppercase text-center mb-1">Demo Access</p>
            <p className="text-[11px] text-center text-slate-500">Username: <span className="font-bold text-slate-700 dark:text-slate-300">village</span> | Password: <span className="font-bold text-slate-700 dark:text-slate-300">123456</span></p>
          </div>
        </CardFooter>
      </Card>

      <footer className="mt-8 text-center">
        <p className="text-slate-400 text-xs font-medium tracking-wide uppercase">Official Digital Panchayat Mission • 2024</p>
      </footer>
    </div>
  );
}
