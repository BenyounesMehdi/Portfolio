import About from './sections/About'
import Contact from './sections/Contact'
import Experiences from './sections/Experiences'
import Hero from './sections/Hero'
import Navbar  from './sections/Navbar'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'

function App() {

  return (
    <div>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
