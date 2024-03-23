import React from "react";
import Box from '@mui/material/Box';

import Sidebar from "../dashboard/sidebar";
// import DashCard from "./dashcard";
// import DashTable from "./dashTable";



function Report(){
    return (
        <>
         
         
         <Box sx={{ display: 'flex' }}>
         
         <Sidebar/>
         
         <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
     <h1>hello report</h1>
      </Box>
      </Box>
      </>
      )
      }
      export default Report