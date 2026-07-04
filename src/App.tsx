import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PlantShowcase from './components/PlantShowcase/PlantShowcase'
import PlantPersonalities from './components/PlantPersonalities/PlantPersonalities'
import Rewards from './components/Rewards/Rewards'
import PlantCareCalendar from './components/PlantCareCalendar/PlantCareCalendar'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import Reveal from './components/Reveal/Reveal'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Reveal> <PlantShowcase /> </Reveal>
        <Reveal> <PlantPersonalities /> </Reveal> 
        <Reveal> <Rewards /> </Reveal>
        <Reveal> <PlantCareCalendar /> </Reveal>
        <Reveal> <Newsletter /> </Reveal>
      </main>
      <Reveal> <Footer /> </Reveal>
    </div>
  );
}

export default App
