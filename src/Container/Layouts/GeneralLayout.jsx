import React, { createContext, useEffect, useState } from 'react';
import whiteBgImage from '../../Components/Images/whiteBlueBg.jpg'; // Ensure the correct path to your image
import blackBgImage from '../../Components/Images/blackBgImage.jpg'; // Ensure the correct path to your image
import { Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderBar from './HeaderBar';
import Footer from './Footer';
import './style.css';

// Create the ThemeContext
export const ThemeContext = createContext();

function GeneralLayout() {
  const [theme, setTheme] = useState({
    type: "light",
    backgroundColor: "#fff", // White background
    headingColor: "#1b5e20", // Dark green for headings
    subHeadingColor: "#81c3a473b784", // Light green for subheadings (still good as is)
    textColor: "#333333", // Dark gray for body text (better contrast)
    activeColor: "#43a047", // Lighter green for active elements (buttons, links)
    hoverColor: "#388e3c", // Lighter green for hover state
    paragraphColor: '#a89f91', // Warm beige (slightly toned down)
    projectBackgroundColor : '#dfecdf'
  });
  
  
  const location = useLocation();

  useEffect(() => {
    const mytheme = localStorage.getItem('myTheme');
    if(mytheme){
      setTheme(JSON.parse(mytheme));
    }else{
      setTheme({
        type: "light",
        backgroundColor: "#fff",
        headingColor: "#1b5e20",
        subHeadingColor: "#1b5e20",
        textColor: "#1612129e",
        // textColor: "#777676",
        activeColor:"#308d46",
        hoverColor:"#308d46"
      });
      localStorage.setItem('myTheme',JSON.stringify(theme))
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box
        className="main-body"
        style={{
          backgroundColor: theme.backgroundColor,
          backgroundImage: theme.type === "light" ? `url(${whiteBgImage})` : `url(${blackBgImage})`, 
          backgroundSize: 'cover', // Ensures image covers the entire background
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents background from repeating
          minHeight: '100vh', // Ensures the background covers the full height
        }}
      >
        {/* Header with the same background */}
        <HeaderBar theme={theme} setTheme={setTheme} />

        <Grid container spacing={8}>
          <Grid item mt={5} xs={12}>
            <Box className="main-body" sx={{px:{xs:2,md:7},mb: 12 ,pt: 5 }}>
              <Outlet /> {/* Child routes can access both theme and setTheme */}
            </Box>
          </Grid>

        </Grid>
          {/* Footer with the same background */}
          <Grid item className="primary-color" color={theme.textColor} xs={12}>
            <Footer theme={theme} setTheme={setTheme}/>
          </Grid>
      </Box>
    </ThemeContext.Provider>
  );
}

export default GeneralLayout;
