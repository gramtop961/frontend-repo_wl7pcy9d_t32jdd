import React, { useEffect, useState } from 'react';
import { Card, H2, Text } from './UI';

function useCounter(target){
  const [value, set] = useState(0);
  useEffect(()=>{
    let raf;
    const start = performance.now();
    const duration = 1200;
    const tick = (t)=>{
      const p = Math.min(1, (t-start)/duration);
      set(Math.floor(p * target));
      if(p<1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  },[target]);
  return value;
}

export default function Stats({ stats }){
  const years = useCounter(stats.years);
  const projects = useCounter(stats.projects);
  const research = useCounter(stats.research);
  const certsRaw = stats.certificates;
  const certs = useCounter(certsRaw < 5 ? certsRaw : Math.ceil(certsRaw/5)*5);

  return (
    <section className="py-16 md:py-24">
      <H2>Impact in numbers</H2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[{k:'Years',v:years},{k:'Projects',v:projects},{k:'Research',v:research},{k:'Certificates',v:certs}].map((item)=> (
          <Card key={item.k} className="relative group overflow-hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E066FF]/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="text-4xl font-semibold text-white">{item.v}+</div>
              <Text className="mt-2">{item.k}</Text>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
