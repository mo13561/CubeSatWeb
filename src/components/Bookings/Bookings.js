import {ForumContainer, MainText, EmailBox, CommentBox, SubmitBox, NameBox, BookingsLogo, T1, MainBox, StyledDatePickerWrapper, TheBox, ITextField, IBox, IMobileDatePicker, IButton, Cont} from "./BookingsElements";
import React, { useState, makeStyles } from "react";
import "react-dates/initialize";
import { Link } from "react-router-dom";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "react-dates/lib/css/_datepicker.css";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const BookingsSection = () => {
  const [value, setValue] = React.useState(new Date('2016-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // const useStyles = makeStyles({
  //  textarea: {
  //     resize: "both"
  //  }
  // });

  return (
    <Cont>
    <IButton component={Link} to="/">
      <ArrowBackIosIcon />
    </IButton>
    <TheBox>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box
      component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
    </Box>
    <IBox
      spacing={4}
    >
      <ITextField
        required
        id="filled-required"
        label="Name"
        defaultValue=""
        variant="filled"
      />
      <ITextField
        required
        id="filled-required"
        label="Email"
        defaultValue=""
        variant="filled"
      />
      <IMobileDatePicker
          label="Projected Usage Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          variant="filled"
      />
      <ITextField
        required
        id="filled"
        label="Any other comments"
        defaultValue=""
        multiline
        resize="both"
        maxRows={5}
        variant="filled"
      />
    </IBox>
    </LocalizationProvider>
    </TheBox>
    </Cont>
  );
}; 

export default BookingsSection;
