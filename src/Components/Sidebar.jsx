import React from 'react'
import {Stack , Button} from "@mui/material"
import {categories} from "../utils/Constants"

const Sidebar = () => {
  return (
    <Stack  dicretion=" row" sx={{overflowy: "auto" , height: {sx: "auto" , md: "90%" }, flexDirection: { md: "column"} }}>
{  categories.map((categorie) =>(
    <Button>
    <span> {categorie.name }</span>
    <span>  {categorie.icon} </span>
    </Button> 
)
    
 ) }

    </Stack>
  )
}

export default Sidebar