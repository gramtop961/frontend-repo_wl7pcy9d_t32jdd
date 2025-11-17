import React, { useMemo } from 'react';
import { loadData } from '../lib/storage';

function Section({ title, children }){
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 0.3, marginBottom: 6 }}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default function CVDocument({ settings }){
  const data = useMemo(()=> loadData(), []);
  const s = settings?.cv?.include || data.settings.cv.include;
  const includeAvatar = settings?.cv?.includeAvatar ?? data.settings.cv.includeAvatar;
  const profile = data.profile;

  const wrapper = {
    fontFamily: 'Times New Roman, Times, serif',
    color: '#111',
    background: 'white',
    width: '210mm',
    minHeight: '297mm',
    padding: '18mm 16mm',
  };
  const muted = { color: '#444' };
  const violet = { color: '#7c3aed' };

  return (
    <div style={wrapper}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8 }}>
        {includeAvatar && (<div style={{ width: 68, height: 68, background: '#eee', borderRadius: 12 }} />)}
        <div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{profile.name}</div>
          <div style={{ ...muted, fontSize: 13 }}>{profile.title}</div>
        </div>
      </div>
      <div style={{ height: 1, background: '#ddd', margin: '8px 0 12px' }} />
      {s.about && (
        <Section title="About Me">
          <div style={{ ...muted, lineHeight: 1.5, fontSize: 12 }}>{profile.bio}</div>
        </Section>
      )}
      {s.experience && (
        <Section title="Experience">
          {data.journey.map((j)=> (
            <div key={j.id} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{j.role} — <span style={violet}>{j.org}</span></div>
              <div style={{ ...muted, fontSize: 12 }}>{j.period}</div>
              <div style={{ fontSize: 12 }}>{j.description}</div>
            </div>
          ))}
        </Section>
      )}
      {s.skills && (
        <Section title="Skills">
          <div style={{ display: 'flex', gap: 24, fontSize: 12 }}>
            <div>
              <div style={{ fontWeight: 700 }}>Technical</div>
              <div>{data.skills.technical.map(s=> s.name).join(', ')}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Research</div>
              <div>{data.skills.research.map(s=> s.name).join(', ')}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Soft</div>
              <div>{data.skills.soft.map(s=> s.name).join(', ')}</div>
            </div>
          </div>
        </Section>
      )}
      {s.research && (
        <Section title="Research">
          {data.research.map(r=> (
            <div key={r.id} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{r.title}</div>
              <div style={{ ...muted, fontSize: 12 }}>{r.venue} · {r.year}</div>
            </div>
          ))}
        </Section>
      )}
      {s.projects && (
        <Section title="Projects">
          {data.projects.map(p=> (
            <div key={p.id} style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 700 }}>{p.title}</span> — <span style={muted}>{p.subtitle}</span>
            </div>
          ))}
        </Section>
      )}
      {s.certificates && (
        <Section title="Certificates">
          {data.certificates.map(c=> (
            <div key={c.id} style={{ fontSize: 12, marginBottom: 4 }}>{c.title} — {c.org} ({c.year})</div>
          ))}
        </Section>
      )}
      {s.socials && (
        <Section title="Socials">
          <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
            {Object.entries(profile.socials).map(([k,v])=> v && (<a key={k} href={v} style={{ color: '#111', textDecoration: 'none' }}>{k}</a>))}
          </div>
        </Section>
      )}
      {s.contact && (
        <Section title="Contact">
          <div style={{ fontSize: 12 }}>{profile.location}</div>
        </Section>
      )}
    </div>
  );
}
