import React, { Component } from 'react';
import Graph from "./graph"

class Viz extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className ="container-fluid">
                <div className = "row">
                    <div className = "col-sm-8">
                        <Graph/>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Viz;