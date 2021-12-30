import {TheBox, ITextField, IBox, IMobileDatePicker, IButton, Cont, SubButton} from "./BookingsElements";
import React, { useState, makeStyles } from "react";
import "react-dates/initialize";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "react-dates/lib/css/_datepicker.css";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    green: {
      main: '#01665c',
      contrastText: '#01665c',
    }
  },
 typography: {
    fontFamily: [
      'Shippori Antique B1',
      'sans-serif',
    ].join(','),
  },
});

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
    <ThemeProvider theme={theme}>
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
      <Typography variant="h3">booking submissions</Typography>
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
      <Button
        color="green"
        variant="outlined"
      >SUBMIT</Button>
    </IBox>
    </LocalizationProvider>
    </TheBox>
    </Cont>
    </ThemeProvider>
  );
}; 

export default BookingsSection;
