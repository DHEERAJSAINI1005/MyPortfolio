import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Card, styled } from '@mui/material';
import { ThemeContext } from '../Layouts/GeneralLayout';
import Skills from '../Skills';
import signature from '../../Components/Images/signature.jpg'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  writingMode: 'vertical-lr', // Vertical by default
  textOrientation: 'mixed',
  fontWeight: 600,
  color: "#308d46",
  transform: 'rotate(180deg)', // Rotate the text upside down for vertical display

  // Change to horizontal on small screens
  [theme.breakpoints.down('sm')]: {
    writingMode: 'horizontal-tb', 
    transform: 'none', 
  },
}));

function About() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <Box 
      style={{ textAlign: "center", opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} 
      className="primary-color"  sx={{ py: 4 }}>
        <Grid item  xs={12} className={`page-heading ${animate ? 'animate' : ''}`}>
          <Typography  mb={6} color={theme.headingColor} variant="h4">
              ⎯ About Me
          </Typography>
          <Section color={theme.textColor}>
              <Typography variant="body1" paragraph>
                  Hello! I'm Dheeraj Kumar, a passionate software developer with a strong background in computer science. I hold a Master's degree in Computer Science (Software) and a Bachelor's degree in Information Technology. 
              </Typography>
              <Typography variant="body1" paragraph>
                  With a solid foundation in programming and software development, I thrive on turning complex challenges into elegant solutions. My experience includes working on various projects that enhance my skills in coding, problem-solving, and collaboration.
              </Typography>
              <Typography variant="body1" paragraph>
                  I am currently working as a software developer, where I continue to learn and grow in this dynamic field. I am excited about the potential of technology to shape the future and am always looking for opportunities to contribute and innovate.
              </Typography>
          </Section>
          <Box sx={{ textAlignLast: "end" }}>
              <img style={{ height: "150px",width:"250px" }} src={signature} />
          </Box>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={2} mx={3} display="flex" alignItems="center" px={7} justifyContent="flex-end">
          <VerticalText mr={4} variant="h4" gutterBottom color={theme.headingColor + '!important'}>
            ⎯ My Skills
          </VerticalText>
        </Grid>
        <Grid item xs={12} md={8} mx={3}>
          <Skills theme={theme}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
