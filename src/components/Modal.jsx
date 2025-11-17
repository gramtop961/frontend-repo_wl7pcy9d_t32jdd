import React from 'react';

export default function Modal({ open, onClose, children }){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={onClose}>
      <div className="max-h-[86vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-[#121214] p-4 shadow-xl" onClick={(e)=>e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
