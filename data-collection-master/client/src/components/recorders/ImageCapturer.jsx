import { Button } from '@mui/material'
import React, { useState, useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: 'user',
}

const mimeType = "image/jpeg";

const ImageCapturer = ({
    // setImageBlob, setIsImage
    index, imageBlobs, setImageBlobs
}) => {
    const [imageBlob, setImageBlob] = useState(null);
    const [isImage, setIsImage] = useState(false);
    const [picture, setPicture] = useState('')
    const webcamRef = useRef(null)
    const capture = useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        console.log("Image:", pictureSrc)
        setPicture(pictureSrc)
        const imageBlob = new Blob([pictureSrc], { type: mimeType });
        //creates a playable URL from the blob file.
        console.log("imageBlob", imageBlob);
        setImageBlob(imageBlob)
        let data = [...imageBlobs];
        data[index] = imageBlob;
        setImageBlobs(data);
        console.log(imageBlobs);
        setIsImage(true)
    })
    return (
        <div>
            {/* <h2>Image</h2> */}
            <div>
                {picture === '' ? (
                    <Webcam
                        audio={false}
                        height={400}
                        ref={webcamRef}
                        width={400}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={picture} />
                )}
            </div>
            <div>
                {picture !== '' ? (
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            setPicture('')
                            setImageBlob(null)
                            let data = [...imageBlobs];
                            data[index] = null;
                            setImageBlobs(data);
                            console.log(imageBlobs);
                            setIsImage(false)
                        }}

                    >
                        Retake
                    </Button>
                ) : (
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            capture()
                        }}
                        className="btn btn-danger"
                    >
                        Capture
                    </Button>
                )}
            </div>
        </div>
    )
}
export default ImageCapturer