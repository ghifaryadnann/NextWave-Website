import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Project from './component/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <main>
          <Home/>
          <About/>
          <Project/>
        </main>
        
      </div>
      
    </div>
  )
}

export default App