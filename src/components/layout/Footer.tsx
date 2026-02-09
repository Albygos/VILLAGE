import React from 'react';
import Link from 'next/link';
import { Sprout, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-background/50 border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-primary text-white flex items-center justify-center rounded-lg">
                <Sprout size={18} />
              </div>
              <h2 className="text-foreground text-lg font-bold leading-tight">Panchayat Portal</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to digitizing rural administrative services and enhancing the quality of life for our community through technology.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 000-000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>support@panchayat.gov.in</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>Main Street, Block B, Kerala</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Download Forms</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">MGNREGA Portal</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kisan Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Official Documents</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Panchayat Bye-laws</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Annual Budget Reports</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Land Record Forms</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Meeting Minutes</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2024 Panchayat Digital Service Portal. An initiative by Ministry of Panchayati Raj.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Use</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}