import React, { Component } from 'react'

export default class Instancias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instancias: ['instancia 1', 'instancia2', 'instancia3'],
    };
  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
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
              <th scope="col">Instancia</th>
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
