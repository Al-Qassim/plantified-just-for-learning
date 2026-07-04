import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PlantShowcase from './components/PlantShowcase/PlantShowcase'
import PlantPersonalities from './components/PlantPersonalities/PlantPersonalities'
import Rewards from './components/Rewards/Rewards'
import PlantCareCalendar from './components/PlantCareCalendar/PlantCareCalendar'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PlantShowcase />
      <PlantPersonalities />
      <Rewards />
      <PlantCareCalendar />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App
