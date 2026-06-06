import { VideoBackground } from './components/VideoBackground'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { EthosSection } from './components/EthosSection'
import { TheHouseSection } from './components/TheHouseSection'
import { NightPartySection } from './components/NightPartySection'
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

      <EthosSection />
      <TheHouseSection />
      <NightPartySection />
      <ApplySection />
      <Footer />
    </div>
  )
}

export default App
