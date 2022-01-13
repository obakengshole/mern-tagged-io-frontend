import React, { useState } from 'react'
import { CardGroup } from 'react-bootstrap'
import { getMonitors } from '../../services/api'
import MonitorCard from '../components/MonitorCard'

// https://s.neofiliac.com/P/69/19/1610570242_t.jpg

const Monitors = () => {
  const monitors = getMonitors()
  const [itemSelected, setItemSelected] = useState(-1)

  // useEffect(() => {
    // setItemSelected()
  // }, [])

  return (
    <div>

    <CardGroup>
    {
      monitors.map(monitor => {
        return(
          <MonitorCard key={monitor.id} monitor={monitor} />
          )
        })
      }
    </CardGroup>
      </div>
  )

}

export default Monitors