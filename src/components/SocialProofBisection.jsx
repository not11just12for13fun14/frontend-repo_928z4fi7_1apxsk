import React from 'react'

const logos = [
  { name: 'Arctiq', initials: 'A' },
  { name: 'Nimbus', initials: 'N' },
  { name: 'Helix', initials: 'H' },
  { name: 'Volt', initials: 'V' }
]

const quotes = [
  'We shipped our beta in days, not months.',
  'The narrative UI keeps users engaged and converting.',
  'Onboarding time dropped dramatically.',
  'It just feels alive.'
]

export default function SocialProofBisection() {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: ultra-thin logos */}
        <div className="flex items-center md:items-start gap-4 flex-wrap">
          {logos.map((l) => (
            <div key={l.name} className="group relative">
              <div className="h-10 w-10 rounded-full border border-white/20 text-slate-200/90 flex items-center justify-center text-sm">
                {l.initials}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px translate-x-[-0.5px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent md:block" />

        {/* Right: micro testimonials */}
        <div className="space-y-6">
          {quotes.map((q, i) => (
            <p key={i} className="text-slate-200/90 hover:text-white transition-colors">“{q}”</p>
          ))}
        </div>
      </div>
    </section>
  )
}
