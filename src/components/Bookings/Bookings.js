import {TheBox, ITextField, IBox, IMobileDatePicker, IButton, Cont} from "./BookingsElements";
import React, { useReducer } from "react";
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
import * as Realm from "realm-web";

function validateEmail (email) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === "") return;
  validated =  !regexp.test(email);
}
let validated = false;

// const url = "https://data.mongodb-api.com/app/data-ocize/endpoint/data/beta/endpoint/data/beta/action/insertOne";
// const uri = "mongodb+srv://mo13562:1Freetouse@cluster0.lc14s.mongodb.net/Polaris?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const doSubmit = async formInput => {
  const app = new Realm.App({ id: "cubesatweb-ycdlh" });
  // console.log(formInput);
  // Create an anonymous credential
  const credentials = Realm.Credentials.anonymous();
  // try {
  //   // Authenticate the user
  //   const user = await app.logIn(credentials);
  //   return user
  //   console.log("logged in");
  // } catch(err) {
  //   console.error("Failed to log in", err);
  // }
  // const user = 
  await app.logIn(credentials);
  // console.log(user);
  const mongodb = app.currentUser.mongoClient("mongodb-atlas");
  // console.log(mongodb);
  const bookings = mongodb.db("Polaris").collection("Bookings");
  // console.log(bookings);
  // const result = 
  await bookings.insertOne(formInput);
  // console.log(result);
  // console.log(formInput);
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#01665c',
      darker: '#01665c',
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

theme.typography.h3 = {
  fontSize: 'clamp(2.1rem, -2.0000rem + 17.0000vw, 3rem)',
  fontFamily: [
    'Shippori Antique B1',
    'sans-serif',
  ].join(','),
};

// const defaultValues = {
//   Native: "",
//   TextField: "",
//   Select: "",
//   ReactSelect: { value: "vanilla", label: "Vanilla" },
//   Checkbox: false,
//   switch: false,
//   RadioGroup: "",
//   numberFormat: 123456789,
//   downShift: "apple"
// };

const BookingsSection = () => {
  const [dateValue, setDateValue] = React.useState(new Date('2017-04-05T21:11:54'));
  // const {reset} = useForm(defaultValues);
  // const [emailValue, setEmailValue] = useState('');
  // const [nameValue, setNameValue] = useState('');
  // const [commentValue, setCommentValue] = useState('');
  const handleDateChange = (newDate) => {
    setDateValue(newDate);
  };
  // const handleEmailChange = (newEmail) => {
  //   setEmailValue(newEmail);
  // };
  // const handleNameChange = (newName) => {
  //   setNameValue(newName);
  // };
  // const handleCommentChange = (newComment) => {
  //   setCommentValue(newComment);
  // };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      date: dateValue,
      comment: "",
    }
  );
  const handleChange = evt => {
    validated = formInput.email === "" ? false : validateEmail(formInput.email);
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  // const useStyles = makeStyles({
  //  textarea: {
  //     resize: "both"
  //  }
  // });
  const handleSubmit = async evt => {
  evt.preventDefault(); 
  if (validated === true) {
    alert("Please enter a valid email");
    return;
  }
  doSubmit(formInput);
  setFormInput({
    name: "",
    email: "",
    date: dateValue,
    comment: "",
  });
}

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
        autoComplete="off" />
    <IBox
      spacing={4}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h3" sx={{fontWeight: "light", textAlign: "center", m: 1}}>booking submissions</Typography>
      <ITextField
        required
        id="filled-required"
        label="Name"
        variant="filled"
        name="name"
        value={formInput.name}
        onChange={handleChange}
      />
      <ITextField
        required
        id="filled-required"
        label="Email"
        variant="filled"
        name="email"
        value={formInput.email}
        error={validated}
        // value={emailValue}
        onChange={handleChange}
        onBlur={validateEmail(formInput.email)}
        helperText={validated ? "Please enter a valid email" : ""}
      />
      <IMobileDatePicker
          label="Projected Usage Date"
          inputFormat="dd/MM/yyyy"
          value={dateValue}
          onChange={handleDateChange}
          name="date"
          renderInput={(params) => <TextField {...params} />}
          variant="filled"
      />
      <ITextField
        required
        id="filled"
        label="Any other comments"
        multiline
        resize="both"
        maxRows={5}
        variant="filled"
        name="comment"
        value={formInput.comment}
        onChange={handleChange}
      />
      <Button
        color="green"
        variant="outlined"
        type="submit"
      >SUBMIT</Button>
    </IBox>
    </LocalizationProvider>
    </TheBox>
    </Cont>
    </ThemeProvider>
  );
}; 

export default BookingsSection;
