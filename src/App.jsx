import React, { useMemo, useRef, useState } from 'react';
import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Section, H2, Text, Card, Button } from './components/UI';
import Stats from './components/Stats';
import { Certificates, Projects, Research } from './components/Cards';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Admin from './components/Admin';
import CVDocument from './components/CV';
import { loadData } from './lib/storage';

function usePortfolio(){
  const [ver, setVer] = useState(0);
  const data = useMemo(()=> loadData(), [ver]);
  const refresh = ()=> setVer(v=> v+1);
  return { data, refresh };
}

export default function App(){
  const { data } = usePortfolio();
  const [showAdmin, setShowAdmin] = useState(false);
  const cvRef = useRef(null);

  function downloadCV(){
    // Render CV into a printable window and trigger print-to-PDF; respects Times typography and A4 size
    const w = window.open('', 'cv');
    if(!w) return;
    w.document.write(`<!doctype html><html><head><title>CV - ${data.profile.name}</title><style>html,body{margin:0;padding:0;background:#eee} @page{ size: A4; margin: 0 } .sheet{ box-shadow:0 0 0.5mm rgba(0,0,0,.2); margin: 0 auto; } .print-area{ display:flex; align-items:center; justify-content:center; padding: 16px; }</style></head><body><div class="print-area"><div id="cv" class="sheet"></div></div></body></html>`);
    const mount = w.document.getElementById('cv');
    mount.appendChild(cvRef.current.cloneNode(true));
    setTimeout(()=> { w.print(); w.close(); }, 400);
  }

  const bg = 'bg-[radial-gradient(circle_at_20%_0%,rgba(224,102,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.12),transparent_35%)]';

  return (
    <div className={`min-h-screen ${bg}`} style={{ backgroundColor:'#0E0D10', backgroundImage:'linear-gradient(180deg,#0E0D10,#1A1A1D)' }}>
      <Navbar onOpenAdmin={()=> setShowAdmin(true)} onDownloadCV={downloadCV} logoText={data.settings.branding.logoText} />
      <main className="mx-auto max-w-6xl px-6">
        <Hero onDownloadCV={downloadCV} />

        <Section id="about">
          <H2>About Me</H2>
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
            <Card>
              <Text className="text-lg text-zinc-200">{data.profile.bio}</Text>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card className="bg-gradient-to-br from-white/5 to-[#E066FF]/5"><div className="text-white font-medium">Mission</div><Text className="mt-1">{data.profile.mission}</Text></Card>
                <Card className="bg-gradient-to-br from-white/5 to-[#E066FF]/5"><div className="text-white font-medium">Vision</div><Text className="mt-1">{data.profile.vision}</Text></Card>
              </div>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#E066FF]/20 blur-2xl" />
              <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-[#E066FF]/20 to-white/5" />
              <Text className="mt-3 text-center text-zinc-400">Parallax portrait placeholder</Text>
            </Card>
          </div>
        </Section>

        <div id="stats"><Stats stats={data.stats} /></div>

        <div id="certificates"><Certificates items={data.certificates} /></div>

        <div id="projects"><Projects items={data.projects} /></div>

        <div id="research"><Research items={data.research} /></div>

        <div id="journey"><Timeline items={data.journey} /></div>

        <div id="skills"><Skills skills={data.skills} /></div>

        <div id="contact"><Contact /></div>

        <footer className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-3 text-zinc-400 md:flex-row">
            <div>© Kalyanii Alexa | All rights reserved.</div>
            <div className="flex items-center gap-3">
              {Object.entries(data.profile.socials).map(([k,v])=> !!v && (<a key={k} href={v} target="_blank" rel="noreferrer" className="text-zinc-400 transition hover:text-white">{k}</a>))}
            </div>
          </div>
        </footer>

        <div className="hidden" aria-hidden>
          <div ref={cvRef}><CVDocument settings={data.settings} /></div>
        </div>
      </main>

      {showAdmin && <Admin onClose={()=> setShowAdmin(false)} />}
    </div>
  );
}
