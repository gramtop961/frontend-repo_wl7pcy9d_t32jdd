import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Particles() {
  // Spline hero layer with an overlayed subtle gradient to avoid pointer blocking
  return (
    <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-2xl">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0E0D10]/20 to-[#0E0D10]" />
    </div>
  );
}
