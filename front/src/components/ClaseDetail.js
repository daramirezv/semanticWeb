import React, { Component } from 'react'

export default class ClaseDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      instancias: [],
    };

  }

  componentDidMount() {
    
    let encondedParam = encodeURIComponent(this.props.clase);
    let url = '/query/instanciasClase/' + encondedParam;
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
    if(this.state.instancias.length !== 0){
      return this.state.instancias.map((obj, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td align="left"><a onClick={this.props.onChange.bind(this, obj.instancia.value)} href="#instanciaDetail">{obj.instancia.value}</a></td>
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
          <h3>Clase: {this.props.clase}</h3>
          <p>Cantidad de instancias: {this.state.instancias.length}</p>
          <p>Instancias de la clase</p>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th align="left" scope="col">Instancia</th>
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
