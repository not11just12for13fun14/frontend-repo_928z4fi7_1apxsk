import React from 'react'

const plans = [
  { name: 'Seed', price: '$0', points: ['Prototype fast', 'Community support', 'Public projects'] },
  { name: 'Scale', price: '$29', points: ['Private projects', 'Priority build speed', 'Version history'] },
  { name: 'Enterprise', price: 'Let’s talk', points: ['SOC2-ready', 'SSO/SAML', 'Custom limits'] }
]

export default function PlansBisection() {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: plan names/pricing */}
        <div>
          <p className="text-emerald-300/80 uppercase tracking-[0.2em] text-xs">Your plan to grow</p>
          <div className="mt-6 space-y-6">
            {plans.map((p) => (
              <div key={p.name} className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <h4 className="text-2xl">{p.name}</h4>
                <span className="text-slate-300">{p.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px translate-x-[-0.5px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent md:block" />

        {/* Right: highlights */}
        <div className="grid grid-cols-1 gap-3 content-start">
          {plans.flatMap((p) => p.points.map((pt, i) => (
            <div key={`${p.name}-${i}`} className="group">
              <div className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
                <p className="text-slate-200/90 group-hover:text-white transition-colors">{pt}</p>
              </div>
              <div className="mt-2 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-400/60 to-transparent transition-all duration-500" />
            </div>
          )))}
        </div>

        {/* Center ribbon */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-xs text-emerald-300/90 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.15)]">Teams report 42% faster go-live</span>
        </div>
      </div>
    </section>
  )
}
