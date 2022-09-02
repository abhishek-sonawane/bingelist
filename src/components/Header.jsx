import React from 'react'
import { Box } from '@chakra-ui/react'
import {NavLink}  from 'react-router-dom'



function Header() {
  return (
    <div>
        <nav>
           <Box p={7} >
            <NavLink className='navLink' to='/' > Home </NavLink>
            <NavLink className='navLink' to='/watched' > watched </NavLink>
            <NavLink className='navLink' to='/watchlist' > Watchlist </NavLink>
           </Box>
        </nav>
    </div>
  )
}

export default Header