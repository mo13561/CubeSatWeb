import styled, { keyframes } from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import TextField from '@mui/material/TextField';
import "react-dates/lib/css/_datepicker.css";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled as s} from '@mui/material/styles';


export const SubButton = s(Button)({
  borderColor: '#01665c',
  border: '1px solid'
});

export const Cont = styled.div`
  background: linear-gradient(
      20deg,
      hsl(${40}, 60%, 65%),
      hsl(${360}, 64%, 60%)
      );
  overflow: hidden;
  overflow-y: hidden;
  white-space: hidden;
`;

export const IButton = s(IconButton)({
  position: 'relative',
  margin: 'auto',
});

export const IBox = styled(Stack)`  
  direction: column;
  align-self: center;
  overflow: hidden;
  /* width: 400px; */
  align-items: center;
  margin: auto;
  width: 100%;
  justify-content: space-evenly;
`;

export const ITextField = styled(TextField)`
  width: 400px;
  @media screen and (max-width: 450px) {
    width: 90vw;
  }
`;

export const IMobileDatePicker = styled(MobileDatePicker)`
  width: 400px;
`;
export const BookingsLogo = styled(LinkR)`
  color: white;
  justify-self: top;
  align-self: top;
  cursor: pointer;
  font-size: 1.5rem;
  display: grid;
  align-items: top;
  margin-left: 24px;
  font-weight: bold;
  height: auto;
  width: 300px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Shippori Antique B1', sans-serif;
  font-size: 5rem;
  margin-bottom: 80vh;
  position: fixed;
  @media screen and (max-width: 1024px) {
    padding: 0;
    margin: 0;
  
  } 
`;

export const MainText = styled.h1`
    color: white;
    margin: auto;
    position: relative;
    align-self: center;
    display: flex;
    justify-content: center;
    padding: 0 10vw 0 10vw;
    @media screen and (max-width: 1024px) {
    margin-top: 15vh;
  } 
`;
const x = 40;
const y = 360;
const move = keyframes`
    0% {background-position: left;}
    50% {background-position: right;}
    100% {background-position: left;}
`;
export const MainBox = styled.div`
    font-family: basic-sans, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: top;
    font-size: 2em;
    line-height: 1.6;
    color: #333;
    background: #ddd;
    background-size: 300%;
    background: linear-gradient(
    20deg,
    hsl(${x}, 60%, 65%),
    hsl(${y}, 64%, 60%)
    );
    animation: ${move} 5s infinite;
    @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (width: )
`;

export const ForumContainer = styled.form`
  position: flex;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  border: 0px;
  border-color: gray;
  overflow: flex;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  border-radius: 28px;
  z-index: 999;
  background: black;
  max-width: 2000px;
  min-width: 500px;
  min-height: 480px;
  border-style: solid;
  margin-right: 10vw;
  position: flex;
  padding: 5vw 5vw 5vw;
  @media screen and (max-width: 1024px) {
    display: grid;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;
 
export const EmailBox = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    padding: 0.5em;
    margin: 0.5em;
    margin-top: auto;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    flex-direction: column;
    justify-content: flex-end;
    size: 1em;
    max-width: 480px;
    margin-left: 20px;
    margin: ${props => props.size};
    padding: ${props => props.size};
    
`;

export const NameBox = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    padding: 0.5em;
    margin: 0.5em;
    margin-top: auto;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    flex-direction: column;
    justify-content: flex-end;
    size: 1em;
    margin: ${props => props.size};
    padding: ${props => props.size};
`; 

export const T1 = styled.h1`
   flex-direction: column; 
   color: white;
   font-size: 1rem;
   margin: 1.5em auto;
`;

export const DateBox = styled.input`
    flex-direction: column;
    padding: 0.5em;
    margin: 0.5em; 
    border-radius: 3px;
`;

export const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 90px;
      height: 40px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 0;
      }
    }

    .SingleDatePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;

      :hover,
      .DateInput_input__focused {
        border: 1px solid red;
      }

      .CalendarDay__selected {
        background: blue;
        border: blueviolet;
      }
    }

    .SingleDatePicker_picker.SingleDatePicker_picker {
      /* top: 43px;
      left: 2px; */
      align-self: right;
      top: 43px;
      left: 2px;
    }
  }
`;

export const TheBox = styled.div`
    flex-direction: column;
    /* align-items: center; */
    display: flex;
    overflow: none;
    white-space: none;
    position: flex;
    background: transparent;
    width: 100vw;
    height: 100vh; 
    margin-top: -40px;
`;
 
export const CommentBox = styled.textarea`
    flex-direction: column;
    min-height: 20vh;
    padding: 0.5em;
    margin: 0.5em; 
    border-radius: 3px;
    resize: none;
`;

export const SubmitBox = styled.input.attrs(props => ({
    type: "submit",
    size: props.size || "1em",
}))`
    flex-direction: column;
    display: grid;
    position: sticky;
    background: linear-gradient(
    20deg,
    hsl(${x}, 60%, 65%),
    hsl(${y}, 64%, 60%)
    );
    align-items: center;
    padding: 0;
    margin: 0.5em;
    height: 30px; 
    width: 50%;
    position: flex;
    border-radius: 10px;
    align-self: center;
`;