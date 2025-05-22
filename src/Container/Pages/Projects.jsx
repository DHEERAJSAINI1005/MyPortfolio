import { Box, Grid, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import './style.scss'; // Ensure to import your CSS file for styles
import { ThemeContext } from '../Layouts/GeneralLayout';

function Projects() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);

  // Project Data
   const projects = [
  {
    title: "WeAreAppointments",
    description: "I contributed to the development of this advanced appointment management system using React.js and Laravel. I focused on enhancing functionalities that enable users to schedule and manage appointments with ease.",
    keyContributions: [
      { title: "Feature Development", description: "Worked on implementing key features that enhance user interaction and appointment scheduling." },
      { title: "Performance Improvements", description: "Optimized application performance to ensure fast and responsive user experiences." },
      { title: "Collaboration and Testing", description: "Collaborated with team members to test new functionalities and ensure high-quality standards." }
    ],
    projectLink: "https://www.weareappointments.com"
  },
  {
  title: "Gobbler AI",
  description: "Gobbler AI is an AI-powered platform that transforms text input into dynamic video content. Users can input scripts or prompts, and the system automatically generates videos using advanced rendering and synthesis technologies.",
  keyContributions: [
    { title: "Text-to-Video Interface", description: "Developed an intuitive React interface allowing users to input text and preview video generation in real time." },
    { title: "AI Integration", description: "Integrated backend AI services to process text and generate corresponding video content efficiently." },
    { title: "User Experience Optimization", description: "Enhanced the UI/UX for smooth video generation flow, including real-time feedback and progress indicators." }
  ],
  projectLink: "https://www.gobbler.ai"
  },
  {
    title: "Asegumed",
    description: "Asegumed is a platform designed to facilitate the submission of accidental injury cases to ProntoCaseCash. It connects users with funding services quickly and efficiently.",
    keyContributions: [
      { title: "Form Submission Flow", description: "Built a streamlined React interface for submitting accident cases easily." },
      { title: "Backend Integration", description: "Connected Laravel APIs to manage case submissions and user data securely." }
    ],
    projectLink: "https://www.asegumed.com"
  },
  {
    title: "DayOneDevelopment",
    description: "DayOneDevelopment is a client-focused website designed to showcase their products and services. It provides insights into their offerings, features, and business solutions, helping customers understand their value.",
    keyContributions: [
      { title: "Full Stack Development", description: "Developed both frontend and backend to present client offerings effectively." },
      { title: "Custom UI Features", description: "Implemented custom sections using React and Laravel Blade for dynamic content." }
    ],
    projectLink: "https://www.dayonedevelopment.com"
  },
  {
    title: "LegalLeadspro",
    description: "LegalLeadspro is a lead generation platform that connects individuals involved in physical therapy-related injuries with legal assistance services.",
    keyContributions: [
      { title: "Full Stack Development", description: "Built lead intake forms and managed secure data handling with Laravel and React." },
      { title: "Integration", description: "Integrated lead verification and filtering for client-side usage." }
    ],
    projectLink: "https://www.legalleadspro.com"
  },
  {
    title: "AskProAdviser",
    description: "AskProAdviser is a React-based application that facilitates seamless appointment scheduling for users seeking advisory services.",
    keyContributions: [
      { title: "Appointment Scheduling", description: "Developed key React components for appointment handling." },
      { title: "Responsive Design", description: "Optimized the layout for devices of all sizes to improve usability." }
    ],
    projectLink: "https://www.askproadvisor.com"
  },
  {
    title: "Lead-Calendar",
    description: "Lead-Calendar is a React app built for streamlined appointment scheduling and lead tracking.",
    keyContributions: [
      { title: "UI Components", description: "Created reusable components for calendar views and scheduling workflows." },
      { title: "Responsive Design", description: "Implemented adaptive layouts for mobile and desktop users." }
    ],
    projectLink: null
  },
  {
    title: "ProntoCaseCash",
    description: "I contributed to ProntoCaseCash, an innovative insurance platform that simplifies the application process for clients. My role involved enhancing the user experience and optimizing the application flow, making it easier for users to secure the coverage they need.",
    keyContributions: [
      { title: "User Experience Design", description: "Refined the application interface to ensure a seamless and engaging user experience." },
      { title: "Process Optimization", description: "Streamlined the workflow for insurance applications, reducing processing time and improving client satisfaction." },
      { title: "Feedback Integration", description: "Incorporated user feedback to enhance features and address client needs effectively." }
    ],
    projectLink: "https://www.prontocasecash.com"
  },
  {
    title: "ClearSource",
    description: "ClearSource is a job listing platform that displays dynamic listings and company information through an API-powered frontend.",
    keyContributions: [
      { title: "Client-Side Routing", description: "Implemented efficient navigation using React Router." },
      { title: "API Integration", description: "Fetched and rendered job listings dynamically with backend APIs." }
    ],
    projectLink: null
  }
];

  return (
    <Box sx={{ padding: 4, backgroundColor: theme.background, minHeight: '100vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontWeight: 800, color: theme.headingColor }} variant="h4" gutterBottom>
            ⎯ Projects
          </Typography>
        </Grid>

        {projects.map((project, index) => (
          <Grid key={index} item xs={12} width="100%" className={`page-heading ${animate ? 'animate' : ''}`}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column', // The default column layout for the text content
                padding: 2,
                borderRadius: '10px',
                backgroundColor: theme.projectBackgroundColor,
                cursor: 'pointer',
                boxShadow: `0px 0px 0px 8px rgba(27, 94, 32, 0.16)`,
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: `0px 0px 0px 10px rgba(27, 94, 32, 0.16)`,
                }
              }}
            >
              <Typography variant="h6" component="h2" color={theme.subHeadingColor} sx={{ marginBottom: 1 }}>
                {`${index + 1}. ${project.title}`}
              </Typography>
              <Typography variant="body2" color={theme.paragraphColor} paragraph>
                {project.description}
              </Typography>

              {/* Row Layout for Key Contributions and Link */}
              <Box sx={{ display: {xs:'block' ,md:'flex'}, alignItems: 'center', marginTop: 2 , fontSize:'10px'}}>
                {/* Key Contributions Heading */}
                <Typography variant="h6" component="h3" color={theme.subHeadingColor} sx={{ marginRight: 2 }}>
                  Key Contributions:
                </Typography>
                {project.projectLink &&
                  <Typography variant="h6" component="h3" color={theme.subHeadingColor}>
                    <Link href={project.projectLink} target="_blank" sx={{ color: theme.linkColor, textDecoration: 'none' }}>
                      Visit Project
                    </Link>
                  </Typography>
                }
              </Box>

              {/* Key Contributions List */}
              <List sx={{ marginTop: 2 }}>
                {project.keyContributions.map((contribution, idx) => (
                  <ListItem sx={{ color: theme.textColor }} key={idx}>
                    <ListItemText
                      primary={<strong>{contribution.title}</strong>}
                      secondary={<span style={{ color: theme.textColor }}>{contribution.description}</span>}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
