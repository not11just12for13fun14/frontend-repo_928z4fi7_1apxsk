import React from 'react'

export default function FinalNudgeBisection() {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-3xl md:text-4xl font-light">Still wondering?</p>
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px translate-x-[-0.5px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent md:block" />

        {/* Right */}
        <div>
          <p className="text-slate-200/90">Give it a try in 2 minutes—no card needed.</p>
          <button className="mt-5 inline-flex items-center rounded-full border border-emerald-400/50 px-5 py-2 text-sm text-emerald-200/90 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-shadow">
            Start building
          </button>
        </div>
      </div>
    </section>
  )
}
