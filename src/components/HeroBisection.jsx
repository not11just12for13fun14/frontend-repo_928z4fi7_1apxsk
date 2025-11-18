import React from 'react'
import { ChevronDown, Activity } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function HeroBisection() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient veil to improve contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
        {/* Left: Minimal headline + mission */}
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.2em] text-emerald-300/80 text-xs mb-4">AI-powered SaaS</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Build at the speed of conversation
            </h1>
            <p className="mt-6 text-slate-200/80 text-sm md:text-base max-w-md">
              Minimal by design, maximal by outcome. A live canvas where your product takes shape in real time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px translate-x-[-0.5px] bg-gradient-to-b from-emerald-500/40 via-emerald-300/30 to-transparent md:block" />

        {/* Right: Animated micro-visual */}
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-sm w-full">
            <div className="flex items-center gap-3 text-emerald-300/90">
              <Activity className="h-5 w-5" />
              <span className="text-xs uppercase tracking-wider">Live insight</span>
            </div>
            <div className="mt-4 h-28 rounded-lg bg-emerald-400/10 backdrop-blur-sm border border-emerald-300/20 overflow-hidden relative">
              {/* thin animated line */}
              <div className="absolute inset-x-0 bottom-3 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-400/90 to-emerald-500/0 animate-pulse" />
              {/* subtle numeric ticker */}
              <div className="absolute right-4 top-3 text-emerald-200/80 text-[11px] font-mono">
                <span className="inline-block animate-pulse">latency ~ 38ms</span>
              </div>
            </div>
            <p className="mt-4 text-slate-200/80 text-sm">
              Micro-visuals signal precision and speed—so you feel the system breathing with you.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator bridging columns */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-200/70">
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  )
}
