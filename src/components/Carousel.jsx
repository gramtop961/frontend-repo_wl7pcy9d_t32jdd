import React, { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

export default function Carousel({ items = [], renderItem, speed = 40, reverse = false }){
  const trackRef = useRef(null);
  useEffect(()=>{
    const el = trackRef.current;
    if(!el) return;
    const keyframes = [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }];
    const anim = el.animate(keyframes, {
      duration: Math.max(12000 - speed*100, 4000),
      iterations: Infinity,
      easing: 'linear',
      direction: reverse ? 'reverse':'normal'
    });
    return ()=> anim.cancel();
  },[speed, reverse]);
  const looped = [...items, ...items];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div ref={trackRef} className={cn('flex gap-4 p-4 will-change-transform')}>
        {looped.map((it, i)=> (
          <div key={i} className="min-w-[260px] sm:min-w-[320px]">
            {renderItem(it, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
