import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Redirect,
  Link
} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Monitors from './tech/pages/Monitors'
import { Container } from 'reactstrap';
import MonitorDetails from './tech/pages/MonitorDetails';
import Home from './tech/pages/Home';

const App = () => {
  return (
    <div className="App">
    <Navbar expand="lg" variant="light" bg="info">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <p/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monitors" element={<Monitors />}>
      </Route>
        <Route path="/monitordetails">
          <Route path=":monitorId" element={<MonitorDetails />} />
      </Route>
      {/* <Route component={Error} /> */}
    </Routes>
  </div>
  )
}

export default App;
