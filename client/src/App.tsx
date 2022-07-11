import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
    </Box>
  );
}

export default App;
