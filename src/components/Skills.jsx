import React from 'react';
import { H2, Text } from './UI';

function Bar({ name, level }){
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-zinc-300">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-gradient-to-r from-[#E066FF] to-[#7c3aed]" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function Skills({ skills }){
  return (
    <section className="py-16 md:py-24">
      <H2>Skills</H2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <Text className="uppercase tracking-wide text-xs text-zinc-400">Technical</Text>
          {skills.technical.map((s)=> <Bar key={s.name} {...s} />)}
        </div>
        <div className="space-y-4">
          <Text className="uppercase tracking-wide text-xs text-zinc-400">Research</Text>
          {skills.research.map((s)=> <Bar key={s.name} {...s} />)}
        </div>
        <div className="space-y-4">
          <Text className="uppercase tracking-wide text-xs text-zinc-400">Soft Skills</Text>
          {skills.soft.map((s)=> <Bar key={s.name} {...s} />)}
        </div>
      </div>
    </section>
  );
}
