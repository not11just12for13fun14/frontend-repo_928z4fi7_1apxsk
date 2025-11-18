import React from 'react'
import HeroBisection from './components/HeroBisection'
import FeatureBisection from './components/FeatureBisection'
import PlansBisection from './components/PlansBisection'
import NarrativeBisection from './components/NarrativeBisection'
import SocialProofBisection from './components/SocialProofBisection'
import FinalNudgeBisection from './components/FinalNudgeBisection'
import UltraMinimalFooter from './components/UltraMinimalFooter'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <HeroBisection />
      <FeatureBisection />
      <PlansBisection />
      <NarrativeBisection />
      <SocialProofBisection />
      <FinalNudgeBisection />
      <UltraMinimalFooter />
    </div>
  )
}

export default App
