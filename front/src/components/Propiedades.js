import React, { Component } from 'react'

export default class Propiedades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propiedades: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      propiedadBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriEntidad = this.state.instanciaBuscada;
    console.log(uriEntidad);
    alert('Buscar ' + uriEntidad);
  }

  componentDidMount() {

    fetch('/query/propiedades', {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        propiedades: queryResult,
      })


    })
    .catch((error) => console.log(error));
  }

  renderPropiedades() {
    return this.state.propiedades.map((obj, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, obj.propiedad.value)} href="#claseDetail">{obj.propiedad.value}</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="searchDiv">
          <form id="buscadorPropiedades" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" id="inputBuscadorPropiedades" placeholder="Buscar Propiedad" onChange={this.handleSearchChange}/>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Propiedad</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPropiedades()}
          </tbody>
        </table>
      </div>
    )
  }
}
