import React from 'react'

const phrases = [
  'Ideas breathe here.',
  'Friction dissolves.',
  'Momentum compounds.',
  'Every scroll is progress.',
  'Ship what you speak.'
]

export default function NarrativeBisection() {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="relative">
          {phrases.map((t, i) => (
            <p
              key={i}
              className={`text-3xl md:text-5xl font-light my-10 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
