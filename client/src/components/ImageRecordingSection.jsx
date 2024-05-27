import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Recorder from './recorders/Recorder'; // Adjust the import based on your Recorder component location

const ImageRecordingSection = ({ imageSrc, caption }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recording, setRecording] = useState(null);

    const handleStartRecording = () => {
        setIsRecording(true);
        // Logic to start recording
    };

    const handleStopRecording = (recordedBlob) => {
        setIsRecording(false);
        setRecording(recordedBlob);
        // Logic to stop recording and save the blob
    };

    return (
        <Box sx={{ mt: 2, p: 2, backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <img src={imageSrc} alt="Recording Prompt" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>{caption}</Typography>
            <Button variant="contained" color="primary" onClick={handleStartRecording} disabled={isRecording}>
                {isRecording ? 'Recording...' : 'Start Recording'}
            </Button>
            {isRecording && <Button variant="contained" color="secondary" onClick={handleStopRecording}>Stop Recording</Button>}
            {recording && <Typography variant="body2" sx={{ mt: 2 }}>Recording saved.</Typography>}
        </Box>
    );
};

export default ImageRecordingSection;
