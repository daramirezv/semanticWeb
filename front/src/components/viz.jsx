import React, { Component } from 'react';
import Graph from "./graph"
import VizDetail from './vizDetail';

class Viz extends Component {

    constructor(props){
        super(props);
        this.state = {
            authorUri: "",
            authorName : "",
            authorInstitution : ""
        }
        this.changeAuthor = this.changeAuthor.bind(this);
    }

    changeAuthor(pAuthorUri, pAuthorName, pAuthorInstitution){
        this.setState({
            authorUri: pAuthorUri,
            authorName: pAuthorName,
            authorInstitution: pAuthorInstitution
        });
    }

    render() {
        console.log(this.props)
        return (
            <div className ="container-fluid">
                <div className = "row">
                    <div className = "col-sm-12">
                        <h3>Co-authory graph</h3>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-sm-8">
                        <Graph changeAuthor={this.changeAuthor} svgId="coauthory"/>
                    </div>
                    <div className="col-sm-4">
                        <VizDetail authorUri={this.state.authorUri} authorName={this.state.authorName} authorInstitution={this.state.authorInstitution}/>
                    </div>
                </div>
                <div className="row">
                    <div className ="col-sm-12">
                        <h3>Citation Graph</h3>
                    </div>
                </div>
                <div className="row">
                    <div className = "col-sm-8">
                        <Graph svgId="citation"/>
                    </div>
                    <div className="col-sm-4">
                        <VizDetail authorUri={this.state.authorUri} authorName={this.state.authorName} authorInstitution={this.state.authorInstitution}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Viz;