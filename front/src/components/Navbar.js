import React, {Component} from 'react';


/**
* This class contains all needed to display the nav bar on top.
*/
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      onChange: props.onChange
    };
  }
  
  render() {
    return (
      <div className='fixed-top'>
        <nav id='navbar_home' className='navbar navbar-dark bg-dark'>
          <a id='nombre_nav' className='navbar-brand' 
             href={'#'}>
             Semantic Web
          </a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Instancias')} href={'#instancias'}>Instancias</a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Clases')} href={'#clases'}>Clases</a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Propiedades')} href={'#propiedades'}>Propiedades</a>
          <a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}>Graphs</a>
        </nav>
      
      </div>
    );
  }
}