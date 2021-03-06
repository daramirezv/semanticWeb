import React, { Component } from "react";
import '../BusquedaLibre.css';

class AutorTabla extends Component {

    constructor(props) {
        super(props);
        this.state = { mostrar: true }
        this.generarTabla = this.generarTabla.bind(this);
        this.ocultarTabla = this.ocultarTabla.bind(this);
        this.myRef = React.createRef();
    }

    ocultarTabla() {
        if (this.state.mostrar) {
            const node = this.myRef.current;
            node.innerHTML = "Ver tabla";
            this.setState({ mostrar: false });
        }
        else {
            const node = this.myRef.current;
            node.innerHTML = "Ocultar tabla";
            this.setState({ mostrar: true });
        }
    }

    generarTabla() {
        let articulos = this.props.elementos;

        return articulos.map((elemento,i) => {
            return (
                <tr key={i}>
                    <td>{elemento[0]}</td>
                    <td>{elemento[1]}</td>
                    <td>{elemento[2]}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <h3 className="infoInicial">Autores Encontrados</h3>
                <button type="button" ref={this.myRef} onClick={this.ocultarTabla} className="btn btn-primary botonTabla">Ocultar Tabla</button>
                {this.state.mostrar ?
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Resource</th>
                                <th scope="col">Coautor</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generarTabla()}
                        </tbody>
                    </table> : ''}
            </div>
        );
    }
}
export default AutorTabla;