import React from 'react';
import {Route, BrowserRouter as Router,Switch,Link} from 'react-router-dom'
import {Bar1,Pie1,Line1}from './components/Graph'
import Global from './components/Global'
import WorldMap from './components/WorldMap'
import MapCards from './components/MapCards'

import {Button,DropdownButton,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

function App() {

 

  return (
    <Router>
      <div className="App">   

      <div className="app__components"> 
          <div className="map__header">
            <div style={{color: "white"}}> <h1> Covid-19</h1> </div>
                <div className="dropdown">

                  <DropdownButton id="dropdown-basic-button" title="">
                    <Dropdown.Item href="/">Map</Dropdown.Item>
                    <Dropdown.Item href="/global">Stats</Dropdown.Item>
                  </DropdownButton>
                
                </div>
            </div>

            <Route path="/" exact component={WorldMap}/>  
            <Route  path="/global"  component={Global}/>
          </div>
          {/* < /> */}
      </div>
    </Router>
  );
}

export default App;
