import React, { useMemo, useState } from 'react';
import { loadData, saveData, resetData } from '../lib/storage';
import { Button, Card, H2, Text } from './UI';

const tabs = ['About Me','Certificates','Projects','Research','Journey','Skills','Messages','Logo','Socials','CV Settings'];

export default function Admin({ onClose }){
  const [auth, setAuth] = useState({ user:'', pass:'' });
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState(loadData());
  const [tab, setTab] = useState(tabs[0]);

  function login(e){
    e.preventDefault();
    if(auth.user==='Kalyanii.a' && auth.pass==='Kalyadmin1!') setAuthed(true);
  }
  function update(next){ setData(next); saveData(next); }

  if(!authed) return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#121214] p-6" onClick={e=> e.stopPropagation()}>
        <H2>Admin Login</H2>
        <form onSubmit={login} className="space-y-4">
          <input placeholder="User" value={auth.user} onChange={e=> setAuth({ ...auth, user: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white" />
          <input type="password" placeholder="Password" value={auth.pass} onChange={e=> setAuth({ ...auth, pass: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white" />
          <div className="flex justify-between">
            <Button type="submit">Login</Button>
            <button type="button" className="text-zinc-300 underline" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 grid grid-rows-[auto,1fr] bg-[#0E0D10]/95">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="text-white font-semibold">Admin Dashboard</div>
        <div className="flex items-center gap-3">
          <Button onClick={()=> { resetData(); setData(loadData()); }}>Reset Demo</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
      <div className="grid grid-cols-12 overflow-hidden">
        <aside className="col-span-3 border-r border-white/10 p-4">
          <div className="space-y-2">
            {tabs.map(t => (
              <button key={t} onClick={()=> setTab(t)} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${tab===t?'bg-white/10 text-white':'text-zinc-300 hover:bg-white/5'}`}>{t}</button>
            ))}
          </div>
        </aside>
        <main className="col-span-9 overflow-y-auto p-6">
          {tab==='About Me' && (
            <div className="space-y-4">
              <Card>
                <label className="block text-sm text-zinc-300">Name
                  <input className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={data.profile.name} onChange={e=> update({ ...data, profile:{ ...data.profile, name: e.target.value } })} />
                </label>
              </Card>
              <Card>
                <label className="block text-sm text-zinc-300">Title
                  <input className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={data.profile.title} onChange={e=> update({ ...data, profile:{ ...data.profile, title: e.target.value } })} />
                </label>
              </Card>
              <Card>
                <label className="block text-sm text-zinc-300">Bio
                  <textarea rows={5} className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={data.profile.bio} onChange={e=> update({ ...data, profile:{ ...data.profile, bio: e.target.value } })} />
                </label>
              </Card>
            </div>
          )}
          {tab==='Certificates' && (
            <CollectionEditor items={data.certificates} onChange={(items)=> update({ ...data, certificates: items })} fields={['title','org','year','description']} />
          )}
          {tab==='Projects' && (
            <CollectionEditor items={data.projects} onChange={(items)=> update({ ...data, projects: items })} fields={['title','subtitle','tag','description','demo','repo']} />
          )}
          {tab==='Research' && (
            <CollectionEditor items={data.research} onChange={(items)=> update({ ...data, research: items })} fields={['title','venue','year','abstract','pdf']} />
          )}
          {tab==='Journey' && (
            <CollectionEditor items={data.journey} onChange={(items)=> update({ ...data, journey: items })} fields={['role','org','period','description']} />
          )}
          {tab==='Skills' && (
            <div className="grid gap-6 md:grid-cols-3">
              <SkillEditor title="Technical" items={data.skills.technical} onChange={(items)=> update({ ...data, skills: { ...data.skills, technical: items } })} />
              <SkillEditor title="Research" items={data.skills.research} onChange={(items)=> update({ ...data, skills: { ...data.skills, research: items } })} />
              <SkillEditor title="Soft" items={data.skills.soft} onChange={(items)=> update({ ...data, skills: { ...data.skills, soft: items } })} />
            </div>
          )}
          {tab==='Messages' && (
            <div className="space-y-3">
              {(data.messages||[]).map(m=> (
                <Card key={m.id}>
                  <div className="text-white font-medium">{m.name} — <span className="text-zinc-400">{m.email}</span></div>
                  <div className="mt-1 text-zinc-200">{m.message}</div>
                  <div className="mt-1 text-xs text-zinc-400">{new Date(m.date).toLocaleString()}</div>
                </Card>
              ))}
            </div>
          )}
          {tab==='Logo' && (
            <Card>
              <label className="block text-sm text-zinc-300">Brand Text
                <input className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={data.settings.branding.logoText} onChange={e=> update({ ...data, settings:{ ...data.settings, branding:{ ...data.settings.branding, logoText: e.target.value } } })} />
              </label>
            </Card>
          )}
          {tab==='Socials' && (
            <div className="grid gap-4 md:grid-cols-2">
              {Object.keys(data.profile.socials).map(key => (
                <Card key={key}>
                  <label className="block text-sm text-zinc-300">{key}
                    <input className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={data.profile.socials[key]} onChange={e=> update({ ...data, profile: { ...data.profile, socials: { ...data.profile.socials, [key]: e.target.value } } })} />
                  </label>
                </Card>
              ))}
            </div>
          )}
          {tab==='CV Settings' && (
            <Card>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(data.settings.cv.include).map(([k,v])=> (
                  <label key={k} className="flex items-center gap-3 text-sm text-zinc-200"><input type="checkbox" checked={v} onChange={(e)=> update({ ...data, settings: { ...data.settings, cv: { ...data.settings.cv, include: { ...data.settings.cv.include, [k]: e.target.checked } } } })} /> {k}</label>
                ))}
              </div>
              <label className="mt-4 flex items-center gap-3 text-sm text-zinc-200"><input type="checkbox" checked={data.settings.cv.includeAvatar} onChange={(e)=> update({ ...data, settings: { ...data.settings, cv: { ...data.settings.cv, includeAvatar: e.target.checked } } })} /> Include avatar</label>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}

function CollectionEditor({ items, onChange, fields }){
  function add(){ onChange([{ id: crypto.randomUUID(), ...(fields.reduce((a,f)=> ({...a,[f]:''}),{})) }, ...items]); }
  function del(id){ onChange(items.filter(i=> i.id!==id)); }
  function set(id, key, val){ onChange(items.map(i=> i.id===id ? { ...i, [key]: val } : i)); }
  return (
    <div className="space-y-4">
      <div className="flex justify-end"><Button onClick={add}>Add</Button></div>
      {items.map(i=> (
        <Card key={i.id}>
          <div className="grid gap-3 md:grid-cols-2">
            {fields.map(f=> (
              <label key={f} className="block text-sm text-zinc-300">{f}
                <input className="mt-2 w-full rounded-lg bg-white/5 px-3 py-2 text-white" value={i[f]||''} onChange={e=> set(i.id, f, e.target.value)} />
              </label>
            ))}
          </div>
          <div className="mt-3 flex justify-end">
            <Button onClick={()=> del(i.id)}>Delete</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

function SkillEditor({ title, items, onChange }){
  function add(){ onChange([{ name: '', level: 50 }, ...items]); }
  function set(index, key, val){ onChange(items.map((it,i)=> i===index ? { ...it, [key]: val } : it)); }
  function del(index){ onChange(items.filter((_,i)=> i!==index)); }
  return (
    <Card>
      <div className="mb-3 text-white font-medium">{title}</div>
      <div className="space-y-3">
        <div className="flex justify-end"><Button onClick={add}>Add</Button></div>
        {items.map((it, i)=> (
          <div key={i} className="grid grid-cols-[1fr,120px,auto] items-center gap-3">
            <input className="rounded-lg bg-white/5 px-3 py-2 text-white" value={it.name} onChange={e=> set(i,'name', e.target.value)} placeholder="Skill" />
            <input type="number" min={0} max={100} className="rounded-lg bg-white/5 px-3 py-2 text-white" value={it.level} onChange={e=> set(i,'level', Number(e.target.value))} />
            <button className="text-zinc-300" onClick={()=> del(i)}>Delete</button>
          </div>
        ))}
      </div>
    </Card>
  );
}
