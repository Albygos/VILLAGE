import React from 'react';
import { Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

export function QuickStats() {
  const stats = [
    {
      label: 'Active Jobs Near You',
      value: '50+',
      change: '+12%',
      icon: Briefcase,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    },
    {
      label: 'Mandi Price Index',
      value: 'Live Updates',
      icon: TrendingUp,
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600',
    },
    {
      label: 'Complaints Resolved',
      value: '92%',
      change: '+5%',
      icon: CheckCircle,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    }
  ];

  return (
    <div className="flex flex-wrap gap-6 mb-12">
      {stats.map((stat, idx) => (
        <div 
          key={idx} 
          className="flex-1 min-w-[280px] flex items-center gap-4 rounded-2xl p-6 bg-white dark:bg-zinc-800 border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`size-12 rounded-full flex items-center justify-center ${stat.color}`}>
            <stat.icon size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{stat.value}</p>
              {stat.change && (
                <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{stat.change}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}