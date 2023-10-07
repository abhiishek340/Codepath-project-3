import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'
import LocationsAPI from './services/LocationsAPI'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/Texas',
      element: <LocationEvents index={1} />
    },
    {
      path: '/CryptoArenaLA',
      element: <LocationEvents index={2} />
    },
    {
      path: '/Chicago',
      element: <LocationEvents index={3} />
    },
    {
      path: '/Boston',
      element: <LocationEvents index={4} />
    },
    {
      path: '/events',
      element: <Events />
    }
    
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App