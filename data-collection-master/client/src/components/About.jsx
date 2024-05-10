import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { Typography, Box, Button } from '@mui/material'

import './About.css'

const About = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Box sx={{ width: { xs: '650px', md: '900px', lg: '1150px' } }}>
                <Box>

                    <Box sx={{ ml: { xs: '60px', md: '250px', lg: '475px' }, mt: '10px', display: 'flex' }} >
                        <Typography variant='h2' style={{ 'textAlign': 'left', 'fontWeight': '600', 'fontFamily': "'Quicksand', sans-serif" }} sx={{ fontSize: { xs: "25px", md: "28px", lg: '30px' } }}>Data Collection Platform</Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                            <Button sx={{ ml: { md: '150px', lg: '200px' }, mb: "20px", color: "black" }} onClick={(() => { navigate("/") })}>Home</Button>
                            <Button sx={{ mb: "20px", color: "black" }} onClick={(() => { navigate("/people") })}>People</Button>
                        </Box>

                        <Box className="hamburger-menu" sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
                            <Button className={"hamburger-icon"} onClick={() => { setIsOpen(!isOpen) }}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </Button>
                            {isOpen && (
                                <Box className="menu">
                                    <Button sx={{ color: "black" }} onClick={(() => { navigate("/") })}>Home</Button>
                                    <Button sx={{ color: "black" }} onClick={(() => { navigate("/people") })}>People</Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Box style={{ 'marginBottom': '10px', 'marginTop': '10px' }}>
                        <Box style={{ 'paddingBottom': '10px' }}
                            sx={{ ml: { xs: '5px', md: '40px', lg: '40px' }, width: { xs: '350px', md: '375px', lg: '1100px' } }}>
                            <Typography variant='h4' style={{ 'textAlign': 'left', 'fontWeight': '600', 'fontFamily': "'Quicksand', sans-serif", "textDecoration": "underline" }} sx={{ fontSize: { xs: "25px", md: "28px", lg: '30px' } }}>About</Typography>
                            <Box>
                                <Typography align="left" style={{ marginTop: "15px" }}>
                                    This project focuses on understanding the linguistic diversity by collecting data associated with spoken language in academic campuses in India. We have the following two goals.

                                </Typography>

                                <Box style={{ marginLeft: "10px" }}>
                                    {/* <Typography align="left">
                                        The form has 3 stages:
                                    </Typography> */}

                                    {/* <Box style={{ marginLeft: "10px" }}> */}
                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Scientific Exploration: </Typography>
                                        In this, we aim to explore the dependency between an individual’s spoken accent and attributes such as the different cities/towns they have stayed in, age, and gender
                                    </Typography></Box>

                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Inference: </Typography>
                                        Duration you have spent in different states and districts of India.</Typography></Box>


                                    {/* </Box> */}
                                </Box>
                                <Typography align="left" style={{ marginTop: "15px" }}>
                                    The collected data includes the following.


                                </Typography>
                                <Box style={{ marginLeft: "10px" }}>
                                    {/* <Typography align="left">
                                        The form has 3 stages:
                                    </Typography> */}

                                    {/* <Box style={{ marginLeft: "10px" }}> */}
                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Metadata: </Typography>
                                        Gender and age</Typography></Box>

                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Domicile History: </Typography>
                                        Duration you have spent in different states and districts of India.</Typography></Box>

                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Languages: </Typography>
                                        Languages you can speak and the proficiency level.</Typography></Box>

                                    <Box style={{ display: "flex" }}><Typography align="left"><Typography component="span" fontWeight="bold">Audio: </Typography>
                                        Spoken audio recordings corresponding to certain written sentences.</Typography></Box>
                                    {/* </Box> */}
                                </Box>
                                <Typography align="left" style={{ marginTop: "15px" }}>
                                    No personally identifiable information is collected, and the data collection respects the privacy of the contributors. The data records are anonymized during storage itself.

                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr />
                </Box>
            </Box>
        </div>
    )
}

export default About