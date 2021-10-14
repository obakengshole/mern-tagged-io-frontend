import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Monitors from './tech/pages/Monitors'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Monitors />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
