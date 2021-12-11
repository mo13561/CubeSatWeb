import React from "react";
import {ForumContainer, MainText, EmailBox, CommentBox, SubmitBox, NameBox, DateBox, T1} from "./BookingsElements";
 
const BookingsSection = () => {
    return (
      <>
      <MainText>Blah blah blah</MainText>
        <ForumContainer> 
          <NameBox placeholder="Name" />
          <EmailBox placeholder="Email" />
          <T1>Proposed date of your booking</T1>
          <DateBox />
          <CommentBox placeholder="Any additional comments about your booking" />
          <SubmitBox />
        </ForumContainer>
      </>
    );
}; 
 
export default BookingsSection;
