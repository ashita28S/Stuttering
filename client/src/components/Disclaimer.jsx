import React from 'react'
import { Box, Typography } from '@mui/material'

const Disclaimer = () => {
    return (
        <div> <Box style={{ 'backgroundColor': '#dedede', 'borderRadius': '10px', 'paddingBottom': '10px', 'paddingTop': '10px' }}
            sx={{ ml: { xs: '25px', md: '400px', lg: '400px' }, mt: { xs: '10px', md: '50px', lg: '80px' }, width: { xs: '350px', md: '375px', lg: '500px' }, height: { xs: '225px', md: '200px', lg: '150px' } }}>

            <Typography style={{ 'color': 'black', 'fontSize': '15px', 'fontWeight': '300', margin: '10px' }} align='left'>
                The data collection procedure respects the privacy of the contributors. No personally identifiable information is collected. Additionally, the data is anonymized during storage.
                <br />
                <br />
                By clicking on the "I agree" button, you provide consent for use of the collected data for research and development purposes.

            </Typography>
        </Box></div>
    )
}

export default Disclaimer