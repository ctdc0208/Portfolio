import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </BrowserRouter>
  )
}

export default App
