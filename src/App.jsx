import './App.css'
import Hero from './components/Hero'
import TheaterStats from './components/TheaterStats'
import Context from './components/Context'
import AudienceSegments from './components/AudienceSegments'
import SearchData from './components/SearchData'
import SocialMedia from './components/SocialMedia'
import ValueProposition from './components/ValueProposition'
import GapsAnalysis from './components/GapsAnalysis'
import OmnichannelStrategy from './components/OmnichannelStrategy'
import Conclusion from './components/Conclusion'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c1009] text-white">
      <NavBar />
      <Hero />
      <Context />
      <TheaterStats />
      <AudienceSegments />
      <SearchData />
      <SocialMedia />
      <ValueProposition />
      <GapsAnalysis />
      <OmnichannelStrategy />
      <Conclusion />
    </div>
  )
}
