import React from 'react';
import { cn } from '../utils/cn';

export function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      {children}
    </section>
  );
}

export function H1({ children }) {
  return (
    <h1 className="font-[600] tracking-tight text-4xl md:text-6xl lg:text-7xl text-white">
      {children}
    </h1>
  );
}

export function H2({ children }) {
  return (
    <h2 className="font-[600] tracking-tight text-2xl md:text-3xl lg:text-4xl text-white mb-8">
      {children}
    </h2>
  );
}

export function Text({ children, className }) {
  return (
    <p className={cn("text-sm md:text-base text-zinc-300/90 leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
      {children}
    </span>
  );
}

export function Button({ children, className, ...props }) {
  return (
    <button
      className={cn("group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#E066FF] to-[#a14ce0] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(224,102,255,0.35)] transition-transform will-change-transform hover:scale-[1.02] active:scale-[0.98]", className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -z-0 rounded-xl bg-white/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
    </button>
  );
}

export function Card({ children, className }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]", className)}>
      {children}
    </div>
  );
}
