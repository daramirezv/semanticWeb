import React, { Component } from 'react';
import Graph from "./graph"
import VizDetail from './vizDetail';

class Viz extends Component {

    constructor(props){
        super(props);
        this.state = {
            coAuthorUri: "",
            coAuthorName : "",
            coAuthorInstitution : "",
            citationAuthorUri: "",
            citationAuthorName : "",
            citationAuthorInstitution : "",
            citationData: [],
            coauthoryData: []
            
        }
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeAuthor2 = this.changeAuthor2.bind(this);
    }

    changeAuthor(pAuthorUri, pAuthorName, pAuthorInstitution){
        this.setState({
            coAuthorUri: pAuthorUri,
            coAuthorName: pAuthorName,
            coAuthorInstitution: pAuthorInstitution
        });
    }

    changeAuthor2(pAuthorUri, pAuthorName, pAuthorInstitution){
        this.setState({
            citationAuthorUri: pAuthorUri,
            citationAuthorName: pAuthorName,
            citationAuthorInstitution: pAuthorInstitution
        });
    }

    componentDidMount(){
        let pCitationData = [];
        let pCoAuthoryData = [];
        fetch('/query/citationGraph', {
            method: 'GET',
          }).then((response) => {
            return response.json();
          }).then((json) => {
              pCitationData = json
          })
          .then(()=>{
              fetch('/query/coauthoryGraph', {
                  method: 'GET',
              }).then((response) =>{
                  return response.json();
              }).then((json)=>{
                  pCoAuthoryData = json
                  this.setState({
                      citationData: pCitationData,
                      coauthoryData: pCoAuthoryData
                  });
              });
          })
          .catch((error) => console.log(error));
    }

    render() {
        console.log(this.state);
        return (
            <div className ="container-fluid">
                <div className = "row">
                    <div className = "col-sm-12">
                        <h3>Co-authory graph</h3>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-sm-8">
                        <Graph changeAuthor={this.changeAuthor} svgId="coauthory" data={this.state.coauthoryData}/>
                    </div>
                    <div className="col-sm-4">
                        <VizDetail authorUri={this.state.coAuthorUri} authorName={this.state.coAuthorName} authorInstitution={this.state.coAuthorInstitution}/>
                    </div>
                </div>
                <div className="row">
                    <div className ="col-sm-12">
                        <h3>Citation Graph</h3>
                    </div>
                </div>
                <div className="row">
                    <div className = "col-sm-8">
                        <Graph svgId="citation" changeAuthor={this.changeAuthor2} data={this.state.citationData}/>
                    </div>
                    <div className="col-sm-4">
                        <VizDetail authorUri={this.state.citationAuthorUri} authorName={this.state.citationAuthorName} authorInstitution={this.state.citationAuthorInstitution}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Viz;