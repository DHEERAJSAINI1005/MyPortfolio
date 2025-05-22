import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.scss'; // Ensure the image is properly referenced in the SCSS file
import { ThemeContext } from '../Layouts/GeneralLayout';
// import lightBgImage from '../../Components/Images/myPic.jpg'
import yourProfileImage from '../../Components/Images/myPic1.jpg'
import BarChartIcon from '@mui/icons-material/BarChart';
const textArray = ['Dheeraj Kumar', "Full Stack Developer", "React Developer"];

function Home() {
    const { theme } = useContext(ThemeContext);
    const [animate, setAnimate] = useState(false);
    const [bubbleShow, setBubbleShow] = useState(true);
	const [currentText, setCurrentText] = useState('');
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        // Trigger animation when the component mounts
        setTimeout(() => setAnimate(true), 100);
    }, []);
    
    const downloadFile = () => {
        window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
      }

    const onMouseOverCaptureHandler = () => {
        setBubbleShow(false);
    };
	useEffect(() => {
		const delay = isDeleting ? 5 : 50;
	
		const typeEffect = () => {
		const fullText = textArray[textIndex];
	
		if (!isDeleting && charIndex < fullText.length) {
			setCurrentText(fullText.substring(0, charIndex + 1));
			setCharIndex(charIndex + 1);
		} else if (isDeleting && charIndex > 0) {
			setCurrentText(fullText.substring(0, charIndex - 1));
			setCharIndex(charIndex - 1);
		} else if (!isDeleting && charIndex === fullText.length) {
			setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
		} else if (isDeleting && charIndex === 0) {
			setIsDeleting(false);
			setTextIndex((textIndex + 1) % textArray.length);
		}
		};
	
		const timer = setTimeout(typeEffect, delay);
		return () => clearTimeout(timer); // Cleanup timeout on unmount
	}, [charIndex, isDeleting, textArray, textIndex]);

    return (
        <Box alignItems="center" className="home-container">
            <Box height={600} className=""
                style={{color:theme.textColor ,opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
            >
                <Grid container pt={2}>
                    <Grid mt={10} item xs={12} md={7}>
                        <Box className={`page-heading ${animate ? 'animate' : ''}`}>
                            <h4 style={{color:theme.type == "light" ? "#748383" : "#fff", fontSize:"20px",fontWeight:"700"}}>⎯⎯⎯  HELLO</h4>
                            <Typography fontFamily={'sans-serif'} variant='h1' sx={{color:theme.type == "light" ? "#405151" : "#fff",fontSize:{xs:'26px !important', sm:'48px !important'}}}>I❜M <span style={{color:theme.headingColor}}>{currentText}</span></Typography>
                            <Box className="my-5">
                                <Typography fontFamily={'sans-serif'} variant='p' style={{color: theme.textColor}}>A Full-Stack Developer crafting seamless web experiences,</Typography>
                                <Typography fontFamily={'sans-serif'} variant='p' style={{color: theme.textColor}}>bridging the gap between robust backends and dynamic frontends.</Typography>
                            </Box>

                            <Box
                                component="img"
                                src={yourProfileImage} // Replace with your first image path
                                alt="Dheeraj Kumar 1"
                                sx={{
                                    display:{sm:'block',md:'none', xs:'block'},
                                    position: 'absolute',
                                    width: '70%',
                                    cursor:'pointer',
                                    width: '100px', // Set a fixed size
                                    height: '100px', // Same as width
                                    borderRadius: '70%',
                                    transition: 'transform 0.3s ease',
                                    left: {xs:'70%',sm:'85%'},
                                    bottom:'100%',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />
                            <Box my={5} textAlign={'left'}>
                                <Grid container spacing={2} justifyContent="left">
                                    <Grid item xs={12} sm={12} md={4} textAlign={'center'}> {/* Change sm={6} to sm={4} */}
                                        <a style={{ width: '80%' }} href="/Pdf/TajinderResume.pdf" className="project-button text-center" download>
                                            Download CV
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} textAlign={'center'}> {/* Change sm={6} to sm={4} */}
                                        <Link to="/projects" className="project-button text-center" style={{ width: '80%' }}>
                                            <span className='pr-2'>Projects</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="2 0 18 18">
                                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                            </svg>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="d-flex gap-6 p-4">
                                <Box className="f-width mr-5" sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" fontWeight={'bold'} sx={{ color: theme.headingColor, mb: 1 }}>
                                    <BarChartIcon/>
                                    {/* <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/project.png" alt="project"/> */}
                                    <b className='ml-2'>12+</b>
                                    </Typography>
                                    <Typography variant="body2" >
                                        Successful Endeavors
                                    </Typography>
                                </Box>
                                <Box className="f-width" sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" fontWeight={'bold'} sx={{ color: theme.headingColor, mb: 1 }}>
                                    <BarChartIcon/>
                                    {/* <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/project.png" alt="project"/> */}
                                    <b className='ml-2'>10+</b>
                                    </Typography>
                                    <Typography variant="body2" >
                                        Completed Projects
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        
		
                    </Grid>
                    {/* <Grid mt={12} item xs={12} md={5.5} className='image-container'>
                    <Box
                            alt=""
                            className="project-image"
                            sx={{
                                width: '100%',
                                height: { xs: '300px', md: '400px' }, // Responsive height
                                backgroundImage: theme.type === "light" ? `url(${lightBgImage})` : "",
                                backgroundSize: 'cover', // Cover for a more dynamic look
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                            }}
                        />
                    </Grid> */}
                        <Grid ml={2}  textAlign={'-webkit-right'} mt={12} item xs={10} md={4} className='image-ctainer'
                            sx={{display:{xs:'none',sm:'none', md:'block'}}}
                        >
                            <Box sx={{ position: 'relative', height: '300px', width: '300px' }}>
                                <Box
                                    onMouseOverCapture={onMouseOverCaptureHandler}
                                    onMouseLeave ={()=>{setBubbleShow(true)}}
                                    component="img"
                                    src={yourProfileImage} // Replace with your first image path
                                    alt="Dheeraj Kumar 1"
                                    sx={{
                                        position: 'absolute',
                                        width: '70%',
                                        cursor:'pointer',
                                        width: '300px', // Set a fixed size
                                        height: '300px', // Same as width
                                        borderRadius: '70%',
                                        transition: 'transform 0.3s ease',
                                        left: '0%',
                                        top: '0%',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                />
                                {bubbleShow && <>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent
                                        left: '50%',
                                        bottom: '70%',
                                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent
                                        right: '50%',
                                        top: '60%',
                                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '25px',
                                        height: '25px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent
                                        left: '75%',
                                        top: '10%',
                                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                                
                                </>}
                            </Box>
                        </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Home;
