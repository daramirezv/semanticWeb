import React, { Component } from 'react'

export default class Clases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clases: ['clase 1', 'clase 2', 'clase 3'],
    };
  }

  renderClases() {
    return this.state.clases.map((inst, i) =>
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
