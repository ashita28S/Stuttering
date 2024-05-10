import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { Typography, Box, Button, List, ListItem, ListItemText, Link } from '@mui/material'

import './People.css'


const People = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Box sx={{
                width: { xs: '650px', md: '900px', lg: '1150px' },

            }}>
                <Box>

                    <Box sx={{ ml: { xs: '60px', md: '250px', lg: '475px' }, mt: '10px', display: 'flex' }} >
                        <Typography variant='h2' style={{ 'textAlign': 'left', 'fontWeight': '600', 'fontFamily': "'Quicksand', sans-serif" }} sx={{ fontSize: { xs: "25px", md: "28px", lg: '30px' } }}>Data Collection Platform</Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                            <Button sx={{ ml: { md: '150px', lg: '200px' }, mb: "20px", color: "black" }} onClick={(() => { navigate("/") })}>Home</Button>
                            <Button sx={{ mb: "20px", color: "black" }} onClick={(() => { navigate("/about") })}>About</Button>
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
                                    <Button sx={{ color: "black" }} onClick={(() => { navigate("/about") })}>About</Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Box style={{ 'marginBottom': '10px', 'marginTop': '10px' }}>
                        <Box style={{ 'paddingBottom': '10px' }}
                            sx={{ ml: { xs: '5px', md: '40px', lg: '40px' }, width: { xs: '500px', md: '600px', lg: '1100px' } }}>
                            <Typography variant='h4' style={{ 'textAlign': 'left', 'fontWeight': '600', 'fontFamily': "'Quicksand', sans-serif", "textDecoration": "underline" }} sx={{ fontSize: { xs: "25px", md: "28px", lg: '30px' } }}>Investigators</Typography>
                            <Box>
                                <List>
                                    <ListItem style={{ display: "block", marginTop: "20px" }}>
                                        <Link className='listItem' fontWeight="bold" href="https://neerajww.github.io/">Neeraj Kumar Sharma</Link>
                                        <Box style={{ marginLeft: "20px" }}>
                                            <Typography>Faculty, IIT Guwahati</Typography>
                                            {/* <Typography>Mehta Family School of DSAI,</Typography> */}
                                            {/* <Typography>Indian Institute of Technology Guwahati</Typography> */}
                                            <Link href='mailto:neerajs@iitg.ac.in'>neerajs@iitg.ac.in</Link>
                                        </Box>
                                    </ListItem>
                                    <ListItem style={{ display: "block", marginTop: "20px" }}>
                                        <Typography className='listItem' fontWeight="bold">Saksham Kumar</Typography>
                                        <Box style={{ marginLeft: "20px" }}>
                                            <Typography>Final year BTech, ECE</Typography>
                                            {/* <Typography>Electronics and Communication Engineering,</Typography> */}
                                            <Typography>IIT Guwahati</Typography>
                                            <Link href='mailto:k.saksham@iitg.ac.in'>k.saksham@iitg.ac.in</Link>
                                        </Box></ListItem>
                                    <ListItem style={{ display: "block", marginTop: "20px" }}>
                                        <Typography className='listItem' fontWeight="bold">Samarth Umapati Hegde</Typography>
                                        <Box style={{ marginLeft: "20px" }}>
                                            <Typography>Final year BTech, ECE</Typography>
                                            {/* <Typography>Electronics and Communication Engineering,</Typography> */}
                                            <Typography>IIT Guwahati</Typography>
                                            <Link href='mailto:h.samarth@iitg.ac.in'>h.samarth@iitg.ac.in</Link>
                                        </Box></ListItem>
                                </List>
                                <hr />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )

}

export default People