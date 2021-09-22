import React from 'react';
import Paper from '@mui/material/Paper';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"40rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <Paper>
    <input
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Add a Task + priority level(i.e do the dishs 3)"}
     onEnter={(e) => setKeyword(e.target.value)}
    />
    </Paper>
  );
}

export default SearchBar
