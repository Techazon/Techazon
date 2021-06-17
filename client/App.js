import React from 'react'
import { Switch, Route } from 'react-router'

import Navbar from './components/Navbar'
import Routes from './Routes'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
