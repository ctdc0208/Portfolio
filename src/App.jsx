import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
        <div className='grid-10 bg-100'> 
          <div className='main-container'>
          </div>
        </div>
            <Contact />
            <Footer />
    </>
  )
}

export default App
