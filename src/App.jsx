import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

function App() {
//hero
//experience
//approach
//projects
//footer
  return (
    <BrowserRouter>
      <div className='relative bg-primary z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center z-0'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience/>
        <Tech />
        <Works />
        <Feedbacks/>
        <div className='relative'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
