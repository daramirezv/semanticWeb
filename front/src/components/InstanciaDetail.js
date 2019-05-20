import React, { Component } from 'react'

export default class InstanciaDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Instancia: {this.props.instancia}</h3>
          <p>Información de la instancia</p>
        </div>
      </div>
    )
  }
}
