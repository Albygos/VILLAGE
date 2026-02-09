import React from 'react';
import { UserSearch, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesGrid() {
  const services = [
    {
      title: 'Find Local Work',
      description: 'Browse MGNREGA projects and local private sector opportunities specifically for our village.',
      tag: '12 New Listings',
      icon: UserSearch,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      tagColor: 'text-primary',
      href: '/jobs',
    },
    {
      title: 'Kisan Marketplace',
      description: 'Direct-to-buyer selling for your harvest. List your products and view daily market rates.',
      tag: 'Check Daily Prices',
      icon: ShoppingCart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100/50 dark:bg-orange-900/20',
      tagColor: 'text-orange-600',
      href: '/marketplace',
    },
    {
      title: 'Panchayat Connect',
      description: 'File complaints, track status, or provide feedback directly to the Panchayat office.',
      tag: 'Track Status',
      icon: Megaphone,
      color: 'text-red-600',
      bgColor: 'bg-red-100/50 dark:bg-red-900/20',
      tagColor: 'text-red-600',
      href: '/complaints',
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-primary rounded-full"></span>
        Key Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Link 
            key={idx} 
            href={service.href}
            className="group cursor-pointer bg-white dark:bg-zinc-800 rounded-3xl p-8 border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col h-full"
          >
            <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
              <service.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              {service.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/5">
              <span className={`text-sm font-bold ${service.tagColor}`}>{service.tag}</span>
              <div className={`size-10 rounded-full ${service.bgColor} flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all`}>
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
