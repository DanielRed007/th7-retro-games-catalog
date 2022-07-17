import React from 'react';
import Box from '@mui/material/Box';

export default function Header(){
  return (
    <Box
      sx={{
        width: "100%",
        height: "7vh",
        backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    ></Box>
  )
}
