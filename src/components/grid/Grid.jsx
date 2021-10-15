import React, { Component } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

    const rowData = [
        {Task: "Toyota", Worker: "Celica", start_time: 3500, priority: 'high'},
        {Task: "Ford", Worker: "Mondeo", start_time: 32000, priority: 'med'},
        {Task: "Porsche", Worker: "Boxter", start_time: 72000, priority: 'low'}
    ];

    const rowClassRules = {
        'rag-green': 'data.priority = low',
        'rag-yellow': 'data.priority = med',
        'rag-red': 'data.priority = high',
    };

 


class mainGrid extends Component {
    




    render() {
      return (
        <div className="ag-theme-alpine" style={{height: '100%', width: '70%'}}>
        <AgGridReact
            rowSelection = 'multiple'
            rowData={rowData}>
            <AgGridColumn field="Task" rowDrag={true} checkboxSelection={true}></AgGridColumn>
            <AgGridColumn field="Worker" sortable={true}></AgGridColumn>
            <AgGridColumn field="start_time"></AgGridColumn>
            <AgGridColumn field="Priority"></AgGridColumn>
            <AgGridColumn field="Complete Time"></AgGridColumn>
        </AgGridReact>
    </div>
    );
}
}

export default mainGrid;