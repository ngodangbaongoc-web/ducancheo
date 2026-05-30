import './App.css'
import Hero from './components/Hero'
import SummaryIntro from './components/SummaryIntro'
import Context from './components/Context'
import TheaterStats from './components/TheaterStats'
import AudienceSegments from './components/AudienceSegments'
import SearchData from './components/SearchData'
import SocialMedia from './components/SocialMedia'
import StrategicDirection from './components/StrategicDirection'
import OmnichannelStrategy from './components/OmnichannelStrategy'
import Conclusion from './components/Conclusion'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c1009] text-white">
      <NavBar />
      <Hero />
      <SummaryIntro />
      <Context />
      <TheaterStats />
      <AudienceSegments />
      <SearchData />
      <SocialMedia />
      <StrategicDirection />
      <OmnichannelStrategy />
      <Conclusion />
    </div>
  )
}
