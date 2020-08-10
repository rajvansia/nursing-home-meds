import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography, TableSortLabel, TablePagination } from '@material-ui/core';
import ShowChart from '@material-ui/icons/ShowChart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function createData(symbol, machine_cr, num_trades, hold_cr, protein) {
  return { symbol, machine_cr, num_trades, hold_cr, protein };
}

const rows = [
  createData('JPM', 159, 6.0, 24, 4.0),
  createData('UHS', 237, 9.0, 37, 4.3),
  createData('BYND', 262, 16.0, 24, 6.0),
  createData('T', 305, 3.7, 67, 4.3),
  createData('JHJ', 356, 16.0, 49, 3.9),
];

function Medlist(props) {
  const classes = useStyles();
  console.log(props.meds)
  if(!props.meds){
    return (
      <div class="header">
      <h1 >MIMI Medication Tracker</h1>
      </div>
    )
  }
  else{
  return (
    <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Medication</TableCell>
             <TableCell align="right">Dosage Frequency</TableCell>
             <TableCell align="right">Time Given</TableCell>
             <TableCell align="right">Completion Status</TableCell>
             <TableCell align="right">In Depth Analysis</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {props.meds.map((med) => (
             <TableRow key={med.resource.medicationCodeableConcept.text}>
               <TableCell component="th" scope="row">
                 {med.resource.medicationCodeableConcept.text}
               </TableCell>
               <TableCell align="right">test</TableCell>
               <TableCell align="right">test</TableCell>
                <TableCell align="right">test</TableCell>
               <TableCell align="right"><IconButton href={"analyze?name="} color='primary'>
                      <ShowChart/>
                    </IconButton></TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
  );
}
}
export default Medlist;
