import React, { useState } from 'react';
import { Card, H2, Text, Button, Badge } from './UI';
import Carousel from './Carousel';
import Modal from './Modal';

export function Certificates({ items }){
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 md:py-24">
      <H2>Certificates</H2>
      <Carousel items={items} renderItem={(it)=> (
        <Card key={it.id} className="group h-full cursor-pointer transition-transform hover:scale-[1.02]" onClick={()=> setOpen(it)}>
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-[#E066FF]/20 to-white/5" />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-white font-medium">{it.title}</div>
              <Badge>{it.year}</Badge>
            </div>
            <Text className="mt-1">{it.org}</Text>
          </div>
        </Card>
      )} />
      <Modal open={!!open} onClose={()=> setOpen(null)}>
        {open && (
          <div>
            <div className="text-white text-xl font-semibold">{open.title}</div>
            <Text className="mt-1">{open.org} · {open.year}</Text>
            <div className="mt-4 aspect-video w-full rounded-xl bg-white/5" />
            <Text className="mt-4">{open.description}</Text>
            <div className="mt-4 flex justify-end"><Button onClick={()=> window.open(open.url || '#', '_blank')}>Open</Button></div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export function Projects({ items }){
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 md:py-24">
      <H2>Projects</H2>
      <Carousel items={items} renderItem={(it)=> (
        <Card key={it.id} className="group h-full cursor-pointer transition-transform hover:scale-[1.02]" onClick={()=> setOpen(it)}>
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-white/5 to-[#E066FF]/10" />
          <div className="mt-4 space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-white font-medium">{it.title}</div>
              <Badge>{it.tag}</Badge>
            </div>
            <Text>{it.subtitle}</Text>
          </div>
        </Card>
      )} reverse />
      <Modal open={!!open} onClose={()=> setOpen(null)}>
        {open && (
          <div>
            <div className="text-white text-xl font-semibold">{open.title}</div>
            <Text className="mt-1">{open.subtitle}</Text>
            <div className="mt-4 aspect-video w-full rounded-xl bg-white/5" />
            <Text className="mt-4">{open.description}</Text>
            <div className="mt-4 flex gap-3 justify-end">
              <Button onClick={()=> window.open(open.demo || '#', '_blank')}>Live</Button>
              <Button onClick={()=> window.open(open.repo || '#', '_blank')}>Code</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export function Research({ items }){
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 md:py-24">
      <H2>Research</H2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it)=> (
          <Card key={it.id} className="cursor-pointer" onClick={()=> setOpen(it)}>
            <div className="text-white font-medium">{it.title}</div>
            <Text className="mt-1">{it.venue} · {it.year}</Text>
            <Text className="mt-3 line-clamp-3">{it.abstract}</Text>
          </Card>
        ))}
      </div>
      <Modal open={!!open} onClose={()=> setOpen(null)}>
        {open && (
          <div>
            <div className="text-white text-xl font-semibold">{open.title}</div>
            <Text className="mt-1">{open.venue} · {open.year}</Text>
            <Text className="mt-4">{open.abstract}</Text>
            <div className="mt-4 flex justify-end"><Button onClick={()=> window.open(open.pdf || '#', '_blank')}>Open PDF</Button></div>
          </div>
        )}
      </Modal>
    </section>
  );
}
