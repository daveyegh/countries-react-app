import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div className="App">
          <Navbar style={{padding: '20px'}} color="white" light>
            <NavbarBrand href="/" className="mr-auto">countries-app</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href=""><Link style={{margin: '10px', textDecoration: 'none', fontSize: 20, color: 'black'}} to="/">Go Back</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href=""><Link style={{margin: '10px', textDecoration: 'none', fontSize: 20, color: 'black'}} to="/countries">All Countries</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/" exact />
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;
