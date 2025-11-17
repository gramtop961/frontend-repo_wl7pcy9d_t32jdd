import React from 'react';
import Particles from './Particles';
import { Button, H1, Text } from './UI';
import { Download, Sparkles } from 'lucide-react';

export default function Hero({ onDownloadCV }){
  return (
    <div className="relative">
      <Particles />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E0D10]/20 via-transparent to-transparent" />
      <div className="mx-auto -mt-24 w-full max-w-6xl px-6">
        <div className="max-w-3xl space-y-6">
          <H1>
            Kalyanii Alexa
          </H1>
          <Text className="text-lg">AI Researcher · Full‑Stack Engineer</Text>
          <Text>
            I design calm, premium, future‑forward interfaces infused with intelligent systems.
            Elegant by default. Ethical by design.
          </Text>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={onDownloadCV}>
              <Download className="h-4 w-4" /> Download CV
            </Button>
            <Button className="bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Explore Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
