import './App.css';
import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import Task1 from './pages/task1'
import Task2 from './pages/task2'
import Result1 from './pages/result1'
import Result2 from './pages/result2'
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Router>
       <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand >Education Taday</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Task1">Task1</Nav.Link>
          <Nav.Link href="/Task2">Task2</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      {/* <nav id="navbar">
          <Nav.Link to="/" className = "navlinktitle"> Index </Nav.Link>
          <Nav.Link to="/Task1" className = "navlink"> Task1 </Nav.Link>
          <Nav.Link to="/Task2" className = "navlink"> Task2 </Nav.Link>
      </nav> */}
      <Switch>
        <Route path="/Task1">
          <Task1 />
        </Route>
        <Route path="/Task2">
          <Task2 />
        </Route>
        <Route path="/Result1">
          <Result1 />
        </Route>
        <Route path="/Result2">
          <Result2 />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;