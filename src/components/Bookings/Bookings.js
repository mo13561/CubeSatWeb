import {ForumContainer, MainText, EmailBox, CommentBox, SubmitBox, NameBox, BookingsLogo, T1, MainBox, StyledDatePickerWrapper, Box} from "./BookingsElements";
import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <NameBox
        ref={this.inputRef}
        placeholder={this.props.placeholder}
        onMouseOver={() => {
          this.inputRef.current.focus()
        }}
        onMouseLeave={() => {
          this.inputRef.current.blur()
        }}
      />
    );
  }
}

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <EmailBox
        ref={this.inputRef}
        placeholder={this.props.placeholder}
        onMouseOver={() => {
          this.inputRef.current.focus()
        }}
        onMouseLeave={() => {
          this.inputRef.current.blur()
        }}
      />
    );
  }
}

class DatePicker extends React.Component {
  state = {
    focused: false,
    date: moment()
  };
  render() {
    return (
      <StyledDatePickerWrapper>
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={date => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
          date={this.state.date}
        />
      </StyledDatePickerWrapper>
    );
  }
}
 
const BookingsSection = () => {
    return (
      <>
      
      <MainBox>
      <BookingsLogo to="/">Polaris</BookingsLogo>
      <MainText>Book polaris now!</MainText>
        <ForumContainer> 
          <NameForm placeholder="Name" />
          <EmailForm placeholder="Email" />
          <Box><T1>Proposed date of your booking:</T1><DatePicker /></Box>
          <CommentBox placeholder="Any additional comments about your booking" />
          <SubmitBox>Submit</SubmitBox>
        </ForumContainer>
      </MainBox>
      </>
    );
}; 

export default BookingsSection;
