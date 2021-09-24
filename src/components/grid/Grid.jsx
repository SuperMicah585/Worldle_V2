import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

   const rowData = [
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
       {Name: "Marshall", Phone_number: "360-921-2222", Task:'do dishes', Priority_level: '3', Status: 'Solved'},
   ];

   export default function RowAndColumnSpacing() {
   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Name"></AgGridColumn>
               <AgGridColumn field="Phone_number"></AgGridColumn>
               <AgGridColumn field="Task"></AgGridColumn>
               <AgGridColumn field="Priority_level"></AgGridColumn>
               <AgGridColumn field="Status"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};
