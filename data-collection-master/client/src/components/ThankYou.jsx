import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import React from 'react'

const ThankYou = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Typography variant='h1' style={{ 'textAlign': 'center', 'paddingTop': '100px', 'fontSize': '32px' }}>Thank You!</Typography>

            <Button onClick={(() => { navigate("/") })} style={{ 'textTransform': 'none' }}>Take me back to the project page</Button>
        </div>

    )
}

export default ThankYou