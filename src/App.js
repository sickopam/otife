import React, { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Navbar/About'
import Articles from './Navbar/Articles'
import Books from './Navbar/Books'
import Enrollment from './Navbar/Enrollment'
import Events from './Navbar/Events'
import Research from './Navbar/Research'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'


export default function App() {

  useEffect(() => {
    Aos.init({duration: 700})
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/events' element={<Events/>}/>
          <Route exact path='/research' element={<Research/>}/>
          <Route exact path='/articles' element={<Articles/>}/>
          <Route exact path='/books' element={<Books/>}/>
          <Route exact path='/enrollment' element={<Enrollment/>}/>
        </Routes>        
      </Router>
    </div>
  )
}
