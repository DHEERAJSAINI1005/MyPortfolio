import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader, styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { ThemeContext } from '../Layouts/GeneralLayout';

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const CardStyled = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius:"10px",
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.01)', // Slightly enlarge the card on hover
    boxShadow: `0px 8px 20px rgba(0, 0, 0, 0.3)`, // More pronounced shadow on hover
    backgroundColor: theme.palette.action.hover, // Optional: change background color on hover
    cursor:"pointer"
  },
}));

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites using modern frameworks like React, Angular, and Vue.',
    icon: <CodeIcon />
  },
  {
    title: 'API Development',
    description: 'Creating robust and secure RESTful APIs to enable seamless integration and functionality for your applications.',
    icon: <BuildIcon />
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing cloud-based solutions for scalable and efficient application deployment and management.',
    icon: <CloudQueueIcon />
  },
  {
    title: 'System Integration',
    description: 'Integrating various systems and technologies to streamline processes and enhance operational efficiency.',
    icon: <DeviceHubIcon />
  },
];

function Services() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Trigger animation when the component mounts
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);
  return (
    <Container maxWidth="md" sx={{ py: 4 }}
    style={{ textAlign: "center", opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
    >
      <Typography color={theme.headingColor} variant="h4" component="h4" gutterBottom>
      Services
      </Typography>
      <Section>
        <Typography color={theme.textColor} variant="body1" paragraph>
          As a software developer, I offer a range of services to help you achieve your technological goals. My expertise spans various areas, ensuring that you get comprehensive solutions tailored to your needs.
        </Typography>
      </Section>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CardStyled>
              <CardHeader
                avatar={service.icon}
                title={service.title}
                sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
              />
              <CardContent
                sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
                >
                <Typography variant="body1"
                sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </CardStyled>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
