import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.data.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    componentDidUpdate(){
        const data = this.props.data;
        console.log(data);
        if(data.length === 0){
            return;
        }
        d3.select("#" + this.props.svgId).empty();
        const width = 500;
        const height = 300;
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        const svg = d3.select("#" + this.props.svgId);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 5)
            .attr("fill", "steelblue")
            .call(drag(simulation));

        node.append("title")
            .text(d => d.id);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });
        function drag(){
            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
              }
              
              function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
              }
              
              function dragended(d) {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
              }
              
              return d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended);
        }

        node.on('click', datum => {
            console.log(datum.__proto__); // the datum for the clicked circle
            let data = datum.__proto__;
            this.props.changeAuthor(data.id, data.name, data.institution);
          });
    }
    render() {
        return (
            <div>
                <svg id={this.props.svgId} width="500" height="300">

                </svg>
            </div>
        );
    }
}

export default Graph;