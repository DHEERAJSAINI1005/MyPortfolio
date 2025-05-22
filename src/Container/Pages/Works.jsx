import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Works() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);
  return (
        <Box
        >
        <Grid container mt={4}>
            <Grid item xs={12} mt={12}>
                <Box 
                style={{ textAlign: "center", opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
                >
                <img width="100" height="100" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/50/external-Coming-Soon-miscellany-texts-and-badges-bearicons-outline-color-bearicons.png" alt="external-Coming-Soon-miscellany-texts-and-badges-bearicons-outline-color-bearicons"/>
                    <h1>Coming Soon........</h1>
                </Box>
            </Grid>
      </Grid>
        </Box>
  )
}

export default Works
