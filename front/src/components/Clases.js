import React, { Component } from 'react'

export default class Clases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clases: [],
      claseBuscada: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      claseBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriClase = this.state.claseBuscada;
    console.log(uriClase);
    alert('Buscar ' + uriClase);
  }

  componentDidMount() {

    fetch('/query/clases', {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        clases: queryResult,
      })


    })
    .catch((error) => console.log(error));
  }

  renderClases() {
    console.log(this.state.clases)
    if(this.state.clases.length !== 0){
      return this.state.clases.map((obj, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, obj.clase.value)} href="#claseDetail">{obj.clase.value}</a></td>
      </tr>
      );
    } else {
      return;
    }
    
  }

  render() {
    return (
      <div>
        <div className="searchDiv">
          <form id="buscadorClases" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" id="inputBuscadorClases" placeholder="Buscar Clase" onChange={this.handleSearchChange}/>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Clase</th>
            </tr>
          </thead>
          <tbody>
            {this.renderClases()}
          </tbody>
        </table>
      </div>
    )
  }
}
