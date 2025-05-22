import * as React from 'react';
import Box from '@mui/material/Box';

export default function LoadingIndicator({message = "Loading..."}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
        width: '100vw',  // Full width of the viewport
      }}
    >
      <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">{message}</span>
      </div>
    </Box>
  );
}
