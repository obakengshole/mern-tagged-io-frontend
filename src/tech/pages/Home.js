import React from 'react'
import {
    Link,
    Outlet
  } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
      <p>
        <Link to="/monitors">Monitors</Link>
      </p>
      <Outlet/>
      
    </React.Fragment>
    )
}

export default Home
