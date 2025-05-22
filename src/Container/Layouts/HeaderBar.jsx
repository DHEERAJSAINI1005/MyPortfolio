import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useLocation, Link } from 'react-router-dom';
import ThemeToggle from '../Common/ThemeToggle';
import './style.css';

const drawerWidth = 200;
const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  // { title: "Works", link: "/works" },
  { title: "Projects", link: "/projects" },
  // { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

function HeaderBar({ theme, setTheme, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const currentRoute = location.pathname; // Current route path
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ backgroundColor: theme.backgroundColor,color:theme.textColor, justifyContent: 'center', display: 'block',textAlign: 'center'  }} >
      <List>
        <ListItem sx={{justifyContent:'center', padding:'5px'}}>
            <svg width="100" height="150" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f7b733"/>
                  <stop offset="100%" stop-color="#fc4a1a"/>
                </linearGradient>
              </defs>
              <path fill="url(#goldGradient)" d="M150 40 
                C145 70, 135 60, 130 45 
                C125 60, 115 70, 110 45 
                C105 60, 95 70, 90 40 
                C110 25, 190 25, 210 40 
                C205 70, 195 60, 190 45 
                C185 60, 175 70, 170 45 
                C165 60, 155 70, 150 40 Z"/>
                
              <circle cx="150" cy="150" r="70" fill="url(#goldGradient)" />
              
              <text x="150" y="165" text-anchor="middle" fill="black" font-size="70" font-family="Times New Roman" font-weight="bold">D</text>
              
              <path fill="url(#goldGradient)" d="M60 230 
                Q80 200, 120 215 
                Q90 195, 95 185 
                Q120 190, 140 210 
                Q160 190, 185 185 
                Q190 195, 160 215 
                Q200 200, 240 230 
                Q180 220, 150 240 
                Q120 220, 60 230 Z"/>
            </svg>

        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding sx={{justifyContent:'center'}}>
            <ListItemButton sx={{ justifyContent: 'center', padding:'5px' }}>
              <Link
                  className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                  to={item.link}
                  key={item.title}
                  style={{
                      color: currentRoute === item.link ? theme.activeColor : theme.textColor,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.hoverColor)} // Set hover color dynamically
                  onMouseLeave={(e) => (e.currentTarget.style.color = currentRoute === item.link ? theme.activeColor : theme.textColor)} // Reset color
              >
                  {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar className="header-container" sx={{px:2, background: theme.type == 'light' ? 'linear-gradient(377deg, #ffffff, #86f7ff36)' : 'linear-gradient(23deg, black, #ffffff94)', backgroundColor: theme.backgroundColor, justifyContent: 'center', display: 'block' }}>
        <Toolbar sx={{ justifyContent: { md: "center" }}}>
        <Box
            sx={{ 
              position: 'absolute', 
              display :{xs:'none',sm:'none',md:'block'},
              left: { xs: '25%', sm:'-70px', md: '-40px' },  // Adjust positioning based on screen size
            }}>
          <Link
            className={`nav-buttons ${currentRoute === '/' ? 'active' : ''}`}
            to={"/"}
            style={{ color: theme.textColor }}
          >
            {/* <b style={{fontSize:"40px"}}>Tajinder</b> */}
                <svg width="100" height="150" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f7b733"/>
                  <stop offset="100%" stop-color="#fc4a1a"/>
                </linearGradient>
              </defs>
              <path fill="url(#goldGradient)" d="M150 40 
                C145 70, 135 60, 130 45 
                C125 60, 115 70, 110 45 
                C105 60, 95 70, 90 40 
                C110 25, 190 25, 210 40 
                C205 70, 195 60, 190 45 
                C185 60, 175 70, 170 45 
                C165 60, 155 70, 150 40 Z"/>
                
              <circle cx="150" cy="150" r="70" fill="url(#goldGradient)" />
              
              <text x="150" y="165" text-anchor="middle" fill="black" font-size="70" font-family="Times New Roman" font-weight="bold">D</text>
              
              <path fill="url(#goldGradient)" d="M60 230 
                Q80 200, 120 215 
                Q90 195, 95 185 
                Q120 190, 140 210 
                Q160 190, 185 185 
                Q190 195, 160 215 
                Q200 200, 240 230 
                Q180 220, 150 240 
                Q120 220, 60 230 Z"/>
            </svg>
            </Link>
        </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:theme.textColor}}
          >
            <MenuIcon color={theme.textColor+'!important'}/>
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, px: 4 }}>
            {navItems.map((item) => (
              <Link
                className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                to={item.link}
                key={item.title}
                style={{color:currentRoute === item.link ? theme.headingColor :theme.textColor}}
              >
                <b>{item.title}</b>
              </Link>
            ))}
          </Box>
          <Box sx={{ position: 'absolute', right: 0 }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {width: drawerWidth,backgroundColor:theme.backgroundColor},
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

HeaderBar.propTypes = {
  window: PropTypes.func,
};

export default HeaderBar;
