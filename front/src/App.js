import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Instancias from './components/Instancias';
import Clases from './components/Clases';
import Propiedades from './components/Propiedades';
import Viz from './components/viz'
import InstanciaDetail from './components/InstanciaDetail';
import ClaseDetail from './components/ClaseDetail';
import PropiedadDetail from './components/PropiedadDetail';
import BusquedaLibre from './components/BusquedaLibre';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'Home',
      instancia: null,
      clase: null,
      propiedad: null
    };

    this.callbackNavbar = this.callbackNavbar.bind(this);
    this.handleInstanciaClick = this.handleInstanciaClick.bind(this);
    this.handleClaseClick = this.handleClaseClick.bind(this);
    this.handlePropiedadClick = this.handlePropiedadClick.bind(this);
  }

  callbackNavbar(value) {
    this.setState({
      location: value
    });
  }

  handleInstanciaClick(idInstancia){
    this.setState({instancia: idInstancia});
    this.setState({location:'InstanciaDetail'});
  }

  handleClaseClick(idClase){
    this.setState({
      clase: idClase,
      location: 'ClaseDetail',
    });
  }

  handlePropiedadClick(idPropiedad){
    this.setState({
      propiedad: idPropiedad,
      location: 'PropiedadDetail',
    });
  }

  render() {

  let pantalla;
  if(this.state.location === 'Instancias'){
    pantalla = <Instancias onChange={this.handleInstanciaClick}/>;
  } else if(this.state.location === 'Clases'){
    pantalla = <Clases onChange={this.handleClaseClick}/>;
  } else if(this.state.location === 'Propiedades'){
    pantalla = <Propiedades onChange={this.handlePropiedadClick}/>;
  } else if(this.state.location === 'InstanciaDetail'){
    pantalla = <InstanciaDetail instancia={this.state.instancia}/>;
  } else if(this.state.location === 'ClaseDetail'){
    pantalla = <ClaseDetail onChange={this.handleInstanciaClick} clase={this.state.clase}/>;
  } else if(this.state.location === 'PropiedadDetail'){
    pantalla = <PropiedadDetail onChange={this.handleInstanciaClick} propiedad={this.state.propiedad}/>
  } else if(this.state.location === 'Viz'){
    pantalla = <Viz/>
  } else if(this.state.location === 'BusquedaLibre'){
    pantalla = <BusquedaLibre/>
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
      <div className="container-fluid">


        {pantalla}
      </div>

    </div>
  )}
}

export default App;
