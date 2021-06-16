import React from 'react'
import { Switch, Route } from 'react-router'

import Navbar from './pages/Navbar'
import Routes from './Routes'
import AllProducts from './pages/AllProducts'

const App = () => {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route path='/products' component={AllProducts}/>
        </Switch>
      <Routes />
    </div>
  )
}

export default App
