import React, { Component } from 'react';

class DataParser extends Component{
    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    componentWillMount(){
        var csvFilePath = require("./datasets/shorttable.csv");
        var Papa = require("../node_modules/papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            delimiter: ',',
            skipEmptyLines: true,
            complete: this.updateData
        });
    }

    updateData(result){
        const data = result.data;
        this.setState({data: data});
    }

    render(){
        return(
            <div>Data</div>
        )
    }
}

export default DataParser;
