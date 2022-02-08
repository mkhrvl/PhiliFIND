import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import './FoundForm.css';

//Components Needed
import UploadAndDisplayImage from '../UploadAndDisplayImage/UploadAndDisplayImage';
import Maps from '../GoogleMap/map.js'

//MUI Styled Components
import { StyledTextField, StyledFormControl } from './StyledComponents.js'

// Dependencies for FoundForm
import { Container, Grid, TextField, Button, Box, InputLabel, MenuItem, FormControl, Select, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { breakpoints } from '@mui/system';

function FoundForm() {

    // Default value for variables
    const [values, setValues] = useState({
        itemFound: "",
        itemBrand: "",
        place: "",
        zipCode: "",
        name: "",
        color: "",
        email: "",
        primaryContact: "",
        secondaryContact: "",
        dateFound: new Date(),
        timeFound: new Date(),
        category: "",
        addInfo: ""
    })

    // Default values for text field error prop
    const [textFieldError, setTextFieldError] = useState(false)
    const [locationError, setLocationError] = useState(false)
    const [zipError, setZipError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const validEmailFormat = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const validPhoneNo = new RegExp('^[09][0-9""]{10,}$')

    // Handle the Submission to output through console
    const handleSubmit = (e) => { 
        e.preventDefault();
        // window.location.reload();

        // Handle error checking
        if (values.itemFound === "") {
            setTextFieldError(true);
            window.alert('error itemfound');
        }
        else if (!validEmailFormat.test(values.email)) {
            setEmailError(true);
            window.alert('error email');
        }
        else if (!validPhoneNo.test(values.primaryContact)){
            setPhoneError(true);
            window.alert('error phone no');
        }
        else if (values.place === '') {
            setLocationError(true);
            window.alert('error address');
        }
        else if (values.zipCode === '') {
            setZipError(true);
            window.alert('error zip');
        }
        else {

            //get data
            console.log(values)
            setZipError(false);
            setLocationError(false);
            setEmailError(false);
            setPhoneError(false);
            setTextFieldError(false);
        }
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
                                    id="itemFound"
                                    label="Item Found"
                                    variant="outlined"
                                    name='item-found'
                                    size='medium'
                                    fullWidth
                                    required
                                    error ={textFieldError}
                                    value={values.itemFound}
                                    onChange={(e) => setValues({ ...values, itemFound: e.target.value })}
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
                                        value={values.dateFound}
                                        onChange={(newValue) => {
                                            setValues({ ...values, dateFound: newValue.toString() });
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
                                        value={values.timeFound}
                                        onChange={(newTime) => { setValues({ ...values, timeFound: newTime.toString() }) }}
                                        renderInput={(params) => <StyledTextField {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            {/* End of TimePicker Field */}

                            {/* Item Brand/Breed Field*/}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="itemBrand"
                                    label="Brand/Breed"
                                    variant="outlined"
                                    name='item-brand'
                                    size='medium'
                                    fullWidth
                                    value={values.itemBrand}
                                    onChange={(e) => setValues({ ...values, itemBrand: e.target.value })}
                                    required
                                    error ={textFieldError}
                                />
                            </Grid>
                            {/* End of Item Brand/Breed Field */}

                            {/* Item Color Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="itemColor"
                                    label="Color"
                                    variant="outlined"
                                    name='item-color'
                                    size='medium'
                                    fullWidth
                                    onChange={(e) => setValues({ ...values, color: e.target.value })}
                                />
                            </Grid>
                            {/* End of Item Color Field */}

                            {/* Category Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledFormControl fullWidth>
                                    <InputLabel id="categ">Category</InputLabel>
                                    <Select
                                        labelId="category-id"
                                        id="category-id"
                                        value={values.category}
                                        label="Category"
                                        onChange={(event) => setValues({ ...values, category: event.target.value })}
                                    >
                                        <MenuItem value='Animal'>Animal/Pet</MenuItem>
                                        <MenuItem value='Clothing'>Clothing</MenuItem>
                                        <MenuItem value='Electronic gadgets'>Electronic gadgets</MenuItem>
                                        <MenuItem value='Personal accessories'>Personal accessories</MenuItem>
                                    </Select>
                                </StyledFormControl>
                            </Grid>
                            {/* End of Category Field */}

                            {/* Image Attachment Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <UploadAndDisplayImage />
                            </Grid>
                            {/* End of Image Attachment Field */}

                            {/* Additional Information Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="addInfo"
                                    label="Additional Information"
                                    variant="outlined"
                                    name='add-info'
                                    size='medium'
                                    fullWidth
                                    multiline
                                    rows={3}
                                    maxRows={4}
                                    onChange={(e) => setValues({ ...values, addInfo: e.target.value })}
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
                                {/* <Maps address={values.place} zip={values.zipCode}/> */}
                                {/* </div> */}
                            </Grid>
                            {/* End of Google Map API */}

                            <Grid container direction='column' rowSpacing={2} xs={3}>
                                {/* Name of Place/Location Field */}
                                <Grid item={true} xs="auto">
                                    <StyledTextField
                                        id="location"
                                        label="Name of Place/Location"
                                        variant="outlined"
                                        name='location'
                                        size='medium'
                                        fullWidth
                                        required
                                        value={values.place}
                                        required
                                        error ={locationError}
                                        onChange={(e) => setValues({ ...values, place: e.target.value })}
                                    />
                                </Grid>
                                {/* End of Name of Place/Location Field */}

                                {/* Zip Code */}
                                <Grid item={true} xs="auto">
                                    <StyledTextField
                                        id="zip-code"
                                        label="Zip Code"
                                        variant="outlined"
                                        name='zip-code'
                                        size='medium'
                                        fullWidth
                                        value={values.zipCode}
                                        onChange={(e) => setValues({ ...values, zipCode: e.target.value })}
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

                            {/* Contact Name Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="name-person"
                                    label="Name"
                                    variant="outlined"
                                    name='name-person'
                                    size='medium'
                                    fullWidth
                                    required
                                    error ={textFieldError}
                                    value={values.name}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                                />
                            </Grid>
                            {/* End of Contact Name Field */}

                            {/* Email Field*/}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    name='email'
                                    size='medium'
                                    fullWidth
                                    error = {emailError}
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                />
                            </Grid>
                            {/* End of Email Field */}

                            {/* Primary Contact Field */}
                            <Grid item={true} xs={12} sm={6}>
                                <StyledTextField
                                    id="primary-contact"
                                    label="Primary contact number"
                                    variant="outlined"
                                    name='primary-contact'
                                    size='medium'
                                    fullWidth
                                    value={values.primaryContact}
                                    onChange={(e) => setValues({ ...values, primaryContact: e.target.value })}
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
                                    value={values.secondaryContact}
                                    onChange={(e) => setValues({ ...values, secondaryContact: e.target.value })}
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