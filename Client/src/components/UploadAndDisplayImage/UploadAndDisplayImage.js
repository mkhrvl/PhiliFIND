import React, { useState } from "react";

// Dependencies for FoundForm
import { Button } from '@mui/material';

import './UploadAndDisplayImage.css'

const UploadAndDisplayImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className='upload-and-display-container'>    
            <div className='button-wrapper'>
                <Button
                    variant='contained'
                    component='label'
                    id='uploadButton'
                    sx={{ height: 30 }}
                >
                    Upload Image
                    <input
                        type="file"
                        name="myImage"
                        hidden
                        onChange={(event) => {
                            // console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }}
                    />
                </Button>
            </div>

            {selectedImage && (
                <div className='image-container'>
                    <img alt="not found" width={'100%'} src={URL.createObjectURL(selectedImage)} />
                    
                    <Button 
                        variant='contained'
                        id='removeButton'
                        sx={{ height: 30 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        Remove
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UploadAndDisplayImage;