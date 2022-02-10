import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import './FoundForm.css';

//Components Needed
import UploadAndDisplayImage from '../UploadAndDisplayImage/UploadAndDisplayImage';
import Maps from '../GoogleMap/map.js'

//MUI Styled Components
import { StyledTextField, StyledFormControl } from './StyledComponents.js';

//Backend
import axios from 'axios'

// Dependencies for FoundForm
import { Container, Grid, TextField, Button, Box, InputLabel, MenuItem, FormControl, Select, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { breakpoints } from '@mui/system';

function FoundForm () {


    const API_PATH = 'http'
    // Default value for variables
    const [values, setValues] = useState({
        fd_item: "",
        fd_brand: "",
        fd_place: "",
        fd_zip: "",
        fd_name: "",
        fd_color: "",
        fd_email: "",
        fd_pcontact: "",
        fd_scontact: "",
        fd_date: new Date(),
        fd_time: new Date(),
        fd_category: "",
        fd_addinfo: ""
    })

    // Default values for text field error prop
    const [textFieldError, setTextFieldError] = useState(false)
    const [locationError, setLocationError] = useState(false)
    const [zipError, setZipError] = useState(false)
    const [fd_emailError, setfd_emailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const validfd_emailFormat = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const validPhoneNo = new RegExp('^[09][0-9""]{10,}$')

    // Handle the Submission to output through console
    const handleSubmit = (e) => { 
        e.preventDefault();
        // window.location.reload();

        // Handle error checking
        if (values.fd_item === "") {
            setTextFieldError(true);
            window.alert('error fd_item');
        }
        else if (!validfd_emailFormat.test(values.fd_email)) {
            setfd_emailError(true);
            window.alert('error fd_email');
        }
        else if (!validPhoneNo.test(values.fd_pcontact)){
            setPhoneError(true);
            window.alert('error phone no');
        }
        else if (values.fd_place === '') {
            setLocationError(true);
            window.alert('error address');
        }
        else if (values.fd_zip === '') {
            setZipError(true);
            window.alert('error zip');
        }
        else {

            //get data
            console.log(values)
            setZipError(false);
            setLocationError(false);
            setfd_emailError(false);
            setPhoneError(false);
            setTextFieldError(false);
        }

        // const obj = {
        //     fd_item: values.fd_item,
        //     fd_place: values.fd_place,
        //     fd_zip: values.fd_zip, 
        //     fd_name: values.fd_name,
        //     fd_color: values.fd_color, 
        //     fd_email: values.fd_email,
        //     fd_pcontact: values.fd_pcontact,
        //     fd_scontact: values.fd_scontact,
        //     fd_date: values.fd_date,
        //     fd_time: values.fd_time,
        //     fd_catergory: values.fd_category,
        //     fd_addinfo: values.fd_addinfo ,
        //     fd_brand: values.fd_brand,
        // }

        axios.post('http://localhost/ReactPHPCRUD/insert.php', values)
        .then(res => console.log(res.data));
    }


    return (
        <div className="found-form">
            
            <Form onSubmit={handleSubmit}>

                {/* Item Found Information Section*/}
                <div className="wrapper">

                    {/* Container for Grid */}
                    <Container>

                        <div className="section-header"><div className='section-header-wrapper'>Found Item Information</div></div><br />

                        {/* Controller for grid spacing */}
                        <Grid container rowSpacing={2} columnSpacing={2}>
                            <Grid item={true} xs={12} sm={12} md={6}>
                                {/* Item Found Field */}
                                <StyledTextField
                                    id="fd_item"
                                    label="Item Found"
                                    variant="outlined"
                                    name='item-found'
                                    size='medium'
                                    fullWidth
                                    required
                                    error ={textFieldError}
                                    value={values.fd_item}
                                    onChange={(e) => setValues({ ...values, fd_item: e.target.value })}
                                />
                            </Grid>
                            {/* End of Item Found Field */}

                            {/* DatePicker Field */}
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        disableFuture
                                        openTo='year'
                                        views={['year', 'month', 'day']}
                                        label="Date Found"
                                        value={values.fd_date}
                                        onChange={(newValue) => {
                                            setValues({ ...values, fd_date: newValue.toString() });
                                        }}
                                        renderInput={(params) => <StyledTextField {...params} helperText={null} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            {/* End of DatePicker Field */}

                            {/* TimePicker Field */}
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Time Found"
                                        value={values.fd_time}
                                        onChange={(newTime) => { setValues({ ...values, fd_time: newTime.toString() }) }}
                                        renderInput={(params) => <StyledTextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            {/* End of TimePicker Field */}

                            {/* Item Brand/Breed Field*/}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="fd_brand"
                                    label="Brand/Breed"
                                    variant="outlined"
                                    name='item-brand'
                                    size='medium'
                                    fullWidth
                                    value={values.fd_brand}
                                    onChange={(e) => setValues({ ...values, fd_brand: e.target.value })}
                                    required
                                    error ={textFieldError}
                                />
                            </Grid>
                            {/* End of Item Brand/Breed Field */}

                            {/* Item fd_color Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="fd_color"
                                    label="Color"
                                    variant="outlined"
                                    name='item-color'
                                    size='medium'
                                    fullWidth
                                    onChange={(e) => setValues({ ...values, fd_color: e.target.value })}
                                />
                            </Grid>
                            {/* End of Item fd_color Field */}

                            {/* fd_category Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledFormControl fullWidth>
                                    <InputLabel id="categ">Category</InputLabel>
                                    <Select
                                        labelId="fd_category-id"
                                        id="fd_category-id"
                                        value={values.fd_category}
                                        label="Category"
                                        onChange={(event) => setValues({ ...values, fd_category: event.target.value })}
                                    >
                                        <MenuItem value='Animal'>Animal/Pet</MenuItem>
                                        <MenuItem value='Clothing'>Clothing</MenuItem>
                                        <MenuItem value='Electronic gadgets'>Electronic gadgets</MenuItem>
                                        <MenuItem value='Personal accessories'>Personal accessories</MenuItem>
                                    </Select>
                                </StyledFormControl>
                            </Grid>
                            {/* End of fd_category Field */}

                            {/* Image Attachment Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <UploadAndDisplayImage />
                            </Grid>
                            {/* End of Image Attachment Field */}

                            {/* Additional Information Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="fd_addinfo"
                                    label="Additional Information"
                                    variant="outlined"
                                    name='add-info'
                                    size='medium'
                                    fullWidth
                                    multiline
                                    rows={3}
                                    maxRows={4}
                                    onChange={(e) => setValues({ ...values, fd_addinfo: e.target.value })}
                                />
                            </Grid>
                            {/* End of Additional Information Field */}
                        </Grid>
                    </Container>
                </div>
                {/* End of Item Found Information Section */}

                {/* Item Location Section */}
                <div className="wrapper">

                    <Container>

                        <br /><div className="section-header"><div className='section-header-wrapper'>Item Location</div></div><br /><br />

                        <Grid container rowSpacing={2} direction='row'>

                            {/* Google Map API */}
                            <Grid item={true} xs={9}>
                                {/* <div className="google-map"> */}
                                {/* <Maps address={values.fd_place} zip={values.fd_zip}/> */}
                                {/* </div> */}
                            </Grid>
                            {/* End of Google Map API */}

                            <Grid container direction='column' rowSpacing={2} xs={3}>
                                {/* fd_name of fd_place/Location Field */}
                                <Grid item={true} xs="auto">
                                    <StyledTextField
                                        id="location"
                                        label="Name of Place/Location"
                                        variant="outlined"
                                        name='location'
                                        size='medium'
                                        fullWidth
                                        required
                                        value={values.fd_place}
                                        required
                                        error ={locationError}
                                        onChange={(e) => setValues({ ...values, fd_place: e.target.value })}
                                    />
                                </Grid>
                                {/* End of fd_name of fd_place/Location Field */}

                                {/* Zip Code */}
                                <Grid item={true} xs="auto">
                                    <StyledTextField
                                        id="zip-code"
                                        label="Zip Code"
                                        variant="outlined"
                                        name='zip-code'
                                        size='medium'
                                        fullWidth
                                        value={values.fd_zip}
                                        onChange={(e) => setValues({ ...values, fd_zip: e.target.value })}
                                        required
                                        error ={zipError}
                                    />
                                </Grid>
                                {/* End of Zip Code */}
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                {/* End of Item Location Section */}

                {/* Contact Information Section */}
                <div className="wrapper">

                    <Container>

                        <br /><div className='section-header'><div className='section-header-wrapper'>Contact Information</div></div><br />

                        <Grid container rowSpacing={2} columnSpacing={2}>

                            {/* Contact fd_name Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="fd_name-person"
                                    label="Name"
                                    variant="outlined"
                                    name='fd_name-person'
                                    size='medium'
                                    fullWidth
                                    required
                                    error ={textFieldError}
                                    value={values.fd_name}
                                    onChange={(e) => setValues({ ...values, fd_name: e.target.value })}
                                />
                            </Grid>
                            {/* End of Contact fd_name Field */}

                            {/* fd_email Field*/}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="fd_email"
                                    label="Email"
                                    variant="outlined"
                                    name='fd_email'
                                    size='medium'
                                    fullWidth
                                    error = {fd_emailError}
                                    value={values.fd_email}
                                    onChange={(e) => setValues({ ...values, fd_email: e.target.value })}
                                />
                            </Grid>
                            {/* End of fd_email Field */}

                            {/* Primary Contact Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="primary-contact"
                                    label="Primary contact number"
                                    variant="outlined"
                                    name='primary-contact'
                                    size='medium'
                                    fullWidth
                                    value={values.fd_pcontact}
                                    onChange={(e) => setValues({ ...values, fd_pcontact: e.target.value })}
                                    required
                                    error = {phoneError}
                                />
                            </Grid>
                            {/* End of Primary Contact Field */}

                            {/* Secondary Contact Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    error = {phoneError}
                                    id="secondary-contact"
                                    label="Secondary contact number"
                                    variant="outlined"
                                    name='primary-contact'
                                    size='medium'
                                    fullWidth
                                    value={values.fd_scontact}
                                    onChange={(e) => setValues({ ...values, fd_scontact: e.target.value })}
                                />
                            </Grid>
                            {/* End of Secondary Contact Field */}
                        </Grid>

                        <br />
                        <div className='button-wrapper'>
                            <Button
                                type="submit"
                                id="postButton"
                                onClick={handleSubmit}
                                sx={{ 
                                    width: {
                                        xs: '100%',
                                        sm: 280,
                                    }, 
                                    height: 55 }}>
                                Post Report
                            </Button>
                        </div>

                        <br /><br />
                    </Container>
                </div>
                {/* End of Contact Information Section */}
            </Form>

        </div>
    );
}

export default FoundForm;