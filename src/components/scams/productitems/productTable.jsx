import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein,serial) {
  return { name, calories, fat,serial,carbs,protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,'axr4eqs',23,23),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,'axr4eqs',23,23),
  createData('Eclair', 262, 16.0, 24, 6.0,'axr4eqs',23,23),
  createData('Cupcake', 305, 3.7, 67, 4.3,'axr4eqs',23,23),
  createData('Gingerbread', 356, 16.0, 49, 3.9,'axr4eqs',23,23),
  
];

export default function ProductTables() {
  return (
    <>
    <div className='items'>
    <h1>IMPORT ITEMS TABLE</h1>
    </div>
   
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize:'1.8rem'}}>NAME ITEMS</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>SERIAL NUMBER</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>QUANTITY</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>PRICE</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize:'1.4rem'}}>AMOUNT OF IMPORT</StyledTableCell>
            <StyledTableCell align="center" style={{fontSize:'1.4rem',backgroundColor:'#fdc800'}} colSpan={2}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.serial}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
         
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <div className='king'>
              <DeleteIcon className='iconx delete'/>
              <BorderColorIcon className='iconx update'/>
              </div>
              
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
   
    </>
    
  );
}