import React, { Component } from "react";
import './BusquedaLibre.css';
import pos from 'pos';
import ArticuloTabla from "./TablasFrases/ArticuloTabla";
import AutorTabla from "./TablasFrases/AutorTabla";
import InstitucionTabla from "./TablasFrases/InstitucionTabla";
import PublisherTabla from "./TablasFrases/PublisherTabla";
import CiudadTabla from "./TablasFrases/CiudadTabla";
import JournalTabla from "./TablasFrases/JournalTabla";
import PaisTabla from "./TablasFrases/PaisTabla";
import TopicTabla from "./TablasFrases/TopicTabla";

//https://www.npmjs.com/package/pos

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mostrar: false, mensaje: "",
      estadoArticulos: [], estadoAutor: [],
      estadoCiudad: [], estadoConferencia: [],
      estadoInstitucion: [], estadoJournal: [],
      estadoPais: [], estadoPublisher: [], estadoTopic: []
    }

    this.inputOracion = React.createRef();
    this.buscarOracion = this.buscarOracion.bind(this);
    this.metodoArticulo = this.metodoArticulo.bind(this);
    this.metodoAutores = this.metodoAutores.bind(this);
    this.metodoCiudades = this.metodoCiudades.bind(this);
    this.metodoInstituciones = this.metodoInstituciones.bind(this);
    this.metodoJournals = this.metodoJournals.bind(this);
    this.metodoPaises = this.metodoPaises.bind(this);
    this.metodoPublishers = this.metodoPublishers.bind(this);
    this.metodoTopicos = this.metodoTopicos.bind(this);

  }

  async metodoArticulo(palabra) {
    let response = await fetch('/query/davidArticulo/' + palabra, {method: 'GET'})
    let data = await response.json();
    console.log(data);
    return data;
  }

  async metodoAutores(palabra) {
    let response = await fetch('/query/davidAutor/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoCiudades(palabra) {
    let response = await fetch('/query/davidCiudad/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoInstituciones(palabra) {
    let response = await fetch('/query/davidInstitucion/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoJournals(palabra) {
    let response = await fetch('/query/davidJournal/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoPaises(palabra) {
    let response = await fetch('/query/davidPais/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoPublishers(palabra) {
    let response = await fetch('/query/davidPublisher/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }

  async metodoTopicos(palabra) {
    let response = await fetch('/query/davidTopico/' + palabra, {method: 'GET'})
    let data = await response.json();
    return data;
  }


  buscarOracion() {

    const node = this.inputOracion.current;

    if (node.value !== "" && node.value !== this.state.mensaje) {

      this.setState({mostrar:false});
      var words = new pos.Lexer().lex(node.value);
      var tagger = new pos.Tagger();
      var taggedWords = tagger.tag(words);

      console.log(taggedWords);

      var respuestaArticulos = [];
      var respuestaAutores = [];
      var respuestaCiudades = [];
      var respuestaInstituciones = [];
      var respuestaJournals = [];
      var respuestaPaises = [];
      var respuestaPublishers = [];
      var respuestaTopicos = [];

      taggedWords.map((objeto,i) => {

        //NN NNP NNPS NNS VB VBD VBG VBN VBP VBZ RB RBR RBS JJ JJR JJS 
        if (objeto[1] === "NN" || objeto[1] === "NNP" || objeto[1] === "NNPS" || objeto[1] === "NNS") {

          //METODO ARTICULO METODO ARTICULO  METODO ARTICULO  METODO ARTICULO

          this.metodoArticulo(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.title != null)
            {
              tempo.push(x.title.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.volume != null)
            {
              tempo.push(x.volume.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.url != null)
            {
              tempo.push(x.url.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.year != null)
            {
              tempo.push(x.year.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.author != null)
            {
              tempo.push(x.author.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.city != null)
            {
              tempo.push(x.city.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.country != null)
            {
              tempo.push(x.country.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.conference != null)
            {
              tempo.push(x.conference.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.topic != null)
            {
              tempo.push(x.topic.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.publisher != null)
            {
              tempo.push(x.publisher.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaArticulos.push(tempo);
          }))

          //METODO AUTORES METODO AUTORES  METODO AUTORES  METODO AUTORES

          this.metodoAutores(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.coautor != null)
            {
              tempo.push(x.coautor.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaAutores.push(tempo);
          }))

          //METODO CIUDADES METODO CIUDADES  METODO CIUDADES  METODO CIUDADES

          this.metodoCiudades(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.pais != null)
            {
              tempo.push(x.pais.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaCiudades.push(tempo);
          }))

          //METODO INSTITUCIONES METODO INSTITUCIONES  METODO INSTITUCIONES  METODO INSTITUCIONES

          this.metodoInstituciones(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaInstituciones.push(tempo);
          }))

          //METODO JOURNAL METODO JOURNAL  METODO JOURNAL  METODO JOURNAL

          this.metodoJournals(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaJournals.push(tempo);
          }))

          //METODO PAIS METODO PAIS  METODO PAIS  METODO PAIS

          this.metodoPaises(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaPaises.push(tempo);
          }))

          //METODO PUBLISHER METODO PUBLISHER  METODO PUBLISHER  METODO PUBLISHER

          this.metodoPublishers(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            if(x.nombre != null)
            {
              tempo.push(x.nombre.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaPublishers.push(tempo);
          }))

          //METODO TOPICOS METODO TOPICOS  METODO TOPICOS  METODO TOPICOS

          this.metodoTopicos(objeto[0])
          .then(data => data.results.bindings.map((x) => {
            console.log("daf");
            var tempo = [];
            if(x.resource != null)
            {
              tempo.push(x.resource.value);
            }
            else
            {
              tempo.push("");
            }
            respuestaTopicos.push(tempo);
          })).then(() => {if(i === (taggedWords.length-1))
            {
              this.setState({
                mensaje: node.value, mostrar: true,
                estadoArticulos: respuestaArticulos, estadoAutor: respuestaAutores,
                estadoCiudad: respuestaCiudades,
                estadoInstitucion: respuestaInstituciones, estadoJournal: respuestaJournals,
                estadoPais: respuestaPaises, estadoPublisher: respuestaPublishers, estadoTopic: respuestaTopicos
              });
            }})
        }
      });  
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid" id="buscadorFrase">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">Buscador por frase</span>
            </div>
            <input type="text" ref={this.inputOracion} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={this.buscarOracion} type="button" id="button-addon2">Buscar</button>
            </div>
          </div>
        </div>

        {this.state.mostrar ?

          <div>
            <div className="row">
              <div className="col-sm">
                <ArticuloTabla elementos={this.state.estadoArticulos} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <AutorTabla elementos={this.state.estadoAutor} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <CiudadTabla elementos={this.state.estadoCiudad} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <InstitucionTabla elementos={this.state.estadoInstitucion} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <JournalTabla elementos={this.state.estadoJournal} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <PaisTabla elementos={this.state.estadoPais} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <PublisherTabla elementos={this.state.estadoPublisher} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <TopicTabla elementos={this.state.estadoTopic} />
              </div>
            </div>
          </div>

          : ''}
      </div>
    );
  }
}
export default App;