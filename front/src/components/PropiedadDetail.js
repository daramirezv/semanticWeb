import React, { Component } from 'react'

export default class PropiedadDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      instancias: ['instancia 1', 'instancia2', 'instancia3'],
      instanciaBuscada: '',
    };
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
        <div className="container">
          <h3>Propiedad: {this.props.propiedad}</h3>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sujeto</th>
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
