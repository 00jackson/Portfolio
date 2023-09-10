import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/About'
import Work from './components/Work'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <AboutMe />
      <Contact />

    </div>
  )
}

export default App
