import React from 'react'
import {useState , useEffect} from "react"
import {Box ,  Stack , Typography} from "@mui/material"
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx: "column" , md: "row" , backgroundColor: "black"} } }>
        <Box  sx={ { height: {sx: "auto" , md: "92vh"  ,} , borderRight: "1px solid #3d3d3d" , px: {sx: 0 , md: 2}  ,}} >

           <Sidebar />
         <Typography className="copywrite" variant="body2" sx={{ mt: 1.5 , color: "#fff" }} >
          Copy Write yess
         </Typography>
        </Box>


    </Stack>
  )
}

export default Feed