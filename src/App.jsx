import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
        <Home />
        <div className='grid-10 bg-100'>
          <Navbar />
          <div className='main-container'>
            <About />
            <Projects />
          </div>
        </div>
            <Contact />
            <Footer />
    </ParallaxProvider>
  )
}

export default App
