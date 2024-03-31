import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

export default function OrderUser() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        amount: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
          const response = await fetch('https://masterkraft-bn.onrender.com/API/order');
          if (!response.ok) {
              throw new Error('Failed to fetch form data');
          }
          const formDataFromApi = await response.json();
          setFormData(formDataFromApi);
      } catch (error) {
          console.error('Error fetching form data:', error);
      }
  };

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async () => {
      try {
        const token = localStorage.getItem("token")
          const response = await fetch('https://masterkraft-bn.onrender.com/API/order', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "auth-token":token
              },
              body: JSON.stringify(formData)
          });

          if (!response.ok) {
              throw new Error(response.data.error.message);
          }

          // Optionally, you can clear the form data or perform other actions after successful submission
          setFormData({
              firstName: '',
              lastName: '',
              email: '',
              amount: ''
          });

          alert('Order submitted successfully');
      } catch (error) {
        alert(error.message)
          console.error('Error submitting order:', error);
      }
  };
    
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                />
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start">RWF</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
                <Button onClick={handleSubmit}>Order Now</Button>
            </div>

            <div>
                {/* Additional content */}
            </div>
        </Box>
    );
}
