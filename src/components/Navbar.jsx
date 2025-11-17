import React from 'react';
import { Button } from './UI';

export default function Navbar({ onOpenAdmin, onDownloadCV, logoText }){
  const links = [
    { href: '#about', label: 'About' },
    { href: '#stats', label: 'Stats' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#research', label: 'Research' },
    { href: '#journey', label: 'Journey' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0E0D10]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-wide text-white">{logoText}</div>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map(l=> (<a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white">{l.label}</a>))}
        </nav>
        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex" onClick={onDownloadCV}>Download CV</Button>
          <button onClick={onOpenAdmin} className="rounded-lg px-3 py-1.5 text-sm text-zinc-300 hover:bg-white/5">Admin</button>
        </div>
      </div>
    </div>
  );
}
