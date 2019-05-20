import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Instancias from './components/Instancias';
import Clases from './components/Clases';
import Propiedades from './components/Propiedades';
import Viz from './components/viz'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'Home',
    };

    this.callbackNavbar = this.callbackNavbar.bind(this);
  }

  callbackNavbar(value) {
    this.setState({
      location: value
    });
  }

  render() {

  let pantalla;
  if(this.state.location === 'Instancias'){
    pantalla = <Instancias/>;
  } else if(this.state.location === 'Clases'){
    pantalla = <Clases/>;
  } else if(this.state.location === 'Propiedades'){
    pantalla = <Propiedades/>;
  }
  else if(this.state.location === 'Viz'){
    pantalla = <Viz/>
  }

  return (
    <div className="App">
      <div>
        <Navbar onChange={this.callbackNavbar}/>
      </div>
      <br/>
      <br/>
      <br/>
      <h2>{this.state.location}</h2>
      <br/>
      <br/>
      <div className="container">


        {pantalla}
      </div>

    </div>
  )}
}

export default App;
