import './App.css'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <div className='content'>

        <div className='grid-10 bg-100'>
          <div className='main-container'>
            <About />
            <Projects />
          </div>
        </div>
            <Contact />
            <Footer />
      </div>
    </>
  )
}

export default App
