import React, { Component } from 'react'

export default class Propiedades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propiedades: ['propiedad 1', 'propiedad 2', 'propiedad 3'],
    };
  }

  renderPropiedades() {
    return this.state.propiedades.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td>{inst}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
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
