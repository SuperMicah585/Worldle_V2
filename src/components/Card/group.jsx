import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from './card';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '150%' }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card/>
        </Grid>
        <Grid item xs={3}>
          <Card1/>
        </Grid>
        <Grid item xs={3}>
          <Card2/>
        </Grid>
        <Grid item xs={3}>
          <Card3/>
        </Grid>
      </Grid>
    </Box>
  );
}
