import React, { Component } from 'react'

export default class Instancias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instancias: ['instancia 1', 'instancia2', 'instancia3'],
      instanciaBuscada: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      instanciaBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriEntidad = this.state.instanciaBuscada;
    console.log(uriEntidad);
    this.props.onChange(uriEntidad);

  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, inst)} href="#instanciaDetail">{inst}</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="searchDiv">
          <form id="buscadorInstancias" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" size="100" id="inputBuscadorInstancias" placeholder="Buscar Instancia" onChange={this.handleSearchChange}/>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
        <br/>
        <br/>
        <div className="alert alert-info">
          <strong>Usa este prefijo!</strong> http://www.grupo7.semanticweb.uniandes.edu.co/curso/articles/
        </div>
        
      </div>
    )
  }
}
