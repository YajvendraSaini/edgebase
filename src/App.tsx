import { VideoBackground } from './components/VideoBackground'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ManifestoSection } from './components/ManifestoSection'
import { NightPartySection } from './components/NightPartySection'
import { WhoItsForSection } from './components/WhoItsForSection'
import { TheHouseSection } from './components/TheHouseSection'
import { ApplySection } from './components/ApplySection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative w-full bg-background">
      <div className="relative min-h-screen overflow-hidden">
        <VideoBackground />
        <Navigation />
        <HeroSection />
      </div>

      <ManifestoSection />
      <NightPartySection />
      <WhoItsForSection />
      <TheHouseSection />
      <ApplySection />
      <Footer />
    </div>
  )
}

export default App
