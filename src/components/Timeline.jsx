import React, { useState } from 'react';
import { Card, H2, Text } from './UI';

export default function Timeline({ items }){
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 md:py-24">
      <H2>Professional Journey</H2>
      <div className="relative ml-4 border-l border-white/10 pl-6">
        {items.map((it)=> (
          <div key={it.id} className="relative mb-10">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#E066FF] shadow-[0_0_0_6px_rgba(224,102,255,0.15)]" />
            <Card className="cursor-pointer" onClick={()=> setOpen(open===it.id?null:it.id)}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-white font-semibold">{it.role}</div>
                  <Text className="mt-1">{it.org}</Text>
                </div>
                <Text>{it.period}</Text>
              </div>
              {open===it.id && (
                <Text className="mt-4">{it.description}</Text>
              )}
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
