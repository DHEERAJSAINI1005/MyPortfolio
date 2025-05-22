import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css'

function Footer({theme}) {
  return (
    <Box 
      component="footer"
      className='main-footer' 
      sx={{
        py: 3,
        mx:2
      }}
    >
      <Grid container spacing={1} sx={{ mt: { xs: "100px", md:0 } }} justifyContent="space-between" alignItems="center">
        <Grid item xs={12}   sm={4} ml={1}>
          <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
             <IconButton
                href="https://www.facebook.com/tajinder.sohi.35"
                target="_blank"
                aria-label="Facebook"
                sx={{
                    color: theme.type === "dark" ? '#fff' : '#000',
                    '&:hover': {
                        color: '#1b5e20',
                        backgroundColor: 'white',
                    },
                }}
             >
                <FacebookIcon />

            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" 
                sx={{ color: theme.type == "dark" ? '#fff' : '#000',   '&:hover': {
                      color: '#1b5e20',
                      backgroundColor: 'white',
                  }}}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/_sohi_lucky/" target="_blank" aria-label="Instagram" 
                sx={{'&:hover': {
                    color:'#1b5e20',
                    backgroundColor: 'white',
                }, color: theme.type == "dark" ? '#fff' : '#000'}}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/tajinder-sohi-251817221/" target="_blank" aria-label="LinkedIn" 
                sx={{'&:hover': {
                    color: '#1b5e20',
                    backgroundColor: 'white',
                }, color: theme.type == "dark" ? '#fff' : '#000'}}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/Tajindersohi/" target="_blank" aria-label="GitHub" 
                sx={{'&:hover': {
                    color: '#1b5e20',
                    backgroundColor: 'white',
                }, color: theme.type == "dark" ? '#fff' : '#000'}}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box textAlign="center">
            <Typography fontSize={'15px !important'} variant="body2" sx={{pb:1}}>
              &copy; {new Date().getFullYear()}  All rights reserved.
            </Typography>
          </Box>
        </Grid>

        <Grid  fontSize={'15px !important'} item xs={12} sm={4} mr={1}>
          <Box textAlign={{ xs: 'center', sm: 'right' }}>
            <Typography fontSize={'15px !important'} variant="body2">
               Mohali, Punjab, India
            </Typography>
            <Typography fontSize={'15px !important'} variant="body2">
               sainidheeraj76@gmail.com 
            </Typography>
            <Typography fontSize={'15px !important'} variant="body2">
               +91-8607095982
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
