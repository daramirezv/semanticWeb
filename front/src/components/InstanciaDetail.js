import React, { Component } from 'react'

export default class InstanciaDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoInstancia : [],
    }

  }

  componentDidMount() {
    
    let encondedParam = encodeURIComponent(this.props.instancia);
    let url = '/query/infoInstancia/' + encondedParam;
    fetch(url, {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        infoInstancia: queryResult,
      });
      


    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderInfoInstancia() {
    if(this.state.infoInstancia.length !== 0){
      return this.state.infoInstancia.map((obj, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td align="left">{obj.propiedad.value}</td>
        <td align="left">{obj.objeto.value}</td>
      </tr>
      );
    } else {
      return;
    }
    
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Instancia: {this.props.instancia}</h3>
          <p>Información de la instancia</p>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th align="left" scope="col">Propiedad</th>
              <th align="left" scope="col">Objeto</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInfoInstancia()}
          </tbody>
        </table>
      </div>
    )
  }
}
