import React, { Component } from 'react'

export default class PropiedadDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      instancias: [],
    };
  }

  componentDidMount() {
    
    let encodedParam = encodeURIComponent(this.props.propiedad);
    let url = '/query/instanciasPropiedad/' + encodedParam;
    fetch(url, {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        instancias: queryResult,
      });
      


    })
    .catch((error) => console.log(error));
  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td align="left"><a onClick={this.props.onChange.bind(this, inst.sujeto.value)} href="#instanciaDetail">{inst.sujeto.value}</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Propiedad: {this.props.propiedad}</h3>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Instancia Sujeto</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInstancias()}
          </tbody>
        </table>
      </div>
    )
  }
}
