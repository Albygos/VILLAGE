import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Announcements() {
  const news = [
    {
      date: '15',
      month: 'Oct 2024',
      title: 'New Water Conservation Scheme Launched',
      content: 'The Gram Panchayat is starting a new incentive program for household rainwater harvesting systems. Applications open on Monday.',
    },
    {
      date: '12',
      month: 'Oct 2024',
      title: 'Health Camp at Primary Health Centre',
      content: 'Free medical check-up camp for seniors and children will be organized this Sunday. Please carry your Aadhar card for registration.',
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-2 h-8 bg-primary rounded-full"></span>
          Village Announcements
        </h2>
        <Button variant="link" className="text-primary font-bold hover:underline flex items-center gap-1 p-0">
          View all News <ExternalLink size={16} />
        </Button>
      </div>
      <div className="space-y-4">
        {news.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-primary/10 flex items-start gap-6 hover:bg-secondary/20 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0 w-24 text-center">
              <p className="text-3xl font-black text-primary group-hover:scale-110 transition-transform">{item.date}</p>
              <p className="text-xs font-bold uppercase text-muted-foreground">{item.month}</p>
            </div>
            <div className="border-l border-primary/5 pl-6">
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}