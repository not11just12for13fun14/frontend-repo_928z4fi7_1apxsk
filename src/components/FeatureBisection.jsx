import React from 'react'
import { Sparkles, LineChart, Cpu } from 'lucide-react'

const features = [
  {
    title: 'Conversational build flow',
    copy: 'Describe, iterate, and ship without context switching.',
    icon: Sparkles,
    metric: 'TTV ↓ 84%'
  },
  {
    title: 'Live performance core',
    copy: '90th percentile latency optimized for fluid UX.',
    icon: Cpu,
    metric: 'p90 < 60ms'
  },
  {
    title: 'Analytics that narrate',
    copy: 'Metrics align to the story you tell customers.',
    icon: LineChart,
    metric: 'NPS +31'
  }
]

export default function FeatureBisection() {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: vertical story thread */}
        <div className="flex flex-col justify-center gap-10">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 text-emerald-300/90">
                <f.icon className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Feature {i + 1}</span>
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight">{f.title}</h3>
              <p className="mt-2 text-slate-300/80 max-w-md">{f.copy}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px translate-x-[-0.5px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent md:block" />

        {/* Right: paired concise visuals/metrics */}
        <div className="flex flex-col justify-center gap-10">
          {features.map((f, i) => (
            <div key={i} className="relative">
              <div className="text-emerald-300/90 text-sm font-mono">{f.metric}</div>
              <div className="mt-3 h-16 rounded-lg border border-emerald-300/20 bg-emerald-400/5 backdrop-blur-sm overflow-hidden">
                <div className="h-full w-0 group-hover:w-full transition-[width] duration-700 ease-out bg-gradient-to-r from-emerald-400/20 to-emerald-500/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
