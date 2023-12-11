import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <main>
          <Home/>
          <About/>
        </main>
        
      </div>
      
    </div>
  )
}

export default App