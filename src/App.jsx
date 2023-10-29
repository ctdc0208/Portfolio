import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </ParallaxProvider>
  )
}

export default App
