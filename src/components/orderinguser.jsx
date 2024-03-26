import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';



export default function OrderUser() {



 

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
   
       
      <div>
        <TextField
          label="FirstName"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
         
        />
      <TextField
          label="LastName"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
         
        />
       <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
         
        />
       
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">RWF</InputAdornment>}
            label="Amount"
            value='300'
          />
        </FormControl>
        <Button>Order Now</Button>
      </div>
      
      <div>
   
       
   
   
      </div>
    </Box>
  );
}
