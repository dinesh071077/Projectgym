import React from 'react'
import Projectgym from './Projectgym'

import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
       
        <div>
        <Router>
          <Routes>
            <Route path='/' element={<Projectgym/>}></Route>
            <Route path='/Register'  element={<Register/>}></Route>
          </Routes>
         </Router>
        </div>
    </div>
  )
}

export default App