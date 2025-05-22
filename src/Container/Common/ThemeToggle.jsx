import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Layouts/GeneralLayout';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const lightTheme = {
  type: "light",
  backgroundColor: "#fff", // White background
  headingColor: "#1b5e20", // Dark green for headings
  subHeadingColor: "#3a473b", // Light green for subheadings (still good as is)
  textColor: "#333333", // Dark gray for body text (better contrast)
  activeColor: "#43a047", // Lighter green for active elements (buttons, links)
  hoverColor: "#388e3c", // Lighter green for hover state
  paragraphColor: '#a89f91', // Warm beige (slightly toned down)
  projectBackgroundColor : '#dfecdf'
};

const darkTheme = {
  type: "dark", // Dark theme flag
  backgroundColor: "#121212", // Very dark background color
  headingColor: "#72DA6F", // Lighter green for headings (for contrast on dark bg)
  subHeadingColor: "#81c784", // Softer green for subheadings
  textColor: "#e0e0e0", // Light gray text color for high contrast
  activeColor: "#66bb6a", // Bright green for active elements (buttons, links)
  hoverColor: "#81c784", // Medium green for hover state
  paragraphColor: "#b0bec5", // Soft grayish beige for paragraph text
  projectBackgroundColor: "#2e342e" // Soft grayish beige for paragraph text
};

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    localStorage.setItem('myTheme',JSON.stringify(theme.type === 'dark' ? lightTheme : darkTheme))
    setTheme(theme.type === 'dark' ? lightTheme : darkTheme);
  };

  return (
    <Box display="flex" style={{cursor:"pointer",color: theme.type === "light" ? "#000" : "#fff"}} onClick={handleToggle} alignItems="center" justifyContent="center" mt={2}  mr={3}>
      {theme.type === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}
    </Box>
  );
}
