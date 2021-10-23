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
    constructor(props) {
        super(props);
    
        this.state = {
          columnDefs: [
            {
              field: 'athlete',
              minWidth: 150,
            },
            {
              field: 'age',
              maxWidth: 90,
            },
            {
              field: 'country',
              minWidth: 150,
            },
            {
              field: 'year',
              maxWidth: 90,
            },
            {
              field: 'date',
              minWidth: 150,
            },
            {
              field: 'sport',
              minWidth: 150,
            },
            { field: 'gold' },
            { field: 'silver' },
            { field: 'bronze' },
            { field: 'total' },
          ],
          defaultColDef: {
            flex: 1,
            minWidth: 100,
          },
          rowData: [],
        };
      }
    //This returns the data that has been selected
      getSelectedRowData = () => {
        let selectedNodes = this.gridApi.getSelectedNodes();
        let selectedData = selectedNodes.map(node => node.data);
        //Change this alert to post a delete/edit request to the api
        alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
        return selectedData;
      };
    
      onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // Call the API and return the lists of tasks
        const httpRequest = new XMLHttpRequest();
        const updateData = data => {
          this.setState({ rowData: data });
        };
    
        httpRequest.open(
          'GET',
          'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
        );
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
          if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            updateData(JSON.parse(httpRequest.responseText));
          }
        };
      };
    
      render() {
        return (
          <div style={{ width: '95vw', height: '100vh' }}>
            <button 
              onClick={this.getSelectedRowData}
              style={{margin: 10}}
              >Get Selected Nodes</button>
            <div
              id="myGrid"
              style={{
                height: '100%',
                width: '100%',
              }}
              className="ag-theme-alpine"
            >
              <AgGridReact
                columnDefs={this.state.columnDefs}
                defaultColDef={this.state.defaultColDef}
                onGridReady={this.onGridReady}
                rowData={this.state.rowData}
                rowSelection="multiple"
              />
            </div>
          </div>
        );
      }
    }

export default mainGrid;