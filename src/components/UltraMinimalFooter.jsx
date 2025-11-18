import React from 'react'

export default function UltraMinimalFooter() {
  return (
    <footer className="w-full bg-slate-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Flux Labs</div>
        <div className="md:justify-self-end flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
