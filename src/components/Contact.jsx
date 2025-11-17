import React, { useState, useEffect } from 'react';
import { H2, Text, Button, Card } from './UI';
import { STORAGE_KEY, loadData, saveData } from '../lib/storage';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [toast, setToast] = useState('');
  useEffect(()=>{
    if(!toast) return; const t = setTimeout(()=> setToast(''), 2000); return ()=> clearTimeout(t);
  },[toast]);
  function submit(e){
    e.preventDefault();
    const data = loadData();
    const entry = { id: crypto.randomUUID(), ...form, date: new Date().toISOString() };
    const next = { ...data, messages: [entry, ...(data.messages||[])] };
    saveData(next);
    setForm({ name:'', email:'', message:'' });
    setToast('✨ Message sent!');
  }
  return (
    <section className="py-16 md:py-24">
      <H2>Contact</H2>
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <Card>
          <label className="block text-sm text-zinc-300/90">Name
            <input value={form.name} onChange={e=> setForm({ ...form, name: e.target.value })} required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-[#E066FF]/30 focus:ring-2" placeholder="Your name" />
          </label>
        </Card>
        <Card>
          <label className="block text-sm text-zinc-300/90">Email
            <input type="email" value={form.email} onChange={e=> setForm({ ...form, email: e.target.value })} required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-[#E066FF]/30 focus:ring-2" placeholder="you@example.com" />
          </label>
        </Card>
        <Card className="md:col-span-2">
          <label className="block text-sm text-zinc-300/90">Message
            <textarea value={form.message} onChange={e=> setForm({ ...form, message: e.target.value })} required rows={6} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-[#E066FF]/30 focus:ring-2" placeholder="Tell me about your project..." />
          </label>
          <div className="mt-4 flex justify-end"><Button type="submit">Send</Button></div>
        </Card>
      </form>
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-white/10 px-4 py-2 text-white shadow-[0_0_24px_rgba(224,102,255,0.25)]">{toast}</div>
      )}
    </section>
  );
}
