import React from 'react'
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar'
import Video from './Video'
import { FetchFromAPI } from "../utils/FetchFromAPI"


const Feed = () => {

    const [ selectedCategory , setselectedCategory ] = useState("New")

  useEffect(()=> {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory }`)
  },[selectedCategory]) 


  return (
    <Stack sx={{ background: "black", flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "140vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }, }} >

        <Sidebar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}

        />
        <Typography className="copywrite" variant="body2" sx={{ mt: 1.5, color: "black" }} >
          Copy Right By Usama
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#F31503" }}>  Videos  </span>
        </Typography>
        <Video video={[]} />
      </Box>
    </Stack>
  )
}

export default Feed